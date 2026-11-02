import { Product, AddonItem, SeasonalCollection, GalleryPhoto, CustomerReview, DiscountCode, LoyaltyMember, ReferralRecord } from '@/types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    slug: "royale-velvet-keepsake-hamper",
    name: "The Royale Velvet Keepsake",
    tagline: "Our signature luxury birthday & celebration trunk",
    description: "An opulent tribute to timeless gifting. Encased in a handcrafted royal burgundy velvet trunk with brushed antique gold clasps, this hamper pairs artisanal Belgian cocoa truffles, artisanal gold-rimmed scented soy candle, roasted almond brittles, and a wax-sealed calligraphy card.",
    contents: [
      "Custom Handcrafted Burgundy Velvet Keepsake Trunk with Gold Hardware",
      "Box of 12 Artisanal Belgian Dark Chocolate & Sea Salt Truffles",
      "Hand-Poured Rose Oud Scented Soy Candle in Amber Glass",
      "Gourmet California Roasted Almond & Honey Brittles (200g)",
      "Brass Gold Keepsake Bookmark & Vintage Brass Pen",
      "Wax-Sealed Deckle-Edged Calligraphy Greeting Card"
    ],
    customizationOptions: [
      "Choice of ribbon hue: Crimson Silk, Antique Gold, or Blush Velvet",
      "Custom name foil-stamped on trunk exterior",
      "Dietary preference: Vegan chocolates or sugar-free brittles",
      "Personalized handwritten message inside wax seal"
    ],
    occasions: ["birthday", "anniversary", "corporate", "festivals"],
    recipients: ["for-her", "for-him", "couples", "colleagues"],
    budgetBracket: "4500-7500",
    collections: ["signature", "festive"],
    images: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513201099705-a9742e15a5ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1000&auto=format&fit=crop"
    ],
    featuredSection: "favourites",
    isAvailable: true,
    baseEstimate: 5200,
    rating: 5.0,
    reviewCount: 38,
    packagingPreview: {
      defaultBox: "Royal Burgundy Trunk",
      defaultRibbon: "Antique Gold Satin"
    },
    createdAt: "2026-01-10T10:00:00Z"
  },
  {
    id: "prod-2",
    slug: "ever-after-romantic-chest",
    name: "Ever After Romantic Chest",
    tagline: "Unforgettable engagement & anniversary gesture",
    description: "Designed to ignite romance and celebrate true love. Features twin crystal champagne flutes, freeze-dried crimson rose petals, organic raspberry champagne truffles, a love journal with gilt edging, and luxury scented pillow mist.",
    contents: [
      "Warm Ivory Matte Rigid Chest with Soft Blush Silk Interior",
      "Twin Gold-Rimmed Crystal Champagne Flutes",
      "Gourmet Raspberry Champagne Truffles in Gold Box",
      "Night Blooming Jasmine & Bulgarian Rose Pillow Mist (100ml)",
      "Leather-bound Couple's Bucket List & Memory Journal",
      "Fresh Preserved Crimson Rose Stem in Glass Dome",
      "Handwritten Love Letter with Custom Monogram Wax Stamp"
    ],
    customizationOptions: [
      "Monogram initials etched onto the crystal champagne flutes",
      "Choice of ribbon: Blush Silk Ribbon or Ruby Velvet",
      "Add non-alcoholic sparkling grape cider or artisan wine blend",
      "Include a framed couple photo in antique gold frame"
    ],
    occasions: ["anniversary", "engagement", "wedding", "romantic"],
    recipients: ["couples", "for-her", "for-him"],
    budgetBracket: "7500-12000",
    collections: ["romantic", "wedding-suite"],
    images: [
      "https://images.unsplash.com/photo-1513201099705-a9742e15a5ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1000&auto=format&fit=crop"
    ],
    featuredSection: "romantic",
    isAvailable: true,
    baseEstimate: 8500,
    rating: 4.9,
    reviewCount: 44,
    packagingPreview: {
      defaultBox: "Ivory Velvet Keepsake",
      defaultRibbon: "Blush Rose Satin"
    },
    createdAt: "2026-01-15T12:00:00Z"
  },
  {
    id: "prod-3",
    slug: "little-wonder-baby-shower-trunk",
    name: "Little Wonder Baby Trunk",
    tagline: "Tender treasures for welcoming a newborn into the world",
    description: "A tender, heirloom-quality baby hamper crafted in delicate pastels. Filled with 100% GOTS organic cotton swaddle wrap, personalized wooden baby milestone markers, crochet baby booties, and soothing chamomile mother's relaxation tea.",
    contents: [
      "Pastel Cream Woven Trunk with Rose Gold Clasp",
      "Organic Bamboo Muslin Swaddle with Botanical Woodland Print",
      "Hand-Knit Organic Wool Bunny Rattle",
      "Engraved Wooden Milestone Discs (1-12 Months)",
      "Cold-Pressed Calendula & Sweet Almond Baby Massage Oil",
      "Herbal Chamomile & Lavender Mother's Postpartum Calming Tea",
      "Calligraphy Welcome Baby Card"
    ],
    customizationOptions: [
      "Baby's name laser-engraved on wooden hairbrush & milestone discs",
      "Choice of gender theme: Soft Blush, Sage Olive, or Warm Oat Milk",
      "Include personalized baby milestone blanket with custom name",
      "Add pampering spa essentials for the new mother"
    ],
    occasions: ["baby-shower"],
    recipients: ["parents", "for-her", "friends"],
    budgetBracket: "4500-7500",
    collections: ["baby-blessings"],
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop"
    ],
    featuredSection: "favourites",
    isAvailable: true,
    baseEstimate: 5800,
    rating: 5.0,
    reviewCount: 29,
    packagingPreview: {
      defaultBox: "Pastel Ivory Woven Trunk",
      defaultRibbon: "Soft Sage Satin"
    },
    createdAt: "2026-02-01T09:00:00Z"
  },
  {
    id: "prod-4",
    slug: "noor-festive-royal-brass-hamper",
    name: "Noor Festive Royal Hamper",
    tagline: "Pure festive splendor with antique brass & heritage sweets",
    description: "Evoking timeless Indian royal festivities. Featuring hand-carved floral brass diyas, Kashmiri saffron-infused honey, organic dry fruits in glass canisters with brass lids, and fragrant sandalwood agarbattis.",
    contents: [
      "Royal Maroon & Gold Embroidered Velvet Gift Box",
      "Pair of Handcrafted Pure Brass Peacock Oil Lamps (Diyas)",
      "Pure Kashmiri Mongra Saffron (1g in corked vial)",
      "Raw Forest Wildflower Honey infused with Roasted Almonds",
      "Quarter Kilo Medjool Dates stuffed with Pistachios & Cardamom",
      "Mysore Sandalwood Incense Sticks with Brass Stand",
      "Festive Shubharambh Calligraphy Card with Gold Leaf Detailing"
    ],
    customizationOptions: [
      "Company branding band or family crest printed on velvet sleeve",
      "Exchange sweets for vegan dry-fruit mithai selections",
      "Bulk order quantity pricing starting from 15 hampers",
      "Custom regional festive greetings (Diwali, Eid, Rakhi, Ganesh Utsav)"
    ],
    occasions: ["festivals", "corporate", "wedding"],
    recipients: ["parents", "colleagues", "friends", "couples"],
    budgetBracket: "7500-12000",
    collections: ["festive", "signature"],
    images: [
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop"
    ],
    featuredSection: "festive",
    isAvailable: true,
    baseEstimate: 8900,
    rating: 4.9,
    reviewCount: 52,
    packagingPreview: {
      defaultBox: "Royal Burgundy Trunk",
      defaultRibbon: "Antique Gold Satin"
    },
    createdAt: "2026-02-10T14:00:00Z"
  },
  {
    id: "prod-5",
    slug: "gentlemans-cognac-leather-suite",
    name: "The Gentleman's Heritage Suite",
    tagline: "Sophisticated curation for him on birthdays and milestones",
    description: "An understated, masculine collection designed for husbands, fathers, and mentors who appreciate fine craftsmanship. Contains a full-grain brown leather valet tray, bespoke whiskey stones, coffee body scrub, and hazelnut espresso dragées.",
    contents: [
      "Structured Matte Espresso Box with Gold Foil Inscription",
      "Genuine Tan Leather Desk Valet Tray with Brass Snaps",
      "Set of 6 Solid Granite Whiskey Chilling Stones in Pouch",
      "Smoked Cedarwood & Amber Cologne Solid Balm",
      "Single-Origin Arabica Dark Roast Coffee Beans (250g)",
      "Artisan Dark Chocolate Hazelnut Dragées (150g)",
      "Vintage Kraft & Burgundy Monogram Note Card"
    ],
    customizationOptions: [
      "Leather valet tray personalized with his initials hot-stamped",
      "Custom crystal tumbler or travel mug addition",
      "Choice of ribbon: Charcoal Grey or Vintage Gold Satin",
      "Select favorite roast profile: Dark Espresso or Blonde Pour-over"
    ],
    occasions: ["birthday", "anniversary", "corporate"],
    recipients: ["for-him", "colleagues", "parents"],
    budgetBracket: "4500-7500",
    collections: ["signature"],
    images: [
      "https://images.unsplash.com/photo-1513201099705-a9742e15a5ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop"
    ],
    featuredSection: "favourites",
    isAvailable: true,
    baseEstimate: 6200,
    rating: 4.9,
    reviewCount: 31,
    packagingPreview: {
      defaultBox: "Espresso Rigid Chest",
      defaultRibbon: "Charcoal Grey Satin"
    },
    createdAt: "2026-02-18T11:00:00Z"
  },
  {
    id: "prod-6",
    slug: "blush-serenade-spa-retreat",
    name: "Blush Serenade Spa Retreat",
    tagline: "Relaxation and pampering for her special day",
    description: "The ultimate unwind hamper for pampering mothers, wives, sisters, or best friends. Packed with pink Himalayan bath salts, satin mulberry silk eye mask, rose quartz facial roller, whipped body butter, and organic floral tisane.",
    contents: [
      "Pastel Blush Rigid Gift Box with Rose Gold Foil Detailing",
      "100% Mulberry Silk Sleeping Eye Mask in Matching Pouch",
      "Natural Brazilian Rose Quartz Facial Gua Sha & Roller Set",
      "Pink Himalayan & Dead Sea Mineral Bath Salts with Dried Rosebuds",
      "French Vanilla Whipped Shea Body Butter (150g)",
      "Handmade Floral Berry Tisane Tea Tube with Gold Strainer",
      "Poured Strawberry Champagne Scented Candle",
      "Wax-Sealed Card with Gold Flakes"
    ],
    customizationOptions: [
      "Add embroidered monogram to the silk eye mask",
      "Choice of ribbon: Dusty Rose Velvet or Gold Satin",
      "Substitute bath soak for foot soak for expectant mothers",
      "Include a mini bouquet of dried preserved hydrangeas"
    ],
    occasions: ["birthday", "anniversary", "romantic", "baby-shower"],
    recipients: ["for-her", "siblings", "friends"],
    budgetBracket: "4500-7500",
    collections: ["signature", "romantic"],
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513201099705-a9742e15a5ab?q=80&w=1000&auto=format&fit=crop"
    ],
    featuredSection: "romantic",
    isAvailable: true,
    baseEstimate: 5600,
    rating: 4.8,
    reviewCount: 26,
    packagingPreview: {
      defaultBox: "Ivory Velvet Keepsake",
      defaultRibbon: "Blush Rose Satin"
    },
    createdAt: "2026-02-22T15:30:00Z"
  },
  {
    id: "prod-7",
    slug: "grand-wedding-welcome-trousseau",
    name: "Grand Wedding Welcome Trousseau",
    tagline: "Heirloom wedding gifting for royal Pune ceremonies",
    description: "Created specifically for bespoke wedding favors, bridal trousseau, and VIP wedding guests. Housed in a hand-crafted wooden chest with antique brass latch, loaded with royal saffron tea, silver-plated coin, luxury hand-poured candle, dry fruit florentines, and fragrant attar.",
    contents: [
      "Heritage Teakwood Finished Trunk with Hand-Engraved Floral Latches",
      "Pure Kashmiri Kahwa Saffron & Cardamom Tea (100g tin)",
      "999 Fine Silver-Plated Lakshmi-Ganesh Keepsake Coin",
      "Artisanal Pistachio & Cranberry Florentines (8 pcs)",
      "Rose & Sandalwood Pure Organic Attar (12ml in Crystal Flacon)",
      "Pure Brass Dhoop Incense Burner",
      "Calligraphy Wedding Welcome Scroll with Silk Tassel"
    ],
    customizationOptions: [
      "Couple’s wedding logo carved into wooden lid or foil stamped on ribbon",
      "Custom color ribbons to match wedding decor palette",
      "Volume guest packages for 25 to 200+ guests",
      "Choice of dry fruits and regional sweets"
    ],
    occasions: ["wedding", "engagement"],
    recipients: ["couples", "parents", "friends"],
    budgetBracket: "12000-plus",
    collections: ["wedding-suite"],
    images: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1000&auto=format&fit=crop"
    ],
    featuredSection: "favourites",
    isAvailable: true,
    baseEstimate: 14500,
    rating: 5.0,
    reviewCount: 19,
    packagingPreview: {
      defaultBox: "Artisanal Wooden Trunk",
      defaultRibbon: "Crimson Silk"
    },
    createdAt: "2026-03-01T10:00:00Z"
  },
  {
    id: "prod-8",
    slug: "petite-sunshine-birthday-box",
    name: "Petite Sunshine Birthday Box",
    tagline: "A cheerful, thoughtful box that brings instant smiles",
    description: "An accessible, joyful birthday parcel bursting with curated sweetness. Includes birthday confetti bath bomb, gourmet caramel popcorn, artisanal iced cookies, a playful enamel badge, and celebration sparklers.",
    contents: [
      "Warm Ivory Sturdy Gift Box tied with Yellow & Gold Ribbon",
      "Artisan Vanilla Bean Birthday Cookie with Royal Icing",
      "Caramel Sea Salt Gourmet Popcorn in Vintage Foil Pouch (120g)",
      "Fizzy Sweet Orange Bath Fizzer with Botanical Petals",
      "Golden Birthday Candle & Celebration Matchbox",
      "Quirky Gold Enamel 'Birthday Queen/King' Pin",
      "Illustrated Cheerful Birthday Card"
    ],
    customizationOptions: [
      "Custom name piped onto the birthday cookie",
      "Choice of ribbon color: Bright Sunshine, Gold, or Blush",
      "Upgrade to include a plush mini teddy bear",
      "Select dietary: Eggless or Gluten-Free cookies"
    ],
    occasions: ["birthday"],
    recipients: ["friends", "siblings", "kids", "for-her"],
    budgetBracket: "under-2500",
    collections: ["signature"],
    images: [
      "https://images.unsplash.com/photo-1513201099705-a9742e15a5ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop"
    ],
    featuredSection: "favourites",
    isAvailable: true,
    baseEstimate: 2400,
    rating: 4.9,
    reviewCount: 37,
    packagingPreview: {
      defaultBox: "Warm Ivory Rigid Box",
      defaultRibbon: "Antique Gold Satin"
    },
    createdAt: "2026-03-05T12:00:00Z"
  },
  {
    id: "prod-9",
    slug: "executive-crest-corporate-hamper",
    name: "The Executive Crest Hamper",
    tagline: "Polished corporate elegance for clients & leadership",
    description: "Impress distinguished clients, board members, or partners with refined sophistication. Features a stainless steel thermal travel flask, Italian leather notebook, single-origin dark cocoa bars, and roasted salted cashews in brass-accented jars.",
    contents: [
      "Matte Charcoal & Gold Hot-Stamped Presentation Box",
      "Double-Walled Matte Black Temperature Flask (500ml)",
      "Faux-Leather Hardbound Planner with Gold Edge Paper",
      "70% Madagascar Single-Estate Dark Chocolate Bar",
      "Jumbo W240 Roasted Salted Cashews in Hermetic Glass Jar (200g)",
      "Laser-Engraved Metal Ballpoint Pen",
      "Custom Formal Appreciation Card with Wax Seal"
    ],
    customizationOptions: [
      "Laser engraving of company logo on flask and pen",
      "Custom branded sleeve wrapped around exterior box",
      "Volume tiered quotes for 10 to 500 units",
      "Option to include personalized client name tag"
    ],
    occasions: ["corporate"],
    recipients: ["colleagues"],
    budgetBracket: "2500-4500",
    collections: ["corporate-suite"],
    images: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513201099705-a9742e15a5ab?q=80&w=1000&auto=format&fit=crop"
    ],
    featuredSection: "curator",
    isAvailable: true,
    baseEstimate: 3800,
    rating: 4.8,
    reviewCount: 22,
    packagingPreview: {
      defaultBox: "Espresso Rigid Chest",
      defaultRibbon: "Antique Gold Satin"
    },
    createdAt: "2026-03-12T09:00:00Z"
  },
  {
    id: "prod-10",
    slug: "velvet-rose-romance-suite",
    name: "Velvet Rose Romance Suite",
    tagline: "Intimate, poetic celebration for anniversaries and date nights",
    description: "A breathtaking poetic hamper crafted for that one special person. Filled with velvet-wrapped chocolates, preserved red eternal roses, sensual damask rose fragrance, silk ribbon coordinates, and custom vintage love notes.",
    contents: [
      "Round Deep Crimson Velvet Hatbox with Antique Brass Handle",
      "Single Infinity Preserved Crimson Rose in Glass Cloche (Lasts 3 Years)",
      "Heart-Shaped Box of Handcrafted Strawberry Ganache Truffles",
      "Damask Rose & Bergamot Eau de Parfum (50ml)",
      "Set of 12 Reasons Why I Love You Rolled Parchment Scrolls",
      "Rose Gold Mirrored Compact with Custom Engraved Message",
      "Calligraphy Wax-Sealed Romantic Letter"
    ],
    customizationOptions: [
      "Provide your own 12 reasons for the scrolls, hand-typed by us",
      "Add personal couple photos suspended inside the lid",
      "Select ribbon style: Velvet Burgundy or Sheer Gold Organza",
      "Upgrade to include fresh strawberry chocolate bouquet"
    ],
    occasions: ["anniversary", "romantic", "birthday"],
    recipients: ["for-her", "couples"],
    budgetBracket: "7500-12000",
    collections: ["romantic"],
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513201099705-a9742e15a5ab?q=80&w=1000&auto=format&fit=crop"
    ],
    featuredSection: "romantic",
    isAvailable: true,
    baseEstimate: 9200,
    rating: 5.0,
    reviewCount: 41,
    packagingPreview: {
      defaultBox: "Royal Burgundy Trunk",
      defaultRibbon: "Crimson Silk"
    },
    createdAt: "2026-03-18T16:00:00Z"
  },
  {
    id: "prod-11",
    slug: "sibling-nostalgia-rakhi-box",
    name: "Sibling Nostalgia Keepsake",
    tagline: "Heartfelt celebrations for brothers & sisters across distances",
    description: "Celebrate the sweetest lifelong bond with nostalgic warmth. Featuring handcrafted thread and semi-precious stone rakhis, traditional organic kaju katli, childhood candy assortments, and a personalized polaroid collage.",
    contents: [
      "Handmade Floral Paper Rigid Box with Silk Drawstring",
      "Set of 2 Handcrafted Brass & Sandalwood Beads Rakhis",
      "Organic Silver Foil Kaju Katli (250g in sealed tin)",
      "Assorted Vintage Candies & Roasted Salted Almonds",
      "Kumkum & Chawal Brass Containers on Miniature Thali",
      "Custom 4-Photo Polaroid Memory Accordion Card",
      "Wax-Sealed Sibling Teasing Greeting Card"
    ],
    customizationOptions: [
      "Upload 4 childhood photos for the polaroid memory accordion",
      "Substitute traditional sweets for luxury imported chocolates",
      "Choice of lumba-rakhi sets for bhabhi",
      "Personalized message typed in Hindi, Marathi, or English"
    ],
    occasions: ["festivals"],
    recipients: ["siblings", "friends"],
    budgetBracket: "2500-4500",
    collections: ["festive"],
    images: [
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop"
    ],
    featuredSection: "festive",
    isAvailable: true,
    baseEstimate: 3400,
    rating: 4.9,
    reviewCount: 28,
    packagingPreview: {
      defaultBox: "Warm Ivory Rigid Box",
      defaultRibbon: "Crimson Silk"
    },
    createdAt: "2026-03-24T10:00:00Z"
  },
  {
    id: "prod-12",
    slug: "silver-jubilee-heritage-box",
    name: "Silver Jubilee Heritage Box",
    tagline: "Honoring 25+ years of togetherness for beloved parents",
    description: "Created specifically for 25th or 50th silver and golden anniversaries. Filled with nostalgic treasures including a silver-plated double photo frame, premium organic Darjeeling first-flush tea, vintage porcelain tea cups, and royal saffron cookies.",
    contents: [
      "Antique Distressed Ivory Wooden Trunk with Brass Handle",
      "Sterling Silver-Plated 5x7 Double Frame with Couple's Photo",
      "First Flush Champagne of Teas: Darjeeling Single-Estate (100g)",
      "Set of 2 Fine Bone China Tea Cups with Gold Floral Filigree",
      "Cardamom & Saffron Shortbread Tea Cookies (200g)",
      "Fragrant Jasmine & Sandalwood Incense in Brass Box",
      "Heirloom Family Tribute Calligraphy Letter"
    ],
    customizationOptions: [
      "We print and frame their wedding and current photo in the double frame",
      "Custom laser engraving on trunk: 'Celebrating 25 Years of Love'",
      "Add silver or gold anniversary balloons to delivery",
      "Customize tea selections based on parents' taste"
    ],
    occasions: ["anniversary", "wedding"],
    recipients: ["parents", "couples"],
    budgetBracket: "12000-plus",
    collections: ["wedding-suite", "signature"],
    images: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513201099705-a9742e15a5ab?q=80&w=1000&auto=format&fit=crop"
    ],
    featuredSection: "favourites",
    isAvailable: true,
    baseEstimate: 13800,
    rating: 5.0,
    reviewCount: 33,
    packagingPreview: {
      defaultBox: "Artisanal Wooden Trunk",
      defaultRibbon: "Antique Gold Satin"
    },
    createdAt: "2026-03-28T14:30:00Z"
  }
];

