"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/motion";
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
    eyebrow: "Trusted Pest & Termite Control",
    title: "Expert pest control for homes and businesses",
    description:
      "IC Pest Control is a trusted pest and termite control company serving Rawalpindi, Islamabad, Taxila, and Murree. We provide reliable, safe, and effective solutions with guaranteed results.",
    image: heroImage,
    cta: "Book free inspection",
  },
  {
    id: "termite",
    eyebrow: "Termite Treatment & Prevention",
    title: "Protect your property from hidden termite damage",
    description:
      "Best and expert termite inspection and treatment using modern techniques and eco-friendly products. Prevent future infestations with expert care.",
    image: termiteImage,
    cta: "Get termite inspection",
  },
  {
    id: "fumigation",
    eyebrow: "Fumigation & Pest Solutions",
    title: "Complete pest management for peace of mind",
    description:
      "From dengue spray and mosquito control to rodent removal and cockroach extermination. All services designed for long-lasting protection.",
    image: disinfectionImage,
    cta: "Request service details",
  },
];

const companyPoints = [
  "Pest control, termite treatment, fumigation, and dengue spray services",
  "Coverage across Rawalpindi, Islamabad, Taxila, and Murree",
  "Modern techniques with eco-friendly, safe products for your family",
];

const ease = [0.22, 1, 0.36, 1] as const;

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
                <FadeIn className="relative overflow-hidden bg-[#103125] px-4 py-6 text-white sm:px-7 sm:py-9 lg:px-11 lg:py-12">
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

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide.id}
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -22 }}
                      transition={{ duration: 0.55, ease }}
                      className="relative z-10"
                    >
                      <StaggerGroup>
                        <StaggerItem>
                          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/14 bg-white/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/82 backdrop-blur-sm sm:px-4 sm:py-2">
                            <ShieldCheck size={12} className="sm:h-4 sm:w-4" />
                            <span>Islamabad PestControl</span>
                          </div>
                        </StaggerItem>

                        <StaggerItem>
                          <div className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#d5ee94]">
                            {activeSlide.eyebrow}
                          </div>
                        </StaggerItem>

                        <StaggerItem>
                          <h1 className="mt-3 max-w-md font-display text-2xl font-semibold leading-[1.05] tracking-tight sm:mt-4 sm:text-3xl sm:leading-tight lg:text-4xl xl:text-[2.8rem]">
                            {activeSlide.title}
                          </h1>
                        </StaggerItem>

                        <StaggerItem>
                          <p className="mt-3 max-w-md text-[14px] leading-6 text-white/78 sm:mt-4 sm:text-[15px] sm:leading-7">
                            {activeSlide.description}
                          </p>
                        </StaggerItem>

                        <StaggerItem>
                          <div className="mt-4 flex items-start gap-2 rounded-[16px] border border-white/10 bg-white/6 px-3 py-2 text-xs text-white/78 backdrop-blur-[2px] sm:mt-5 sm:gap-3 sm:rounded-[20px] sm:px-4 sm:py-3 sm:text-sm">
                            <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#d5ee94]" />
                            <span className="leading-5">Serving Islamabad / Rawalpindi & Nearby Areas</span>
                          </div>
                        </StaggerItem>

                        <StaggerItem>
                          <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:items-center sm:gap-3">
                            <motion.a
                              href="tel:+923229162746"
                              whileHover={{ y: -2, scale: 1.01 }}
                              whileTap={{ scale: 0.98 }}
                              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d8f06b] px-5 py-3 text-xs font-semibold text-[#173225] transition-colors hover:bg-[#cae45a] sm:px-7 sm:py-4 sm:text-sm"
                            >
                              <Phone size={16} className="sm:h-5 sm:w-5" />
                              <span className="hidden sm:inline">Call for free quote</span>
                              <span className="sm:hidden">Call Now</span>
                            </motion.a>
                            <motion.div whileHover={{ x: 4 }}>
                              <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-xs font-semibold text-white/88 transition-colors hover:text-white sm:text-sm"
                              >
                                {activeSlide.cta}
                                <ArrowRight size={16} className="sm:h-5 sm:w-5" />
                              </Link>
                            </motion.div>
                          </div>
                        </StaggerItem>
                      </StaggerGroup>
                    </motion.div>
                  </AnimatePresence>
                </FadeIn>

                <FadeIn className="bg-[#f3f5f3] p-2 sm:p-3 md:p-4 lg:p-6" delay={0.08}>
                  <div className="grid min-h-[300px] grid-cols-1 gap-3 sm:min-h-[400px] sm:grid-cols-[80px_minmax(0,1fr)_80px] lg:min-h-[540px] lg:grid-cols-[110px_minmax(0,1fr)_110px] xl:gap-5">
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

                    <div className="relative min-h-[250px] overflow-hidden rounded-[24px] sm:min-h-[360px] sm:rounded-[28px] lg:min-h-[400px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`image-${activeSlide.id}`}
                          initial={{ opacity: 0, scale: 1.08 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ duration: 0.75, ease }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={activeSlide.image}
                            alt={activeSlide.title}
                            fill
                            priority
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 56vw"
                            className="object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081d14]/60 via-[#081d14]/10 to-transparent" />

                      <div className="absolute left-3 right-3 top-3 sm:left-4 sm:right-4 sm:top-4 lg:left-6 lg:right-6 lg:top-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/14 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:px-4 sm:py-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d8f06b] sm:h-2 sm:w-2" />
                          <span className="hidden sm:inline">Professional pest management for Rawalpndi/Islamabad properties</span>
                          <span className="sm:hidden">Professional pest management</span>
                        </div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.18, ease }}
                        className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 lg:inset-x-6 lg:bottom-6"
                      >
                        <div className="rounded-[20px] border border-white/55 bg-white/92 p-4 shadow-2xl backdrop-blur-md sm:rounded-[24px] sm:p-5">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-green-100 sm:text-[11px]">
                            Enterprise-ready support
                          </div>
                          <h2 className="mt-1 font-display text-lg font-semibold tracking-tight text-[#d5ee94] sm:mt-2 sm:text-xl lg:text-xl">
                            Pest control designed around your property
                          </h2>
                          <p className="mt-2 text-xs leading-6 text-gray-50 sm:mt-3 sm:text-sm sm:leading-7">
                            For homes, offices, warehouses, and managed sites across Rawalpindi/Islamabad and nearby areas.
                          </p>
                        </div>
                      </motion.div>

                      <div className="absolute left-1/2 top-4 flex -translate-x-1/2 gap-2 sm:hidden">
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

                      <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between sm:hidden">
                        <button
                          onClick={() =>
                            setCurrent((value) => (value - 1 + slides.length) % slides.length)
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
                          aria-label="Previous slide"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={() =>
                            setCurrent((value) => (value + 1) % slides.length)
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
                          aria-label="Next slide"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-center gap-2 sm:mt-4 lg:hidden">
                    {slides.map((slide, index) => (
                      <button
                        key={`mobile-${slide.id}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`View ${slide.title}`}
                        className={`h-2 w-2 rounded-full transition-all sm:h-2.5 sm:w-2.5 ${
                          index === current ? "w-6 bg-brand-green sm:w-8" : "w-2 bg-slate-300 sm:w-2.5"
                        }`}
                      />
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f7f8f6]">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
            <StaggerGroup>
              <StaggerItem>
                <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green mb-4">
                  <span className="h-px w-10 bg-brand-green/60" />
                  About IC Pest Control
                </div>
              </StaggerItem>
              <StaggerItem>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-brand-navy mb-5">
                  Safe, reliable pest management for every property
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-slate-600 text-base sm:text-lg leading-8">
                  At IC Pest Control, we focus on delivering high-quality pest management solutions that are safe for your family, property, and the environment. We use advanced tools and industry-approved chemicals to eliminate pests efficiently and prevent future infestations.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  We follow Integrated Pest Management (IPM) principles for long-term protection with minimal environmental impact. Our commitment to precision, safety, and customer satisfaction makes us one of the most reliable pest control companies in Islamabad and Rawalpindi.
                </p>
              </StaggerItem>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {companyPoints.map((point) => (
                  <StaggerItem key={point}>
                    <div className="flex items-start gap-3 rounded-[20px] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600 shadow-sm">
                      <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-brand-green" />
                      <span className="leading-7">{point}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>

              <StaggerItem>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/about" className="btn-primary">
                    Learn More About IC Pest Control
                    <ArrowRight size={18} />
                  </Link>
                  <Link href="/services" className="btn-outline">
                    Explore Services
                  </Link>
                </div>
              </StaggerItem>
            </StaggerGroup>

            <FadeIn className="relative" delay={0.08}>
              <div className="relative overflow-hidden rounded-[30px] border border-slate-200/70 bg-white shadow-card">
                <div className="relative h-[320px] sm:h-[400px] lg:h-[460px]">
                  <Image
                    src={heroImage}
                    alt="IC PestControl pest control professional on site"
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
                    <div className="mt-1 text-sm text-slate-500">Rawalpindi & Islamabad</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-brand-navy">Homes & Businesses</div>
                    <div className="mt-1 text-sm text-slate-500">Tailored site support</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
