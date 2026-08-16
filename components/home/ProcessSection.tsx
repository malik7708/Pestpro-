import Link from "next/link";
import { Phone, ClipboardList, FlaskConical, ShieldCheck, ArrowRight } from "lucide-react";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/motion";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Request Inspection",
    description: "Call, WhatsApp, or send an inquiry to share the pest issue, property type, and preferred visit time.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Site Assessment",
    description: "Our technician inspects the affected areas, identifies likely causes, and documents the treatment scope.",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Treatment Application",
    description: "We apply the suitable treatment plan based on pest type, property use, infestation level, and safety needs.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Follow-Up Support",
    description: "After treatment, we guide you on prevention and schedule follow-up support when the service requires it.",
  },
];

export function ProcessSection() {
  return (
    <section
      className="section-padding relative"
      style={{
        backgroundImage: "url('/images/optimized/termite.webp')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10">
        <div className="container-max">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-tag justify-center bg-lime-200/200 text-lime-200 mb-4">
              <span className="w-8 h-0.5 bg-lime-200" />
              How It Works
              <span className="w-8 h-0.5 bg-lime-200" />
            </div>
            <h2 className="section-heading mb-4 text-white">
              A Clear Process for <span className="text-lime-200">Professional Pest Control</span>
            </h2>
            <p className="text-white/90 text-lg leading-8">
              Our process is designed to keep treatment straightforward for homeowners,
              office teams, restaurants, and commercial facilities that need a reliable pest control partner.
            </p>
          </FadeIn>

          <StaggerGroup className="columns-2 gap-4 mb-14 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {steps.map((step, index) => (
              <StaggerItem key={step.number}>
                <div
                  className={`group mb-4 break-inside-avoid rounded-[24px] border border-white/20 bg-green-50 p-5 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover dark:border-gray-800 dark:bg-gray-950/95 dark:backdrop-blur-sm md:mb-0 ${
                    index % 2 === 1 ? "mt-7 md:mt-0" : "mt-0"
                  }`}
                >
                  <div className="h-1.5 rounded-t-[24px] bg-brand-green" />
                  <div className="mb-5 mt-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:bg-brand-green/10">
                      <step.icon size={22} className="text-brand-green" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">{step.number}</span>
                  </div>
                  <h3 className="mb-3 font-display text-lg font-semibold text-brand-navy transition-colors duration-300 group-hover:text-brand-green dark:text-white sm:text-xl">{step.title}</h3>
                  <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <FadeIn className="rounded-[28px] bg-brand-navy/95 backdrop-blur-sm text-white px-8 py-10 lg:px-10 lg:py-12 border border-white/20">
            <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl font-semibold tracking-tight mb-3">
                  Need Commercial or Enterprise Pest Management?
                </h3>
                <p className="text-white/75 leading-8 text-lg">
                  We also support offices, retail sites, restaurants, warehouses, and managed properties
                  with recurring pest control plans, treatment documentation, and site-specific scheduling.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-stretch">
              <a href="tel:+923005515809" className="btn-primary text-base justify-center">
                  <Phone size={20} /> Call for Free Quote
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 border border-white/20 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300">
                  Book Inspection Online <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
