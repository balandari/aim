"use client";

import { useState, type FormEvent } from "react";

interface InquiryFormProps {
  itemId: string;
  vendorName: string;
}

export default function InquiryForm({ itemId, vendorName }: InquiryFormProps) {
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState<"email" | "phone">(
    "email"
  );
  const [contactValue, setContactValue] = useState("");
  const [message, setMessage] = useState("");
  const [notifyOptIn, setNotifyOptIn] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    // Basic validation
    if (!name.trim() || !contactValue.trim() || !message.trim()) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    if (
      contactMethod === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue)
    ) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemId,
          name: name.trim(),
          contactMethod,
          contactValue: contactValue.trim(),
          message: message.trim(),
          notifyOptIn,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send inquiry");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong"
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-stone-900/60 border border-brass/20 rounded-sm p-6 md:p-8">
        <div className="text-center">
          <svg
            className="w-12 h-12 text-brass mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h3 className="font-serif text-cream-50 text-xl mb-2">
            Inquiry Sent!
          </h3>
          <p className="text-cream-200/80 font-sans text-sm">
            Your message has been sent to {vendorName}. They&apos;ll reach out
            to you via your preferred contact method.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-stone-900/60 border border-stone-800 rounded-sm p-6 md:p-8"
    >
      <h3 className="font-serif text-cream-50 text-xl mb-1">
        Interested in this item?
      </h3>
      <p className="text-cream-200/60 font-sans text-sm mb-6">
        Send a message to {vendorName} and they&apos;ll get back to you.
      </p>

      {/* Name */}
      <div className="mb-4">
        <label
          htmlFor="inquiry-name"
          className="block text-cream-200/80 font-sans text-sm font-medium mb-1.5"
        >
          Your Name *
        </label>
        <input
          id="inquiry-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-stone-800 border border-stone-700 rounded-sm px-4 py-2.5 text-cream-50 font-sans text-sm placeholder:text-stone-500 focus:outline-none focus:border-brass/50 transition-colors duration-250"
          placeholder="Jane Smith"
          required
        />
      </div>

      {/* Contact method */}
      <div className="mb-4">
        <label className="block text-cream-200/80 font-sans text-sm font-medium mb-1.5">
          Preferred Contact Method *
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="contactMethod"
              value="email"
              checked={contactMethod === "email"}
              onChange={() => setContactMethod("email")}
              className="accent-brass"
            />
            <span className="text-cream-200/80 font-sans text-sm">Email</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="contactMethod"
              value="phone"
              checked={contactMethod === "phone"}
              onChange={() => setContactMethod("phone")}
              className="accent-brass"
            />
            <span className="text-cream-200/80 font-sans text-sm">Phone</span>
          </label>
        </div>
      </div>

      {/* Contact value */}
      <div className="mb-4">
        <label
          htmlFor="inquiry-contact"
          className="block text-cream-200/80 font-sans text-sm font-medium mb-1.5"
        >
          {contactMethod === "email" ? "Email Address" : "Phone Number"} *
        </label>
        <input
          id="inquiry-contact"
          type={contactMethod === "email" ? "email" : "tel"}
          value={contactValue}
          onChange={(e) => setContactValue(e.target.value)}
          className="w-full bg-stone-800 border border-stone-700 rounded-sm px-4 py-2.5 text-cream-50 font-sans text-sm placeholder:text-stone-500 focus:outline-none focus:border-brass/50 transition-colors duration-250"
          placeholder={
            contactMethod === "email"
              ? "you@example.com"
              : "(405) 555-0123"
          }
          required
        />
      </div>

      {/* Message */}
      <div className="mb-4">
        <label
          htmlFor="inquiry-message"
          className="block text-cream-200/80 font-sans text-sm font-medium mb-1.5"
        >
          Message *
        </label>
        <textarea
          id="inquiry-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full bg-stone-800 border border-stone-700 rounded-sm px-4 py-2.5 text-cream-50 font-sans text-sm placeholder:text-stone-500 focus:outline-none focus:border-brass/50 transition-colors duration-250 resize-none"
          placeholder="I'm interested in this item. Is it still available?"
          required
        />
      </div>

      {/* Notify opt-in */}
      <div className="mb-6">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={notifyOptIn}
            onChange={(e) => setNotifyOptIn(e.target.checked)}
            className="accent-brass mt-0.5"
          />
          <span className="text-cream-200/60 font-sans text-xs leading-relaxed">
            Notify me about similar items from this vendor
          </span>
        </label>
      </div>

      {/* Error message */}
      {status === "error" && errorMsg && (
        <div className="mb-4 p-3 bg-earth/10 border border-earth/30 rounded-sm">
          <p className="text-earth-light font-sans text-sm">{errorMsg}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-brass text-stone-950 font-sans font-semibold text-sm tracking-[0.15em] uppercase rounded-sm py-3 hover:bg-brass-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-250"
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
