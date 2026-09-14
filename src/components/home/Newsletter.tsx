"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e84e4e] font-serif tracking-tight">
          Stay Inspired
        </h2>
        <div className="ornate-divider">
          <span className="ornate-dot" />
          <span className="ornate-dot-center" />
          <span className="ornate-dot" />
        </div>

        <p className="text-neutral-600 text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed font-light">
          Follow Ziya Fashion for new atelier lookbooks, custom silhouette inspiration, and private appointment slots.
        </p>

        {/* Textured / Capsule Input Container inspired by reference */}
        {subscribed ? (
          <div className="max-w-lg mx-auto bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-full flex items-center justify-center gap-2 text-sm font-semibold animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Thank you for connecting with Ziya Fashion!</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-[#24292e] p-2 sm:p-2.5 rounded-full shadow-xl flex flex-col sm:flex-row items-center gap-2 border border-neutral-700"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR EMAIL FOR ATELIER UPDATES"
              className="w-full sm:flex-1 bg-transparent px-6 py-3 text-xs sm:text-sm text-white placeholder-neutral-400 font-medium tracking-wider focus:outline-none text-center sm:text-left"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#fef08a] hover:bg-yellow-300 text-neutral-900 px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5 text-neutral-900" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-neutral-400 mt-4">
          We respect your privacy. No spam — only curated design updates and atelier stories.
        </p>

      </div>
    </section>
  );
}
