import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Shield, Star, CheckCircle } from "lucide-react";

const services = [
  { href: "/services#termite", label: "Termite Control" },
  { href: "/services#rodent", label: "Rodent Control" },
  { href: "/services#cockroach", label: "Cockroach Treatment" },
  { href: "/services#bedbug", label: "Bed Bug Removal" },
  { href: "/services#general", label: "General Pest Control" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Free Inspection" },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", letter: "f" },
  { href: "https://instagram.com", label: "Instagram", letter: "in" },
  { href: "https://twitter.com", label: "Twitter", letter: "X" },
  { href: "https://youtube.com", label: "YouTube", letter: ">" },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy dark:bg-gray-950">
      <div className="border-b border-white/10">
        <div className="container-max py-4 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Shield, label: "Licensed & Insured", sub: "Fully certified" },
              { icon: Star, label: "4.9/5 Rating", sub: "847+ reviews" },
              { icon: CheckCircle, label: "100% Guarantee", sub: "Satisfaction assured" },
              { icon: Clock, label: "24/7 Emergency", sub: "Always available" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="sm:w-5 sm:h-5 text-brand-green-100" />
                </div>
                <div>
                  <div className="text-white font-semibold text-xs sm:text-sm">{label}</div>
                  <div className="text-white/50 text-xs">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-max py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 gradient-green rounded-xl flex items-center justify-center">
                <span className="text-white text-base sm:text-lg font-semibold font-display">P</span>
              </div>
              <span className="font-display font-semibold text-base sm:text-xl tracking-tight text-white">
                Pest<span className="text-brand-green-100">Pro</span>
              </span>
            </div>
            <p className="text-white/60 text-xs sm:text-sm leading-5 sm:leading-relaxed mb-4 sm:mb-6">
              Your trusted pest control experts for homes and businesses. We deliver safer,
              effective solutions for termites, rodents, cockroaches, bed bugs, and general pest issues.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map(({ href, label, letter }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-brand-green rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 text-xs font-bold"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold font-display text-base sm:text-lg mb-4 sm:mb-5">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-white/60 hover:text-brand-green-100 text-xs sm:text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brand-green-light flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold font-display text-base sm:text-lg mb-4 sm:mb-5">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-white/60 hover:text-brand-green-100 text-xs sm:text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brand-green-light flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold font-display text-base sm:text-lg mt-6 sm:mt-8 mb-3 sm:mb-4">Business Hours</h3>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/60">
              <div className="flex justify-between"><span>Mon - Fri</span><span className="text-white/80">7:00 AM - 7:00 PM</span></div>
              <div className="flex justify-between"><span>Saturday</span><span className="text-white/80">8:00 AM - 5:00 PM</span></div>
              <div className="flex justify-between"><span>Sunday</span><span className="text-brand-green-100">Emergency Only</span></div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold font-display text-base sm:text-lg mb-4 sm:mb-5">Get In Touch</h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: Phone, value: "+92 306 9235099", href: "tel:+923069235099", label: "Emergency line" },
                { icon: Mail, value: "info@pestpro.pk", href: "mailto:info@pestpro.pk", label: "Email us" },
                { icon: MapPin, value: "Islamabad, Pakistan", href: "#", label: "Our location" },
              ].map(({ icon: Icon, value, href, label }) => (
                <a key={label} href={href} className="flex items-start gap-2 sm:gap-3 group">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 bg-brand-green/20 group-hover:bg-brand-green rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon size={14} className="sm:w-4 sm:h-4 text-brand-green-100 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] sm:text-xs mb-0.5">{label}</div>
                    <div className="text-white/70 group-hover:text-white text-xs sm:text-sm transition-colors">{value}</div>
                  </div>
                </a>
              ))}
            </div>
            <Link href="/contact" className="btn-primary text-xs sm:text-sm py-2.5 sm:py-3 w-full justify-center mt-4 sm:mt-6">
              Get Free Inspection
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} PestPro Pest Control. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="text-white/40 hover:text-white/70 text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
