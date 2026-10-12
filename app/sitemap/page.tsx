import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, ChevronRight, FileText, Home, ShieldCheck } from "lucide-react";
import { mainServices } from "@/lib/servicesConfig";

export const metadata: Metadata = {
  title: "Website Sitemap | Islamabad Pest Control",
  description:
    "Find every page on the Islamabad Pest Control website, including all pest-control, termite-treatment, and fumigation services.",
  alternates: { canonical: "/sitemap" },
};

const primaryPages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Islamabad Pest Control" },
  { href: "/services", label: "All Services" },
  { href: "/blogs", label: "Pest Control Guides & Blogs" },
  { href: "/blogs/termite-treatment-islamabad", label: "Termite Treatment in Islamabad" },
  { href: "/faqs", label: "Frequently Asked Questions" },
  { href: "/contact", label: "Contact & Free Inspection" },
  { href: "/privacy", label: "Privacy Policy" },
];

const sitemapGroups = [
  {
    title: "Pest Control",
    mainServiceId: "pest-control",
    description: "Targeted services for insects, rodents, and seasonal mosquito control.",
  },
  {
    title: "Termite Control",
    mainServiceId: "termite-control",
    description: "Termite inspection, treatment, and property proofing.",
  },
  {
    title: "Fumigation",
    mainServiceId: "fumigation",
    description: "Fumigation options for residential, commercial, and industrial properties.",
  },
].map((group) => ({
  ...group,
  service: mainServices.find((service) => service.id === group.mainServiceId),
}));

const pageCount =
  primaryPages.length +
  1 +
  sitemapGroups.reduce((count, group) => count + (group.service?.categories.length ?? 0) + 1, 0);

function PageLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-brand-green/[0.06] hover:text-brand-green"
      >
        <span className="flex min-w-0 items-center gap-3">
          <ChevronRight
            size={15}
            className="shrink-0 text-brand-green/60 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
          <span>{label}</span>
        </span>
        <ArrowUpRight
          size={15}
          className="shrink-0 text-slate-300 transition-colors group-hover:text-brand-green"
          aria-hidden="true"
        />
      </Link>
    </li>
  );
}

export default function SitemapPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy pb-14 pt-36 text-white sm:pb-16 sm:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(80,150,103,0.4),transparent_45%),linear-gradient(125deg,#102a22_0%,#173c30_55%,#203e35_100%)]" />
        <div className="absolute -right-20 top-16 -z-10 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
        <div className="absolute -right-8 top-28 -z-10 h-52 w-52 rounded-full border border-white/10 sm:h-72 sm:w-72" />

        <div className="container-max">
          <div className="mb-7 flex items-center gap-2 text-sm text-white/65">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span className="text-white">Sitemap</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-100">
              <FileText size={15} aria-hidden="true" />
              Find your way around
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Website <span className="text-green-200">Sitemap</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Browse every main page and service category on the Islamabad Pest Control website.
              Choose a section below to find the information you need.
            </p>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-200/10 text-green-100">
              <ShieldCheck size={18} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-semibold text-white">{pageCount} pages</span>
              <span className="block text-xs text-white/60">Main pages and service pages</span>
            </span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f5f8f5]">
        <div className="container-max">
          <div className="grid gap-6 lg:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/[0.08] text-brand-green">
                  <Home size={20} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-brand-navy">
                    Main pages & resources
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">Company information and useful guides</p>
                </div>
              </div>
              <ul className="mt-5 divide-y divide-slate-100">
                {primaryPages.map((page) => (
                  <PageLink key={page.href} {...page} />
                ))}
                <PageLink href="/sitemap" label="Website Sitemap" />
              </ul>
            </section>

            {sitemapGroups.map(({ title, mainServiceId, description, service }) =>
              service ? (
                <section
                  key={mainServiceId}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/[0.08] text-brand-green">
                      <ShieldCheck size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-semibold text-brand-navy">
                        {title}
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">{description}</p>
                    </div>
                  </div>
                  <ul className="mt-5 divide-y divide-slate-100">
                    <PageLink href={service.href} label={`${service.label} overview`} />
                    {service.categories.map((category) => (
                      <PageLink
                        key={category.href}
                        href={category.href}
                        label={category.label}
                      />
                    ))}
                  </ul>
                </section>
              ) : null,
            )}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-3xl bg-brand-navy p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="font-display text-xl font-semibold">Can’t find what you need?</h2>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Tell us what pest issue you’re dealing with and our team will help you find the right service.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary shrink-0 self-start whitespace-nowrap sm:self-center"
            >
              Contact our team
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
