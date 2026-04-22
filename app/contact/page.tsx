import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact PestPro – Expert Pest Control Services",
  description: "Get in touch with PestPro for professional pest control solutions. Call +1-800-PESTPRO or submit your inquiry online. 24/7 emergency support available.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 100%), url(/hero.png)'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/40"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-brand-green/20 backdrop-blur-sm border border-brand-green-100 text-white rounded-full px-4 py-2 mb-6 text-sm font-semibold">
            <span className="w-2 h-2 bg-brand-green rounded-full" />
            Get Expert Pest Control Support
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Contact <span className="text-brand-green-100">Us</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Contact our team for fast, professional pest control services. Same-day availability. No obligation consultation.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:border-green-300 transition-colors">
                <div className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">Phone</div>
                <a href="tel:+18007378776" className="block text-2xl font-bold text-gray-900 hover:text-green-700 transition-colors mb-2">
                  +1-800-PESTPRO
                </a>
                <p className="text-gray-600">Mon–Fri 7am–7pm, Sat 8am–5pm</p>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:border-green-300 transition-colors">
                <div className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">WhatsApp</div>
                <a href="https://wa.me/18007378776" target="_blank" rel="noopener noreferrer" className="block text-2xl font-bold text-gray-900 hover:text-green-700 transition-colors mb-2">
                  Quick Chat
                </a>
                <p className="text-gray-600">Fast responses, 7 days a week</p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:border-green-300 transition-colors">
                <div className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">Email</div>
                <a href="mailto:help@pestpro.com" className="block text-lg font-bold text-gray-900 hover:text-green-700 transition-colors mb-2">
                  help@pestpro.com
                </a>
                <p className="text-gray-600">Response within 2 hours</p>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-6">Business Hours</div>
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Monday – Friday</span>
                    <span className="font-semibold text-gray-900">7:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="font-semibold text-gray-900">8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="font-semibold text-green-600">Emergency Only</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">24/7 Emergency Line:</span> Always available for urgent infestations
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 2 hours during business hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-3 h-0.5 bg-green-700" />
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">Coverage Areas</span>
              <span className="w-3 h-0.5 bg-green-700" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">We Serve Major Cities Across Pakistan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Expert pest control services for residential, commercial, and industrial clients</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: "Islamabad", region: "Federal Territory" },
              { city: "Rawalpindi", region: "Punjab" },
              { city: "Lahore", region: "Punjab" },
              { city: "Faisalabad", region: "Punjab" },
              { city: "Sargodha", region: "Punjab" },
              { city: "Peshawar", region: "Khyber Pakhtunkhwa" },
              { city: "Sialkot", region: "Punjab" },
              { city: "Gujranwala", region: "Punjab" },
              { city: "Multan", region: "Punjab" },
            ].map((location) => (
              <div key={location.city} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-center">
                <h3 className="font-bold text-gray-900 mb-1">{location.city}</h3>
                <p className="text-sm text-gray-600">{location.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section  className="pt-20 pb-8 lg:pt-32 lg:pb-16 relative"
        style={{
          backgroundImage: "url('/hero2.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-3 h-0.5 bg-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wide">What We Treat</span>
              <span className="w-3 h-0.5 bg-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Pest Control Solutions</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Termite Control", desc: "Professional deemak and wood borer treatment" },
              { title: "Mosquito & Dengue", desc: "Effective dengue and mosquito elimination" },
              { title: "Cockroach Control", desc: "Complete cockroach infestation management" },
              { title: "Bed Bug Treatment", desc: "Safe and thorough bed bug removal" },
              { title: "Rodent Control", desc: "Humane rodent and pest management" },
              { title: "Disinfection Services", desc: "Professional sanitization and disinfection" },
              { title: "Water Tank Cleaning", desc: "Complete tank cleaning and maintenance" },
              { title: "Floor Treatments", desc: "Polishing and specialized floor treatments" },
              { title: "24/7 Emergency", desc: "Urgent pest situations handled immediately" },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us on the Map</h2>
          <div className="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.0476169652677!2d74.3436!3d33.7298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95503a00000f%3A0x6d7b8d8d8d8d8d8d!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2spk!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PestPro Service Areas"
            />
          </div>
        </div>
      </section>
    </>
  );
}
