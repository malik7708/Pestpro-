import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { mainServiceCards, mainServices } from "@/lib/servicesConfig";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "All Services",
  description:
    "Explore pest control, termite control, and fumigation services for homes and businesses.",
  keywords: [
    "pest control services",
    "termite control services",
    "fumigation services",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <FadeIn>
      <section
       className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 100%), url(/collage.png)'}}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container-max relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/85">
              <Shield size={14} />
             Pest Control Services Iclamabad
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-green-200">
              Expert pest control for every property need
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white">
              Islamabad Pest Control – your trusted partner for reliable pest control services in Islamabad and Rawalpindi. From termite inspection and fumigation to cockroach, rodent, and dengue control, we deliver complete solutions tailored for residential and commercial properties. Our experienced team ensures fast, safe, and long-lasting results you can depend on.
            </p>
          </div>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="section-tag">Service Highlights</div>
              <h2 className="section-heading">Start with the service you need most</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Your trusted choice for expert pest control, termite treatment, and fumigation services in Islamabad and Rawalpindi, serving both residential and commercial properties.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Request a Free Inspection
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {mainServiceCards.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/35 hover:bg-white hover:shadow-xl"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                  {service.number}
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
                  Learn More
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="max-w-3xl">
            <div className="section-tag">Main Service Groups</div>
            <h2 className="section-heading">Explore by service collection</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our service categories are designed to group related pest control, termite, and fumigation treatments, helping users quickly view included services and navigate to the next solution in Islamabad and Rawalpindi.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {mainServices.map((service) => (
              <div
                key={service.id}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="font-display text-3xl font-semibold text-slate-900">{service.label}</h3>
                <p className="mt-4 text-slate-600">{service.description}</p>

                <div className="mt-6 space-y-3">
                  {service.categories.map((category) => (
                    <div key={category.label} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                      <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-brand-green" />
                      <div>
                        <p className="font-medium text-slate-900">{category.label}</p>
                        <p className="mt-1 text-sm text-slate-500">{category.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href={service.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
                  Explore {service.label}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="section-padding bg-[#0d4b33] text-white">
        <div className="container-max text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Need help choosing the right service page?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
            Share the issue you are facing and we will point you to the best pest control, termite, or fumigation service for your property.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-secondary">
              Book Inspection
            </Link>
              <a href="tel:+923229162746" className="btn-outline border-white/20 text-white hover:bg-white hover:text-[#0d4b33]">
              Call Now
            </a>
          </div>
        </div>
      </section>
      </FadeIn>
      <FadeIn>
        <CTASection />
      </FadeIn>
    </>
  );
}

