import { Shield, Award, Clock, Leaf, Users, Building2, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Structured Treatment Plans",
    description: "Every service begins with inspection findings, site conditions, and a practical treatment scope.",
    stat: "100%",
    statLabel: "Inspection-led",
  },
  {
    icon: Award,
    title: "Experienced Pest Team",
    description: "Our team handles recurring pest issues across residential, retail, office, and warehouse properties.",
    stat: "8+",
    statLabel: "Years active",
  },
  {
    icon: Clock,
    title: "Fast Scheduling",
    description: "Same-day or priority scheduling is available for urgent infestations in major service areas.",
    stat: "24/7",
    statLabel: "Support line",
  },
  {
    icon: Leaf,
    title: "Safer Application Methods",
    description: "Low-odor and site-sensitive treatment options help reduce disruption for families and teams.",
    stat: "Low",
    statLabel: "Disruption",
  },
  {
    icon: Users,
    title: "Clear Communication",
    description: "Clients receive practical guidance on preparation, treatment stages, and prevention after service.",
    stat: "1:1",
    statLabel: "Client support",
  },
  {
    icon: Building2,
    title: "Commercial Pest Planning",
    description: "We support offices, restaurants, warehouses, and managed properties with recurring pest control plans.",
    stat: "B2B",
    statLabel: "Service ready",
  },
];

const strengths = [
  "Residential pest control",
  "Commercial pest management",
  "Termite inspection support",
  "Warehouse and office treatment planning",
  "Restaurant and food-site pest control",
  "Follow-up and maintenance visits",
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-tag">
              <span className="w-8 h-0.5 bg-brand-green" />
              Why Choose PestPro
            </div>
            <h2 className="section-heading mb-6">
              Professional Pest Control for
              <br />
              <span className="text-gradient">Homes, Companies, and Managed Properties</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-8 mb-6">
              PestPro works as a practical pest control company for homeowners, businesses,
              facilities teams, and property managers who need reliable inspection, treatment,
              documentation, and follow-up without unnecessary complexity.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-8 mb-8">
              For businesses searching for commercial pest control in Pakistan, termite treatment
              for offices, or recurring pest management for warehouses and restaurants, our focus
              stays on safe application, site suitability, and long-term prevention.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { n: "5,000+", label: "Properties Served", sub: "Residential and commercial" },
                { n: "4.9", label: "Client Rating", sub: "Service satisfaction" },
                { n: "30", label: "Day Follow-Up", sub: "Support window" },
              ].map(({ n, label, sub }) => (
                <div key={label} className="text-center p-4 bg-brand-green-50 dark:bg-gray-900 rounded-2xl border border-brand-green/10">
                  <div className="font-display text-3xl font-bold text-brand-green">{n}</div>
                  <div className="font-semibold text-brand-navy dark:text-white text-sm mt-1">{label}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{sub}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold text-brand-navy dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand-green" />
                Core Service Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1.5 rounded-full"
                  >
                    <CheckCircle2 size={12} className="text-brand-green" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {reasons.map(({ icon: Icon, title, description, stat, statLabel }, index) => (
              <div
                key={title}
                className="card-base p-4 sm:p-6 group hover:border-brand-green/30 border border-transparent"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-green rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-brand-sm">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-brand-navy dark:text-white text-sm sm:text-base mb-1">{title}</div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-6">{description}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
                  <span className="font-display font-bold text-brand-green text-xl">{stat}</span>
                  <span className="text-gray-500 text-xs">{statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
