import { NextRequest, NextResponse } from 'next/server';
import { reviewSchema } from '@/lib/validations';
import { dataStore } from '@/lib/store';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get('all') === 'true'; // Admin moderation view

    const reviews = dataStore.getReviews(!all);

    return NextResponse.json({
      success: true,
      count: reviews.length,
      reviews,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Error fetching reviews',
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = reviewSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({
        success: false,
        errors: parsed.error.flatten().fieldErrors,
        message: 'Invalid review submission',
      }, { status: 400 });
    }

    const data = parsed.data;

    // Honeypot check
    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json({ success: true, message: 'Review submitted for moderation' });
    }

    const newRev = dataStore.addReview({
      productId: data.productId,
      authorName: data.authorName,
      authorLocation: data.authorLocation,
      occasion: data.occasion,
      rating: data.rating,
      reviewText: data.reviewText,
      photos: data.photos,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your review has been submitted for moderation.',
      review: newRev,
    }, { status: 201 });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Internal Server Error',
    }, { status: 500 });
  }
}
