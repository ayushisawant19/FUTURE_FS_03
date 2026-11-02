export interface FAQItem {
  id: string;
  category: 'delivery' | 'customization' | 'pricing' | 'payments' | 'policies';
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  occasion: string;
  rating: number;
  review: string;
  avatarUrl?: string;
  date: string;
  verified: boolean;
  hamperName?: string;
}

export const siteConfig = {
  name: "Riwayat",
  tagline: "Gifting, curated with love.",
  description: "Pune's premier bespoke gifting atelier. Handcrafted luxury gift hampers for birthdays, weddings, anniversaries, baby showers, festivals, and corporate celebrations.",
  url: "https://riwayat-gifting.com",
  ogImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop",
  
  // Contact & Socials (Centralized placeholders)
  contact: {
    instagramHandle: "@riwayat_placeholder",
    instagramUrl: "https://ig.me/m/riwayat_placeholder",
    instagramProfileUrl: "https://instagram.com/riwayat_placeholder",
    whatsappNumber: "+919876543210",
    whatsappDisplay: "+91 98765 43210",
    whatsappUrl: "https://wa.me/919876543210?text=Hi%20Riwayat!%20I'd%20love%20to%20enquire%20about%20a%20curated%20gift%20hamper.",
    email: "hello@riwayat.example",
    phone: "+91 98765 43210",
    address: "Bespoke Studio, Koregaon Park & Baner, Pune, Maharashtra 411001",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711153835!2d73.79292695501831!3d18.524598599580456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    operatingHours: "Monday to Sunday: 9:30 AM – 8:30 PM IST",
  },

  // Operational Rules & Policies
  orderRules: {
    idealNoticeDays: 7,
    minimumNoticeDays: 2,
    cutoffHoursForSameDay: 48,
    deliveryWindowHours: "3–4 Hours",
    deliveryCoverage: "Across Pune & PCMC (Koregaon Park, Kalyani Nagar, Viman Nagar, Baner, Aundh, Kothrud, Magarpatta, Wakad, Hinjawadi & more)",
    urgentNoticeWarning: "Orders with less than 48 hours notice require direct manual confirmation on Instagram or WhatsApp.",
    deliveryChargesNotice: "Delivery charges are calculated based on travel distance from our Pune atelier via our personal delivery team and quoted directly.",
  },

  // Trust Strip Highlights
  trustHighlights: [
    {
      title: "Artisanal Packaging",
      desc: "Luxe keepsake rigid boxes, hand-tied satin & velvet bows, and custom wax seals.",
      icon: "Gift",
    },
    {
      title: "Hand-Delivered in Pune",
      desc: "Delicate handling chauffeured directly to doorsteps within scheduled 3–4 hour slots.",
      icon: "Truck",
    },
    {
      title: "Calligraphy Cards",
      desc: "Every hamper includes a personalized wax-sealed card penned with your custom message.",
      icon: "Feather",
    },
    {
      title: "Bespoke Customization",
      desc: "Tailored to your budget, color palette, recipient personality, and dietary preferences.",
      icon: "Sparkles",
    },
  ],

  // 4-Step Process
  howItWorks: [
    {
      step: "01",
      title: "Choose or Imagine",
      desc: "Browse our signature collections or share your dream hamper vision with our curation stylists.",
    },
    {
      step: "02",
      title: "Customize & Personalize",
      desc: "Select packaging textures, silk ribbon palettes, gourmet treats, keepsakes, and personal notes.",
    },
    {
      step: "03",
      title: "Confirm & Secure Payment",
      desc: "Receive your bespoke quote with distance-based delivery. Confirm effortlessly via Razorpay (UPI/Cards).",
    },
    {
      step: "04",
      title: "Delivered with Royal Love",
      desc: "Hand-assembled in Pune and delivered with utmost care right to the recipient's hands.",
    },
  ],

  // 8 Sample FAQs
  faqs: [
    {
      id: "faq-1",
      category: "delivery",
      question: "Where in Pune do you deliver, and what are the delivery charges?",
      answer: "We deliver across all prominent areas of Pune and PCMC—including Koregaon Park, Kalyani Nagar, Viman Nagar, Baner, Aundh, Kothrud, Senapati Bapat Road, Magarpatta, Hadapsar, Wakad, and Hinjawadi. Delivery charges are calculated by actual distance from our Pune atelier to ensure delicate handling by our personal delivery staff, and will be included in your custom quote.",
    },
    {
      id: "faq-2",
      category: "delivery",
      question: "How much advance notice is required for an order?",
      answer: "We recommend booking at least 7 days in advance for birthdays, anniversaries, and personal celebrations to ensure full personalization. For urgent orders, a minimum notice of 2 days is required subject to atelier slot availability. For weddings, bulk gifting, and corporate hampers, we recommend 2 to 3 weeks notice.",
    },
    {
      id: "faq-3",
      category: "customization",
      question: "Can I customize the contents, ribbon colours, and packaging?",
      answer: "Absolutely! Personalization is Riwayat's signature heartbeat. You can select your box style (velvet, rigid matte, wooden trunk), choose coordinated silk or velvet ribbons, pick custom gourmet items, and provide your own heartfelt message which we hand-inscribe in elegant calligraphy.",
    },
    {
      id: "faq-4",
      category: "pricing",
      question: "Why do hampers say 'Enquire for price'?",
      answer: "Because every Riwayat hamper is bespoke! Prices vary based on your choice of gourmet treats, luxury keepsakes, fresh floral additions, packaging styles, and personalized items. Once you submit an enquiry, our styling team shares an exact itemized quote within 2–4 hours.",
    },
    {
      id: "faq-5",
      category: "payments",
      question: "How do I make the payment for my order?",
      answer: "Once we share your custom quote and you confirm the details, we generate a secure Razorpay payment link. You can pay via UPI (GPay, PhonePe, Paytm), Credit/Debit cards, or Netbanking. Orders are confirmed immediately upon payment receipt.",
    },
    {
      id: "faq-6",
      category: "policies",
      question: "What is your cancellation and refund policy?",
      answer: "Because each hamper is custom-curated and perishable items or personalized keepsakes cannot be reused, we do not accept general cancellations or returns once confirmed. In the rare event of transit damage, please share clear photos within 24 hours of delivery, and we will promptly replace or refund the damaged items.",
    },
    {
      id: "faq-7",
      category: "policies",
      question: "Can I modify my order after confirming?",
      answer: "Minor text or ribbon color modifications can be accommodated if requested at least 48 hours before scheduled dispatch. Last-minute modifications (less than 48 hours) are subject to availability and incur a nominal restructuring fee.",
    },
    {
      id: "faq-8",
      category: "customization",
      question: "Do you cater to corporate and bulk wedding favors?",
      answer: "Yes! We specialize in bulk wedding guest welcome hampers, bridesmaid/groomsmen proposals, festival corporate gifts (Diwali, New Year), and executive appreciation hampers. We provide custom brand sleeves, logo tags, and volume pricing upon enquiry.",
    },
  ] as FAQItem[],

  // 6 Sample Testimonials
  testimonials: [
    {
      id: "test-1",
      author: "Radhika Kulkarni",
      location: "Koregaon Park, Pune",
      occasion: "Husband's 30th Birthday",
      rating: 5,
      review: "Riwayat took my chaotic ideas and turned them into the most breathtaking burgundy velvet hamper. The handwritten calligraphy card and gold-dusted chocolates blew my husband away. Everyone asked where I got it from!",
      date: "October 2026",
      verified: true,
      hamperName: "The Royale Velvet Keepsake",
    },
    {
      id: "test-2",
      author: "Aditya & Sanaya Deshmukh",
      location: "Baner, Pune",
      occasion: "Engagement Gift Hamper",
      rating: 5,
      review: "Ordered an engagement hamper for my best friend. The coordination on WhatsApp and Instagram was so warm, and the ribbon detail was pure royalty. Delivered right on time to their home in Baner. Riwayat is now our family go-to!",
      date: "September 2026",
      verified: true,
      hamperName: "Ever After Romantic Chest",
    },
    {
      id: "test-3",
      author: "Meera Joshi",
      location: "Kothrud, Pune",
      occasion: "Sister's Baby Shower",
      rating: 5,
      review: "The soft blush baby shower trunk was adorable beyond words! The customized baby milestone blanket, organic keepsakes, and delicate bow wrapping made my sister tear up with joy. Truly curated with genuine love.",
      date: "October 2026",
      verified: true,
      hamperName: "Little Wonder Baby Trunk",
    },
    {
      id: "test-4",
      author: "Vikram Malhotra",
      location: "Kalyani Nagar, Pune",
      occasion: "Diwali Corporate Gifts (40 Boxes)",
      rating: 5,
      review: "We engaged Riwayat for 40 festive hampers for our senior leadership team. The branding, premium brass diyas, and gourmet dry fruits were flawless. Our clients were raving about the presentation. Flawless execution!",
      date: "October 2026",
      verified: true,
      hamperName: "Noor Festive Royal Hamper",
    },
    {
      id: "test-5",
      author: "Tanvi Agrawal",
      location: "Aundh, Pune",
      occasion: "Parents' 25th Silver Anniversary",
      rating: 5,
      review: "Finding something meaningful for parents who 'have everything' is tough. The customized silver photo frame, silver foil tea blend, and vintage memory journal in an antique trunk was perfection. Thank you Riwayat team!",
      date: "August 2026",
      verified: true,
      hamperName: "Silver Jubilee Heritage Box",
    },
    {
      id: "test-6",
      author: "Rohan & Sneha Patil",
      location: "Viman Nagar, Pune",
      occasion: "Valentine's Day Surprise",
      rating: 5,
      review: "Used the 'Surprise Me' feature because I wanted something unique. What they curated surpassed all expectations—rose champagne fragrance, artisanal truffles, and a wax-sealed love letter. 10/10 luxury experience in Pune.",
      date: "February 2026",
      verified: true,
      hamperName: "Velvet Rose Romance Suite",
    },
  ] as TestimonialItem[],
};
