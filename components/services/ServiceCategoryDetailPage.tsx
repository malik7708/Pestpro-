"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import {
  getCategoryServiceCards,
  getRelatedServiceCategories,
  type ResolvedServiceCategory,
} from "@/lib/serviceCategoryContent";

const themeByService: Record<
  string,
  {
    hero: string;
    badge: string;
    card: string;
    button: string;
    muted: string;
  }
> = {
  "pest-control": {
    hero: "from-[#0d4b33] via-[#1a6a49] to-[#d4ef8a]",
    badge: "border-[#d4ef8a]/35 bg-[#d4ef8a]/12 text-[#f2ffd2]",
    card: "border-[#d4ef8a]/20 bg-white/10",
    button: "bg-white text-[#0d4b33] hover:bg-[#f3ffd0]",
    muted: "text-white/78",
  },
  "termite-control": {
    hero: "from-[#0d4b33] via-[#1a6a49] to-[#d4ef8a]",
    badge: "border-[#d4ef8a]/35 bg-[#d4ef8a]/12 text-[#f2ffd2]",
    card: "border-[#d4ef8a]/20 bg-white/10",
    button: "bg-white text-[#0d4b33] hover:bg-[#f3ffd0]",
    muted: "text-white/78",
  },
  "fumigation": {
    hero: "from-[#22313d] via-[#335261] to-[#7ec4bf]",
    badge: "border-[#7ec4bf]/35 bg-[#7ec4bf]/12 text-[#d9fffb]",
    card: "border-[#7ec4bf]/20 bg-white/10",
    button: "bg-white text-[#22313d] hover:bg-[#e7fbf8]",
    muted: "text-white/80",
  },
};

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/15 bg-brand-green/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceCategoryDetailPage({
  data,
  contactCta = "Book a Free Inspection",
}: {
  data: ResolvedServiceCategory;
  contactCta?: string;
}) {
  const theme = themeByService[data.mainService.id];
  const relatedServices = getRelatedServiceCategories(data.mainService.id, data.slug);
  const serviceCards = getCategoryServiceCards(data);
  const primaryIncludedCards =
    serviceCards.length > 6 ? serviceCards.slice(0, Math.ceil(serviceCards.length / 2)) : serviceCards;
  const heroImageIsRemote = data.content.image.startsWith("http");
  const serviceFitSummary = data.content.suitableFor
    .slice(0, 2)
    .join(", ")
    .replace(/, ([^,]*)$/, ", and $1");
  const serviceHighlightSummary = data.content.highlights
    .slice(0, 2)
    .join(", ")
    .replace(/, ([^,]*)$/, ", and $1");
  const processSummary = data.content.process
    .map((step) => `${step.title.toLowerCase()} with ${step.description.toLowerCase()}`)
    .slice(0, 2)
    .join(". ")
    .replace(/\.\s*$/, "");
  const showServiceGallery = !(data.mainService.id === "fumigation" && data.slug === "residential");
  const showResidentialFeatureImage =
    data.mainService.id === "fumigation" && data.slug === "residential";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.content.heroTitle,
    description: data.content.heroDescription,
    serviceType: data.category.label,
    areaServed: ["Islamabad", "Rawalpindi"],
    provider: {
      "@type": "LocalBusiness",
      name: "Islamabad PestControl",
      telephone: "+92 322 9162746",
      url: "https://icpestcontrol.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${data.category.label} service inclusions`,
      itemListElement: serviceCards.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.description,
        },
      })),
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />

      <section className={`relative overflow-hidden bg-gradient-to-br ${theme.hero} pt-40 pb-20 text-white`}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container-max relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${theme.badge}`}>
                <ShieldCheck size={14} />
                {data.mainService.label}
              </div>

              <h1 className="mt-6 max-w-4xl break-words font-display text-4xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-5xl lg:text-6xl">
                {data.content.heroTitle}
              </h1>

              <p className={`mt-6 max-w-3xl break-words text-lg leading-8 [overflow-wrap:anywhere] ${theme.muted}`}>
                {data.content.heroDescription}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className={`btn-primary justify-center border-0 ${theme.button}`}>
                  {contactCta}
                  <ArrowRight size={18} />
                </Link>
                <a href="tel:+923229162746" className="btn-outline justify-center border-white/35 text-white hover:bg-white hover:text-slate-900">
                  <Phone size={18} />
                  Call +92 322 9162746
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {data.content.highlights.slice(0, 3).map((item) => (
                  <div key={item} className={`rounded-2xl border p-4 backdrop-blur-sm ${theme.card}`}>
                    <p className="text-sm leading-6 text-white/88">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-white/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl shadow-slate-950/30">
                <Image
                  src={data.content.image}
                  alt={data.content.imageAlt}
                  width={900}
                  height={680}
                  className="h-full w-full object-cover"
                  priority
                  unoptimized={heroImageIsRemote}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {data.content.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
                <p className="font-display text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-sm text-white/72">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max space-y-6">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-1">
              <div className="rounded-[1.7rem] bg-slate-50 p-7 sm:p-8">
                <SectionTitle
                  eyebrow="Service Overview"
                  title={data.content.overviewTitle}
                  description={data.category.description}
                />

                <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
                  {data.content.overviewParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-display text-2xl font-semibold text-slate-900">Where this service adds the most value</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    This service is especially useful for {serviceFitSummary}. It is usually chosen when property owners want a more practical solution built around the way the site is actually used each day.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Clients usually look for this category because they need {serviceHighlightSummary}. That makes it easier to manage recurring problems without relying on one short-term treatment only.
                  </p>
                </div>

                {showResidentialFeatureImage && (
                  <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                    <div className="relative h-[260px] w-full">
                      <Image
                        src="/club-fumigation.png"
                        alt="Residential fumigation service support"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 50vw"
                        priority={false}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-semibold text-slate-900">Included in this service</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Every card below represents a service visitors can explore under {data.category.label.toLowerCase()}.
                </p>

                <div className="mt-6 space-y-3">
                  {primaryIncludedCards.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3"
                    >
                      <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-brand-green" />
                      <div>
                        <p className="font-medium text-slate-900">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="font-display text-3xl font-semibold text-slate-900">Why this service is usually booked early</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Clients often book {data.category.label.toLowerCase()} when they want quicker control over conditions that affect daily use, hygiene, or customer comfort. It is a practical fit for {serviceFitSummary}.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  In most cases, the work begins with {processSummary}. That helps the service match the layout, risk level, and active pressure on the property instead of using one generic treatment everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
            <div>
              <h2 className="mb-6 font-display text-3xl font-semibold text-slate-900 lg:text-4xl">
                Professional {data.category.label.toLowerCase()} by certified experts
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  At Islamabad PestControl, our team of certified professionals specializes in {data.category.label.toLowerCase()} with proven methods that deliver results. We combine industry-leading techniques with eco-friendly solutions to protect your property and family.
                </p>
                <p>
                  Whether you&apos;re dealing with an active infestation or planning preventative treatment, our specialists conduct thorough inspections and develop customized treatment plans tailored to your specific situation and property layout.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "100% Satisfaction Guarantee",
                  "Licensed & Insured Technicians",
                  "Eco-Friendly Solutions",
                  "Same-Day Service Available",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="flex-shrink-0 text-brand-green" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years Experience", value: "18+" },
                { label: "Properties Treated", value: "20K+" },
                { label: "5-Star Rating", value: "4.9" },
                { label: "Service Areas", value: "12+" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-brand-green/10 p-6 text-center">
                  <div className="mb-2 font-display text-3xl font-bold text-brand-green">{stat.value}</div>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Comprehensive Assessment",
                description: "We identify root causes, assess property conditions, and develop targeted strategies rather than applying generic treatments to every situation.",
              },
              {
                title: "Customized Treatment Plans",
                description: "Each property is unique. Our specialists design treatment plans based on your specific pest pressure, property layout, and usage patterns.",
              },
              {
                title: "Ongoing Monitoring & Support",
                description: "We provide follow-up visits, monitoring services, and preventative maintenance to ensure long-term protection and peace of mind.",
              },
              {
                title: "Safety First Approach",
                description: "All treatments are designed to minimize risk to children, pets, and the environment while maximizing effectiveness against pests.",
              },
              {
                title: "Transparent Communication",
                description: "We explain findings clearly, discuss options, provide honest pricing, and never recommend unnecessary services or treatments.",
              },
              {
                title: "Guaranteed Results",
                description: "If pests return within our guarantee period, we return at no additional cost to resolve the issue and restore your peace of mind.",
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="mb-3 font-display font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-semibold text-slate-900 lg:text-4xl">
              Serving Islamabad, Rawalpindi, and surrounding areas
            </h2>
            <p className="text-lg text-slate-600">
              With 18 years of experience protecting properties across Pakistan, we&apos;re your trusted local partner for {data.category.label.toLowerCase()} in Islamabad, Rawalpindi, Taxila, Murree, and nearby communities.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { area: "Islamabad", desc: "Professional service for homes and businesses" },
              { area: "Rawalpindi", desc: "Comprehensive treatment solutions available" },
              { area: "Taxila", desc: "Trusted local pest control specialists" },
              { area: "Murree", desc: "Expert seasonal and year-round services" },
            ].map((item) => (
              <div key={item.area} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <h3 className="mb-2 font-display font-semibold text-slate-900">{item.area}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showServiceGallery && (
        <section className="section-padding">
          <div className="container-max">
            <SectionTitle
              eyebrow="Service Gallery"
              title={`Explore every ${data.category.label.toLowerCase()} option`}
              description="Each service card includes focused content and an image so visitors can scan the full service range without running into empty sections or thin detail pages."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {serviceCards.map((item) => {
                const fallbackImage = item.image && (item.image.startsWith("http") || item.image.startsWith("/")) ? item.image : "/pest2.png";

                return (
                  <article
                    key={item.title}
                    className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative min-h-56 bg-slate-100">
                      <Image
                        src={fallbackImage}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        unoptimized={fallbackImage.startsWith("http")}
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green">{item.tag}</p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-max grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="font-display text-3xl font-semibold text-slate-900">Why clients choose this service</h3>
            <div className="mt-6 grid gap-4">
              {data.content.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4">
                  <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-brand-green" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="font-display text-3xl font-semibold text-slate-900">Frequently asked questions</h3>
            <div className="mt-6 space-y-4">
              {data.content.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h4 className="font-semibold text-slate-900">{faq.question}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionTitle
            eyebrow="Our Process"
            title={`How we deliver ${data.category.label.toLowerCase()}`}
            description="Every service follows a simple, practical sequence so clients know what to expect before, during, and after the visit."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {data.content.process.map((step, index) => (
              <div key={step.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-900 to-[#123821] text-white">
        <div className="container-max">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Next Step
                </div>
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Need help choosing the right service?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
                  Tell us about the pest issue or sanitation need. We will help you choose the right service plan for your property and usage pattern.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link href="/contact" className="btn-primary justify-center">
                  Get a Quote
                  <ArrowRight size={18} />
                </Link>
                <a href="tel:+923229162746" className="btn-outline justify-center border-white/20 text-white hover:bg-white hover:text-slate-900">
                  Call for Advice
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionTitle
            eyebrow="Explore More"
            title="You may also need these services"
            description="These related service cards make it easier to explore other treatments that often fit the same property needs."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedServices.map((service) => (
              <Link
                key={`${service.mainService.id}-${service.slug}`}
                href={service.category.href}
                className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/35 hover:bg-white hover:shadow-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
                  {service.mainService.label}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900">
                  {service.category.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.category.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
                  Explore Service
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

