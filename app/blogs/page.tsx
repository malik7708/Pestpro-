import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Clock3 } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Pest Control Blog",
  description:
    "Practical pest control advice, prevention tips, and property care insights from Islamabad Pest Control.",
  alternates: { canonical: "/blogs" },
  keywords: [
    "pest control blog",
    "pest prevention tips Islamabad",
    "termite control advice",
    "fumigation guidance",
  ],
};

const post = {
  title: "Termite Treatment in Islamabad: Signs, Treatment & Prevention",
  description:
    "Learn how to spot termite activity early, understand the treatment process, and protect your home or business from further damage.",
  href: "/blogs/termite-treatment-islamabad",
  image: "/termite-control.png",
  date: "September 22, 2026",
  readingTime: "6 min read",
  category: "Termite control",
};

export default function BlogsPage() {
  return (
    <>
      <FadeIn>
        <section className="relative overflow-hidden bg-[#0d4b33] pb-20 pt-40 text-white sm:pb-24 lg:pt-48">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
          <div className="container-max relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d4ef8a]/35 bg-[#d4ef8a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f2ffd2]"><BookOpen size={14} />Pest control insights</div>
              <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-[#f2ffd2] sm:text-5xl lg:text-6xl">Practical advice for healthier, protected spaces</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Clear, locally relevant guidance from Islamabad Pest Control on prevention, treatment, and caring for your property.</p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="max-w-3xl"><div className="section-tag">Latest article</div><h2 className="section-heading">Useful answers for your property</h2><p className="mt-4 text-lg leading-8 text-slate-600">Explore straightforward advice to help you identify risks early and make informed pest control decisions.</p></div>
            <div className="mt-10 grid max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm md:grid-cols-2">
              <div className="relative min-h-72 md:min-h-full"><Image src={post.image} alt="Professional applying termite treatment around a wooden door frame" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" /></div>
              <article className="p-7 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">{post.category}</p>
                <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-900"><Link href={post.href} className="transition hover:text-brand-green">{post.title}</Link></h3>
                <p className="mt-4 leading-7 text-slate-600">{post.description}</p>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500"><span className="inline-flex items-center gap-2"><CalendarDays size={16} />{post.date}</span><span className="inline-flex items-center gap-2"><Clock3 size={16} />{post.readingTime}</span></div>
                <Link href={post.href} className="btn-primary mt-7">Read article<ArrowRight size={18} /></Link>
              </article>
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn><CTASection /></FadeIn>
    </>
  );
}
