"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "../../public/termite1.png";
import termiteImage from "../../public/pest3.png";
import disinfectionImage from "../../public/Disinfection.png";

const slides: Array<{
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: StaticImageData;
  cta: string;
}> = [
  {
    id: "home",
    eyebrow: "Pest Control Pakistan",
    title: "Professional pest control for homes and businesses",
    description:
      "Pest control, termite treatment, fumigation, and disinfection services in Pakistan.",
    image: heroImage,
    cta: "Book free inspection",
  },
  {
    id: "termite",
    eyebrow: "Termite Proofing",
    title: "Protect your property from hidden termite damage",
    description:
      "Termite inspection and proofing for homes, offices, and commercial properties.",
    image: termiteImage,
    cta: "Get termite inspection",
  },
  {
    id: "sanitization",
    eyebrow: "Disinfection Support",
    title: "Cleaner environments for managed properties",
    description:
      "Disinfection support for offices, schools, clinics, restaurants, and managed buildings.",
    image: disinfectionImage,
    cta: "Request service details",
  },
];

const companyPoints = [
  "Treatment planning for homes, offices, restaurants, and warehouses",
  "Pakistan-focused service coverage with practical follow-up support",
  "Clear communication and site-based recommendations",
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((value) => (value + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[current];

  return (
    <>
      <section
        className="pt-20 pb-8 lg:pt-32 lg:pb-16 relative"
        style={{
          backgroundImage: "url('/hero2.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10">
          <div className="container-max">
            <div className="overflow-hidden rounded-[34px] border border-white/20 bg-white/95 backdrop-blur-sm shadow-card-hover">
              <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
                <div className="relative overflow-hidden bg-[#103125] px-4 py-6 sm:px-7 sm:py-9 lg:px-11 lg:py-12 text-white">
                  <div className="absolute inset-0">
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover opacity-[0.24]"
                      loading="eager"
                      priority
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,49,38,0.56)_0%,rgba(18,49,38,0.7)_55%,rgba(18,49,38,0.82)_100%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,240,107,0.1),transparent_34%)]" />
                  </div>

                  <div className="relative z-10">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/14 bg-white/8 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/82 backdrop-blur-sm">
                      <ShieldCheck size={12} className="sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">PestPro Pakistan</span>
                      <span className="sm:hidden">PestPro</span>
                    </div>

                  <div className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#d5ee94]">
                    {activeSlide.eyebrow}
                  </div>

                  <h1 className="mt-3 sm:mt-4 max-w-md font-display text-2xl sm:text-3xl lg:text-4xl xl:text-[2.8rem] font-semibold tracking-tight leading-[1.05] sm:leading-tight">
                    {activeSlide.title}
                  </h1>

                  <p className="mt-3 sm:mt-4 max-w-md text-[14px] sm:text-[15px] leading-6 sm:leading-7 text-white/78">
                    {activeSlide.description}
                  </p>

                  <div className="mt-4 sm:mt-5 flex items-start gap-2 sm:gap-3 rounded-[16px] sm:rounded-[20px] border border-white/10 bg-white/6 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-white/78 backdrop-blur-[2px]">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#d5ee94]" />
                    <span className="leading-5">Serving Islamabad, Rawalpindi, Faisalabad, Sargodha, Peshawar, Lahore, and Karachi.</span>
                  </div>

                  <div className="mt-4 sm:mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                    <a
                      href="tel:+923069235099"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d8f06b] px-5 py-3 sm:px-7 sm:py-4 text-xs sm:text-sm font-semibold text-[#173225] transition-colors hover:bg-[#cae45a]"
                    >
                      <Phone size={16} className="sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Call for free quote</span>
                      <span className="sm:hidden">Call Now</span>
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/88 transition-colors hover:text-white"
                    >
                      {activeSlide.cta}
                      <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-[#f3f5f3] p-2 sm:p-3 md:p-4 lg:p-6">
                <div className="grid min-h-[300px] sm:min-h-[400px] lg:min-h-[540px] grid-cols-1 gap-3 sm:grid-cols-[80px_minmax(0,1fr)_80px] lg:grid-cols-[110px_minmax(0,1fr)_110px] xl:gap-5">
                  <div className="hidden gap-4 sm:grid">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.id}
                        onClick={() => setCurrent(index)}
                        className={`relative overflow-hidden rounded-[24px] border transition-all ${
                          index === current
                            ? "border-brand-green shadow-brand"
                            : "border-slate-200 opacity-75"
                        }`}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.eyebrow}
                          fill
                          sizes="110px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-950/28" />
                      </button>
                    ))}
                  </div>

                  <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] min-h-[250px] sm:min-h-[360px] lg:min-h-[400px]">
                    <Image
                      key={activeSlide.id}
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      fill
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 56vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081d14]/60 via-[#081d14]/10 to-transparent" />

                    <div className="absolute left-3 right-3 top-3 sm:left-4 sm:right-4 sm:top-4 lg:left-6 lg:right-6 lg:top-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/14 px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-medium text-white backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#d8f06b]" />
                        <span className="hidden sm:inline">Professional pest management for Pakistani properties</span>
                        <span className="sm:hidden">Professional pest management</span>
                      </div>
                    </div>

                    <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 lg:inset-x-6 lg:bottom-6">
                      <div className="rounded-[20px] sm:rounded-[24px] border border-white/55 bg-white/92 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
                        <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-100">
                          Enterprise-ready support
                        </div>
                        <h2 className="mt-1 sm:mt-2 font-display text-lg sm:text-xl lg:text-xl font-semibold tracking-tight text-[#d5ee94]">
                          Pest control designed around your property
                        </h2>
                        <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-gray-50">
                          For homes, offices, warehouses, and managed sites across Pakistan.
                        </p>
                      </div>
                    </div>

                    {/* Mobile Navigation Dots */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 sm:hidden">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrent(index)}
                          className={`h-2 w-2 rounded-full transition-all ${
                            index === current ? "bg-[#d8f06b]" : "bg-white/50"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Mobile Navigation Arrows */}
                    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between sm:hidden">
                      <button
                        onClick={() =>
                          setCurrent((value) => (value - 1 + slides.length) % slides.length)
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-all hover:bg-white/30"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() =>
                          setCurrent((value) => (value + 1) % slides.length)
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-all hover:bg-white/30"
                        aria-label="Next slide"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 lg:hidden">
                  {slides.map((slide, index) => (
                    <button
                      key={`mobile-${slide.id}`}
                      onClick={() => setCurrent(index)}
                      aria-label={`View ${slide.title}`}
                      className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all ${
                        index === current ? "w-6 sm:w-8 bg-brand-green" : "w-2 sm:w-2.5 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="section-padding bg-[#f7f8f6]">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green mb-4">
                <span className="h-px w-10 bg-brand-green/60" />
                About PestPro
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-brand-navy mb-5">
                Effective pest control solutions for homes, offices, and enterprises
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-8">
                PestPro is a Pakistan-focused pest control company offering professional pest
                management, fumigation, termite treatment, rodent control, disinfection, water
                tank cleaning, and floor maintenance services for residential and commercial
                properties.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {companyPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-[20px] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600 shadow-sm"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-brand-green" />
                    <span className="leading-7">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/about" className="btn-primary">
                  Learn More About PestPro
                  <ArrowRight size={18} />
                </Link>
                <Link href="/services" className="btn-outline">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[30px] border border-slate-200/70 bg-white shadow-card">
                <div className="relative h-[320px] sm:h-[400px] lg:h-[460px]">
                  <Image
                    src={heroImage}
                    alt="PestPro pest control professional on site"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10281d]/50 to-transparent" />
                </div>
                <div className="grid gap-4 border-t border-slate-200/70 bg-white px-5 py-5 sm:grid-cols-3 sm:px-6">
                  <div>
                    <div className="text-2xl font-semibold text-brand-navy">10+</div>
                    <div className="mt-1 text-sm text-slate-500">Service categories</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-brand-navy">Major Cities</div>
                    <div className="mt-1 text-sm text-slate-500">Coverage across Pakistan</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-brand-navy">Homes & Businesses</div>
                    <div className="mt-1 text-sm text-slate-500">Tailored site support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
