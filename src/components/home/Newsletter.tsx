"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { isValidEmail } from "@/utils/validation";
import { submitLeadToGoogleSheet } from "@/services/leadService";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address (e.g. name@domain.com).");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLeadToGoogleSheet({
        formType: "Newsletter",
        email: email.trim(),
        message: "Subscribed to Ziya Fashion newsletter & style updates",
      });

      setSubscribed(true);
      setEmail("");
    } catch {
      setError("Unable to subscribe right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-14 sm:py-18 bg-[#f4f4f4] text-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#ff7d86] tracking-tight">
          Stay Connected with Ziya Fashion
        </h2>
        <div className="ref-divider">
          <span className="ref-dot" />
          <span className="ref-dot-lg" />
          <span className="ref-dot" />
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
          Keep up with our latest designs, collections and tailoring updates.
        </p>

        {/* Capsule Input Bar with Jeans texture effect and cream SUBSCRIBE button */}
        {subscribed ? (
          <div className="max-w-md mx-auto bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-full flex items-center justify-center gap-2 text-xs font-bold shadow-sm animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Thank you for subscribing!</span>
          </div>
        ) : (
          <div className="max-w-xl mx-auto space-y-2">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-[#2b2b2b] rounded-full p-1.5 flex flex-col sm:flex-row items-center shadow-xl border border-neutral-700 overflow-hidden relative gap-2 sm:gap-0"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="ENTER YOUR EMAIL"
                className="w-full sm:flex-1 bg-transparent px-5 sm:px-6 py-3 text-xs sm:text-sm text-white placeholder-neutral-400 font-bold tracking-wider outline-none text-center sm:text-left"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#faedaf] hover:bg-[#f6e695] text-neutral-900 px-7 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md transition-all active:scale-95 whitespace-nowrap cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
              </button>
            </form>
            {error && (
              <div className="text-xs text-rose-600 flex items-center justify-center gap-1.5 font-semibold pt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
