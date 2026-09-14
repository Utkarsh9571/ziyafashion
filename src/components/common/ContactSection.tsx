import React from "react";
import EnquiryForm from "./EnquiryForm";

interface ContactSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  defaultService?: string;
  bgColor?: string;
}

export default function ContactSection({
  id = "contact-section",
  title = "Let's Create Something That Fits You",
  subtitle = "Have a tailoring requirement, alteration request, or a question about our services? Get in touch with Ziya Fashion.",
  defaultService = "General Tailoring Inquiry",
  bgColor = "bg-[#fafafa]",
}: ContactSectionProps) {
  return (
    <section id={id} className={`w-full py-14 sm:py-20 ${bgColor} border-t border-neutral-200/60`}>
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <EnquiryForm
          title={title}
          subtitle={subtitle}
          defaultService={defaultService}
        />
      </div>
    </section>
  );
}
