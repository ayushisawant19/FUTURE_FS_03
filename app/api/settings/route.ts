import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/store';

export async function GET() {
  try {
    const settings = dataStore.getSettings();
    return NextResponse.json({
      success: true,
      settings,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: 'Failed to retrieve settings',
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const updated = dataStore.updateSettings(body);

    return NextResponse.json({
      success: true,
      message: 'Atelier settings updated successfully',
      settings: updated,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: 'Failed to update settings',
    }, { status: 500 });
  }
}
