import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Shield, Star, CheckCircle } from "lucide-react";
import GoogleMap from "@/components/ui/GoogleMap";

const services = [
  { href: "/services/pest-control", label: "Pest Control" },
  { href: "/services/termite-control", label: "Termite Treatment" },
  { href: "/services/fumigation", label: "Fumigation" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Free Inspection" },
];

const socialLinks = [
  { href: "https://www.facebook.com/share/1CodhewoQp/", label: "Facebook", letter: "f" },
  { href: "https://www.instagram.com/islamabadpestcontrolpk?utm_source=qr&igsh=N2dmdmtyNHphaGhj", label: "Instagram", letter: "in" },
  { href: "https://x.com/islamabadpest", label: "Twitter", letter: "X" },
  { href: "https://www.youtube.com/channel/UCoIgSIwnHB3aOXbJgRryncA", label: "YouTube", letter: ">" },
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
            <div className="mb-4 sm:mb-5">
              <div className="rounded-lg overflow-hidden inline-block">
                <Image
                  src="/images/optimized/logo-img.webp"
                  alt="Islamabad Pest Control Logo"
                  width={180}
                  height={50}
                  className="h-auto w-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <p className="text-white/60 text-xs sm:text-sm leading-5 sm:leading-relaxed mb-4 sm:mb-6">
              Islamabad Pest Control - Your trusted pest control experts for homes and businesses. We deliver safer,
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
              <div className="flex justify-between"><span>Mon - Sunday</span><span className="text-white/80">24 / 7</span></div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold font-display text-base sm:text-lg mb-4 sm:mb-5">Get In Touch</h3>
            <div className="space-y-3 sm:space-y-4">
              {[
              { icon: Phone, value: "+92 300 5515809", href: "tel:+923005515809", label: "Emergency line" },
                { icon: Mail, value: "info@islamabadpestcontrolpk.com", href: "mailto:info@islamabadpestcontrolpk.com", label: "Email us" },
                { icon: MapPin, value: "Address:  Newmal, Kuri road, Jinnah Avenue Islamabad, Pakistan", href: "#", label: "Our location" },
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

        <div className="mt-8 sm:mt-10">
          <GoogleMap/>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Islamabad Pest Control. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="text-white/40 hover:text-white/70 text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

