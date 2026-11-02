import crypto from 'crypto';

export interface RazorpayOrderResponse {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
  status: string;
  isMock: boolean;
}

/**
 * Creates a Razorpay Order for online payments (UPI, Cards, Netbanking)
 */
export async function createRazorpayOrder(
  amountInINR: number, 
  receiptId: string
): Promise<RazorpayOrderResponse> {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  const amountInPaise = Math.round(amountInINR * 100);

  if (keyId && keySecret) {
    try {
      const authHeader = 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64');
      const res = await fetch('https://api.razorpay.com/v1/orders', {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: 'INR',
          receipt: receiptId,
          payment_capture: 1,
        }),
      });

      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(`Razorpay API Error: ${errorData}`);
      }

      const data = await res.json();
      return {
        id: data.id,
        amount: data.amount,
        currency: data.currency,
        receipt: data.receipt,
        status: data.status,
        isMock: false,
      };
    } catch (err) {
      console.error('[Razorpay Order Creation Error]', err);
      throw err;
    }
  }

  // Fallback Mock Mode when keys are missing
  console.log(`[Razorpay Mock Mode] Generating simulated order for receipt ${receiptId} of ₹${amountInINR}`);
  return {
    id: `order_mock_${Date.now()}_${Math.random().toString(36).substring(7)}`,
    amount: amountInPaise,
    currency: 'INR',
    receipt: receiptId,
    status: 'created',
    isMock: true,
  };
}

/**
 * Verifies Razorpay payment signature
 */
export function verifyRazorpaySignature(
  orderId: string, 
  paymentId: string, 
  signature: string
): boolean {
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  // In mock mode or dev without secret
  if (!keySecret || orderId.startsWith('order_mock_')) {
    return true;
  }

  const generatedSignature = crypto
    .createHmac('sha256', keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return generatedSignature === signature;
}
