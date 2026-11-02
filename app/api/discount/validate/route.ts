import { NextRequest, NextResponse } from 'next/server';
import { validateDiscountSchema } from '@/lib/validations';
import { dataStore } from '@/lib/store';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = validateDiscountSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({
        success: false,
        message: 'Invalid discount verification request',
      }, { status: 400 });
    }

    const { code, subtotal } = parsed.data;
    const result = dataStore.validateDiscountCode(code, subtotal);

    if (!result.valid) {
      return NextResponse.json({
        success: false,
        message: result.message,
        discountAmount: 0,
      }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: result.message,
      code: code.toUpperCase(),
      discountAmount: result.discountAmount,
      finalTotal: Math.max(0, subtotal - result.discountAmount),
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Error validating code',
    }, { status: 500 });
  }
}
