import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | Islamabad Pest Control",
  description:
    "Browse all major pages and service categories offered by Islamabad Pest Control.",
  alternates: { canonical: "/sitemap" },
};

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/blogs", label: "Blogs" },
      { href: "/faqs", label: "FAQs" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Pest Control Services",
    links: [
      { href: "/services/pest-control", label: "General Pest Control" },
      { href: "/services/termite-control", label: "Termite Control" },
      { href: "/services/fumigation", label: "Fumigation" },
    ],
  },
  {
    title: "Popular Content",
    links: [
      { href: "/blogs/termite-treatment-islamabad", label: "Termite Treatment in Islamabad" },
      { href: "/contact", label: "Free Inspection" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="container-max py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Sitemap</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Explore our website
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
          Discover the main pages and services we offer for residential and commercial pest control needs across Islamabad.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sitemapSections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>

              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-brand-green"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
