interface sendVerificationOTPPayload {
  email: string;
  otp: string;
  type: "sign-in" | "email-verification" | "forget-password";
}

export default async function sendVerificationOTP({
  email,
  otp,
  type,
}: sendVerificationOTPPayload) {
  const EMAIL_API = "https://api.useplunk.com/v1/send";
  const API_KEY = process.env.PLUNK_API_KEY;

  const emailPurpose =
    type === "email-verification"
      ? "verifying your TranSakto account"
      : "resetting your password";
  const emailBody = `Hello,

Your One-Time Password (OTP) for ${emailPurpose} is:

${otp}

This code will expire in 5 minutes. If you did not request this, please ignore this email.

— The TranSakto Team`;

  await fetch(EMAIL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      to: email,
      subject: "TranSakto Email Verification",
      body: emailBody,
    }),
  });
}
