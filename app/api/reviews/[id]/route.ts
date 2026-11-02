import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/store';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const status = body.status as 'approved' | 'hidden';

    if (!status || !['approved', 'hidden'].includes(status)) {
      return NextResponse.json({
        success: false,
        message: 'Status must be approved or hidden',
      }, { status: 400 });
    }

    const updated = dataStore.updateReviewStatus(params.id, status);
    if (!updated) {
      return NextResponse.json({
        success: false,
        message: 'Review not found',
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: `Review marked as ${status}`,
      review: updated,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Error updating review',
    }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    dataStore.deleteReview(params.id);
    return NextResponse.json({
      success: true,
      message: 'Review deleted',
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Error deleting review',
    }, { status: 500 });
  }
}
