import { NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { sendResetEmail } from '@/lib/email';

export async function POST(request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    await connectDB();

    const user = await User.findOne({ email });
    // To prevent email enumeration, always return 200 even if user not found
    if (!user) {
      return NextResponse.json({ message: 'If the email exists, a reset link will be sent.' });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const resetPasswordExpire = Date.now() + 60 * 60 * 1000; // 1 hour

    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpire = new Date(resetPasswordExpire);
    await user.save({ validateBeforeSave: false });

    // Use request origin to avoid port mismatch in dev
    const baseUrl = new URL(request.url).origin;
    const resetUrl = `${baseUrl}/login/reset/${resetToken}`;

    const result = await sendResetEmail({ to: email, resetUrl });

    if (result.sent) {
      return NextResponse.json({ message: 'Reset link sent to your email.' });
    } else {
      // Provide resetUrl for local/dev use even if email cannot be sent
      return NextResponse.json({ message: 'Reset link generated.', resetUrl, note: 'Email not sent; use link directly in dev.' });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}