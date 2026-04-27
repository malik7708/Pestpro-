import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sectors = [
  {
    title: "Food Processing",
    description:
      "Pest control support for production areas, storage zones, hygiene-sensitive operations, and compliance-focused facilities.",
  },
  {
    title: "Facilities Management",
    description:
      "Recurring pest control planning for multi-site buildings, managed properties, and high-traffic operational environments.",
  },
  {
    title: "Logistics & Warehousing",
    description:
      "Rodent control, inspection-led treatment, and scheduled support for warehouses, loading areas, and inventory spaces.",
  },
  {
    title: "Hotels & Hospitality",
    description:
      "Discreet pest control services for guest-facing environments where response speed and site presentation both matter.",
  },
  {
    title: "Food Retail",
    description:
      "Structured pest management for restaurants, grocery stores, kitchens, and service counters with recurring monitoring support.",
  },
  {
    title: "Corporate Offices",
    description:
      "Low-disruption treatment planning for office buildings, workspaces, and managed commercial interiors across Pakistan.",
  },
];

export function BusinessSectorsSection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        <div
          className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-14"
          style={{
            background:
              "linear-gradient(rgba(18, 28, 36, 0.68), rgba(18, 28, 36, 0.68)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80') center/cover",
          }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-5 text-white/80 text-xs sm:text-sm font-medium">
              Commercial Pest Control
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.8rem] font-semibold tracking-tight text-white mb-3 sm:mb-4">
              Pest management services for your business
            </h2>
            <p className="text-white/75 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 mb-5 sm:mb-7">
              IC PestControl supports companies across multiple business sectors with professional pest control,
              recurring service planning, site inspections, and practical follow-up for operational environments.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300"
            >
              Speak to a commercial pest expert today
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 md:grid md:grid-cols-2 md:gap-4 lg:gap-6 md:space-y-0 xl:grid-cols-3">
          {sectors.map((sector, index) => (
            <article
              key={sector.title}
              className={`overflow-hidden rounded-[18px] sm:rounded-[22px] bg-white dark:bg-gray-950 border border-slate-200/70 dark:border-gray-800 shadow-card w-full md:w-auto ${
                index % 2 === 0 ? "mr-auto" : "ml-auto md:ml-0"
              }`}
            >
              <div className="h-1 bg-brand-green" />
              <div className="p-4 sm:p-5 lg:p-7">
                <h3 className="font-display text-base sm:text-lg lg:text-[1.35rem] font-semibold text-brand-navy dark:text-white mb-2 sm:mb-3">
                  {sector.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-5 sm:leading-6 lg:leading-7">
                  {sector.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
