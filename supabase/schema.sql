-- ============================================================================
-- RIWAYAT CURATED GIFTING - SUPABASE DATABASE SCHEMA
-- Pune, Maharashtra, India | "Gifting, curated with love."
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    tagline TEXT,
    description TEXT NOT NULL,
    contents TEXT[] NOT NULL DEFAULT '{}',
    customization_options TEXT[] NOT NULL DEFAULT '{}',
    occasions TEXT[] NOT NULL DEFAULT '{}',
    recipients TEXT[] NOT NULL DEFAULT '{}',
    budget_bracket TEXT NOT NULL,
    collections TEXT[] NOT NULL DEFAULT '{}',
    images TEXT[] NOT NULL DEFAULT '{}',
    featured_section TEXT,
    is_available BOOLEAN NOT NULL DEFAULT true,
    base_estimate NUMERIC,
    rating NUMERIC(2,1) DEFAULT 5.0,
    review_count INTEGER DEFAULT 0,
    default_box TEXT,
    default_ribbon TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. COLLECTIONS TABLE
CREATE TABLE IF NOT EXISTS public.collections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    banner_image TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    festival_countdown_date TIMESTAMP WITH TIME ZONE,
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. ENQUIRIES & ORDERS TABLE
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference_number TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    recipient_name TEXT NOT NULL,
    occasion TEXT NOT NULL,
    budget_bracket TEXT NOT NULL,
    delivery_date DATE NOT NULL,
    delivery_type TEXT NOT NULL DEFAULT 'delivery',
    delivery_address TEXT NOT NULL,
    message_card_text TEXT NOT NULL,
    customization_notes TEXT,
    selected_addons TEXT[] DEFAULT '{}',
    reference_photos TEXT[] DEFAULT '{}',
    packaging_style TEXT,
    ribbon_colour TEXT,
    enquiry_type TEXT NOT NULL DEFAULT 'standard',
    product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
    product_name TEXT,
    surprise_preferences JSONB,
    status TEXT NOT NULL DEFAULT 'new',
    internal_quote_amount NUMERIC,
    delivery_charge NUMERIC,
    final_amount NUMERIC,
    discount_code TEXT,
    discount_amount NUMERIC DEFAULT 0,
    razorpay_order_id TEXT,
    razorpay_payment_id TEXT,
    internal_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. REVIEWS TABLE
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
    author_name TEXT NOT NULL,
    author_location TEXT NOT NULL,
    occasion TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT NOT NULL,
    photos TEXT[] DEFAULT '{}',
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 5. DISCOUNT CODES TABLE
CREATE TABLE IF NOT EXISTS public.discount_codes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code TEXT UNIQUE NOT NULL,
    discount_type TEXT NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
    value NUMERIC NOT NULL,
    min_order_value NUMERIC NOT NULL DEFAULT 0,
    valid_until TIMESTAMP WITH TIME ZONE NOT NULL,
    usage_limit INTEGER NOT NULL DEFAULT 100,
    usage_count INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 6. REFERRALS TABLE
CREATE TABLE IF NOT EXISTS public.referrals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    referral_count INTEGER NOT NULL DEFAULT 0,
    reward_points INTEGER NOT NULL DEFAULT 0,
    last_referral_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 7. LOYALTY ACCOUNTS TABLE
CREATE TABLE IF NOT EXISTS public.loyalty_accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name TEXT NOT NULL,
    customer_phone TEXT UNIQUE NOT NULL,
    customer_email TEXT,
    points INTEGER NOT NULL DEFAULT 0,
    tier TEXT NOT NULL DEFAULT 'Silver' CHECK (tier IN ('Silver', 'Gold', 'Platinum')),
    lifetime_spend NUMERIC NOT NULL DEFAULT 0,
    last_order_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 8. GALLERY ITEMS TABLE
CREATE TABLE IF NOT EXISTS public.gallery_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    image_url TEXT NOT NULL,
    instagram_url TEXT NOT NULL,
    likes INTEGER DEFAULT 0,
    caption TEXT,
    is_featured BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 9. NEWSLETTER SUBSCRIBERS TABLE
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    source TEXT DEFAULT 'website_footer',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 10. SITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.site_settings (
    id TEXT PRIMARY KEY,
    settings JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.discount_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loyalty_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- PUBLIC READ POLICIES
CREATE POLICY "Public can view active products" 
    ON public.products FOR SELECT 
    USING (is_available = true);

CREATE POLICY "Public can view active collections" 
    ON public.collections FOR SELECT 
    USING (is_active = true);

CREATE POLICY "Public can view approved reviews" 
    ON public.reviews FOR SELECT 
    USING (status = 'approved');

CREATE POLICY "Public can view gallery items" 
    ON public.gallery_items FOR SELECT 
    USING (true);

-- PUBLIC INSERT POLICIES (for customer enquiries, reviews, newsletter)
CREATE POLICY "Public can submit enquiries" 
    ON public.enquiries FOR INSERT 
    WITH CHECK (true);

CREATE POLICY "Public can submit reviews" 
    ON public.reviews FOR INSERT 
    WITH CHECK (status = 'pending');

CREATE POLICY "Public can subscribe to newsletter" 
    ON public.newsletter_subscribers FOR INSERT 
    WITH CHECK (true);

-- ADMIN AUTH POLICIES (Authenticated admin users have full access)
CREATE POLICY "Admins have full access to products" 
    ON public.products FOR ALL 
    TO authenticated 
    USING (true) WITH CHECK (true);

CREATE POLICY "Admins have full access to collections" 
    ON public.collections FOR ALL 
    TO authenticated 
    USING (true) WITH CHECK (true);

CREATE POLICY "Admins have full access to enquiries" 
    ON public.enquiries FOR ALL 
    TO authenticated 
    USING (true) WITH CHECK (true);

CREATE POLICY "Admins have full access to reviews" 
    ON public.reviews FOR ALL 
    TO authenticated 
    USING (true) WITH CHECK (true);

CREATE POLICY "Admins have full access to discount_codes" 
    ON public.discount_codes FOR ALL 
    TO authenticated 
    USING (true) WITH CHECK (true);

CREATE POLICY "Admins have full access to referrals" 
    ON public.referrals FOR ALL 
    TO authenticated 
    USING (true) WITH CHECK (true);

CREATE POLICY "Admins have full access to loyalty" 
    ON public.loyalty_accounts FOR ALL 
    TO authenticated 
    USING (true) WITH CHECK (true);

CREATE POLICY "Admins have full access to gallery" 
    ON public.gallery_items FOR ALL 
    TO authenticated 
    USING (true) WITH CHECK (true);

CREATE POLICY "Admins have full access to newsletter" 
    ON public.newsletter_subscribers FOR ALL 
    TO authenticated 
    USING (true) WITH CHECK (true);

CREATE POLICY "Admins have full access to site_settings" 
    ON public.site_settings FOR ALL 
    TO authenticated 
    USING (true) WITH CHECK (true);
