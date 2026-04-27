import { Shield, Award, Clock, Leaf, Users, Building2, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/motion";

const reasons = [
  {
    icon: Shield,
    title: "Eco-friendly & Safe Treatments",
    description: "We use safe, industry-approved chemicals and eco-friendly products for your family and the environment.",
    stat: "100%",
    statLabel: "Safe methods",
  },
  {
    icon: Award,
    title: "Affordable Pricing",
    description: "Professional pest control with guaranteed results at prices that fit your budget.",
    stat: "✓",
    statLabel: "Guaranteed",
  },
  {
    icon: Clock,
    title: "Fast & Reliable Service",
    description: "Quick response times and reliable service you can depend on. Available 24/7 for urgent needs.",
    stat: "24/7",
    statLabel: "Support",
  },
  {
    icon: Leaf,
    title: "Modern Techniques",
    description: "Advanced equipment and modern techniques following Integrated Pest Management (IPM) principles.",
    stat: "IPM",
    statLabel: "Certified",
  },
  {
    icon: Users,
    title: "Experienced Technicians",
    description: "Our trained and certified team has years of experience in pest control and termite treatment.",
    stat: "Expert",
    statLabel: "Team",
  },
  {
    icon: Building2,
    title: "Long-term Prevention",
    description: "We don't just remove pests — we prevent them from coming back with lasting protection.",
    stat: "Long",
    statLabel: "Lasting",
  },
];

const strengths = [
  "Termite inspection and treatment",
  "General pest control (ants, flies, insects)",
  "Cockroach extermination",
  "Rodent control (rats & mice removal)",
  "Professional fumigation services",
  "Dengue spray and mosquito control",
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
          <div>
            <div className="section-tag">
              <span className="w-8 h-0.5 bg-brand-green" />
              Why Choose IC Pest Control
            </div>
            <h2 className="section-heading mb-6">
              The best pest control
              <br />
              <span className="text-gradient">near you in Islamabad & Rawalpindi</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-8 mb-6">
              Looking for the best pest control near you? Here&apos;s why customers trust IC Pest Control for their pest management needs.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-8 mb-8">
              We provide eco-friendly and safe treatments with affordable pricing and guaranteed results. Our experienced and trained technicians offer fast response times and reliable service using advanced equipment and modern techniques.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { n: "5,000+", label: "Properties Protected", sub: "Residential & commercial" },
                { n: "4.9", label: "Client Rating", sub: "Service satisfaction" },
                { n: "100%", label: "Safe Methods", sub: "Eco-friendly products" },
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
                Our Pest Control Services
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
          </FadeIn>

          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
            {reasons.map(({ icon: Icon, title, description, stat, statLabel }) => (
              <StaggerItem key={title}>
                <div className="card-base group border border-transparent p-4 hover:border-brand-green/30 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="gradient-green flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl shadow-brand-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <div className="mb-1 font-display text-sm font-semibold text-brand-navy dark:text-white sm:text-base">{title}</div>
                      <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">{description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4 dark:border-gray-800">
                    <span className="font-display text-xl font-bold text-brand-green">{stat}</span>
                    <span className="text-xs text-gray-500">{statLabel}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
