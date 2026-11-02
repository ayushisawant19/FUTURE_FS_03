import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/store';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const product = dataStore.getProductById(params.id) || dataStore.getProductBySlug(params.id);

    if (!product) {
      return NextResponse.json({
        success: false,
        message: 'Product not found',
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Error fetching product',
    }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const existing = dataStore.getProductById(params.id);
    if (!existing) {
      return NextResponse.json({
        success: false,
        message: 'Product not found',
      }, { status: 404 });
    }

    const body = await request.json();
    const updated = dataStore.saveProduct({
      ...existing,
      ...body,
      id: existing.id,
    });

    return NextResponse.json({
      success: true,
      message: 'Product updated successfully',
      product: updated,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Failed to update product',
    }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deleted = dataStore.deleteProduct(params.id);
    if (!deleted) {
      return NextResponse.json({
        success: false,
        message: 'Product not found',
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Product deleted successfully',
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : 'Failed to delete product',
    }, { status: 500 });
  }
}
