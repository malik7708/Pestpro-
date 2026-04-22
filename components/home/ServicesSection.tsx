"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "../../public/hero.png";

const services = [
  {
    id: "termite",
    number: "01",
    title: "Termite Control & Proofing",
    description:
      "Inspection-led termite treatment and proofing for homes, offices, plazas, and commercial buildings that need structural protection and long-term prevention.",
    points: ["Inspection included", "Soil and drill treatment", "Commercial site support"],
    image: "/termite2.png",
  },
  {
    id: "rodent",
    number: "02",
    title: "Rodents Control",
    description:
      "Practical rodent control for houses, kitchens, warehouses, and industrial storage areas with activity tracking, baiting, and entry-point guidance.",
    points: ["Rat treatment", "Warehouse planning", "Follow-up visits"],
    image: "/rodent2.png",
  },
  {
    id: "disinfection",
    number: "03",
    title: "Disinfection Services",
    description:
      "Professional sanitization and disinfection support for offices, clinics, restaurants, schools, and managed properties that need cleaner working environments.",
    points: ["Office and clinic coverage", "Safer application methods", "Routine hygiene support"],
    image: "/Disinfection.png",
  },
  {
    id: "floor-services",
    number: "04",
    title: "Floor Cleaning & Polishing",
    description:
      "Floor scoring, cleaning, and polishing for homes, offices, lobbies, and commercial interiors that need a cleaner finish and better surface maintenance.",
    points: ["Deep cleaning", "Polishing support", "Residential and commercial"],
    image: "/floor.png",
  },
  {
    id: "water-tank-cleaning",
    number: "05",
    title: "Water Tank Cleaning",
    description:
      "Structured water tank cleaning for residential and commercial properties to support safer storage conditions and more reliable hygiene standards.",
    points: ["Internal cleaning", "Property maintenance", "Recurring schedules"],
    image: "/tank.png",
  },
  {
    id: "fumigation",
    number: "06",
    title: "Pest Control & Fumigation",
    description:
      "Broader pest control and fumigation support for homes, restaurants, warehouses, and enterprise facilities with treatment plans tailored to site conditions.",
    points: ["Broader infestation control", "Business support", "Site-based execution"],
    image: heroImage,
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const activeService = services[activeIndex];
  const previousService = services[(activeIndex - 1 + services.length) % services.length];
  const nextService = services[(activeIndex + 1) % services.length];

  return (
    <section className="section-padding bg-[#0d4b33] text-white overflow-x-hidden">
      <div className="container-max">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4ef8a] mb-3">
              <span className="h-px w-8 sm:w-10 bg-[#d4ef8a]/70" />
              Featured Our Services
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-3 sm:mb-4">
              Professional Pest Control Services for Homes and Offices
            </h2>
            <p className="text-white/78 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 max-w-xl lg:max-w-2xl">
              PestPro supports residential, commercial, and enterprise clients in Islamabad,
              Rawalpindi, Faisalabad, Sargodha, Peshawar, Lahore, and Karachi with inspection-led
              pest control, termite proofing, sanitization, and site maintenance services.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d8f06b] px-6 py-3 text-sm font-semibold text-[#143222] transition-colors hover:bg-[#cbe25b]"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 lg:gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-[24px] sm:rounded-[28px] border border-white/12 bg-white/7 p-4 sm:p-6 lg:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.16)] flex flex-col min-h-auto">
              <div className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-medium text-white/75 w-fit">
                Service focus
              </div>
              <h3 className="mt-3 sm:mt-4 font-display text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-tight leading-tight">
                {activeService.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-white/76 leading-5 sm:leading-6 lg:leading-7 text-sm sm:text-base">
                {activeService.description}
              </p>

              <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                {activeService.points.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-2xl border border-white/10 bg-black/10 px-3 py-2 sm:px-4 sm:py-3 text-sm text-white/82"
                  >
                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#d8f06b] flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Link
                  href={`/services#${activeService.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 sm:px-5 sm:py-3 text-sm font-semibold text-[#143222] transition-colors hover:bg-slate-100"
                >
                  Get Service
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-transparent px-4 py-2.5 sm:px-5 sm:py-3 text-sm font-semibold text-white transition-colors hover:bg-white/8"
                >
                  Book Inspection
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[96px_minmax(0,1fr)_96px] lg:grid-cols-[110px_minmax(0,1fr)_110px] xl:gap-5">
              <button
                onClick={() =>
                  setActiveIndex((current) => (current - 1 + services.length) % services.length)
                }
                className="group relative hidden overflow-hidden rounded-[28px] border border-white/10 bg-white/5 sm:block"
                aria-label="Previous service"
              >
                <Image
                  src={previousService.image}
                  alt={previousService.title}
                  fill
                  sizes="110px"
                  className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/50" />
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                    {previousService.number}
                  </span>
                  <ChevronLeft size={18} />
                </div>
              </button>

              <div className="relative min-h-[280px] overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_28px_70px_rgba(0,0,0,0.22)] sm:min-h-[520px]">
                <Image
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 70vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#072316]/70 via-[#072316]/18 to-transparent" />

                <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                  <div className="max-w-sm rounded-[26px] bg-white px-5 py-5 text-slate-900 shadow-2xl sm:px-6 sm:py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green">
                          {activeService.number}
                        </div>
                        <h3 className="mt-2 font-display text-xl sm:text-2xl font-semibold tracking-tight text-brand-navy">
                          {activeService.title}
                        </h3>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d8f06b] text-base font-semibold text-[#143222]">
                        {activeService.number}
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {activeService.description}
                    </p>

                    <Link
                      href={`/services#${activeService.id}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition-all hover:gap-3"
                    >
                      Get Service
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Mobile Navigation Dots */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 sm:hidden">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        index === activeIndex ? "bg-[#d8f06b]" : "bg-white/50"
                      }`}
                      aria-label={`Go to service ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Mobile Navigation Arrows */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between sm:hidden">
                  <button
                    onClick={() =>
                      setActiveIndex((current) => (current - 1 + services.length) % services.length)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-all hover:bg-white/30"
                    aria-label="Previous service"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() =>
                      setActiveIndex((current) => (current + 1) % services.length)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-all hover:bg-white/30"
                    aria-label="Next service"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <button
                onClick={() => setActiveIndex((current) => (current + 1) % services.length)}
                className="group relative hidden overflow-hidden rounded-[28px] border border-white/10 bg-white/5 sm:block"
                aria-label="Next service"
              >
                <Image
                  src={nextService.image}
                  alt={nextService.title}
                  fill
                  sizes="110px"
                  className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/50" />
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-white">
                  <ChevronRight size={18} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                    {nextService.number}
                  </span>
                </div>
              </button>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${service.title}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-[#d8f06b]" : "w-2.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
