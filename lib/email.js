import nodemailer from 'nodemailer';

export async function sendResetEmail({ to, resetUrl }) {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from = process.env.EMAIL_FROM || user;

  if (!user || !pass) {
    // In dev, if email creds are missing, surface the URL for manual use
    return { sent: false, reason: 'missing_credentials', resetUrl };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  const mailOptions = {
    from,
    to,
    subject: 'Password Reset Request',
    html: `
      <p>You requested a password reset.</p>
      <p>Click the link below to reset your password. This link expires in 1 hour.</p>
      <p><a href="${resetUrl}">${resetUrl}</a></p>
      <p>If you did not request this, please ignore this email.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { sent: true };
  } catch (err) {
    return { sent: false, reason: 'send_failed', error: err.message, resetUrl };
  }
}