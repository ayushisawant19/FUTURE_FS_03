import { 
  Product, 
  EnquirySubmission, 
  CustomerReview, 
  DiscountCode, 
  LoyaltyMember, 
  ReferralRecord, 
  SeasonalCollection, 
  GalleryPhoto,
  OrderStatus
} from '@/types';
import { 
  INITIAL_PRODUCTS, 
  SEASONAL_COLLECTIONS, 
  GALLERY_ITEMS, 
  INITIAL_DISCOUNT_CODES, 
  INITIAL_LOYALTY_MEMBERS, 
  INITIAL_REFERRALS 
} from './mockData';
import { siteConfig } from '@/config/site';

export interface SiteSettingsData {
  instagramHandle: string;
  whatsappNumber: string;
  email: string;
  phone: string;
  address: string;
  announcementText: string;
  announcementActive: boolean;
  orderNoticeDays: number;
  urgentNoticeDays: number;
  whatsappNotificationEnabled: boolean;
  emailNotificationEnabled: boolean;
}

const DEFAULT_SETTINGS: SiteSettingsData = {
  instagramHandle: siteConfig.contact.instagramHandle,
  whatsappNumber: siteConfig.contact.whatsappNumber,
  email: siteConfig.contact.email,
  phone: siteConfig.contact.phone,
  address: siteConfig.contact.address,
  announcementText: "✨ Wedding & Festive Season bookings open in Pune. Reserve your slots 7+ days in advance for bespoke packaging.",
  announcementActive: true,
  orderNoticeDays: 7,
  urgentNoticeDays: 2,
  whatsappNotificationEnabled: true,
  emailNotificationEnabled: true,
};

