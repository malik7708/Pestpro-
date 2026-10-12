import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardList,
  Database,
  Eye,
  FileText,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Islamabad Pest Control collects, uses, stores, and protects information submitted through our website.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    id: "information-we-collect",
    number: "01",
    icon: ClipboardList,
    title: "Information we collect",
    paragraphs: [
      "When you send an enquiry through our contact form, we collect the information you choose to provide: your name, phone number, email address, and message. Please avoid including sensitive personal or financial information in the message.",
      "When you browse the website, our hosting provider may process basic technical data needed to deliver and protect the site, such as request details, timestamps, and error information.",
    ],
  },
  {
    id: "how-we-use-information",
    number: "02",
    icon: Eye,
    title: "How we use your information",
    paragraphs: [
      "We use enquiry details to respond to you, discuss requested inspections or estimates, coordinate pest-control services, and keep appropriate business records.",
      "Technical information may be used to operate, troubleshoot, and protect the website. We do not sell your personal information or use contact enquiries to build advertising profiles.",
    ],
  },
  {
    id: "storage-and-service-providers",
    number: "03",
    icon: Database,
    title: "Storage and service providers",
    paragraphs: [
      "Contact form submissions are stored in our application database and sent to our business email so our team can follow up. Website hosting, database, and email providers process information as needed to provide those services.",
      "The website also includes an embedded Google Map on some pages. If you load that map, Google may receive technical information from your browser and process it under Google's own privacy terms.",
    ],
  },
  {
    id: "cookies-and-preferences",
    number: "04",
    icon: Check,
    title: "Cookies and browser preferences",
    paragraphs: [
      "This website saves your display-theme preference in your browser's local storage so it can remember your choice on a later visit. You can clear local storage using your browser settings.",
      "Our hosting or embedded third-party services may use technologies required for their operation. Please review those providers' privacy information for details about their own technologies.",
    ],
  },
  {
    id: "retention-and-security",
    number: "05",
    icon: LockKeyhole,
    title: "Retention and security",
    paragraphs: [
      "We retain enquiry information for as long as reasonably needed to respond, provide requested services, maintain business records, or meet applicable legal obligations. Retention periods can vary depending on the nature of the enquiry.",
      "We use reasonable measures to protect information. However, no website, transmission, or storage method can be guaranteed completely secure.",
    ],
  },
  {
    id: "your-choices",
    number: "06",
    icon: ShieldCheck,
    title: "Your choices and requests",
    paragraphs: [
      "You can ask us what enquiry information we hold about you, request a correction, or ask us to delete it. We may need to retain some records where required for legitimate business or legal purposes.",
      "To make a privacy request, contact us using the details below and tell us how you contacted us so we can locate the relevant enquiry.",
    ],
  },
  {
    id: "children-and-third-parties",
    number: "07",
    icon: FileText,
    title: "Children and third-party websites",
    paragraphs: [
      "This website is intended for people seeking information about pest-control services, not for children to submit personal information. If you believe a child has sent us personal information, please contact us.",
      "Our site may link to other websites or display third-party content. We do not control their privacy practices, so please review their policies when you visit or use those services.",
    ],
  },
  {
    id: "policy-updates",
    number: "08",
    icon: CalendarDays,
    title: "Updates to this policy",
    paragraphs: [
      "We may update this policy when our website or information practices change. The current version will appear on this page with its latest update date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy pb-16 pt-36 text-white sm:pb-20 sm:pt-40 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(80,150,103,0.45),transparent_45%),linear-gradient(125deg,#102a22_0%,#173c30_52%,#203e35_100%)]" />
        <div className="absolute -right-24 top-16 -z-10 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
        <div className="absolute -right-12 top-28 -z-10 h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72" />

        <div className="container-max">
          <div className="mb-8 flex items-center gap-2 text-sm text-white/65">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span className="text-white">Privacy Policy</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-100">
              <ShieldCheck size={15} aria-hidden="true" />
              Your privacy matters
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Privacy <span className="text-green-200">Policy</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              A clear guide to the information Islamabad Pest Control receives through this
              website, how we use it, and the choices available to you.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 text-sm text-white/65">
              <CalendarDays size={16} aria-hidden="true" />
              Last updated October 12, 2026
            </div>
          </div>

          <div className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm sm:grid-cols-3 sm:p-7">
            {[
              { label: "What we collect", value: "Only details you submit", icon: ClipboardList },
              { label: "Why we use it", value: "To respond to your enquiry", icon: Eye },
              { label: "Your choices", value: "Ask us to access or correct it", icon: ShieldCheck },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-200/10 text-green-100">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/55">
                    {label}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-white">{value}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f5f8f5]">
        <div className="container-max">
          <div className="grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
            <aside className="space-y-5 lg:sticky lg:top-32">
              <nav
                aria-label="Privacy policy sections"
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <h2 className="font-display text-lg font-semibold text-brand-navy">
                  On this page
                </h2>
                <ol className="mt-4 space-y-1">
                  {sections.map(({ id, number, title }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-brand-green/5 hover:text-brand-green"
                      >
                        <span className="pt-0.5 text-xs font-semibold text-brand-green/70">
                          {number}
                        </span>
                        <span className="leading-5">{title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="overflow-hidden rounded-3xl bg-brand-navy p-6 text-white shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-green-100">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-xl font-semibold">Need help?</h2>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Contact our team with a question or request about your information.
                </p>
                <a
                  href="mailto:info@islamabadpestcontrolpk.com"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-100 transition-colors hover:text-white"
                >
                  Email our team
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </aside>

            <main className="min-w-0">
              <div className="rounded-3xl border border-brand-green/10 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <div className="flex items-start gap-4 rounded-2xl bg-brand-green/[0.06] p-5 sm:p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-green shadow-sm">
                    <ShieldCheck size={21} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-semibold text-brand-navy">
                      The short version
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      We use the contact details you provide to answer you and arrange requested
                      services. We do not sell your personal information. You can contact us to
                      request access, correction, or deletion.
                    </p>
                  </div>
                </div>

                <div className="mt-8 divide-y divide-slate-100">
                  {sections.map(({ id, number, icon: Icon, title, paragraphs }) => (
                    <section
                      id={id}
                      key={id}
                      className="scroll-mt-32 py-7 first:pt-2 last:pb-2 sm:py-8"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green/[0.08] text-brand-green">
                          <Icon size={20} aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <span className="text-xs font-bold tracking-[0.16em] text-brand-green/75">
                              {number}
                            </span>
                            <h2 className="font-display text-lg font-semibold text-brand-navy sm:text-xl">
                              {title}
                            </h2>
                          </div>
                          <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                            {paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </div>

              <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="grid sm:grid-cols-[1fr_auto] sm:items-center">
                  <div className="p-6 sm:p-8">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
                      Privacy contact
                    </div>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-brand-navy">
                      We’re here to help
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                      Send us a privacy question or a request about information you shared with us.
                    </p>
                    <div className="mt-5 flex flex-col gap-3 text-sm sm:flex-row sm:gap-6">
                      <a
                        href="mailto:info@islamabadpestcontrolpk.com"
                        className="inline-flex items-center gap-2 font-medium text-slate-700 transition-colors hover:text-brand-green"
                      >
                        <Mail size={16} className="text-brand-green" aria-hidden="true" />
                        info@islamabadpestcontrolpk.com
                      </a>
                      <a
                        href="tel:+923005515809"
                        className="inline-flex items-center gap-2 font-medium text-slate-700 transition-colors hover:text-brand-green"
                      >
                        <Phone size={16} className="text-brand-green" aria-hidden="true" />
                        +92 300 5515809
                      </a>
                    </div>
                    <p className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500">
                      <MapPin size={14} aria-hidden="true" />
                      Islamabad, Pakistan
                    </p>
                  </div>
                  <div className="border-t border-slate-100 bg-slate-50 p-6 sm:border-l sm:border-t-0 sm:p-8">
                    <Link href="/contact" className="btn-primary whitespace-nowrap">
                      Contact us
                      <ArrowRight size={17} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </section>

              <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                This policy describes our current website practices. It is general information
                and does not replace legal advice.
              </p>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
