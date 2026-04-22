import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight, Shield } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { ParallaxServicesSection } from "@/components/sections/ParallaxServicesSection";
import heroImage from "../../public/hero.png";

export const metadata: Metadata = {
  title: "PestPro Services | Termite, Rodent, Disinfection, Floor & Tank Cleaning",
  description:
    "Explore PestPro services including termite proofing, rodent control, disinfection, floor scoring and polishing, water tank cleaning, and pest control fumigation for homes and businesses in Pakistan.",
};

const services = [
  {
    id: "termite",
    title: "Termite Control / Termite Proofing",
    subtitle: "Professional Termite Treatment and Proofing for Structural Protection in Islamabad / Rawalpindi",
    description: "Comprehensive termite control and proofing services to protect your property from destructive termite infestations with professional inspection and treatment.",
    images: ["/termite.png", "/termite2.png"],
    benefits: [
      "Detailed infestation inspection and treatment planning",
      "Targeted drilling, injection, and proofing methods",
      "Structural risk review for wooden fixtures and cabinets",
      "Support for residential and commercial sites",
      "Long-term termite prevention guidance",
      "Follow-up planning where required",
    ],
    process: [
      { step: "01", label: "Inspection", desc: "We inspect active termite zones and identify vulnerable structural areas." },
      { step: "02", label: "Proofing Plan", desc: "A suitable treatment and proofing approach is selected according to the property." },
      { step: "03", label: "Application", desc: "Targeted termite treatment is carried out in affected and high-risk areas." },
      { step: "04", label: "Follow-Up", desc: "We guide you on future prevention and follow-up if the site needs it." },
    ],
  },
  {
    id: "rodent",
    title: "Rodents Control / Rat Treatment",
    subtitle: "Effective Rodent Control for Buildings, Kitchens, and Storage Areas in Islamabad / Rawalpindi",
    description: "Effective rodent control services targeting rats and mice in residential and commercial properties with safe trapping and prevention methods.",
    images: ["/rodent.png", "/rodent2.png"],
    benefits: [
      "Property assessment and rodent activity review",
      "Trap and station placement in active zones",
      "Kitchen, warehouse, and storage area support",
      "Entry-point prevention recommendations",
      "Sanitation and contamination risk guidance",
      "Follow-up service planning",
    ],
    process: [
      { step: "01", label: "Survey", desc: "We inspect movement routes, nesting signs, and likely access points." },
      { step: "02", label: "Control Setup", desc: "Rodent control measures are placed in strategic indoor and outdoor areas." },
      { step: "03", label: "Risk Reduction", desc: "We guide the client on storage, hygiene, and gap-sealing priorities." },
      { step: "04", label: "Review", desc: "The site is reviewed and the plan is adjusted if more activity is observed." },
    ],
  },
  {
    id: "disinfection",
    title: "Disinfection",
    subtitle: "Professional Disinfection and Sanitization Services in Islamabad / Rawalpindi",
    description: "Professional disinfection and sanitization services for homes, offices, and commercial spaces to eliminate harmful pathogens and ensure hygiene.",
    images: ["/Disinfection.png", "/pest2.png"],
    benefits: [
      "Suitable for homes, offices, and managed commercial spaces",
      "Structured sanitization planning for occupied areas",
      "Application methods selected according to site type",
      "Support for recurring hygiene-focused services",
      "Safer operational handling by trained staff",
      "Useful for both residential and enterprise settings",
    ],
    process: [
      { step: "01", label: "Assessment", desc: "We review the site and determine the spaces requiring disinfection support." },
      { step: "02", label: "Preparation", desc: "The area is prepared according to treatment and occupancy requirements." },
      { step: "03", label: "Application", desc: "Disinfection is carried out with practical coverage for the selected zones." },
      { step: "04", label: "Completion", desc: "Post-service guidance is shared for safer re-entry and routine hygiene support." },
    ],
  },
  {
    id: "floor-services",
    title: "Floor Scoring / Cleaning & Polishing",
    subtitle: "Professional Floor Cleaning and Polishing for Commercial and Residential Properties in Islamabad / Rawalpindi",
    description: "Professional floor cleaning, scoring, and polishing services for tile, marble, and hard surfaces in commercial and residential properties.",
    images: ["/floor.png", heroImage],
    benefits: [
      "Suitable for tile, marble, and hard floor surfaces",
      "Deep cleaning for visible dirt and surface buildup",
      "Polishing for a cleaner and more professional finish",
      "Support for offices, malls, lobbies, and homes",
      "Improved long-term floor appearance",
      "Service planning based on site condition",
    ],
    process: [
      { step: "01", label: "Assessment", desc: "We inspect the floor material, condition, and cleaning requirement." },
      { step: "02", label: "Cleaning", desc: "Deep cleaning is carried out using suitable machines and products." },
      { step: "03", label: "Polishing", desc: "The floor is polished to improve finish, shine, and surface appearance." },
      { step: "04", label: "Maintenance", desc: "We advise on upkeep and recurring cleaning support if needed." },
    ],
  },
  {
    id: "water-tank-cleaning",
    title: "Water Tank Cleaning",
    subtitle: "Professional Water Tank Cleaning for Homes and Commercial Properties in Islamabad / Rawalpindi",
    description: "Professional water tank cleaning services to remove dirt, buildup, and contaminants for cleaner and safer water storage.",
    images: ["/tank.png", "/tank2.png"],
    benefits: [
      "Cleaning support for residential and commercial tanks",
      "Useful for homes, buildings, and managed properties",
      "Removal of visible dirt and internal buildup",
      "Structured cleaning process for hygiene-focused maintenance",
      "Suitable for recurring cleaning schedules",
      "Better support for cleaner water storage conditions",
    ],
    process: [
      { step: "01", label: "Inspection", desc: "We assess the tank condition and access requirements before work begins." },
      { step: "02", label: "Cleaning", desc: "The internal surfaces are cleaned using a structured tank-cleaning process." },
      { step: "03", label: "Rinse", desc: "The tank is rinsed and checked for visible cleanliness and readiness." },
      { step: "04", label: "Completion", desc: "We provide guidance on future cleaning intervals and maintenance." },
    ],
  },
  {
    id: "fumigation",
    title: "Pest Control / Fumigation",
    subtitle: "Pest Control and Fumigation Support for Residential and Commercial Properties in Islamabad / Rawalpindi",
    description: "Comprehensive pest control and fumigation services for homes, offices, and commercial facilities to eliminate various pests effectively.",
    images: [heroImage, "/pest2.png"],
    benefits: [
      "Suitable for homes, offices, and commercial facilities",
      "Site-based fumigation and pest treatment planning",
      "Support for recurring or broader infestation concerns",
      "Useful for warehouses, storage, and business premises",
      "Treatment selected according to pest type and location",
      "Follow-up support for long-term control",
    ],
    process: [
      { step: "01", label: "Review", desc: "We inspect the site and identify the pest issue, spread, and treatment scope." },
      { step: "02", label: "Planning", desc: "A suitable pest control or fumigation plan is selected for the property." },
      { step: "03", label: "Execution", desc: "Treatment is carried out according to site conditions and safety requirements." },
      { step: "04", label: "Support", desc: "We provide follow-up guidance and maintenance planning when required." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section
        className="pt-48 pb-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #22313d 0%, #2f6b4f 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-max relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 text-white/80 text-sm font-medium">
            <Shield size={16} className="text-brand-green-100" />
            Licensed team · Inspection-led service · Reliable support
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
            Professional Services for
            <br />
            Homes and Commercial Properties
          </h1>
          <p className="text-white/75 text-xl max-w-3xl mx-auto mb-10 leading-8">
            Explore PestPro services including termite proofing, rodent control, disinfection,
            floor cleaning and polishing, water tank cleaning, and fumigation support for Pakistani properties.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="bg-white/10 hover:bg-white/18 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-all"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f4] py-14 lg:py-16 dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="section-tag justify-center">
              <span className="w-8 h-0.5 bg-brand-green" />
              Service Overview
              <span className="w-8 h-0.5 bg-brand-green" />
            </div>
            <h2 className="section-heading mb-4">Explore Our Core Services</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-7 sm:leading-8">
              Browse the main PestPro services below, then open each section for treatment
              details, included work, related images, and process steps.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={`card-${service.id}`}
                className="overflow-hidden rounded-[26px] border border-slate-200/70 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="relative h-56">
                  <Image
                    src={service.images[0]}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green dark:bg-gray-950/92">
                    {service.title}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-brand-navy dark:text-white mb-3">
                    {service.subtitle}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-7 mb-5">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <div
                        key={`card-${service.id}-${benefit}`}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle size={16} className="text-brand-green flex-shrink-0 mt-1" />
                        <span className="leading-6">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`#${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition-all hover:gap-3"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${idx % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-[#f4f6f4] dark:bg-gray-900"}`}
        >
          <div className="container-max">
            <div className="rounded-[32px] border border-slate-200/70 bg-white p-6 shadow-card dark:border-gray-800 dark:bg-gray-950 sm:p-8 lg:p-10">
              <div className="grid gap-8 xl:grid-cols-[0.9fr_0.78fr_0.86fr] xl:items-start">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-green-50 px-4 py-2 text-brand-green text-xs font-semibold uppercase tracking-[0.18em] dark:bg-gray-800">
                    {service.title}
                  </div>

                  <div>
                    <h2 className="section-heading mb-4">{service.subtitle}</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-7 sm:leading-8">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <div
                        key={`summary-${benefit}`}
                        className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3.5 border border-slate-100 dark:bg-gray-900 dark:border-gray-800"
                      >
                        <CheckCircle size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm leading-6">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    <a href="tel:+923069235099" className="btn-primary">
                      <Phone size={18} /> Call for Free Quote
                    </a>
                    <Link href="/contact" className="btn-outline">
                      Book Inspection <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                  {service.images.map((image, imageIndex) => (
                    <div
                      key={`${service.id}-${imageIndex}`}
                      className={`relative overflow-hidden rounded-[28px] border border-slate-200/70 shadow-card dark:border-gray-800 ${
                        imageIndex === 0 ? "h-[280px] sm:h-[360px]" : "h-[220px] sm:h-[260px]"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${service.title} image ${imageIndex + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 28vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                      <div className="absolute left-4 right-4 bottom-4">
                        <div className="rounded-[18px] border border-white/30 bg-white/88 p-4 backdrop-blur-md dark:border-gray-700 dark:bg-gray-950/88">
                          <div className="text-brand-navy dark:text-white font-semibold text-sm">
                            {imageIndex === 0 ? "Service Overview" : "Related Site View"}
                          </div>
                          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            Professional treatment planned around property type and site condition
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-[#f8faf8] p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green shadow-sm dark:bg-gray-950">
                    What&apos;s Included
                  </div>
                  <div className="mt-5 space-y-3">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 dark:border-gray-800 dark:bg-gray-950"
                      >
                        <CheckCircle size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm leading-6">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-[28px] bg-[#f4f7f4] p-5 dark:bg-gray-900 sm:p-6 lg:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-6">
                  <div>
                    <div className="text-brand-green text-xs font-semibold uppercase tracking-[0.18em] mb-2">
                      Our Process
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-navy dark:text-white">
                      Simple, professional service delivery
                    </h3>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
                    Each service is planned around the property, the pest activity, and the level
                    of treatment required for safer long-term results.
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.process.map(({ step, label, desc }) => (
                    <div
                      key={step}
                      className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-green text-white font-semibold">
                          {step}
                        </div>
                        <div className="font-semibold text-brand-navy dark:text-white text-base">
                          {label}
                        </div>
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm leading-6">
                        {desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
