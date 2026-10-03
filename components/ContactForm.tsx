"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { siteConfig } from "@/data/siteConfig";

type Status = "idle" | "submitting" | "success" | "error";

const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "/api/contact";

export function ContactForm() {
  const copy = siteConfig.contactForm;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>(copy.error);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
    };

    setStatus("submitting");
    setError(copy.error);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        const message =
          body && typeof body === "object" && "error" in body && typeof body.error === "string"
            ? body.error
            : copy.error;
        setError(message);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="border border-line bg-paper px-5 py-6 text-sm leading-relaxed text-ink" role="status">
        {copy.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          {copy.name}
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={120}
            className="mt-2 w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm font-normal text-ink outline-none focus:border-navy"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          {copy.company}
          <input
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={160}
            className="mt-2 w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm font-normal text-ink outline-none focus:border-navy"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        {copy.email}
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={160}
          className="mt-2 w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm font-normal text-ink outline-none focus:border-navy"
        />
      </label>
      <label className="block text-sm font-medium text-ink">
        {copy.message}
        <textarea
          name="message"
          required
          rows={6}
          maxLength={5000}
          className="mt-2 w-full resize-y rounded-sm border border-line bg-white px-3 py-2.5 text-sm font-normal text-ink outline-none focus:border-navy"
        />
      </label>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-steel">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-navy" />
        <span>
          {copy.consent}{" "}
          <Link href="/privacy" className="text-navy underline decoration-accent underline-offset-4">
            {copy.privacyLink}
          </Link>
          .
        </span>
      </label>
      {status === "error" ? (
        <p className="text-sm text-navy" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-[#d97706] disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? copy.sending : copy.submit}
      </button>
    </form>
  );
}
