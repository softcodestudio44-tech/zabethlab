import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { reference, courseId } = await request.json();
    
    // Verify transaction with Paystack
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    
    const data = await response.json();
    
    if (!data.status) {
      return NextResponse.json({ status: 'failed', message: data.message });
    }
    
    const transaction = data.data;
    
    // Verify it's a successful transaction
    if (transaction.status === 'success') {
      // TODO: Save to your database (Firebase/Firestore)
      // For now, just return success
      
      return NextResponse.json({ 
        status: 'success',
        message: 'Payment verified',
        data: {
          reference: transaction.reference,
          amount: transaction.amount / 100,
          courseId: courseId
        }
      });
    }
    
    return NextResponse.json({ status: 'failed', message: 'Transaction not successful' });
    
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json({ status: 'error', message: 'Verification failed' }, { status: 500 });
  }
}