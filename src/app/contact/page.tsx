"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Calendar } from "lucide-react";
import { BRAND_CONTACT_INFO } from "@/data/siteData";

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
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#e84e4e] to-[#dc4040] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-white/30">
            <MessageSquare className="w-3.5 h-3.5 text-white" />
            <span>Connect With Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight max-w-2xl mx-auto">
            Contact Ziya Fashion
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl mx-auto font-light leading-relaxed">
            Have questions about custom tailoring, consultations, or studio appointments? Reach out to our atelier team.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Details & Atelier Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e84e4e]">
                  Atelier Information
                </span>
                <h2 className="text-3xl font-bold font-serif text-neutral-900 mt-2">
                  Visit Our Studio
                </h2>
                <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                  We welcome clients for private appointments and custom tailoring fittings. Please contact us in advance to schedule your consultation.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70">
                  <div className="w-10 h-10 rounded-xl bg-[#e84e4e]/10 text-[#e84e4e] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-neutral-900">Studio Address</h3>
                    <p className="text-xs text-neutral-500 mt-1">{BRAND_CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70">
                  <div className="w-10 h-10 rounded-xl bg-[#e84e4e]/10 text-[#e84e4e] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-neutral-900">Phone & WhatsApp</h3>
                    <p className="text-xs text-neutral-500 mt-1">{BRAND_CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70">
                  <div className="w-10 h-10 rounded-xl bg-[#e84e4e]/10 text-[#e84e4e] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-neutral-900">Email Inquiry</h3>
                    <p className="text-xs text-neutral-500 mt-1">{BRAND_CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70">
                  <div className="w-10 h-10 rounded-xl bg-[#e84e4e]/10 text-[#e84e4e] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-neutral-900">Working Hours</h3>
                    <p className="text-xs text-neutral-500 mt-1">{BRAND_CONTACT_INFO.hours}</p>
                  </div>
                </div>
              </div>

              {/* Appointment Notice Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#ef5350] to-[#e53935] text-white shadow-lg space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <h3 className="font-bold font-serif text-lg">Custom Tailoring Booking</h3>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  Looking to schedule a dedicated measurement or fitting session? Use our online appointment booking portal.
                </p>
                <Link
                  href="/appointment"
                  className="inline-block bg-white text-[#e84e4e] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors shadow-sm"
                >
                  Book Appointment Now →
                </Link>
              </div>
            </div>

            {/* General Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-xl space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif text-neutral-900">
                    Send a Message
                  </h2>
                  <p className="text-neutral-500 text-sm mt-1">
                    Fill in your details below and our atelier team will respond to your inquiry promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3 animate-in fade-in">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-xl font-bold text-emerald-900 font-serif">Message Received</h3>
                    <p className="text-sm text-emerald-700 max-w-md mx-auto">
                      Thank you for contacting Ziya Fashion. A member of our design team will get in touch with you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                      }}
                      className="mt-4 inline-block bg-emerald-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-emerald-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#e84e4e] focus:ring-2 focus:ring-[#e84e4e]/20 outline-none text-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Your Phone Number"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#e84e4e] focus:ring-2 focus:ring-[#e84e4e]/20 outline-none text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#e84e4e] focus:ring-2 focus:ring-[#e84e4e]/20 outline-none text-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                          Inquiry Topic
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#e84e4e] focus:ring-2 focus:ring-[#e84e4e]/20 outline-none text-sm bg-white"
                        >
                          <option value="">Select Topic</option>
                          <option value="Custom Tailoring">Custom Tailoring</option>
                          <option value="Bridal Couture">Bridal Couture</option>
                          <option value="Alterations">Garment Alterations</option>
                          <option value="Consultation">Style Consultation</option>
                          <option value="General">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                        Your Message / Requirements *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your requirements, occasion, or questions..."
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#e84e4e] focus:ring-2 focus:ring-[#e84e4e]/20 outline-none text-sm resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#e84e4e] hover:bg-[#d83c3c] text-white py-4 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
