"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    q: "How quickly can Islamabad Pest Control respond to a pest complaint?",
    a: "We offer fast scheduling in our main service areas, especially Islamabad, Rawalpindi, Lahore, and Karachi. Response time depends on the city, the type of pest issue, and the urgency of the complaint.",
    image: "/images/optimized/hero.webp",
  },
  {
    q: "Do you provide pest control for offices, warehouses, and companies?",
    a: "Yes. Islamabad Pest Control provides commercial pest control for offices, retail locations, warehouses, restaurants, managed buildings, and other business sites that require inspection, treatment, and recurring maintenance support.",
    image: "/images/optimized/hotel-fumigation.webp",
  },
  {
    q: "Are your pest control treatments suitable for families and workplaces?",
    a: "Our team selects treatment methods according to the site, pest type, and occupancy needs. We also guide clients on practical precautions before and after treatment so the process remains safer and more manageable.",
    image: "/images/optimized/pest3.webp",
  },
  {
    q: "Do I need to leave the property during treatment?",
    a: "For many pest control services, full evacuation is not necessary. For some treatments, especially when site conditions require stronger application methods, our team will advise you in advance on the exact preparation and waiting period.",
    image: "/images/optimized/termite2.webp",
  },
  {
    q: "Do you offer termite control and fumigation services in Pakistan?",
    a: "Yes. Islamabad Pest Control provides termite treatment, fumigation support, rodent control, cockroach treatment, bed bug removal, mosquito control, and general pest control for residential and commercial clients in Pakistan.",
    image: "/images/optimized/termite.webp",
  },
  {
    q: "How often should a business schedule pest control services?",
    a: "That depends on the site type and risk level. Restaurants, warehouses, and high-traffic commercial spaces usually benefit from scheduled pest control visits, while some offices and residential properties may need less frequent maintenance.",
    image: "/images/optimized/rodent2.webp",
  },
  {
    q: "How is pricing decided for pest control work?",
    a: "Pricing depends on the pest type, property size, infestation level, access conditions, and the treatment plan required. We first review the complaint and then provide a clear quote based on the actual site needs.",
    image: "/images/optimized/ant-control.webp",
  },
  {
    q: "Do you offer follow-up support after treatment?",
    a: "Yes. Follow-up support is available depending on the service scope and treatment plan. For recurring or stubborn pest issues, we may recommend additional visits or a maintenance schedule to improve long-term control.",
    image: "/images/optimized/pest2.webp",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-tag justify-center">
              <span className="w-8 h-0.5 bg-brand-green" />
              FAQ
              <span className="w-8 h-0.5 bg-brand-green" />
            </div>
            <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-8">
              These common questions cover residential and commercial pest control services,
              treatment planning, and scheduling support for clients across Pakistan.
            </p>
          </div>

          <div className="space-y-3 mb-10">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  open === i
                    ? "border-brand-green/30 shadow-brand-sm bg-slate-100 dark:bg-gray-900"
                    : "border-slate-200 dark:border-gray-800 bg-[#dfe7eb] dark:bg-gray-900 hover:border-brand-green/20"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={open === i}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white/50 dark:bg-gray-800">
                      <Image
                        src={faq.image}
                        alt={`Illustration for ${faq.q}`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span className={`font-semibold text-base pr-4 ${open === i ? "text-brand-green" : "text-brand-navy dark:text-white"}`}>
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      open === i ? "bg-brand-green text-white" : "bg-white/70 dark:bg-gray-800 text-gray-500"
                    }`}
                  >
                    {open === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                {open === i && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-7">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-[24px] bg-brand-green-50 dark:bg-brand-green/10 border border-brand-green/20 p-6 text-center">
            <h3 className="font-display font-semibold text-brand-navy dark:text-white text-lg mb-2">
              Need help with a specific pest issue?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-7 mb-4 max-w-2xl mx-auto">
              Our team can guide you on termite treatment, fumigation, rodent control,
              cockroach treatment, and commercial pest control scheduling.
            </p>
                <a href="tel:+923229162746" className="btn-primary text-sm py-3">
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

