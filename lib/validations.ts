import { z } from 'zod';

export const enquirySchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters").max(100),
  customerPhone: z.string().min(10, "Please provide a valid 10-digit phone number").max(15),
  customerEmail: z.string().email("Please enter a valid email address"),
  recipientName: z.string().min(2, "Recipient name must be at least 2 characters").max(100),
  occasion: z.string().min(2, "Please select an occasion"),
  budgetBracket: z.string().min(2, "Please select a budget bracket"),
  deliveryDate: z.string().refine((dateStr) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosen = new Date(dateStr);
    chosen.setHours(0, 0, 0, 0);
    const diffDays = Math.round((chosen.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return diffDays >= 2;
  }, {
    message: "Delivery date must be at least 2 days in advance. For orders within 48 hours, please contact us on WhatsApp directly.",
  }),
  deliveryType: z.enum(['delivery', 'pickup']).default('delivery'),
  deliveryAddress: z.string().min(5, "Please enter a delivery address or locality in Pune"),
  messageCardText: z.string().max(500, "Message must be under 500 characters").default(""),
  customizationNotes: z.string().max(1000).optional(),
  selectedAddons: z.array(z.string()).default([]),
  referencePhotos: z.array(z.string()).default([]),
  packagingStyle: z.string().optional(),
  ribbonColour: z.string().optional(),
  enquiryType: z.enum(['standard', 'custom_hamper', 'surprise']).default('standard'),
  productId: z.string().optional(),
  productName: z.string().optional(),
  surprisePreferences: z.object({
    likesDislikes: z.string().optional(),
    allergiesOrRestrictions: z.string().optional(),
    personalityTraits: z.string().optional(),
  }).optional(),
  policyAcknowledged: z.boolean().refine(val => val === true, {
    message: "You must acknowledge the studio policy to proceed.",
  }),
  honeypot: z.string().max(0, "Spam detected").optional(), // Honeypot field for anti-spam
});

export const updateEnquiryStatusSchema = z.object({
  status: z.enum([
    'new',
    'quote_sent',
    'awaiting_payment',
    'confirmed',
    'preparing',
    'ready',
    'out_for_delivery',
    'delivered',
    'cancelled',
  ]),
  internalQuoteAmount: z.number().min(0).optional(),
  deliveryCharge: z.number().min(0).optional(),
  finalAmount: z.number().min(0).optional(),
  internalNotes: z.string().optional(),
  razorpayPaymentId: z.string().optional(),
});

export const reviewSchema = z.object({
  productId: z.string().optional(),
  authorName: z.string().min(2, "Name must be at least 2 characters").max(100),
  authorLocation: z.string().min(2, "Please mention your Pune locality (e.g. Baner, Koregaon Park)"),
  occasion: z.string().min(2, "Please select an occasion"),
  rating: z.number().int().min(1).max(5),
  reviewText: z.string().min(10, "Review must be at least 10 characters").max(1000),
  photos: z.array(z.string()).default([]),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

export const validateDiscountSchema = z.object({
  code: z.string().min(2).max(30),
  subtotal: z.number().min(0),
});

export const createRazorpayOrderSchema = z.object({
  enquiryId: z.string().min(1),
  amount: z.number().positive("Amount must be greater than zero"),
  currency: z.string().default('INR'),
});

export const verifyRazorpayPaymentSchema = z.object({
  enquiryId: z.string().min(1),
  razorpayOrderId: z.string().min(1),
  razorpayPaymentId: z.string().min(1),
  razorpaySignature: z.string().min(1),
});

export const newsletterSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
  source: z.string().default('website_footer'),
  honeypot: z.string().max(0, "Spam detected").optional(),
});
