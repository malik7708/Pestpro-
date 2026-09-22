import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/motion";

const title = "Termite Treatment in Islamabad: Signs, Treatment & Prevention";
const description = "Spot the early signs of termites (deemak), understand professional treatment options, and learn practical prevention tips for homes and businesses in Islamabad and Rawalpindi.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blogs/termite-treatment-islamabad" },
  keywords: ["termite treatment Islamabad", "deemak treatment Islamabad", "termite control Islamabad", "termite treatment Rawalpindi", "termite prevention"],
  openGraph: { title, description, type: "article", images: ["/termite-control.png"] },
};

const signs = [
  "Hollow-sounding or visibly damaged wood in doors, frames, cabinets, or furniture.",
  "Mud tubes on foundations, walls, or other surfaces near the ground.",
  "Discarded wings near windows, doors, or light sources.",
  "Small holes, bubbling paint, or unusual damage to wooden surfaces.",
];
const preventionTips = [
  "Repair leaking pipes and reduce moisture around wooden areas.",
  "Keep timber, cardboard, and construction debris away from the building.",
  "Avoid direct wood-to-soil contact where possible.",
  "Inspect doors, frames, cabinets, flooring, and furniture regularly.",
  "Arrange preventive treatment for new construction or properties with a termite history.",
];
const faqs = [
  ["How do I know if I have termites?", "Look for hollow wood, mud tubes, discarded wings, small holes, or repeated damage to wooden items. A professional inspection is the best way to confirm active termite activity."],
  ["Can termites damage furniture?", "Yes. Termites feed on cellulose, so wooden wardrobes, cabinets, tables, shelves, and other furniture can be affected."],
  ["Can I get rid of termites with a DIY spray?", "A spray may kill visible termites, but it may not reach the colony or its entry point. Professional inspection helps identify the source and select the right treatment."],
  ["How much does termite treatment cost in Islamabad?", "The price depends on the property size, termite type, extent of activity, access to affected areas, and treatment method. An inspection allows for an accurate quotation."],
];
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: "https://islamabadpestcontrolpk.com/termite-control.png",
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  author: { "@type": "Organization", name: "Islamabad Pest Control" },
  publisher: { "@type": "Organization", name: "Islamabad Pest Control" },
  mainEntityOfPage: "https://islamabadpestcontrolpk.com/blogs/termite-treatment-islamabad",
};

