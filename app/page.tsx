'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { Product } from '@/types';
import { INITIAL_PRODUCTS } from '@/lib/mockData';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [enquiryHamper, setEnquiryHamper] = useState<string>('Custom Hamper');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Gift Wrapping Visualizer State
  const [boxColor, setBoxColor] = useState('#6D1A2B');
  const [boxName, setBoxName] = useState('Royal Burgundy Velvet');
  const [ribbonColor, setRibbonColor] = useState('#D4AF37');
  const [ribbonName, setRibbonName] = useState('Antique Gold Satin');

  // Multi-step Builder State
  const [builderStep, setBuilderStep] = useState(1);
  const [byoOccasion, setByoOccasion] = useState('Birthday');
  const [byoRecipient, setByoRecipient] = useState('For Her');
  const [byoBudget, setByoBudget] = useState('₹4,500 – ₹7,500');
  const [byoTheme, setByoTheme] = useState('Royal Burgundy & Gold');
  const [byoItems, setByoItems] = useState<string[]>([
    'Belgian Cocoa Truffles',
    'Rose Scented Candle',
    'Handwritten Calligraphy Card'
  ]);
  const [byoCardText, setByoCardText] = useState('');
  const [byoName, setByoName] = useState('');
  const [byoPhone, setByoPhone] = useState('');
  const [byoDate, setByoDate] = useState('');
  const [byoAddress, setByoAddress] = useState('');

  // Fetch products from backend API on mount
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.products) {
          setProducts(data.products);
        }
      })
      .catch(() => {
        // Fallback already in place with INITIAL_PRODUCTS
      });
  }, []);

  const filteredProducts = products.filter(p => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'favourites') return p.featuredSection === 'favourites';
    if (activeCategory === 'romantic') return p.featuredSection === 'romantic' || p.occasions.includes('romantic');
    return p.occasions.includes(activeCategory as any);
  });

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      customerName: formData.get('customerName') as string,
      customerPhone: formData.get('customerPhone') as string,
      customerEmail: formData.get('customerEmail') as string || 'customer@example.com',
      recipientName: formData.get('recipientName') as string,
      occasion: formData.get('occasion') as string,
      budgetBracket: '₹4,500 – ₹7,500',
      deliveryDate: formData.get('deliveryDate') as string,
      deliveryType: 'delivery',
      deliveryAddress: formData.get('deliveryAddress') as string,
      messageCardText: (formData.get('messageCardText') as string) || '',
      packagingStyle: boxName,
      ribbonColour: ribbonName,
      productName: enquiryHamper,
      enquiryType: 'standard',
      policyAcknowledged: true,
    };

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (res.ok) {
        setSubmitMessage(`Thank you! Enquiry received. Ref ID: ${result.referenceNumber}. We will message you on WhatsApp.`);
        form.reset();
        setTimeout(() => setIsModalOpen(false), 3000);
      } else {
        setSubmitMessage(result.message || 'Error submitting enquiry.');
      }
    } catch {
      setSubmitMessage('Network error. Please try connecting on WhatsApp directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-950 text-ivory-100 py-2.5 px-4 text-xs tracking-wide text-center">
        <p className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="font-semibold text-gold-300">✨ FESTIVE BOOKINGS OPEN IN PUNE:</span>
          <span>Reserve slots 7+ days in advance for bespoke silk ribbon curation.</span>
          <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noreferrer" className="underline font-bold text-gold-200 ml-2">
            WhatsApp Us
          </a>
        </p>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-ivory-100/90 backdrop-blur-md border-b border-ivory-300 py-4 px-6 sm:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-burgundy-700 flex items-center justify-center text-gold-400 font-bold border border-gold-400/40">
            R
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold text-burgundy-950 leading-none">Riwayat</h1>
            <p className="font-script text-xs text-gold-600">Gifting, curated with love.</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-charcoal-700">
          <a href="#collections" className="hover:text-burgundy-700 transition">Collections</a>
          <a href="#wrapping" className="hover:text-burgundy-700 transition">Gift Wrapping</a>
          <a href="#builder" className="hover:text-burgundy-700 transition">Build Hamper</a>
          <a href="#about" className="hover:text-burgundy-700 transition">Our Story</a>
          <a href="#contact" className="hover:text-burgundy-700 transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href={siteConfig.contact.instagramUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="hidden sm:inline-flex px-4 py-2 rounded-full border border-burgundy-300 text-burgundy-800 text-xs font-semibold bg-blush-50 hover:bg-blush-100 transition"
          >
            Instagram DM
          </a>
          <button 
            onClick={() => { setEnquiryHamper('Custom Hamper'); setIsModalOpen(true); }}
            className="px-5 py-2 rounded-full bg-burgundy-700 text-white font-semibold text-xs tracking-wider uppercase hover:bg-burgundy-800 transition shadow"
          >
            Enquire Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold tracking-wider uppercase border border-gold-300">
            Pune&apos;s Bespoke Gifting Atelier
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-burgundy-950 leading-tight">
            Curated with Love, <br />
            Wrapped in <span className="italic font-serif text-gold-600">Royal Elegance.</span>
          </h2>
          <p className="text-charcoal-600 text-base sm:text-lg font-light leading-relaxed max-w-xl">
            Handcrafted luxury gift hampers for birthdays, weddings, baby showers, and festivals. Chauffeured directly across Pune with personalized calligraphy and coordinated silk ribbons.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#collections" className="px-7 py-3.5 rounded-full bg-burgundy-700 text-white font-semibold text-xs uppercase tracking-wider hover:bg-burgundy-800 transition shadow">
              Explore Collections
            </a>
            <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noreferrer" className="px-6 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-emerald-700 transition shadow">
              WhatsApp Chat
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gold-400/40 relative h-96">
            <img 
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800" 
              alt="Luxury Hamper Riwayat" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-gold-300 text-xs font-bold uppercase tracking-wider">Customer Favourite</span>
              <h3 className="font-serif text-2xl font-bold">The Royale Velvet Keepsake</h3>
              <p className="text-xs text-ivory-200 font-light mt-1">Belgian truffles, rose oud soy candle, and wax-sealed calligraphy card.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="collections" className="py-16 bg-white border-t border-ivory-300 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="font-script text-2xl text-gold-600">The Atelier Catalog</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy-950">Curated Hampers</h3>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              {['all', 'favourites', 'romantic', 'wedding', 'festivals'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full transition ${activeCategory === cat ? 'bg-burgundy-700 text-white' : 'bg-ivory-200 text-charcoal-700 hover:bg-ivory-300'}`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(p => (
              <div key={p.id} className="bg-ivory-100 rounded-3xl overflow-hidden border border-ivory-300 shadow-sm hover:shadow-xl transition flex flex-col justify-between">
                <div className="relative h-64 w-full">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-burgundy-900 border border-burgundy-200">
                    Enquire for price
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h4 className="font-serif text-xl font-bold text-burgundy-950">{p.name}</h4>
                  <p className="text-xs text-charcoal-600 line-clamp-2">{p.description}</p>
                  <div className="pt-3 border-t border-ivory-300 flex items-center justify-between">
                    <span className="text-[11px] text-gold-700 font-bold uppercase tracking-wider">{p.tagline}</span>
                    <button
                      onClick={() => { setEnquiryHamper(p.name); setIsModalOpen(true); }}
                      className="px-4 py-1.5 rounded-full bg-burgundy-700 text-white text-xs font-semibold hover:bg-burgundy-800 transition"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Wrapping Preview */}
      <section id="wrapping" className="py-16 bg-ivory-100/60 border-t border-ivory-300 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-10">
          <span className="font-script text-2xl text-gold-600">Visualizer</span>
          <h3 className="font-serif text-3xl font-bold text-burgundy-950">Interactive Gift-Wrapping Preview</h3>
          <p className="text-xs text-charcoal-600">Select box textures and silk ribbon hues to preview your curated finish.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-gold-400/40 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center justify-center p-8 bg-ivory-100 rounded-2xl min-h-[260px]">
            <div 
              className="w-48 h-48 rounded-2xl shadow-2xl relative flex items-center justify-center transition-all duration-300 border border-gold-400/50"
              style={{ backgroundColor: boxColor }}
            >
              <div className="absolute w-8 h-full shadow" style={{ backgroundColor: ribbonColor }} />
              <div className="absolute h-8 w-full shadow" style={{ backgroundColor: ribbonColor }} />
              <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow" style={{ backgroundColor: '#B88F23' }}>
                🎀
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-charcoal-700">{boxName} with {ribbonName}</p>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-charcoal-800 uppercase block mb-1.5">Box Texture</label>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => { setBoxColor('#6D1A2B'); setBoxName('Royal Burgundy Velvet'); }} className="p-2.5 rounded-xl border border-burgundy-700 bg-burgundy-50 font-semibold text-burgundy-900">
                  Royal Burgundy
                </button>
                <button onClick={() => { setBoxColor('#FAF6F0'); setBoxName('Warm Ivory Matte'); }} className="p-2.5 rounded-xl border border-ivory-300 bg-white hover:bg-ivory-50">
                  Warm Ivory
                </button>
              </div>
            </div>

            <div>
              <label className="font-bold text-charcoal-800 uppercase block mb-1.5">Silk Ribbon</label>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => { setRibbonColor('#D4AF37'); setRibbonName('Antique Gold Satin'); }} className="p-2.5 rounded-xl border border-gold-500 bg-gold-50 font-semibold text-gold-900">
                  Antique Gold
                </button>
                <button onClick={() => { setRibbonColor('#8C354A'); setRibbonName('Crimson Silk'); }} className="p-2.5 rounded-xl border border-ivory-300 bg-white hover:bg-ivory-50">
                  Crimson Silk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-gold-400/40 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-5 text-charcoal-400 hover:text-charcoal-700 text-lg">
              ✕
            </button>
            <h4 className="font-serif text-2xl font-bold text-burgundy-950 mb-1">Enquire: {enquiryHamper}</h4>
            <p className="text-xs text-charcoal-600 mb-4">We will prepare your custom itemized quote with Pune delivery.</p>

            {submitMessage && (
              <div className="p-3 mb-4 rounded-xl bg-gold-50 border border-gold-300 text-xs font-semibold text-burgundy-900">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleEnquirySubmit} className="space-y-3 text-xs">
              <input type="text" name="customerName" required placeholder="Your Name" className="w-full p-3 rounded-xl border border-ivory-300 text-sm" />
              <input type="tel" name="customerPhone" required placeholder="WhatsApp Number (+91...)" className="w-full p-3 rounded-xl border border-ivory-300 text-sm" />
              <input type="email" name="customerEmail" placeholder="Email Address" className="w-full p-3 rounded-xl border border-ivory-300 text-sm" />
              <input type="text" name="recipientName" required placeholder="Recipient's Name" className="w-full p-3 rounded-xl border border-ivory-300 text-sm" />
              <select name="occasion" className="w-full p-3 rounded-xl border border-ivory-300 text-sm">
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Wedding">Wedding</option>
                <option value="Festivals">Festivals</option>
              </select>
              <input type="date" name="deliveryDate" required className="w-full p-3 rounded-xl border border-ivory-300 text-sm" />
              <input type="text" name="deliveryAddress" required placeholder="Pune Address / Locality (e.g. Baner)" className="w-full p-3 rounded-xl border border-ivory-300 text-sm" />
              <textarea name="messageCardText" placeholder="Personal message for the calligraphy card..." rows={2} className="w-full p-3 rounded-xl border border-ivory-300 text-sm" />

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-burgundy-700 text-white font-bold uppercase tracking-wider hover:bg-burgundy-800 transition shadow"
              >
                {isSubmitting ? 'Sending...' : 'Send Bespoke Enquiry'}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
