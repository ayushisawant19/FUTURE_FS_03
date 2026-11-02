import { NextRequest, NextResponse } from 'next/server';
import { updateEnquiryStatusSchema } from '@/lib/validations';
import { dataStore } from '@/lib/store';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const enquiry = dataStore.getEnquiryById(params.id);
    if (!enquiry) {
      return NextResponse.json({
        success: false,
        message: 'Enquiry not found',
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      enquiry,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Error fetching enquiry',
    }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const parsed = updateEnquiryStatusSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({
        success: false,
        errors: parsed.error.flatten().fieldErrors,
      }, { status: 400 });
    }

    const { status, internalQuoteAmount, deliveryCharge, finalAmount, internalNotes, razorpayPaymentId } = parsed.data;

    const updated = dataStore.updateEnquiryStatus(params.id, status, {
      internalQuoteAmount,
      deliveryCharge,
      finalAmount,
      internalNotes,
      razorpayPaymentId,
    });

    if (!updated) {
      return NextResponse.json({
        success: false,
        message: 'Enquiry not found',
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: `Enquiry status updated to ${status}`,
      enquiry: updated,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Failed to update enquiry',
    }, { status: 500 });
  }
}
