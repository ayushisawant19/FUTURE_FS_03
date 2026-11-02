import { NextRequest, NextResponse } from 'next/server';
import { createRazorpayOrderSchema } from '@/lib/validations';
import { createRazorpayOrder } from '@/lib/razorpay';
import { dataStore } from '@/lib/store';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = createRazorpayOrderSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({
        success: false,
        message: 'Invalid order parameters',
        errors: parsed.error.flatten().fieldErrors,
      }, { status: 400 });
    }

    const { enquiryId, amount } = parsed.data;

    const enquiry = dataStore.getEnquiryById(enquiryId);
    if (!enquiry) {
      return NextResponse.json({
        success: false,
        message: 'Enquiry not found',
      }, { status: 404 });
    }

    const receipt = enquiry.referenceNumber || `rec_${Date.now()}`;
    const razorpayOrder = await createRazorpayOrder(amount, receipt);

    // Update enquiry status to awaiting_payment
    dataStore.updateEnquiryStatus(enquiryId, 'awaiting_payment', {
      finalAmount: amount,
    });

    return NextResponse.json({
      success: true,
      order: razorpayOrder,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_placeholder',
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Error generating payment order',
    }, { status: 500 });
  }
}
