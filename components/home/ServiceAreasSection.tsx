import { MapPin, ArrowRight, Building2, Clock3, Shield } from "lucide-react";
import Link from "next/link";

const areas = [
  { city: "Islamabad", region: "Capital Territory", coverage: "Primary Coverage" },
  { city: "Rawalpindi", region: "Punjab", coverage: "Primary Coverage" },
  { city: "Lahore", region: "Punjab", coverage: "Primary Coverage" },
  { city: "Karachi", region: "Sindh", coverage: "Primary Coverage" },
  { city: "Faisalabad", region: "Punjab", coverage: "Scheduled Visits" },
  { city: "Multan", region: "Punjab", coverage: "Scheduled Visits" },
  { city: "Peshawar", region: "Khyber Pakhtunkhwa", coverage: "Scheduled Visits" },
  { city: "Gujranwala", region: "Punjab", coverage: "Scheduled Visits" },
  { city: "Sialkot", region: "Punjab", coverage: "Scheduled Visits" },
  { city: "Hyderabad", region: "Sindh", coverage: "By Availability" },
  { city: "Sargodha", region: "Punjab", coverage: "By Availability" },
  { city: "Bahawalpur", region: "Punjab", coverage: "By Availability" },
];

export function ServiceAreasSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-tag">
              <span className="w-8 h-0.5 bg-brand-green" />
              Service Areas
            </div>
            <h2 className="section-heading mb-6">
              Pest Control Services Across <span className="text-gradient">Pakistan</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-8 mb-6">
              We provide pest control services in major cities across Pakistan with stronger coverage in
              Islamabad, Rawalpindi, Lahore, and Karachi, while also arranging visits for other urban and industrial areas.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-8 mb-8">
              For companies searching for commercial pest control in Pakistan, our service planning can support
              offices, restaurants, retail branches, warehouses, and managed facilities that require scheduled treatment and follow-up.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Building2,
                  title: "Residential and Commercial Coverage",
                  desc: "Support for homes, offices, restaurants, retail sites, and warehouse facilities.",
                },
                {
                  icon: Clock3,
                  title: "Fast Scheduling in Core Cities",
                  desc: "Priority scheduling is available in major service areas based on workload and route planning.",
                },
                {
                  icon: Shield,
                  title: "Site-Specific Treatment Planning",
                  desc: "Each location receives treatment planning according to pest type, site risk, and property use.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-navy dark:text-white">{title}</div>
                    <div className="text-gray-500 text-sm leading-6">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary">
              Check Your Area <ArrowRight size={18} />
            </Link>
          </div>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map(({ city, region, coverage }) => (
                <div
                  key={city}
                  className="card-base p-4 group hover:border-brand-green/30 border border-transparent"
                >
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-brand-green flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-brand-navy dark:text-white text-sm">{city}</div>
                      <div className="text-gray-400 text-xs">{region}</div>
                      <span
                        className={`inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full font-medium ${
                          coverage === "Primary Coverage"
                            ? "bg-brand-green-50 text-brand-green dark:bg-brand-green/10"
                            : coverage === "Scheduled Visits"
                              ? "bg-slate-100 text-slate-600 dark:bg-gray-800"
                              : "bg-amber-50 text-amber-700 dark:bg-amber-900/10"
                        }`}
                      >
                        {coverage}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-5 bg-brand-green-50 dark:bg-brand-green/10 rounded-2xl border border-brand-green/20">
              <p className="text-brand-green font-semibold text-sm">
                Need service in another city or industrial zone?
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-6">
                Call <a href="tel:+923069235099" className="font-semibold hover:underline">+92 306 9235099</a> to confirm
                scheduling for your area, company site, or multi-location requirement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
