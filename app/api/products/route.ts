import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/store';
import { Product } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const occasion = searchParams.get('occasion');
    const recipient = searchParams.get('recipient');
    const budget = searchParams.get('budget');
    const search = searchParams.get('search')?.toLowerCase();
    const sort = searchParams.get('sort');

    let products = dataStore.getProducts();

    if (category && category !== 'all') {
      if (category === 'favourites' || category === 'romantic' || category === 'festive') {
        products = products.filter(p => p.featuredSection === category);
      } else {
        products = products.filter(p => p.collections.includes(category));
      }
    }

    if (occasion) {
      products = products.filter(p => p.occasions.includes(occasion as any));
    }

    if (recipient) {
      products = products.filter(p => p.recipients.includes(recipient as any));
    }

    if (budget) {
      products = products.filter(p => p.budgetBracket === budget);
    }

    if (search) {
      products = products.filter(p => 
        p.name.toLowerCase().includes(search) || 
        p.tagline.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search) ||
        p.contents.some(c => c.toLowerCase().includes(search))
      );
    }

    if (sort === 'rating') {
      products.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'reviews') {
      products.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return NextResponse.json({
      success: true,
      count: products.length,
      products,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Error fetching products',
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.description || !body.budgetBracket) {
      return NextResponse.json({
        success: false,
        message: 'Name, description, and budget bracket are required',
      }, { status: 400 });
    }

    const slug = body.slug || body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      slug,
      name: body.name,
      tagline: body.tagline || '',
      description: body.description,
      contents: body.contents || [],
      customizationOptions: body.customizationOptions || [],
      occasions: body.occasions || [],
      recipients: body.recipients || [],
      budgetBracket: body.budgetBracket,
      collections: body.collections || ['signature'],
      images: body.images || ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800'],
      featuredSection: body.featuredSection,
      isAvailable: body.isAvailable ?? true,
      baseEstimate: body.baseEstimate,
      rating: 5.0,
      reviewCount: 0,
      createdAt: new Date().toISOString(),
    };

    const saved = dataStore.saveProduct(newProduct);

    return NextResponse.json({
      success: true,
      message: 'Product created successfully',
      product: saved,
    }, { status: 201 });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Failed to create product',
    }, { status: 500 });
  }
}
