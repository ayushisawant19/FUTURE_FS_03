import { INITIAL_PRODUCTS, SEASONAL_COLLECTIONS, INITIAL_DISCOUNT_CODES } from '../lib/mockData';
import { siteConfig } from '../config/site';

/**
 * Generates SQL seed script or populates Supabase database
 */
export function generateSeedSQL(): string {
  const lines: string[] = [
    `-- RIWAYAT DATABASE SEED SCRIPT`,
    `-- Pune, Maharashtra, India | "Gifting, curated with love."\n`,
  ];

  // 1. Seed Products
  INITIAL_PRODUCTS.forEach(p => {
    const contentsStr = `ARRAY[${p.contents.map(c => `'${c.replace(/'/g, "''")}'`).join(', ')}]`;
    const optionsStr = `ARRAY[${p.customizationOptions.map(c => `'${c.replace(/'/g, "''")}'`).join(', ')}]`;
    const occasionsStr = `ARRAY[${p.occasions.map(o => `'${o}'`).join(', ')}]`;
    const recipientsStr = `ARRAY[${p.recipients.map(r => `'${r}'`).join(', ')}]`;
    const collectionsStr = `ARRAY[${p.collections.map(c => `'${c}'`).join(', ')}]`;
    const imagesStr = `ARRAY[${p.images.map(img => `'${img}'`).join(', ')}]`;

    lines.push(
      `INSERT INTO public.products (slug, name, tagline, description, contents, customization_options, occasions, recipients, budget_bracket, collections, images, featured_section, is_available, base_estimate, rating, review_count, default_box, default_ribbon) ` +
      `VALUES ('${p.slug}', '${p.name.replace(/'/g, "''")}', '${p.tagline.replace(/'/g, "''")}', '${p.description.replace(/'/g, "''")}', ${contentsStr}, ${optionsStr}, ${occasionsStr}, ${recipientsStr}, '${p.budgetBracket}', ${collectionsStr}, ${imagesStr}, ${p.featuredSection ? `'${p.featuredSection}'` : 'NULL'}, ${p.isAvailable}, ${p.baseEstimate || 'NULL'}, ${p.rating}, ${p.reviewCount}, '${p.packagingPreview?.defaultBox || ''}', '${p.packagingPreview?.defaultRibbon || ''}') ` +
      `ON CONFLICT (slug) DO NOTHING;`
    );
  });

  // 2. Seed Seasonal Collections
  SEASONAL_COLLECTIONS.forEach(c => {
    lines.push(
      `INSERT INTO public.collections (slug, name, subtitle, description, banner_image, is_active, festival_countdown_date) ` +
      `VALUES ('${c.slug}', '${c.name.replace(/'/g, "''")}', '${c.subtitle.replace(/'/g, "''")}', '${c.description.replace(/'/g, "''")}', '${c.bannerImage}', ${c.isActive}, ${c.festivalCountdownDate ? `'${c.festivalCountdownDate}'` : 'NULL'}) ` +
      `ON CONFLICT (slug) DO NOTHING;`
    );
  });

  // 3. Seed Discount Codes
  INITIAL_DISCOUNT_CODES.forEach(d => {
    lines.push(
      `INSERT INTO public.discount_codes (code, discount_type, value, min_order_value, valid_until, usage_limit, usage_count, is_active) ` +
      `VALUES ('${d.code}', '${d.discountType}', ${d.value}, ${d.minOrderValue}, '${d.validUntil}', ${d.usageLimit}, ${d.usageCount}, ${d.isActive}) ` +
      `ON CONFLICT (code) DO NOTHING;`
    );
  });

  // 4. Seed Reviews
  siteConfig.testimonials.forEach(t => {
    lines.push(
      `INSERT INTO public.reviews (author_name, author_location, occasion, rating, review_text, status) ` +
      `VALUES ('${t.author.replace(/'/g, "''")}', '${t.location.replace(/'/g, "''")}', '${t.occasion.replace(/'/g, "''")}', ${t.rating}, '${t.review.replace(/'/g, "''")}', 'approved');`
    );
  });

  return lines.join('\n');
}

console.log(generateSeedSQL());