export const ADDONS_CATALOG: AddonItem[] = [
  {
    id: "addon-choc-1",
    name: "Artisanal Belgian Truffle Box (8 pcs)",
    category: "chocolates",
    priceEstimate: 650,
    description: "Handcrafted dark, milk, and white chocolate pralines infused with hazelnut and sea salt."
  },
  {
    id: "addon-choc-2",
    name: "Golden Almond Dragées Glass Jar",
    category: "chocolates",
    priceEstimate: 500,
    description: "Roasted California almonds cloaked in single-origin chocolate with a dusting of gold sheen."
  },
  {
    id: "addon-flow-1",
    name: "Fresh Exotic Rose & Gypsophila Bouquet",
    category: "flowers",
    priceEstimate: 1200,
    description: "Hand-tied posy of premium red/blush Dutch roses nestled with baby's breath."
  },
  {
    id: "addon-flow-2",
    name: "Preserved Forever Rose in Glass Dome",
    category: "flowers",
    priceEstimate: 1800,
    description: "Natural real rose preserved at peak bloom that lasts up to 3 years without water."
  },
  {
    id: "addon-ball-1",
    name: "Custom Helium Bubble Balloon with Confetti",
    category: "balloons",
    priceEstimate: 850,
    description: "24-inch clear crystal balloon filled with gold/rose gold confetti and custom vinyl lettering."
  },
  {
    id: "addon-ball-2",
    name: "Mini Foil Heart / Star Balloon Cluster",
    category: "balloons",
    priceEstimate: 450,
    description: "Set of three metallic mini balloons tied with coordinating silk ribbons."
  },
  {
    id: "addon-ted-1",
    name: "Plush Velvet Hugs Teddy Bear (30cm)",
    category: "teddy",
    priceEstimate: 950,
    description: "Ultra-soft premium honey beige teddy bear wearing a matching burgundy silk bow."
  },
  {
    id: "addon-card-1",
    name: "Deckle-Edged Calligraphy Wax-Sealed Card",
    category: "cards",
    priceEstimate: 350,
    description: "Handmade cotton rag paper inscribed with dip-pen gold ink calligraphy and real wax seal."
  },
  {
    id: "addon-card-2",
    name: "Accordion 6-Photo Memory Strip",
    category: "personalized",
    priceEstimate: 600,
    description: "We print and bind your 6 favorite photos into a vintage fold-out accordion keepsake."
  },
  {
    id: "addon-pers-1",
    name: "Custom Laser-Engraved Wooden Keepsake Tag",
    category: "personalized",
    priceEstimate: 300,
    description: "Natural birchwood tag engraved with the recipient's name or date, tied to the hamper bow."
  }
];

