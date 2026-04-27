"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mainServiceCards } from "@/lib/servicesConfig";

export function ServicesSection() {
  return (
    <section className="section-padding bg-[#0d4b33] text-white overflow-x-hidden">
      <div className="container-max">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4ef8a] mb-3">
              <span className="h-px w-8 sm:w-10 bg-[#d4ef8a]/70" />
              Complete Range of Services
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-3 sm:mb-4">
              Complete Pest Control Solutions for Your Property
            </h2>
            <p className="text-white/78 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 max-w-xl lg:max-w-2xl">
              We offer a complete range of pest control services tailored to residential and commercial needs. Every treatment is effective, affordable, and designed for long-lasting protection.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#d4ef8a] hover:text-white transition-colors group mt-4 lg:mt-0"
          >
            Explore All Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {mainServiceCards.map((service: typeof mainServiceCards[0]) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 hover:from-brand-green/20 hover:to-brand-green/10 border border-white/20 hover:border-brand-green-100/50 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-green/20 flex flex-col"
            >
              {/* Number Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-brand-navy font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {service.number}
                </span>
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-3 leading-snug group-hover:text-brand-green-100 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm leading-6 mb-6 flex-grow group-hover:text-white/80 transition-colors">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="inline-flex items-center gap-2 text-brand-green-100 font-semibold text-sm group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-brand-green/10 to-transparent pointer-events-none transition-opacity duration-500" />
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 lg:mt-20 bg-gradient-to-r from-brand-green/20 to-brand-green-light/10 border border-brand-green-100/30 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
            Need Expert Pest Control Help?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Browse our detailed service pages or get in touch with our team for a free inspection and customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary">
              Explore All Services <ArrowRight size={18} />
            </Link>
            <a href="tel:+923229162746" className="btn-outline">
              Call for Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
