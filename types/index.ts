export type OccasionType = 
  | 'birthday'
  | 'anniversary'
  | 'wedding'
  | 'engagement'
  | 'baby-shower'
  | 'corporate'
  | 'festivals'
  | 'romantic';

export type RecipientType = 
  | 'for-her'
  | 'for-him'
  | 'kids'
  | 'parents'
  | 'siblings'
  | 'couples'
  | 'friends'
  | 'colleagues';

export type BudgetBracketType = 
  | 'under-2500'
  | '2500-4500'
  | '4500-7500'
  | '7500-12000'
  | '12000-plus';

export type OrderStatus = 
  | 'new'
  | 'quote_sent'
  | 'awaiting_payment'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  contents: string[];
  customizationOptions: string[];
  occasions: OccasionType[];
  recipients: RecipientType[];
  budgetBracket: BudgetBracketType;
  collections: string[];
  images: string[];
  featuredSection?: 'favourites' | 'romantic' | 'festive' | 'curator';
  isAvailable: boolean;
  baseEstimate?: number;
  rating: number;
  reviewCount: number;
  packagingPreview?: {
    defaultBox: string;
    defaultRibbon: string;
  };
  createdAt: string;
}

export interface AddonItem {
  id: string;
  name: string;
  category: 'chocolates' | 'flowers' | 'balloons' | 'teddy' | 'cards' | 'personalized';
  priceEstimate: number;
  description: string;
  imageUrl?: string;
}

export interface EnquirySubmission {
  id?: string;
  referenceNumber?: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  recipientName: string;
  occasion: string;
  budgetBracket: BudgetBracketType | string;
  deliveryDate: string;
  deliveryType: 'delivery' | 'pickup';
  deliveryAddress: string;
  messageCardText: string;
  customizationNotes?: string;
  selectedAddons?: string[];
  referencePhotos?: string[];
  packagingStyle?: string;
  ribbonColour?: string;
  enquiryType: 'standard' | 'custom_hamper' | 'surprise';
  productId?: string;
  productName?: string;
  surprisePreferences?: {
    likesDislikes?: string;
    allergiesOrRestrictions?: string;
    personalityTraits?: string;
  };
  status?: OrderStatus;
  internalQuoteAmount?: number;
  deliveryCharge?: number;
  finalAmount?: number;
  discountCode?: string;
  discountAmount?: number;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  internalNotes?: string;
  createdAt?: string;
}

export interface CustomerReview {
  id: string;
  productId?: string;
  authorName: string;
  authorLocation: string;
  occasion: string;
  rating: number;
  reviewText: string;
  photos?: string[];
  status: 'pending' | 'approved' | 'hidden';
  createdAt: string;
}

export interface DiscountCode {
  id: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  value: number;
  minOrderValue: number;
  validUntil: string;
  usageLimit: number;
  usageCount: number;
  isActive: boolean;
}

export interface ReferralRecord {
  id: string;
  code: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  referralCount: number;
  rewardPoints: number;
  lastReferralDate: string;
}

export interface LoyaltyMember {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  points: number;
  tier: 'Silver' | 'Gold' | 'Platinum';
  lifetimeSpend: number;
  lastOrderDate: string;
}

export interface SeasonalCollection {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  bannerImage: string;
  isActive: boolean;
  festivalCountdownDate?: string;
  startDate?: string;
  endDate?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  instagramUrl: string;
  likes?: number;
  caption?: string;
}