export const SEASONAL_COLLECTIONS: SeasonalCollection[] = [
  {
    id: "col-diwali",
    slug: "royal-festive-edit",
    name: "The Royal Festive & Diwali Edit",
    subtitle: "Pure gold, brass, and divine sweets curated for auspicious celebrations",
    description: "Illuminate hearts with timeless heritage gifts. Featuring pure brass diyas, Kashmiri saffron, organic forest honey, and royal velvet trunks.",
    bannerImage: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1200&auto=format&fit=crop",
    isActive: true,
    festivalCountdownDate: "2026-11-12T00:00:00Z"
  },
  {
    id: "col-wedding",
    slug: "ever-after-wedding-trousseau",
    name: "Ever After Wedding & Trousseau",
    subtitle: "Bespoke bridal favors, bridesmaid proposals, and luxury guest welcomes",
    description: "Celebrate sacred vows with heirloom wooden chests, crystal champagne flutes, personalized silk coordinates, and fine silver-plated mementos.",
    bannerImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop",
    isActive: true,
    festivalCountdownDate: "2026-12-05T00:00:00Z"
  },
  {
    id: "col-valentine",
    slug: "whispers-of-love",
    name: "Whispers of Love & Romance",
    subtitle: "Passionate romance, forever roses, and Belgian truffles for two",
    description: "Ignite passion and tenderness. Hand-tied crimson satin, preserved forever blooms, scented candles, and wax-sealed love letters.",
    bannerImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop",
    isActive: true,
    festivalCountdownDate: "2027-02-14T00:00:00Z"
  }
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Deep Burgundy & Gold Wedding Trunk",
    category: "Wedding",
    imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
    instagramUrl: "https://instagram.com/riwayat_placeholder",
    likes: 342,
    caption: "A royal bridesmaid welcome trunk sent to Koregaon Park. Curated with love, wrapped in satin."
  },
  {
    id: "gal-2",
    title: "Blush Rose Velvet Hatbox with Preserved Blooms",
    category: "Anniversary",
    imageUrl: "https://images.unsplash.com/photo-1513201099705-a9742e15a5ab?q=80&w=800&auto=format&fit=crop",
    instagramUrl: "https://instagram.com/riwayat_placeholder",
    likes: 418,
    caption: "10 years of togetherness celebrated with eternal flowers and Belgian ganache in Baner."
  },
  {
    id: "gal-3",
    title: "Festive Brass Diya & Saffron Chest",
    category: "Festivals",
    imageUrl: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=800&auto=format&fit=crop",
    instagramUrl: "https://instagram.com/riwayat_placeholder",
    likes: 529,
    caption: "Handcrafted pure brass peacock diyas bringing royal light into homes this festive season."
  },
  {
    id: "gal-4",
    title: "Little Prince Ivory & Sage Baby Trunk",
    category: "Baby Shower",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    instagramUrl: "https://instagram.com/riwayat_placeholder",
    likes: 275,
    caption: "Welcoming little master Vihaan to the world with organic cotton and love."
  },
  {
    id: "gal-5",
    title: "Corporate Leadership Milestone Gift",
    category: "Corporate",
    imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop",
    instagramUrl: "https://instagram.com/riwayat_placeholder",
    likes: 198,
    caption: "Matte black & gold foil executive hampers delivered to Magarpatta City IT leaders."
  },
  {
    id: "gal-6",
    title: "Romantic Starlight Date Night Hamper",
    category: "Romantic",
    imageUrl: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop",
    instagramUrl: "https://instagram.com/riwayat_placeholder",
    likes: 612,
    caption: "Twin gold-rimmed flutes, chocolate truffles, and a hand-sealed wax letter."
  }
];

