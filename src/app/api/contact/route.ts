import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  phone: string;
  interest: string;
  teamSize?: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, interest, message } = body;

  if (!name || !email || !phone || !interest || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // TODO: wire this up to an email/CRM integration, e.g. Resend or Formspree:
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Second Shift <hello@secondshiftclub.com>",
  //     to: "team@secondshiftclub.com",
  //     subject: `New enquiry: ${interest}`,
  //     text: JSON.stringify(body, null, 2),
  //   });
  //
  // For now, submissions are only logged server-side.
  console.log("[contact] new submission", body);

  return NextResponse.json({ success: true });
}
