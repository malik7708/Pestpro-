import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, Clock, CheckCircle, Shield } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import GoogleMap from "@/components/ui/GoogleMap";
import { FadeIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Contact Islamabad PestControl – Expert Pest Control Services",
  description: "Get in touch with Islamabad PestControl for professional pest control solutions. Call +92-306-923-5099 or submit your inquiry online. 24/7 emergency support available.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <FadeIn>
      <section className="pt-24 sm:pt-32 lg:pt-48 pb-12 sm:pb-16 lg:pb-24 relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 100%), url(/images/optimized/hero.webp)'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/40"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-brand-green/20 backdrop-blur-sm border border-brand-green-100 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 text-[10px] sm:text-sm font-semibold">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-brand-green rounded-full" />
            Get Expert Pest Control Support
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Contact <span className="text-brand-green-100">Us</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto px-2">
            Contact our team for fast, professional pest control services. Same-day availability. No obligation consultation.
          </p>
        </div>
      </section>
      </FadeIn>

      {/* Main Contact Section */}
      <FadeIn>
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6 sm:space-y-8">
              {/* Phone */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 hover:border-green-300 transition-colors">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <Phone size={20} className="text-[#2f6b4f]" />
                    <div className="text-sm font-semibold text-[#2f6b4f] uppercase tracking-wide">Phone</div>
                  </div>
                  <CheckCircle size={18} className="text-[#2f6b4f] flex-shrink-0" />
                </div>
              <a href="tel:+923005515809" className="block text-xl sm:text-2xl font-bold text-gray-900 hover:text-[#2f6b4f] transition-colors mb-2">
                +92 300 5515809
                </a>
                <p className="text-xs sm:text-sm text-gray-600">Mon-Sun ------ 24 / 7</p>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 hover:border-green-300 transition-colors">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <MessageCircle size={20} className="text-[#2f6b4f]" />
                    <div className="text-sm font-semibold text-[#2f6b4f] uppercase tracking-wide">WhatsApp</div>
                  </div>
                  <Shield size={18} className="text-[#2f6b4f] flex-shrink-0" />
                </div>
              <a href="https://wa.me/923005515809" target="_blank" rel="noopener noreferrer" className="block text-xl sm:text-2xl font-bold text-gray-900 hover:text-[#2f6b4f] transition-colors mb-2">
                  Quick Chat
                </a>
                <p className="text-xs sm:text-sm text-gray-600">Fast responses, 7 days a week</p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 hover:border-green-300 transition-colors">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <Mail size={20} className="text-[#2f6b4f]" />
                    <div className="text-sm font-semibold text-[#2f6b4f] uppercase tracking-wide">Email</div>
                  </div>
                  <CheckCircle size={18} className="text-[#2f6b4f] flex-shrink-0" />
                </div>
                <a href="mailto:info@islamabadpestcontrolpk.com" className="block text-sm sm:text-lg font-bold text-gray-900 hover:text-[#2f6b4f] transition-colors mb-2 break-all">
                  info@islamabadpestcontrolpk.com
                </a>
                <p className="text-xs sm:text-sm text-gray-600">Response within 24 hours</p>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={20} className="text-[#2f6b4f]" />
                    <div className="text-sm font-semibold text-[#2f6b4f] uppercase tracking-wide">Business Hours</div>
                  </div>
                  <Shield size={18} className="text-[#2f6b4f] flex-shrink-0" />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between pb-3 sm:pb-4 border-b border-gray-100">
                    <span className="text-xs sm:text-sm text-gray-700 font-medium">Monday – Sunday</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">24 / 7</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                  <p className="text-xs sm:text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">24/7 Emergency Line:</span> Always available for urgent infestations
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Service Areas Section */}
      <FadeIn>
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-2 sm:w-3 h-0.5 bg-green-700" />
              <span className="text-xs sm:text-sm font-semibold text-green-700 uppercase tracking-wide">Coverage Areas</span>
              <span className="w-2 sm:w-3 h-0.5 bg-green-700" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">We Serve Major Cities Across Rawalpindi/Islamabad and Nearby Areas</h2>
            <p className="text-xs sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">Expert pest control services for residential, commercial, and industrial clients</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { city: "Islamabad", region: "Federal Territory" },
              { city: "Rawalpindi", region: "Punjab" },
              { city: "Taxila", region: "Punjab" },
              { city: "Murree", region: "Punjab" },
              { city: "Attock", region: "Punjab" },
              { city: "Peshawar", region: "Khyber Pakhtunkhwa" },
            ].map((location) => (
              <div key={location.city} className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-green-300 transition-colors text-center">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1">{location.city}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{location.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Services Overview */}
      <FadeIn>
      <section  className="py-12 sm:py-16 lg:py-32 relative"
        style={{
          backgroundImage: "url('/images/optimized/hero2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-2 sm:w-3 h-0.5 bg-white" />
              <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wide">What We Treat</span>
              <span className="w-2 sm:w-3 h-0.5 bg-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Pest Control Solutions</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Termite Control", desc: "Professional deemak and wood borer treatment" },
              { title: "Mosquito & Dengue", desc: "Effective dengue and mosquito elimination" },
              { title: "Cockroach Control", desc: "Complete cockroach infestation management" },
              { title: "Bed Bug Treatment", desc: "Safe and thorough bed bug removal" },
              { title: "Rodent Control", desc: "Humane rodent and pest management" },
              { title: "24/7 Emergency", desc: "Urgent pest situations handled immediately" },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-green-100">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Location Map */}
      <FadeIn>
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Find Us on the Map</h2>
          <div className="w-full h-64 sm:h-96 bg-gray-100 rounded-lg sm:rounded-2xl overflow-hidden">
            <GoogleMap />
          </div>
        </div>
      </section>
      </FadeIn>
    </>
  );
}

