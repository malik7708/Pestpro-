"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Shield, Zap } from "lucide-react";

export function LocalSearchSection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="section-tag">
              <span className="h-0.5 w-8 bg-brand-green" />
              Local Pest Control Services
            </div>
            <h2 className="section-heading mb-6">
              Professional Pest Control
              <br />
              <span className="text-gradient">Near You in Islamabad & Rawalpindi</span>
            </h2>

            <p className="mb-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Searching for &quot;pest control near me&quot; or &quot;termite treatment in Rawalpindi&quot;? Islamabad Pest Control offers top-rated local extermination services you can rely on.
            </p>

            <p className="mb-8 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Whether you need insect control, fumigation, or complete pest management, our team is ready to help. We also collaborate with trusted service providers to ensure complete protection for your property.
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-brand-green/20 bg-brand-green-50 p-4 dark:bg-gray-900">
                <MapPin size={24} className="mt-1 flex-shrink-0 text-brand-green" />
                <div>
                  <h3 className="mb-1 font-semibold text-brand-navy dark:text-white">Service Coverage</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Serving Islamabad, Rawalpindi, Taxila, and Murree with professional pest control expertise
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-brand-green/20 bg-brand-green-50 p-4 dark:bg-gray-900">
                <Shield size={24} className="mt-1 flex-shrink-0 text-brand-green" />
                <div>
                  <h3 className="mb-1 font-semibold text-brand-navy dark:text-white">Comprehensive Solutions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    From termite inspections to fumigation services and dengue spray - all your pest control needs in one place
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-brand-green/20 bg-brand-green-50 p-4 dark:bg-gray-900">
                <Zap size={24} className="mt-1 flex-shrink-0 text-brand-green" />
                <div>
                  <h3 className="mb-1 font-semibold text-brand-navy dark:text-white">Take Action Today</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Don&apos;t wait until the damage gets worse - contact us today and keep your space pest-free
                  </p>
                </div>
              </div>
            </div>

            <Link href="/contact" className="btn-primary inline-flex gap-2">
              Request Service Now
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-3xl border border-brand-green/20 bg-gradient-to-br from-brand-green/10 to-emerald-500/5 p-8 lg:p-12 dark:from-gray-900 dark:to-gray-800">
            <h3 className="mb-8 font-display text-2xl font-semibold text-brand-navy dark:text-white lg:text-3xl">
              Our Local Services
            </h3>

            <div className="space-y-4">
              {[
                { title: "Termite Inspection & Treatment", desc: "Professional detection and prevention" },
                { title: "General Pest Control", desc: "Ants, flies, insects and more" },
                { title: "Cockroach Extermination", desc: "Complete elimination solutions" },
                { title: "Rodent Control", desc: "Rats & mice removal services" },
                { title: "Professional Fumigation", desc: "Commercial-grade treatments" },
                { title: "Dengue & Mosquito Control", desc: "Public health protection" },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer rounded-2xl border border-brand-green/10 bg-white p-4 transition-all duration-300 hover:border-brand-green/30 hover:shadow-lg dark:bg-gray-800/50"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-green/20 transition-colors group-hover:bg-brand-green/30">
                      <div className="h-2 w-2 rounded-full bg-brand-green" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-brand-navy transition-colors group-hover:text-brand-green dark:text-white">
                        {service.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

