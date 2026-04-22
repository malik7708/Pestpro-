import type { Metadata } from "next";
import { CheckCircle, Award, Star } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { ParallaxServicesSection } from "@/components/sections/ParallaxServicesSection";

export const metadata: Metadata = {
  title: "About Us – PestPro | Trusted Pest Control Since 2005",
  description:
    "Learn about PestPro's 18-year history, our certified team, eco-friendly approach, and commitment to protecting homes and businesses across Illinois.",
};


const team = [
  {
    name: "Michael Anderson",
    role: "Founder & CEO",
    experience: "22 years",
    cert: "Certified Pesticide Applicator",
    avatar: "MA",
    color: "from-brand-green to-emerald-500",
    bio: "Founded PestPro in 2005 after 4 years with the NPMA. Michael's vision: make professional pest control accessible and safe for every family.",
  },
  {
    name: "Jennifer Lee",
    role: "Head of Operations",
    experience: "14 years",
    cert: "QualityPro Certified",
    avatar: "JL",
    color: "from-blue-500 to-cyan-500",
    bio: "Jennifer oversees all field operations, ensuring every technician upholds our gold standard of service and safety protocols.",
  },
  {
    name: "Carlos Rivera",
    role: "Lead Termite Specialist",
    experience: "16 years",
    cert: "Structural Fumigation Licensed",
    avatar: "CR",
    color: "from-amber-500 to-orange-500",
    bio: "Illinois' leading termite expert, Carlos has treated over 5,000 homes and developed our proprietary dual-barrier termite system.",
  },
  {
    name: "Amanda Foster",
    role: "Bed Bug Division Head",
    experience: "10 years",
    cert: "Bed Bug Specialist Certified",
    avatar: "AF",
    color: "from-purple-500 to-violet-500",
    bio: "Amanda leads our K-9 bed bug detection program and heat treatment division with a 99.8% elimination success rate.",
  },
];

