# 🎁 Riwayat — Gifting, curated with love.
### Production Full-Stack Bespoke Gifting Web Platform & Atelier System
**Location:** Pune, Maharashtra, India  
**Tagline:** *"Gifting, curated with love."*  

---

## 📖 1. Business Overview
Riwayat is a premium bespoke gifting atelier in Pune creating customized luxury gift hampers for:
- Birthday celebrations & milestones
- Romantic anniversaries, proposals, and date nights
- Luxury wedding trousseau & VIP wedding guest welcome gifts
- Baby shower hampers & newborn blessings
- Auspicious festive gifting (Diwali, Rakhi, Eid, Ganesh Utsav)
- Executive corporate gifts & bulk brand hampers

**Signature Touch:** Handcrafted keepsake rigid and velvet trunks, coordinated silk and satin ribbons, real wax seal stamps, and hand-inscribed deckle-edged calligraphy cards—delivered with care across Pune and PCMC.

---

## 🛠️ 2. Tech Stack & Architecture
- **Framework:** Next.js 14 (App Router, TypeScript, React Server Components)
- **Styling & UI:** Tailwind CSS, custom design tokens, luxury typography (Cormorant Garamond, Playfair Display, Plus Jakarta Sans, Alex Brush)
- **Database & Storage:** Supabase (PostgreSQL, Row Level Security, Storage Buckets, Auth)
- **Data Access:** Hybrid store (`lib/store.ts`) with seamless Supabase synchronization and local zero-config fallback
- **Payments:** Razorpay API integration (UPI, GPay, Credit/Debit cards, Netbanking) with HMAC-SHA256 signature verification and simulated test mode
- **Email Notifications:** Resend API (or Nodemailer) with branded royal burgundy HTML email templates
- **WhatsApp Notifications:** WhatsApp Cloud API (Meta Graph API) & Twilio behind feature flag `WHATSAPP_NOTIFICATIONS_ENABLED=true` with graceful fallback logging
- **Validation & Anti-Spam:** Zod server-side validation schemas with honeypot field protection
- **Deployment:** Vercel-ready with edge-compatible routes

---

## 🚀 3. Quick Start (Local Development)

### Prerequisites
- Node.js 18+ (tested on Node v20/v24)
- npm or pnpm

### Setup Steps
```bash
# 1. Clone repository and navigate to riwayat
cd riwayat

# 2. Install dependencies
npm install

# 3. Create your local environment file
cp .env.example .env.local

# 4. Start the Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ 4. Supabase Database & SQL Migrations

1. Go to your [Supabase Dashboard](https://supabase.com).
2. Create a new project named `riwayat-gifting` (Region: `ap-south-1` Mumbai recommended for lowest latency in Pune).
3. Open the **SQL Editor** in Supabase and paste the contents of `supabase/schema.sql`.
4. Run the script. This creates all tables with Row Level Security (RLS) policies:
   - `products`, `collections`, `enquiries`, `reviews`, `discount_codes`, `referrals`, `loyalty_accounts`, `gallery_items`, `newsletter_subscribers`, `site_settings`.
5. Run the seed generator script:
   ```bash
   npm run seed
   ```
   Paste the output in the Supabase SQL Editor to populate the initial 12 products, 6 Pune testimonials, and seasonal collections.

---

## 💳 5. Razorpay Online Payments Setup

1. Sign up / Log in to [Razorpay Dashboard](https://dashboard.razorpay.com).
2. Go to **Settings → API Keys** and generate a **Test Key ID** and **Key Secret**.
3. Add them to `.env.local`:
   ```env
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_...
   RAZORPAY_KEY_ID=rzp_test_...
   RAZORPAY_KEY_SECRET=...
   ```
4. Payment Flow:
   - Client submits bespoke enquiry on website.
   - Atelier owner reviews details and sets quoted amount + Pune delivery charge in Admin.
   - Order status moves to `Awaiting Payment` and a Razorpay order is generated.
   - Client pays via UPI / Card. Signature is verified server-side using HMAC-SHA256 and order is marked `Confirmed`.

---

## ✉️ 6. Notifications Setup (Resend & WhatsApp)

### Email with Resend:
1. Obtain an API key from [Resend](https://resend.com/api-keys).
2. Set `RESEND_API_KEY=re_...` in `.env.local`.
3. If no key is provided, the platform automatically logs the structured HTML email to the console without interrupting the customer order flow.

### WhatsApp Cloud API:
1. In Meta Developer Console, create a WhatsApp App and obtain Phone Number ID and System Access Token.
2. In `.env.local`:
   ```env
   WHATSAPP_NOTIFICATIONS_ENABLED=true
   WHATSAPP_PHONE_NUMBER_ID=...
   WHATSAPP_ACCESS_TOKEN=...
   OWNER_WHATSAPP=+919876543210
   ```
3. If `WHATSAPP_NOTIFICATIONS_ENABLED=false`, a simulated WhatsApp notification message is logged cleanly.

---

## 🌐 7. Deploying to Vercel

1. Push your repository to GitHub.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Set **Root Directory** to `riwayat` (or root if deploying from root workspace).
5. In **Environment Variables**, paste all values from `.env.example`.
6. Click **Deploy**. Vercel will build and launch your production platform with SSL.

---

## 📋 8. Backend API Endpoints Reference

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/api/products` | Retrieve filterable products by occasion, recipient, budget, or search |
| `POST` | `/api/products` | Create a new bespoke product (Admin) |
| `GET` | `/api/products/:id` | Retrieve single product details |
| `GET` | `/api/enquiries` | Retrieve enquiries with optional status filter (`new`, `quote_sent`, etc.) |
| `POST` | `/api/enquiries` | Submit bespoke enquiry (Zod validated, honeypot protected, triggers alerts) |
| `PATCH` | `/api/enquiries/:id` | Update enquiry status, quote amount, delivery charge, and internal notes |
| `GET` | `/api/reviews` | List approved customer reviews |
| `POST` | `/api/reviews` | Submit a customer review (held in `pending` for moderation) |
| `PATCH` | `/api/reviews/:id` | Approve or hide review (Admin) |
| `POST` | `/api/discount/validate` | Check promo code validity, expiration, and calculate discount amount |
| `POST` | `/api/payments/razorpay/order` | Create a Razorpay payment order for confirmed quote |
| `POST` | `/api/payments/razorpay/verify`| Verify payment signature and mark order as `confirmed` |
| `POST` | `/api/newsletter` | Subscribe email to festive announcements |
| `GET` / `PUT` | `/api/settings` | Get / update studio contact details and notice rules |

---

## 👑 9. How the Owner Uses the Platform
1. **New Enquiry Received:** Owner receives instant email and WhatsApp alert with customer name, occasion, Pune address, and required delivery date.
2. **Review & Quote:** Owner accesses `/admin` or uses 1-click WhatsApp quote link to share itemized pricing with distance-based delivery.
3. **Status Tracking:** Owner updates order status through the life-cycle:
   - `New` → `Quote Sent` → `Awaiting Payment` → `Confirmed` → `Preparing` → `Ready` → `Out for Delivery` → `Delivered`.
4. **Custom Hamper Builder:** Clients who want unique curation use the guided multi-step builder on the homepage.
5. **Wrapping Preview:** Clients can visually preview coordinated silk ribbons and box finishes before enquiring.
