import { Metadata } from "next";
import Link from "next/link";
import { mainServices } from "@/lib/servicesConfig";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Fumigation Services | Residential, Commercial & Industrial | Islamabad PestControl",
  description: "Professional fumigation services for residential, commercial, and industrial properties in Islamabad/Rawalpindi.",
};

export default function FumigationPage() {
  const fumigationService = mainServices.find(s => s.id === "fumigation")!;

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 100%), url(/club-fumigation.png)'}}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-max relative z-10 text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
            {fumigationService.label}
          </h1>
          <p className="text-white/75 text-xl max-w-3xl mx-auto mb-10 leading-8">
            {fumigationService.description}
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-semibold mb-4">Fumigation Services by Property Type</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Specialized fumigation for every property type and need
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fumigationService.categories.map((category) => (
              <div
                key={category.label}
                className="rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display text-2xl font-semibold mb-3 text-brand-navy dark:text-white">
                  {category.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                  {category.description}
                </p>
                
                <div className="space-y-2 mb-8 max-h-64 overflow-y-auto">
                  {category.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle size={14} className="text-brand-green flex-shrink-0" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={category.href}
                  className="inline-flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all text-sm"
                >
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <h2 className="font-display text-4xl font-semibold mb-12 text-center">Why Choose Our Fumigation Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Professional Team", desc: "Trained and certified fumigation experts" },
              { title: "Safe Methods", desc: "Environment-friendly fumigation techniques" },
              { title: "Quick Results", desc: "Effective pest elimination in minimal time" },
              { title: "Full Coverage", desc: "Comprehensive service for all property types" },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-green rounded-full mb-4">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-brand-navy dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-green text-white">
        <div className="container-max text-center">
          <h2 className="font-display text-4xl font-semibold mb-6">
            Ready for Best & Reliable Fumigation?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a customized fumigation solution tailored to your property type and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+923229162746" className="btn-secondary">
              Call for Free Inspection
            </a>
            <Link href="/contact" className="btn-outline">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

