import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Leaf, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Pest Control Blog",
  description:
    "Practical pest control advice, prevention tips, and property care insights from Islamabad Pest Control.",
  keywords: [
    "pest control blog",
    "pest prevention tips Islamabad",
    "termite control advice",
    "fumigation guidance",
  ],
};

const blogTopics = [
  {
    icon: ShieldCheck,
    title: "Prevention",
    description: "Simple ways to reduce pest activity before it becomes a larger problem.",
  },
  {
    icon: Leaf,
    title: "Property care",
    description: "Practical guidance for keeping homes, offices, and commercial spaces protected.",
  },
  {
    icon: BookOpen,
    title: "Expert advice",
    description: "Clear answers about inspections, treatments, termites, fumigation, and safety.",
  },
];

export default function BlogsPage() {
  return (
    <>
      <FadeIn>
        <section className="relative overflow-hidden bg-[#0d4b33] pb-20 pt-40 text-white sm:pb-24 lg:pt-48">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="container-max relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d4ef8a]/35 bg-[#d4ef8a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f2ffd2]">
                <BookOpen size={14} />
                Pest control insights
              </div>
              <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-[#f2ffd2] sm:text-5xl lg:text-6xl">
                Practical advice for healthier, protected spaces
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Explore straightforward guidance from Islamabad Pest Control on prevention, treatment, and caring for your property in every season.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="max-w-3xl">
              <div className="section-tag">Coming soon</div>
              <h2 className="section-heading">Useful answers are on the way</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We are preparing the first article for this space. Soon you will find helpful, locally relevant information to help you spot risks early and make better pest control decisions.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {blogTopics.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-dashed border-brand-green/40 bg-brand-green-50/60 p-8 text-center sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">First article coming soon</p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Have a pest control question that needs an answer now? Our team can help you choose the right next step.
              </p>
              <Link href="/contact" className="btn-primary mt-7">
                Ask Our Team
                <ArrowRight size={18} />
              </Link>
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