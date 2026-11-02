import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({
        success: false,
        message: 'Please enter a valid email address',
      }, { status: 400 });
    }

    if (parsed.data.honeypot && parsed.data.honeypot.length > 0) {
      return NextResponse.json({ success: true, message: 'Subscribed' });
    }

    console.log(`[Newsletter Subscription] ${parsed.data.email} subscribed from ${parsed.data.source}`);

    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing to Riwayat exclusive festive edits!',
      promoCode: 'RIWAYATFIRST',
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: 'Subscription error',
    }, { status: 500 });
  }
}
