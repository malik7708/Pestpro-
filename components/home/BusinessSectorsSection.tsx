import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/motion";

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
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-[24px] px-4 py-8 sm:rounded-[30px] sm:px-6 sm:py-10 md:px-10 lg:px-14"
            style={{
              background:
                "linear-gradient(rgba(18, 28, 36, 0.68), rgba(18, 28, 36, 0.68)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80') center/cover",
            }}
          >
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 sm:mb-5 sm:px-4 sm:py-2 sm:text-sm">
                Commercial Pest Control
              </div>
              <h2 className="mb-3 font-display text-2xl font-semibold tracking-tight text-white sm:mb-4 sm:text-3xl lg:text-[2.8rem]">
                Pest management services for your business
              </h2>
              <p className="mb-5 text-sm leading-6 text-white/75 sm:mb-7 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
                IC PestControl supports companies across multiple business sectors with professional pest control,
                recurring service planning, site inspections, and practical follow-up for operational environments.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/20 sm:px-8 sm:py-4"
              >
                Speak to a commercial pest expert today
                <ArrowRight size={16} className="sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </FadeIn>

        <StaggerGroup className="mt-6 space-y-3 sm:mt-8 sm:space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:gap-6 xl:grid-cols-3">
          {sectors.map((sector, index) => (
            <StaggerItem key={sector.title}>
              <article
                className={`w-full overflow-hidden rounded-[18px] border border-slate-200/70 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover dark:border-gray-800 dark:bg-gray-950 md:w-auto ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto md:ml-0"
                }`}
              >
                <div className="h-1 bg-brand-green" />
                <div className="p-4 sm:p-5 lg:p-7">
                  <h3 className="mb-2 font-display text-base font-semibold text-brand-navy sm:mb-3 sm:text-lg lg:text-[1.35rem] dark:text-white">
                    {sector.title}
                  </h3>
                  <p className="text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6 lg:leading-7 dark:text-gray-400">
                    {sector.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
