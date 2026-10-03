export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  message: string;
  consent: boolean;
};

export type ContactValidation =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export function validateContact(input: unknown): ContactValidation {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Invalid submission." };
  }

  const body = input as Record<string, unknown>;
  const name = readString(body.name, 120);
  const company = readString(body.company, 160);
  const email = readString(body.email, 160);
  const message = readString(body.message, 5000);
  const consent = body.consent === true;

  if (name.length < 2) {
    return { ok: false, error: "Enter your name." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Enter a valid email address." };
  }
  if (message.length < 10) {
    return { ok: false, error: "Enter a message of at least a few words." };
  }
  if (!consent) {
    return { ok: false, error: "Consent is required before this form can be sent." };
  }

  return {
    ok: true,
    data: { name, company, email, message, consent },
  };
}
