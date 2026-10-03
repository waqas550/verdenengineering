import { NextResponse } from "next/server";
import { validateContact } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  const result = validateContact(json);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 400 });
  }

  // TODO: Wire this route to an email service (Resend, Postmark, or SMTP) before production.
  // Until then the enquiry is only written to the server log and is not delivered to a mailbox.
  console.log("Contact enquiry", {
    name: result.data.name,
    company: result.data.company,
    email: result.data.email,
    message: result.data.message,
  });

  return NextResponse.json({ ok: true });
}
