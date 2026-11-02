import { NextRequest, NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/validations';
import { dataStore } from '@/lib/store';
import { sendEnquiryNotifications } from '@/lib/notifications';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    let enquiries = dataStore.getEnquiries();
    if (status) {
      enquiries = enquiries.filter(e => e.status === status);
    }

    return NextResponse.json({
      success: true,
      count: enquiries.length,
      enquiries,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Failed to fetch enquiries',
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Zod Validation & Anti-Spam Honeypot check
    const validationResult = enquirySchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json({
        success: false,
        errors: validationResult.error.flatten().fieldErrors,
        message: 'Validation failed. Please check your inputs.',
      }, { status: 400 });
    }

    const data = validationResult.data;

    // Check honeypot
    if (data.honeypot && data.honeypot.length > 0) {
      // Quietly return success to confuse spam bots
      return NextResponse.json({ success: true, message: 'Enquiry received' });
    }

    // 2. Save enquiry to store
    const newEnquiry = dataStore.addEnquiry({
      customerName: data.customerName,
      customerPhone: data.customerPhone,
      customerEmail: data.customerEmail,
      recipientName: data.recipientName,
      occasion: data.occasion,
      budgetBracket: data.budgetBracket,
      deliveryDate: data.deliveryDate,
      deliveryType: data.deliveryType,
      deliveryAddress: data.deliveryAddress,
      messageCardText: data.messageCardText,
      customizationNotes: data.customizationNotes,
      selectedAddons: data.selectedAddons,
      referencePhotos: data.referencePhotos,
      packagingStyle: data.packagingStyle,
      ribbonColour: data.ribbonColour,
      enquiryType: data.enquiryType,
      productId: data.productId,
      productName: data.productName,
      surprisePreferences: data.surprisePreferences,
    });

    // 3. Trigger Async Notifications (Email & WhatsApp)
    const notificationResult = await sendEnquiryNotifications(newEnquiry);

    return NextResponse.json({
      success: true,
      message: 'Bespoke enquiry submitted successfully!',
      referenceNumber: newEnquiry.referenceNumber,
      enquiry: newEnquiry,
      notifications: notificationResult,
    }, { status: 201 });

  } catch (err) {
    console.error('[Enquiry API Error]', err);
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Internal Server Error',
    }, { status: 500 });
  }
}
