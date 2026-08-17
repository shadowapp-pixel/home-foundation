"use client";

import { useState } from "react";
import { Heart, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#EAE6DD] bg-[#FAFAF7] text-[#2F2F2F] text-sm focus:outline-none focus:border-[#C8A96B] focus:ring-2 focus:ring-[#C8A96B]/20 transition-all";
const labelClass =
  "block text-xs font-semibold text-[#1D3557] tracking-wide mb-2";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: if filled, silently succeed without sending
    if ((data.get("botcheck") as string)?.length) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      access_key: "ca1132f1-8554-45bc-957f-c42aae9c080e",
      subject: "New inquiry from the Monarch Housing Partners website",
      from_name: "Monarch Housing Partners Website",
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      email: data.get("email"),
      replyto: data.get("email"),
      topic: data.get("topic"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-10">
        <div className="w-14 h-14 rounded-full bg-[#C8A96B]/15 flex items-center justify-center mb-5">
          <CheckCircle2 size={28} className="text-[#C8A96B]" />
        </div>
        <h4
          className="text-xl text-[#1D3557] mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Thank you for reaching out
        </h4>
        <p className="text-[#2F2F2F]/70 text-sm max-w-sm mb-6">
          We&apos;ve received your message and will be in touch soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-[#1D3557] hover:text-[#C8A96B] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Honeypot field for spam bots (hidden from users) */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>First Name</label>
          <input type="text" name="first_name" required placeholder="Jane" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Last Name</label>
          <input type="text" name="last_name" required placeholder="Smith" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email Address</label>
        <input type="email" name="email" required placeholder="jane@example.com" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Subject</label>
        <select name="topic" className={inputClass}>
          <option value="">Select a topic…</option>
          <option>Partnership Opportunity</option>
          <option>Volunteer / Get Involved</option>
          <option>Media / Press</option>
          <option>General Question</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your message. Please email us directly at info@monarchhp.org.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-8 py-4 bg-[#1D3557] text-white font-semibold rounded-full hover:bg-[#C8A96B] hover:text-[#1D3557] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Heart size={16} />
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
