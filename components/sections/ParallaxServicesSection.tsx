"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ParallaxServicesSection() {
  return (
    <section
      className="relative py-20 lg:py-32 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/termite.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container-max text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            Professional Pest Control Services
          </h2>
          <p className="text-lg sm:text-xl leading-8 mb-8 text-white/90">
            Our expert team provides comprehensive pest management solutions for homes and businesses across Pakistan. From termite treatment to disinfection services, we ensure your property is safe and pest-free.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Explore Our Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}