export default function TermiteTreatmentArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <FadeIn>
        <article>
          <section className="bg-[#0d4b33] pb-16 pt-36 text-white sm:pb-20 lg:pt-44"><div className="container-max max-w-5xl"><Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4ef8a] transition hover:text-white"><ArrowLeft size={17} /> Back to blogs</Link><p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4ef8a]">Termite control</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-[#f2ffd2] sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">{description}</p><div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70"><span className="inline-flex items-center gap-2"><CalendarDays size={16} />September 22, 2026</span><span className="inline-flex items-center gap-2"><Clock3 size={16} />6 min read</span></div></div></section>
          <section className="bg-white pb-8 pt-8 sm:pb-12 sm:pt-12"><div className="container-max max-w-5xl"><div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm"><Image src="/termite-control.png" alt="Pest control professional treating a termite-affected door frame" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" /></div></div></section>
          <section className="bg-white pb-20 sm:pb-28"><div className="container-max grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_250px]"><div className="space-y-10 text-[1.05rem] leading-8 text-slate-600">
            <p className="text-xl leading-8 text-slate-700">Termites, commonly called <strong>deemak</strong>, can damage a property quietly for months. They feed on cellulose found in wood, paper, cardboard, and other plant-based materials, putting doors, furniture, cabinets, flooring, and structural timber at risk.</p>
            <section><h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">Why termites are a serious property pest?</h2><p className="mt-4">Termites often stay hidden inside wood, walls, or soil-connected pathways. A door frame or cabinet can look normal from the outside while becoming damaged internally. Early inspection matters because it helps identify activity before repairs become more extensive.
            
            Termites are dangerous not because they damage property overnight, but because they can cause slow, concealed, and potentially extensive damage over time.</p></section>
            <section><h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">Signs of termites in your home</h2><p className="mt-4">If you notice one or more of these warning signs, arrange an inspection rather than waiting for the problem to spread.</p><ul className="mt-5 space-y-4">{signs.map((sign) => <li key={sign} className="flex gap-3"><CheckCircle2 className="mt-1 shrink-0 text-brand-green" size={21} /><span>{sign}</span></li>)}</ul></section>
            <section><h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">What causes termite infestation?</h2><p className="mt-4">Termites are attracted to accessible food and favourable living conditions. Persistent dampness, leaking plumbing, wood touching soil, scrap timber around the property, cracks, and untreated construction materials can all increase the risk. Good maintenance reduces risk, but it cannot guarantee that termites will never appear.</p></section>
            <section><h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">How professional termite treatment works?</h2><div className="mt-5 grid gap-4 sm:grid-cols-3">{[["1", "Inspect", "Check wooden areas, foundations, moisture-prone spaces, and possible entry points."], ["2", "Identify", "Determine the likely termite type, location, and extent of the activity."], ["3", "Treat & prevent", "Apply the appropriate treatment and address conditions that may encourage future activity."]].map(([number, heading, copy]) => <div key={number} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">{number}</span><h3 className="mt-4 font-display text-xl font-semibold text-slate-900">{heading}</h3><p className="mt-2 text-sm leading-6">{copy}</p></div>)}</div><p className="mt-5">Treatment depends on the termite type, the construction of the property, and where activity is found. Subterranean termites may require soil or foundation-focused treatment, while dry-wood termites live inside the timber they feed on and require a different approach. A professional assessment should come before selecting a treatment.</p></section>
            <figure className="overflow-hidden rounded-[2rem] bg-slate-100"><div className="relative aspect-[16/9]"><Image src="/pre-contruction-termite.png" alt="Professional carrying out preventive termite treatment during construction" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 760px" /></div><figcaption className="px-5 py-4 text-sm leading-6 text-slate-500">Preventive termite measures can be considered during new construction, before finishing materials are installed.</figcaption></figure>
            <section><h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">Termite prevention tips</h2><ul className="mt-5 space-y-4">{preventionTips.map((tip) => <li key={tip} className="flex gap-3"><ShieldCheck className="mt-1 shrink-0 text-brand-green" size={21} /><span>{tip}</span></li>)}</ul></section>
            <section><h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">Termite treatment in Islamabad and Rawalpindi</h2><p className="mt-4">If you are searching for termite treatment in Islamabad, termite control Islamabad, deemak treatment Islamabad, or termite treatment in Rawalpindi, start with a proper inspection. Islamabad Pest Control can assess whether termites are active, locate the affected areas, and recommend the right treatment and prevention plan for your property.</p></section>
            <section><h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">Frequently asked questions</h2><div className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200">{faqs.map(([question, answer]) => <div key={question} className="p-5 sm:p-6"><h3 className="font-display text-xl font-semibold text-slate-900">{question}</h3><p className="mt-2 text-base leading-7">{answer}</p></div>)}</div></section>
            <section className="rounded-[2rem] bg-brand-green p-7 text-white sm:p-9"><h2 className="font-display text-3xl font-semibold text-[#f2ffd2]">Protect your property from termite damage</h2><p className="mt-4 leading-7 text-white/80">If you have noticed damaged wood, mud tubes, discarded wings, or other signs of termite activity, do not wait for the damage to increase. A professional inspection can identify the issue and help you choose the right next step.</p><Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d4ef8a] px-5 py-3 text-sm font-bold text-[#0d4b33] transition hover:bg-white">Arrange an inspection <ArrowRight size={17} /></Link></section>
          </div><aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-28"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">In this article</p><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 marker:text-brand-green text-slate-600"><li className="cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:text-brand-green">Why termites are a problem?</li><li className="cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:text-brand-green">Signs to look for.</li><li className="cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:text-brand-green">How treatment works?</li><li className="cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:text-brand-green">Prevention tips</li><li className="cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:text-brand-green">Frequently asked questions?</li></ul></aside></div></section>
        </article>
      </FadeIn>
      <FadeIn><CTASection /></FadeIn>
    </>
  );
}
