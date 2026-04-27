import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Award, Star, Trophy, Users, MapPin, CheckCircle2, Leaf } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us – IC Pest Control | Trusted Pest Control in Islamabad & Rawalpindi",
  description:
    "Learn about IC Pest Control's commitment to safe, reliable pest management using advanced techniques and eco-friendly products. Serving Islamabad, Rawalpindi, Taxila, and Murree.",
};


const ceo = {
  name: "Muhummad Abuzar",
  role: "Founder & CEO",
  experience: "22 years",
  cert: "Certified Pesticide Applicator",
  avatar: "MA",
  color: "from-brand-green to-emerald-500",
  bio: "Founded IC PestControl in 2005 after 4 years with the NPMA. Muhummad Abuzar's vision has always been to make professional pest control accessible, safe, and dependable for every family and business we serve.",
};

const values = [
  { title: "Integrity First", desc: "Honest assessments, transparent pricing. We never recommend services you don't need.", image: "integrity-image.png", order: 1 },
  { title: "Family Safety", desc: "All treatments prioritize the safety of your children, pets, and the environment.", image: "family-safety-image.png", order: 2 },
  { title: "Excellence", desc: "Continuous training and investment in the latest pest control technologies.", image: "excellence-image..png", order: 4 },
  { title: "Community", desc: "Locally owned and operated. We reinvest in the communities we serve.", image: "community-image.png", order: 3 },
];

const certifications = [
  { name: "National Pest Management Association", year: "Member since 2005" },
  { name: "EPA Certified Pesticide Applicators", year: "All technicians certified" },
  { name: "QualityPro Certification", year: "Industry gold standard" },
  { name: "GreenPro Eco-Friendly Certification", year: "Sustainable practices" },
  { name: "Better Business Bureau A+ Rating", year: "18 consecutive years" },
  { name: "Illinois Department of Agriculture", year: "Licensed & regulated" },
];

const policies = [
  {
    title: "Customer Commitment",
    desc: "We treat each property as if it were our own, ensuring the job is done right the first time with care, honesty, and attention to detail.",
  },
  {
    title: "Eco-Friendly Approach",
    desc: "We use safe, approved products and offer pet-friendly pest control and organic pest control for homes, minimizing risks to your family and the environment.",
  },
  {
    title: "Responsiveness & Reliability",
    desc: "Our team is available for emergency pest control and same-day services in Rawalpindi, Islamabad, Lahore, Sargodha, Faisalabad, Sialkot, Peshawar, and nearby areas.",
  },
  {
    title: "Continuous Improvement",
    desc: "We continually invest in the latest training and technology to make sure we deliver the most effective solutions for termite treatment, bed bug removal, rodent control, and a wide range of other pest issues so you always get results you can trust.",
  },
  {
    title: "Transparent Practices",
    desc: "We believe in clear communication from explaining the cost of termite treatment to providing expert advice on termite prevention tips for homeowners and how to get rid of termites in walls.",
  },
  {
    title: "Privacy & Data Protection",
    desc: "We are committed to protecting your personal information and maintaining strict confidentiality regarding your property details, contact information, and service history.",
  },
  {
    title: "Service Guarantees",
    desc: "All our pest control services come with comprehensive guarantees. If pests return within the specified period, we'll return at no additional cost to resolve the issue.",
  },
  {
    title: "Community Responsibility",
    desc: "We actively participate in community education programs, providing free workshops on pest prevention and environmental protection in the areas we serve.",
  },
];