export const INITIAL_DISCOUNT_CODES: DiscountCode[] = [
  {
    id: "disc-1",
    code: "RIWAYATFIRST",
    discountType: "percentage",
    value: 10,
    minOrderValue: 3000,
    validUntil: "2027-12-31",
    usageLimit: 200,
    usageCount: 42,
    isActive: true
  },
  {
    id: "disc-2",
    code: "FESTIVE500",
    discountType: "fixed",
    value: 500,
    minOrderValue: 5000,
    validUntil: "2026-12-31",
    usageLimit: 100,
    usageCount: 18,
    isActive: true
  },
  {
    id: "disc-3",
    code: "ROYALWEDDING",
    discountType: "percentage",
    value: 15,
    minOrderValue: 15000,
    validUntil: "2027-06-30",
    usageLimit: 50,
    usageCount: 7,
    isActive: true
  }
];

export const INITIAL_LOYALTY_MEMBERS: LoyaltyMember[] = [
  {
    id: "loy-1",
    customerName: "Radhika Kulkarni",
    customerPhone: "+91 98220 12345",
    customerEmail: "radhika.k@example.com",
    points: 850,
    tier: "Platinum",
    lifetimeSpend: 34200,
    lastOrderDate: "2026-10-18"
  },
  {
    id: "loy-2",
    customerName: "Vikram Malhotra",
    customerPhone: "+91 98901 98765",
    customerEmail: "vikram.m@techcorp.example",
    points: 2400,
    tier: "Platinum",
    lifetimeSpend: 156000,
    lastOrderDate: "2026-10-24"
  },
  {
    id: "loy-3",
    customerName: "Sanaya Deshmukh",
    customerPhone: "+91 97654 32109",
    customerEmail: "sanaya.desh@example.com",
    points: 420,
    tier: "Gold",
    lifetimeSpend: 16800,
    lastOrderDate: "2026-09-12"
  },
  {
    id: "loy-4",
    customerName: "Tanvi Agrawal",
    customerPhone: "+91 99234 56781",
    customerEmail: "tanvi.a@example.com",
    points: 340,
    tier: "Silver",
    lifetimeSpend: 13800,
    lastOrderDate: "2026-08-20"
  }
];

export const INITIAL_REFERRALS: ReferralRecord[] = [
  {
    id: "ref-1",
    code: "RADHIKA-LOVE",
    customerName: "Radhika Kulkarni",
    customerPhone: "+91 98220 12345",
    customerEmail: "radhika.k@example.com",
    referralCount: 6,
    rewardPoints: 600,
    lastReferralDate: "2026-10-15"
  },
  {
    id: "ref-2",
    code: "SANAYA-GIFT",
    customerName: "Sanaya Deshmukh",
    customerPhone: "+91 97654 32109",
    customerEmail: "sanaya.desh@example.com",
    referralCount: 3,
    rewardPoints: 300,
    lastReferralDate: "2026-09-28"
  }
];
