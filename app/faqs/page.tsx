import { Metadata } from "next";
import { FAQSection } from "@/components/home/FAQSection";
import { FadeIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Pest Control FAQ | Islamabad Pest Control Answers & Pricing",
  description:
    "Get answers to common questions about pest control, termite treatment, fumigation, pricing, and service guarantees in Islamabad and Rawalpindi.",
  alternates: { canonical: "/faqs" },
  keywords: [
    "pest control FAQ Islamabad",
    "termite control FAQ",
    "fumigation question answers",
    "pest control pricing Pakistan",
  ],
  openGraph: {
    title: "Pest Control FAQ | Islamabad Pest Control Answers & Pricing",
    description:
      "Get answers to common questions about pest control, termite treatment, fumigation, pricing, and service guarantees in Islamabad and Rawalpindi.",
    type: "website",
  },
};

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Page Header */}
      <FadeIn>
      <section  className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 100%), url(/images/optimized/termite.webp)'}}>
        <div className="container-max text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-green-50">
            FAQ<span className="text-green-200">s</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our pest control services.
            Can&apos;t find what you&apos;re looking for? Give us a call!
          </p>
        </div>
      </section>
      </FadeIn>

      {/* FAQ Content */}
      <FadeIn>
        <FAQSection />
      </FadeIn>

      {/* Bottom CTA */}
      <FadeIn>
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-max text-center">
          <h2 className="font-display text-3xl font-bold text-brand-navy dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t let pests take over your home. Contact us today for a free inspection
            and professional pest control services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Request Free Inspection
            </a>
              <a href="tel:+923229162746" className="btn-outline">
                Call Now: +92 322 9162746
            </a>
          </div>
        </div>
      </section>
      </FadeIn>
    </div>
  );
}
