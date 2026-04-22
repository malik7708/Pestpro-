import { Metadata } from "next";
import { FAQSection } from "@/components/home/FAQSection";
import { ParallaxServicesSection } from "@/components/sections/ParallaxServicesSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | PestPro Pest Control",
  description: "Get answers to common questions about our pest control services, treatments, pricing, and guarantees. Professional pest control experts ready to help.",
  keywords: "pest control FAQ, pest questions, termite control FAQ, bed bug treatment questions, pest control pricing",
  openGraph: {
    title: "Frequently Asked Questions | PestPro Pest Control",
    description: "Get answers to common questions about our pest control services, treatments, pricing, and guarantees.",
    type: "website",
  },
};

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-600 text-white py-20">
        <div className="container-max text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-brand-gold">Questions</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our pest control services.
            Can&apos;t find what you&apos;re looking for? Give us a call!
          </p>
        </div>
      </section>

      <ParallaxServicesSection />

      {/* FAQ Content */}
      <FAQSection />

      {/* Bottom CTA */}
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
            <a href="tel:+923069235099" className="btn-outline">
              Call Now: +92-306-9235099
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}