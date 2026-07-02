import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Sitemap | Islamabad PestControl",
  description: "Browse the main pages of Islamabad PestControl for pest control, termite control, fumigation, and contact information.",
  openGraph: {
    title: "Sitemap | Islamabad PestControl",
    description: "Browse the main pages of Islamabad PestControl for pest control, termite control, fumigation, and contact information.",
    type: "website",
  },
};

const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/services/pest-control", label: "Pest Control Services" },
  { href: "/services/termite-control", label: "Termite Control Services" },
  { href: "/services/fumigation", label: "Fumigation Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faqs", label: "FAQs" },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <FadeIn>
        <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.5) 100%), url(/termite.png)" }}>
          <div className="container-max text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-green-50">
              Site<span className="text-green-200">map</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Find the most important pages of our website quickly and easily.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container-max">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                >
                  <h2 className="text-lg font-semibold text-brand-navy dark:text-white">
                    {page.label}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Visit {page.label.toLowerCase()}.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
