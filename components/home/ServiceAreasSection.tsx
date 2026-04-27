import { MapPin, ArrowRight, Building2, Clock3, Shield, Radio } from "lucide-react";
import Link from "next/link";

const primaryAreas = [
  { city: "Islamabad", region: "Capital Territory", distance: "Primary Service Area" },
  { city: "Rawalpindi", region: "Punjab", distance: "Primary Service Area" },
  { city: "Taxila", region: "Punjab", distance: "Primary Service Area" },

];

const nearbyAreas = [
  { city: "Attock", region: "Punjab", distance: "~50 km" },
  { city: "Jhelum", region: "Punjab", distance: "~70 km" },
  { city: "Murree", region: "Punjab", distance: "~60 km" },
];

export function ServiceAreasSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="section-tag">
            <span className="w-8 h-0.5 bg-brand-green" />
            Service Coverage
          </div>
          <h2 className="section-heading mb-4">
            Expert Pest Control in <span className="text-gradient">Islamabad & Rawalpindi</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-8">
            We specialize in providing reliable pest control services throughout the Islamabad and Rawalpindi metropolitan area, with coverage extending to nearby towns and regions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Primary Service Areas */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 gradient-green rounded-lg flex items-center justify-center">
                  <Radio size={16} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white">Primary Areas</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Same-day or next-day service available</p>
            </div>

            <div className="space-y-3">
              {primaryAreas.map(({ city, region }) => (
                <div
                  key={city}
                  className="card-base p-4 border border-brand-green/20 hover:border-brand-green/50 bg-white dark:bg-gray-800 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-brand-green" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy dark:text-white">{city}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{region}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Areas */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 gradient-green rounded-lg flex items-center justify-center">
                  <MapPin size={16} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white">Nearby Areas</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Scheduled visits available</p>
            </div>

            <div className="space-y-3">
              {nearbyAreas.map(({ city, region, distance }) => (
                <div
                  key={city}
                  className="card-base p-4 border border-gray-200 dark:border-gray-700 hover:border-brand-green/30 bg-white dark:bg-gray-800 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-gray-600 dark:text-gray-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-brand-navy dark:text-white text-sm">{city}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{region}</div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 ml-2">{distance}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Features */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 gradient-green rounded-lg flex items-center justify-center">
                  <Building2 size={16} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white">What We Cover</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">For all property types</p>
            </div>

            <div className="space-y-3">
              {[
                { label: "Residential Homes", icon: Building2 },
                { label: "Commercial Offices", icon: Building2 },
                { label: "Restaurants & Cafes", icon: Building2 },
                { label: "Retail & Warehouses", icon: Building2 },
              ].map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-brand-green/20"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-brand-green" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-base p-8 bg-gradient-to-br from-brand-green-50 to-white dark:from-brand-green/5 dark:to-gray-800 border border-brand-green/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg gradient-green flex items-center justify-center flex-shrink-0">
                <Clock3 size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy dark:text-white mb-1">Fast Response Time</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Quick scheduling in Islamabad & Rawalpindi. Nearby areas on request.
                </p>
              </div>
            </div>
          </div>

          <div className="card-base p-8 bg-gradient-to-br from-brand-green-50 to-white dark:from-brand-green/5 dark:to-gray-800 border border-brand-green/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-800 to-green-700 flex items-center justify-center flex-shrink-0">
                <Shield size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy dark:text-white mb-1">Professional Service</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Certified treatments tailored to your location and pest issues.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Don&apos;t see your exact area? <span className="font-semibold">Contact us</span> to check availability.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Request Service Today <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