export default function AboutPage() {
  return (
    <>
   
      {/* Hero */}
      <section
        className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 100%), url(/hero.png)'}}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/40"></div>
        <div className="container-max relative z-10 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-brand-green/20 backdrop-blur-sm border border-brand-green-100 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 text-[10px] sm:text-sm font-semibold">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-brand-green rounded-full" />
            Est. 2005 — 18 Years of Excellence
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-brand-green rounded-full" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            About <span className="text-green-200">IC PestControl</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-white/90 max-w-2xl mx-auto px-2">
            Illinois&apos; most trusted pest control company, protecting homes and businesses since 2005.
          </p>
        </div>
      </section>

       {/* About Content Section */}
      <section className="section-padding dark:text-gray-400 dark:bg-gray-950">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">
                <span className="w-8 h-0.5 bg-brand-green" />
                About IC PestControl
              </div>
              <h2 className="section-heading mb-6">
                Leading Provider of <span className="text-gradient">Pest Control Services</span>
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  At IC Pest Control, we focus on delivering high-quality pest management solutions that are safe for your family, property, and the environment. Our team uses advanced tools and industry-approved chemicals to eliminate pests efficiently and prevent future infestations.
                </p>
                <p>
                  We follow the principles of Integrated Pest Management (IPM), ensuring long-term protection with minimal environmental impact. Our commitment to precision, safety, and customer satisfaction makes us one of the most reliable pest control companies in Islamabad and Rawalpindi.
                </p>
                <p className="font-semibold text-brand-navy dark:text-brand-green">
                  Whether you need pest control, termite treatment, fumigation, rodent control, cockroach removal, or dengue spray services — we have the expertise and dedication to protect your property.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <Image
                  src="/collage.png"
                  alt="About IC PestControl"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        className="relative overflow-hidden bg-brand-navy bg-cover bg-center bg-no-repeat bg-scroll pt-16 pb-12 sm:pt-20 sm:pb-14 lg:bg-fixed lg:pt-32 lg:pb-16"
        style={{
          backgroundImage: "url('/hero2.png')",
          backgroundColor: "rgba(13, 31, 60, 0.82)",
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="container-max relative z-10 text-white">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="section-tag bg-lime-200/200 text-lime-200 mb-6">
                <span className="w-8 h-0.5 bg-lime-200" />
                Our Story
              </div>
              <h2 className="section-heading mb-6 text-white">
                Built on Trust,<br />
                <span className="text-lime-200">Driven by Results</span>
              </h2>
              <div className="space-y-4 text-sm leading-8 text-white/85 sm:text-base">
                <p>
                  IC PestControl was founded in 2005 by Muhummad Abuzar, a certified pesticide applicator with a simple but powerful mission: 
                  to provide honest, effective, and family-safe pest control services to Illinois homeowners.
                </p>
                <p>
                  Starting with just 3 technicians and a single service van, Muhummad Abuzar built IC PestControl on the principle that 
                  every customer deserves transparent pricing, expert service, and guaranteed results — no exceptions.
                </p>
                <p>
                  Today, IC PestControl employs over 50 certified specialists, serves 12+ service areas, and has protected more than 
                  20,000 homes and businesses. We&apos;re still locally owned, family-operated, and just as committed to our 
                  founding values as the day we started.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 min-[480px]:grid-cols-3 sm:gap-6">
                {[
                  { n: "20,000+", l: "Homes Protected" },
                  { n: "50+", l: "Expert Staff" },
                  { n: "4.9★", l: "Average Rating" },
                ].map(({ n, l }) => (
                  <div key={l} className="rounded-2xl bg-brand-green-50 p-5 text-center dark:bg-gray-900">
                    <div className="font-display text-2xl font-bold text-brand-green sm:text-3xl">{n}</div>
                    <div className="mt-1 text-sm leading-snug text-gray-600 dark:text-gray-400">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Statistics */}
            <div className="space-y-6 rounded-[32px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:p-8">
              <h3 className="font-display font-bold text-white text-2xl mb-8">Our Achievements</h3>
              
              {/* Achievement Cards */}
              <div className="space-y-5">
                {[
                  { Icon: Trophy, stat: "20,000+", label: "Properties Protected", desc: "Residential and commercial" },
                  { Icon: Users, stat: "50+", label: "Certified Experts", desc: "Trained and qualified team members" },
                  { Icon: Star, stat: "4.9/5", label: "Client Satisfaction", desc: "Highest rating in the region" },
                  { Icon: MapPin, stat: "12+", label: "Service Areas", desc: "Covering Islamabad, Rawalpindi, Taxila & Murree" },
                  { Icon: CheckCircle2, stat: "100%", label: "Guaranteed Results", desc: "Safe treatments with long-term prevention" },
                  { Icon: Leaf, stat: "IPM", label: "Certified Methods", desc: "Integrated Pest Management approach" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 rounded-3xl bg-white/5 p-5 transition-all hover:bg-white/10">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-brand-green/20">
                      <item.Icon size={28} className="text-[#c8e87d]" />
                    </div>
                    <div className="min-w-0 flex-grow">
                      <div className="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span className="font-display text-2xl font-bold text-[#c8e87d]">{item.stat}</span>
                        <span className="text-base font-semibold text-white/85 sm:text-lg">{item.label}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag justify-center">
              <span className="w-8 h-0.5 bg-brand-green" />
              Mission & Values
              <span className="w-8 h-0.5 bg-brand-green" />
            </div>
            <h2 className="section-heading mb-4">
              What We Stand <span className="text-gradient">For</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our values aren&apos;t just words on a wall — they guide every decision we make and every service we deliver.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 lg:justify-center">
            {values
              .sort((a, b) => a.order - b.order)
              .map(({ title, desc, image }, index) => (
              <div
                key={title}
                className={`card-base p-6 text-center group hover:shadow-lg transition-all duration-300 flex-1 min-w-0 ${
                  index % 2 === 1 ? 'lg:mt-12' : ''
                }`}
                style={{
                  maxWidth: '320px',
                  borderRadius: '8px'
                }}
              >
                <div className="relative w-full h-32 mb-4 rounded-md overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <Image
                    src={`/${image}`}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <h3 className="font-display font-bold text-brand-navy dark:text-white text-lg mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag justify-center">
              <span className="w-8 h-0.5 bg-brand-green" />
              Leadership
              <span className="w-8 h-0.5 bg-brand-green" />
            </div>
            <h2 className="section-heading mb-4">
              Meet the <span className="text-gradient">Founder</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              The company is led by one experienced professional with a clear focus on safe service, honest guidance, and long-term trust.
            </p>
          </div>

          <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm sm:p-8 lg:p-10 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center">
              <div className="flex flex-col items-center rounded-[1.75rem] border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className={`mb-5 flex h-24 w-24 items-center justify-center rounded-[1.5rem] bg-gradient-to-br ${ceo.color} font-display text-3xl font-bold text-white shadow-lg`}>
                  {ceo.avatar}
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-navy dark:text-white">{ceo.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">{ceo.role}</p>
                <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-gray-400">
                  <div className="flex items-center justify-center gap-2">
                    <Award size={14} className="text-brand-gold" />
                    <span>{ceo.cert}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Star size={14} className="fill-brand-gold text-brand-gold" />
                    <span>{ceo.experience} experience</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h3 className="font-display text-3xl font-semibold text-brand-navy dark:text-white">
                  Leadership built on experience and accountability
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-600 dark:text-gray-400">
                  {ceo.bio}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-gray-400">
                  His leadership approach is centered on service quality, practical treatment planning, and clear communication so clients feel confident from inspection through follow-up.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    "Trusted local leadership",
                    "Inspection-led decisions",
                    "Safe and professional service",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag justify-center">
              <span className="w-8 h-0.5 bg-brand-green" />
              Certifications
              <span className="w-8 h-0.5 bg-brand-green" />
            </div>
            <h2 className="section-heading mb-4">
              Industry <span className="text-gradient">Credentials</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map(({ name, year }) => (
              <div key={name} className="card-base p-6 flex items-start gap-4">
                <div className="w-10 h-10 gradient-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-brand-navy dark:text-white text-sm">{name}</div>
                  <div className="text-gray-500 text-xs mt-1">{year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag justify-center">
              <span className="w-8 h-0.5 bg-brand-green" />
              Our Policies
              <span className="w-8 h-0.5 bg-brand-green" />
            </div>
            <h2 className="section-heading mb-4">
              Policy of <span className="text-gradient">IC PestControl Enterprises</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              IC PestControl, our policies reflect our dedication to quality service, environmental responsibility, and customer well-being.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {policies.map(({ title, desc }) => (
              <div key={title} className="card-base p-6 text-center group hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 border-t-4 border-t-brand-green">
                <h3 className="font-display font-bold text-brand-navy dark:text-white text-lg mb-4">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
