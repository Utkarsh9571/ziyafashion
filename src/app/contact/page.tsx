"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* Full-Width Hero */}
      <section className="w-full bg-[#ff5252] text-white">
        <Header />
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-16 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact Ziya Fashion
          </h1>
          <p className="mt-3 text-xs sm:text-base text-white/95 max-w-xl mx-auto">
            Get in touch with our atelier team for inquiries and studio consultations.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-extrabold text-[#212529]">Atelier Studio</h2>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We welcome clients for private appointments and custom tailoring fittings.
            </p>

            <div className="space-y-3 pt-2 text-xs text-neutral-700">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                <MapPin className="w-4 h-4 text-[#ff5252] shrink-0" />
                <span>California - USA</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                <Phone className="w-4 h-4 text-[#ff5252] shrink-0" />
                <span>998-905-764</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                <Mail className="w-4 h-4 text-[#ff5252] shrink-0" />
                <span>info@mycompany.com</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                <Clock className="w-4 h-4 text-[#ff5252] shrink-0" />
                <span>Mon - Sun : 24:00 Hours</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xl">
            <h2 className="text-xl font-bold text-neutral-900 mb-2">Send an Inquiry</h2>
            
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <p className="font-bold">Message sent successfully!</p>
                <p className="text-xs">We will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs focus:border-[#ff5252] outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs focus:border-[#ff5252] outline-none"
                  />
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs focus:border-[#ff5252] outline-none"
                />
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message or questions..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs focus:border-[#ff5252] outline-none resize-y"
                />
                <button
                  type="submit"
                  className="w-full bg-[#ff5252] text-white py-3.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#f03e3e] transition-colors shadow-md"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
