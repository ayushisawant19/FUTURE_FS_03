import { NextRequest, NextResponse } from 'next/server';
import { verifyRazorpayPaymentSchema } from '@/lib/validations';
import { verifyRazorpaySignature } from '@/lib/razorpay';
import { dataStore } from '@/lib/store';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = verifyRazorpayPaymentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({
        success: false,
        message: 'Invalid payment verification payload',
      }, { status: 400 });
    }

    const { enquiryId, razorpayOrderId, razorpayPaymentId, razorpaySignature } = parsed.data;

    const isValid = verifyRazorpaySignature(razorpayOrderId, razorpayPaymentId, razorpaySignature);

    if (!isValid) {
      return NextResponse.json({
        success: false,
        message: 'Payment signature verification failed',
      }, { status: 400 });
    }

    // Update enquiry status to 'confirmed'
    const updated = dataStore.updateEnquiryStatus(enquiryId, 'confirmed', {
      razorpayPaymentId,
      internalNotes: `Payment verified via Razorpay (${razorpayPaymentId}) on ${new Date().toLocaleString('en-IN')}`,
    });

    return NextResponse.json({
      success: true,
      message: 'Payment verified and order confirmed successfully!',
      enquiry: updated,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Payment verification error',
    }, { status: 500 });
  }
}