// Seed sample enquiries for the admin dashboard
const INITIAL_ENQUIRIES: EnquirySubmission[] = [
  {
    id: "enq-101",
    referenceNumber: "RW-2026-1082",
    customerName: "Ananya Deshpande",
    customerPhone: "+91 98230 45678",
    customerEmail: "ananya.d@gmail.example",
    recipientName: "Siddharth Deshpande",
    occasion: "30th Birthday",
    budgetBracket: "4500-7500",
    deliveryDate: "2026-11-08",
    deliveryType: "delivery",
    deliveryAddress: "Flat 402, Marvel Cerise, Kalyani Nagar, Pune 411006",
    messageCardText: "To the man who makes every day magical. Happy 30th Birthday! Forever proud of you. Love, Ananya.",
    customizationNotes: "Please use Crimson Silk ribbon and Belgian dark chocolates. Add vegan treats if possible.",
    packagingStyle: "Royal Burgundy Trunk",
    ribbonColour: "Crimson Silk",
    enquiryType: "standard",
    productId: "prod-1",
    productName: "The Royale Velvet Keepsake",
    status: "quote_sent",
    internalQuoteAmount: 5200,
    deliveryCharge: 350,
    finalAmount: 5550,
    internalNotes: "Client requested quote on WhatsApp. Quoted 5200 + 350 delivery for Kalyani Nagar.",
    createdAt: "2026-11-01T14:20:00Z"
  },
  {
    id: "enq-102",
    referenceNumber: "RW-2026-1083",
    customerName: "Kunal Shah",
    customerPhone: "+91 98902 33445",
    customerEmail: "kunal.shah@invest.example",
    recipientName: "Pooja & Sameer Mehta",
    occasion: "Wedding Engagement",
    budgetBracket: "7500-12000",
    deliveryDate: "2026-11-10",
    deliveryType: "delivery",
    deliveryAddress: "Row House 12, Nyati Windchimes, Undri / NIBM, Pune 411060",
    messageCardText: "Heartiest congratulations on your engagement! May your journey ahead be filled with laughter and love.",
    customizationNotes: "Please engrave 'P & S' on crystal champagne flutes. Use Ivory box with gold ribbon.",
    packagingStyle: "Ivory Velvet Keepsake",
    ribbonColour: "Antique Gold Satin",
    enquiryType: "standard",
    productId: "prod-2",
    productName: "Ever After Romantic Chest",
    status: "confirmed",
    internalQuoteAmount: 8500,
    deliveryCharge: 450,
    finalAmount: 8950,
    razorpayPaymentId: "pay_Nxiq982KlwOPQ",
    internalNotes: "Razorpay payment received. Engraving ordered from workshop.",
    createdAt: "2026-10-31T11:15:00Z"
  },
  {
    id: "enq-103",
    referenceNumber: "RW-2026-1084",
    customerName: "Priyanka Soni",
    customerPhone: "+91 97645 88990",
    customerEmail: "priyanka.s@design.example",
    recipientName: "Aarohi & Baby",
    occasion: "Baby Shower",
    budgetBracket: "4500-7500",
    deliveryDate: "2026-11-06",
    deliveryType: "delivery",
    deliveryAddress: "B-804, Amanora Gateway Towers, Hadapsar, Pune 411028",
    messageCardText: "Welcome to the world of endless cuddles, little angel! Can't wait to meet you.",
    customizationNotes: "Soft blush theme, baby girl name 'Aadhya' laser engraved on wooden discs.",
    packagingStyle: "Pastel Ivory Woven Trunk",
    ribbonColour: "Soft Sage Satin",
    enquiryType: "standard",
    productId: "prod-3",
    productName: "Little Wonder Baby Trunk",
    status: "preparing",
    internalQuoteAmount: 5800,
    deliveryCharge: 400,
    finalAmount: 6200,
    razorpayPaymentId: "pay_Nxyp882KlpZTX",
    internalNotes: "Assembly in progress. Box packed with dried flowers.",
    createdAt: "2026-10-30T09:40:00Z"
  },
  {
    id: "enq-104",
    referenceNumber: "RW-2026-1085",
    customerName: "Vikram Malhotra",
    customerPhone: "+91 98901 98765",
    customerEmail: "vikram.m@techcorp.example",
    recipientName: "Tech Leadership Team",
    occasion: "Corporate Appreciation",
    budgetBracket: "12000-plus",
    deliveryDate: "2026-11-15",
    deliveryType: "delivery",
    deliveryAddress: "Tower 4, Cybercity, Magarpatta, Pune 411013",
    messageCardText: "With deepest gratitude for leading our Pune engineering division to exceptional heights.",
    customizationNotes: "15 custom executive hampers with TechCorp brand foil sleeve and engraved brass pens.",
    packagingStyle: "Espresso Rigid Chest",
    ribbonColour: "Charcoal Grey Satin",
    enquiryType: "custom_hamper",
    status: "new",
    internalQuoteAmount: 48000,
    deliveryCharge: 1200,
    finalAmount: 49200,
    internalNotes: "Bulk corporate order. Need to send PDF quote and logo mockup.",
    createdAt: "2026-11-02T16:10:00Z"
  },
  {
    id: "enq-105",
    referenceNumber: "RW-2026-1086",
    customerName: "Rohit Kapse",
    customerPhone: "+91 99220 54321",
    customerEmail: "rohit.kapse@gmail.example",
    recipientName: "Snehal Kapse",
    occasion: "First Wedding Anniversary",
    budgetBracket: "7500-12000",
    deliveryDate: "2026-11-09",
    deliveryType: "delivery",
    deliveryAddress: "Bunglow 4, Windsor Park, Baner-Pashan Link Road, Pune 411045",
    messageCardText: "365 days of laughter, coffee dates, and endless love. Happy 1st Anniversary, my jaan!",
    customizationNotes: "Surprise curation! Snehal loves lavender, dark chocolate, and polaroid memories.",
    enquiryType: "surprise",
    surprisePreferences: {
      likesDislikes: "Loves: Dark chocolate with sea salt, French lavender, polaroid prints. Dislikes: artificial fruit flavors.",
      personalityTraits: "Romantic, sentimental, loves keepsake boxes."
    },
    status: "new",
    createdAt: "2026-11-02T19:30:00Z"
  }
];

const INITIAL_REVIEWS: CustomerReview[] = siteConfig.testimonials.map((t, idx) => ({
  id: `rev-${idx + 1}`,
  authorName: t.author,
  authorLocation: t.location,
  occasion: t.occasion,
  rating: t.rating,
  reviewText: t.review,
  photos: [
    idx % 2 === 0 
      ? "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop"
      : "https://images.unsplash.com/photo-1513201099705-a9742e15a5ab?q=80&w=600&auto=format&fit=crop"
  ],
  status: "approved",
  createdAt: "2026-10-15T12:00:00Z"
}));