const values = [
  { title: "Integrity First", desc: "Honest assessments, transparent pricing. We never recommend services you don't need.", image: "integrity-image.png", order: 1 },
  { title: "Family Safety", desc: "All treatments prioritize the safety of your children, pets, and the environment.", image: "family-safety-image.png", order: 2 },
  { title: "Excellence", desc: "Continuous training and investment in the latest pest control technologies.", image: "excellence-image.png", order: 4 },
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

const milestones = [
  { year: "2005", event: "PestPro founded in Springfield, IL with 3 technicians" },
  { year: "2008", event: "Expanded to 12 service areas across central Illinois" },
  { year: "2012", event: "Received QualityPro certification — top 3% of US companies" },
  { year: "2015", event: "Launched K-9 bed bug detection program" },
  { year: "2018", event: "Opened second office in Chicago, serving metro area" },
  { year: "2020", event: "Introduced GreenPro eco-friendly treatment line" },
  { year: "2023", event: "Surpassed 20,000 protected homes milestone" },
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
        className="pt-48 pb-24 relative"
        style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #0f4d2e 60%, #0d1f3c 100%)" }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="container-max relative z-10 text-center">
          <div className="section-tag justify-center text-brand-green-light mb-6">
            <span className="w-8 h-0.5 bg-brand-green-light" />
            Est. 2005 — 18 Years of Excellence
            <span className="w-8 h-0.5 bg-brand-green-light" />
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-brand-gold">PestPro</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
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
                About PestPro
              </div>
              <h2 className="section-heading mb-6">
                Leading Provider of <span className="text-gradient">Pest Control Services</span>
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  PestPro is a leading provider of pest control services / termite control services company in major cities of Pakistan, including Rawalpindi, Islamabad, Sargodha, Faisalabad, Lahore, Sialkot and Peshawar. Whether you&apos;re searching for &quot;pest control near me&quot; or &quot;exterminator near me,&quot; we are your trusted local experts, delivering effective, affordable, and eco-friendly solutions to both residential and commercial clients.
                </p>
                <p>
                  With years of hands-on experience, our team knows exactly how to handle termite problems—whether it&apos;s spotting early signs of an infestation, explaining the treatment costs clearly, or providing effective anti-termite solutions that truly work for both homes and businesses.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <div className="text-6xl mb-4">🖼️</div>
                  <div className="text-sm font-medium">About Us Image Placeholder</div>
                  <div className="text-xs mt-1">Replace with: about-us-image.jpg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        className="pt-20 pb-8 lg:pt-32 lg:pb-16 relative overflow-hidden"
        style={{
          backgroundImage: "url('/hero2.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(13, 31, 60, 0.82)",
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="container-max relative z-10 text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">
                <span className="w-8 h-0.5 bg-brand-green" />
                Our Story
              </div>
              <h2 className="section-heading mb-6 text-white">
                Built on Trust,<br />
                <span className="text-gradient">Driven by Results</span>
              </h2>
              <div className="space-y-4 text-white/85 leading-relaxed">
                <p>
                  PestPro was founded in 2005 by Michael Anderson, a certified pesticide applicator with a simple but powerful mission: 
                  to provide honest, effective, and family-safe pest control services to Illinois homeowners.
                </p>
                <p>
                  Starting with just 3 technicians and a single service van, Michael built PestPro on the principle that 
                  every customer deserves transparent pricing, expert service, and guaranteed results — no exceptions.
                </p>
                <p>
                  Today, PestPro employs over 50 certified specialists, serves 12+ service areas, and has protected more than 
                  20,000 homes and businesses. We&apos;re still locally owned, family-operated, and just as committed to our 
                  founding values as the day we started.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { n: "20,000+", l: "Homes Protected" },
                  { n: "50+", l: "Expert Staff" },
                  { n: "4.9★", l: "Average Rating" },
                ].map(({ n, l }) => (
                  <div key={l} className="text-center p-4 bg-brand-green-50 dark:bg-gray-900 rounded-2xl">
                    <div className="font-display text-3xl font-bold text-brand-green">{n}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6 bg-white/10 backdrop-blur-sm rounded-[32px] p-8 border border-white/15">
              <h3 className="font-display font-bold text-white text-2xl mb-6">Our Journey</h3>
              {milestones.map(({ year, event }, i) => (
                <div key={year} className="flex gap-4 rounded-3xl bg-white/5 p-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 gradient-green rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-brand-sm">
                      {year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && <div className="w-0.5 h-full bg-brand-green/30 my-1" />}
                  </div>
                  <div className="pb-1">
                    <div className="text-brand-green font-semibold text-sm">{year}</div>
                    <div className="text-white/85 text-sm leading-relaxed">{event}</div>
                  </div>
                </div>
              ))}
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
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <div className="text-3xl mb-2">🖼️</div>
                    <div className="text-xs font-medium">{image.replace('-image.jpg', '').replace('-', ' ')}</div>
                  </div>
                </div>
                <h3 className="font-display font-bold text-brand-navy dark:text-white text-lg mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag justify-center">
              <span className="w-8 h-0.5 bg-brand-green" />
              Our Team
              <span className="w-8 h-0.5 bg-brand-green" />
            </div>
            <h2 className="section-heading mb-4">
              Meet the <span className="text-gradient">Experts</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our leadership team brings decades of combined experience and genuine passion for pest-free living.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card-base p-8 text-center group">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-display font-bold text-2xl mx-auto mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  {member.avatar}
                </div>
                <h3 className="font-display font-bold text-brand-navy dark:text-white text-lg">{member.name}</h3>
                <div className="text-brand-green font-medium text-sm mt-1 mb-1">{member.role}</div>
                <div className="text-gray-500 text-xs mb-3 flex items-center justify-center gap-2">
                  <Award size={12} className="text-brand-gold" />
                  {member.cert}
                </div>
                <div className="text-xs text-gray-500 flex items-center justify-center gap-1 mb-4">
                  <Star size={12} className="fill-brand-gold text-brand-gold" />
                  {member.experience} experience
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
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
              Policy of <span className="text-gradient">A to Z Global Enterprises</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              At A to Z Global Enterprises, our policies reflect our dedication to quality service, environmental responsibility, and customer well-being.
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
