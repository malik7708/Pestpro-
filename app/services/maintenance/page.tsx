import { Metadata } from "next";
import Link from "next/link";
import { mainServices } from "@/lib/servicesConfig";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Maintenance Services | Disinfection, Floor Cleaning, Water Tank | ISB PestControl",
  description: "Professional maintenance services including disinfection, floor cleaning and polishing, and water tank cleaning.",
};

export default function MaintenancePage() {
  const maintenanceService = mainServices.find(s => s.id === "maintenance")!;

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 100%), url(/floor.png)'}}
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
            {maintenanceService.label}
          </h1>
          <p className="text-white/75 text-xl max-w-3xl mx-auto mb-10 leading-8">
            {maintenanceService.description}
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-semibold mb-4">Maintenance Service Options</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Keep your property clean, safe, and well-maintained
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {maintenanceService.categories.map((category) => (
              <div
                key={category.label}
                className="rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display text-2xl font-semibold mb-3 text-brand-navy dark:text-white">
                  {category.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {category.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {category.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle size={16} className="text-brand-green flex-shrink-0" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={category.href}
                  className="inline-flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <h2 className="font-display text-4xl font-semibold mb-12 text-center">Service Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Professional cleaning equipment",
              "Eco-friendly products",
              "Scheduled maintenance plans",
              "Emergency service availability",
              "Trained and certified staff",
              "Quality assurance checks",
            ].map((feature) => (
              <div key={feature} className="flex items-start gap-4 p-6 rounded-lg bg-white dark:bg-gray-800">
                <CheckCircle size={20} className="text-brand-green flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-green text-white">
        <div className="container-max text-center">
          <h2 className="font-display text-4xl font-semibold mb-6">
            Maintain Your Property with Confidence
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a maintenance service today and keep your space clean and hygienic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+923229162746" className="btn-secondary">
              Call Now
            </a>
            <Link href="/contact" className="btn-outline">
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