// In-Memory Data Store (persisted to localStorage in browser for client sessions)
class RiwayatStore {
  private products: Product[] = [...INITIAL_PRODUCTS];
  private collections: SeasonalCollection[] = [...SEASONAL_COLLECTIONS];
  private enquiries: EnquirySubmission[] = [...INITIAL_ENQUIRIES];
  private reviews: CustomerReview[] = [...INITIAL_REVIEWS];
  private discountCodes: DiscountCode[] = [...INITIAL_DISCOUNT_CODES];
  private loyaltyMembers: LoyaltyMember[] = [...INITIAL_LOYALTY_MEMBERS];
  private referrals: ReferralRecord[] = [...INITIAL_REFERRALS];
  private gallery: GalleryPhoto[] = [...GALLERY_ITEMS];
  private settings: SiteSettingsData = { ...DEFAULT_SETTINGS };
  private initialized: boolean = false;

  private initFromStorage() {
    if (typeof window === 'undefined' || this.initialized) return;
    try {
      const storedEnquiries = localStorage.getItem('riwayat_enquiries');
      if (storedEnquiries) {
        this.enquiries = JSON.parse(storedEnquiries);
      }
      const storedProducts = localStorage.getItem('riwayat_products');
      if (storedProducts) {
        this.products = JSON.parse(storedProducts);
      }
      const storedReviews = localStorage.getItem('riwayat_reviews');
      if (storedReviews) {
        this.reviews = JSON.parse(storedReviews);
      }
      const storedDiscounts = localStorage.getItem('riwayat_discounts');
      if (storedDiscounts) {
        this.discountCodes = JSON.parse(storedDiscounts);
      }
      const storedSettings = localStorage.getItem('riwayat_settings');
      if (storedSettings) {
        this.settings = JSON.parse(storedSettings);
      }
      this.initialized = true;
    } catch {
      // ignore JSON parse errors
    }
  }

  private saveToStorage(key: string, data: unknown) {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      // storage quota or private mode
    }
  }

  // --- PRODUCTS ---
  getProducts(): Product[] {
    this.initFromStorage();
    return [...this.products];
  }

  getProductBySlug(slug: string): Product | undefined {
    this.initFromStorage();
    return this.products.find(p => p.slug === slug);
  }

  getProductById(id: string): Product | undefined {
    this.initFromStorage();
    return this.products.find(p => p.id === id);
  }

  saveProduct(product: Product): Product {
    this.initFromStorage();
    const existingIdx = this.products.findIndex(p => p.id === product.id);
    if (existingIdx >= 0) {
      this.products[existingIdx] = product;
    } else {
      this.products.unshift(product);
    }
    this.saveToStorage('riwayat_products', this.products);
    return product;
  }

  deleteProduct(id: string): boolean {
    this.initFromStorage();
    const initialLen = this.products.length;
    this.products = this.products.filter(p => p.id !== id);
    this.saveToStorage('riwayat_products', this.products);
    return this.products.length < initialLen;
  }

  // --- ENQUIRIES / ORDERS ---
  getEnquiries(): EnquirySubmission[] {
    this.initFromStorage();
    return [...this.enquiries];
  }

  getEnquiryById(id: string): EnquirySubmission | undefined {
    this.initFromStorage();
    return this.enquiries.find(e => e.id === id || e.referenceNumber === id);
  }

  addEnquiry(enquiry: Omit<EnquirySubmission, 'id' | 'referenceNumber' | 'createdAt' | 'status'>): EnquirySubmission {
    this.initFromStorage();
    const count = this.enquiries.length + 1086;
    const newEnquiry: EnquirySubmission = {
      ...enquiry,
      id: `enq-${Date.now()}`,
      referenceNumber: `RW-2026-${count}`,
      status: 'new',
      createdAt: new Date().toISOString(),
    };
    this.enquiries.unshift(newEnquiry);
    this.saveToStorage('riwayat_enquiries', this.enquiries);
    return newEnquiry;
  }

  updateEnquiryStatus(
    id: string, 
    status: OrderStatus, 
    details?: { 
      internalQuoteAmount?: number; 
      deliveryCharge?: number; 
      finalAmount?: number;
      internalNotes?: string;
      razorpayPaymentId?: string;
    }
  ): EnquirySubmission | undefined {
    this.initFromStorage();
    const item = this.enquiries.find(e => e.id === id || e.referenceNumber === id);
    if (!item) return undefined;

    item.status = status;
    if (details) {
      if (details.internalQuoteAmount !== undefined) item.internalQuoteAmount = details.internalQuoteAmount;
      if (details.deliveryCharge !== undefined) item.deliveryCharge = details.deliveryCharge;
      if (details.finalAmount !== undefined) item.finalAmount = details.finalAmount;
      if (details.internalNotes !== undefined) item.internalNotes = details.internalNotes;
      if (details.razorpayPaymentId !== undefined) item.razorpayPaymentId = details.razorpayPaymentId;
    }
    this.saveToStorage('riwayat_enquiries', this.enquiries);
    return item;
  }

  // --- REVIEWS ---
  getReviews(onlyApproved = true): CustomerReview[] {
    this.initFromStorage();
    if (onlyApproved) {
      return this.reviews.filter(r => r.status === 'approved');
    }
    return [...this.reviews];
  }

  addReview(review: Omit<CustomerReview, 'id' | 'status' | 'createdAt'>): CustomerReview {
    this.initFromStorage();
    const newRev: CustomerReview = {
      ...review,
      id: `rev-${Date.now()}`,
      status: 'pending', // requires admin approval
      createdAt: new Date().toISOString(),
    };
    this.reviews.unshift(newRev);
    this.saveToStorage('riwayat_reviews', this.reviews);
    return newRev;
  }

  updateReviewStatus(id: string, status: 'approved' | 'hidden'): CustomerReview | undefined {
    this.initFromStorage();
    const rev = this.reviews.find(r => r.id === id);
    if (rev) {
      rev.status = status;
      this.saveToStorage('riwayat_reviews', this.reviews);
    }
    return rev;
  }

  deleteReview(id: string): boolean {
    this.initFromStorage();
    this.reviews = this.reviews.filter(r => r.id !== id);
    this.saveToStorage('riwayat_reviews', this.reviews);
    return true;
  }

  // --- DISCOUNT CODES ---
  getDiscountCodes(): DiscountCode[] {
    this.initFromStorage();
    return [...this.discountCodes];
  }

  validateDiscountCode(code: string, subtotal: number): { valid: boolean; message: string; discountAmount: number } {
    this.initFromStorage();
    const cleanCode = code.trim().toUpperCase();
    const promo = this.discountCodes.find(d => d.code.toUpperCase() === cleanCode && d.isActive);

    if (!promo) {
      return { valid: false, message: "Invalid or inactive discount code.", discountAmount: 0 };
    }

    if (new Date(promo.validUntil) < new Date()) {
      return { valid: false, message: "This discount code has expired.", discountAmount: 0 };
    }

    if (promo.usageCount >= promo.usageLimit) {
      return { valid: false, message: "This discount code has reached its usage limit.", discountAmount: 0 };
    }

    if (subtotal < promo.minOrderValue) {
      return { 
        valid: false, 
        message: `Minimum order value of ₹${promo.minOrderValue} required for this code.`, 
        discountAmount: 0 
      };
    }

    let discountAmount = 0;
    if (promo.discountType === 'percentage') {
      discountAmount = Math.round((subtotal * promo.value) / 100);
    } else {
      discountAmount = Math.min(promo.value, subtotal);
    }

    return { valid: true, message: `Code ${promo.code} applied successfully!`, discountAmount };
  }

  saveDiscountCode(discount: DiscountCode): DiscountCode {
    this.initFromStorage();
    const idx = this.discountCodes.findIndex(d => d.id === discount.id);
    if (idx >= 0) {
      this.discountCodes[idx] = discount;
    } else {
      this.discountCodes.unshift(discount);
    }
    this.saveToStorage('riwayat_discounts', this.discountCodes);
    return discount;
  }

  // --- LOYALTY & REFERRALS ---
  getLoyaltyMembers(): LoyaltyMember[] {
    this.initFromStorage();
    return [...this.loyaltyMembers];
  }

  getReferrals(): ReferralRecord[] {
    this.initFromStorage();
    return [...this.referrals];
  }

  // --- COLLECTIONS & GALLERY ---
  getCollections(): SeasonalCollection[] {
    return [...this.collections];
  }

  getGalleryItems(): GalleryPhoto[] {
    return [...this.gallery];
  }

  // --- SITE SETTINGS ---
  getSettings(): SiteSettingsData {
    this.initFromStorage();
    return { ...this.settings };
  }

  updateSettings(newSettings: Partial<SiteSettingsData>): SiteSettingsData {
    this.initFromStorage();
    this.settings = { ...this.settings, ...newSettings };
    this.saveToStorage('riwayat_settings', this.settings);
    return { ...this.settings };
  }
}

export const dataStore = new RiwayatStore();
