"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      { href: "/services#termite", label: "Termite Control / Termite Proofing" },
      { href: "/services#rodent", label: "Rodents Control / Rat Treatment" },
      { href: "/services#disinfection", label: "Disinfection" },
      { href: "/services#floor-services", label: "Floor Scoring / Cleaning & Polishing" },
      { href: "/services#water-tank-cleaning", label: "Water Tank Cleaning" },
      { href: "/services#fumigation", label: "Pest Control / Fumigation" },
    ],
  },
  { href: "/about", label: "About Us" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-brand-navy text-white text-center text-xs sm:text-sm py-2 px-4 font-medium">
        <span className="font-semibold">24/7 Emergency Service</span> | Call Now:{" "}
        <a href="tel:+923069235099" className="underline font-semibold hover:text-brand-green-100 transition-colors">
          +92-306-9235099
        </a>
        <span className="hidden sm:inline"> | Free inspection available</span>
      </div>

      <nav className="fixed top-8 left-0 right-0 z-50 bg-white/18 dark:bg-slate-950/40 backdrop-blur-3xl backdrop-saturate-150 border border-white/10 dark:border-slate-800/60 shadow-2xl shadow-slate-950/10 transition-all duration-500">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 gradient-green rounded-xl flex items-center justify-center shadow-brand group-hover:shadow-brand-lg transition-shadow">
                <span className="text-white text-lg font-semibold font-display">P</span>
              </div>
              <div>
                <span className={`font-display font-semibold text-xl tracking-tight transition-colors ${
                  scrolled ? "text-slate-900 dark:text-white" : "text-white"
                }`}>

                  Pest<span className="text-brand-green-100">Pro</span>
                </span>
                <div className={`text-xs transition-colors ${
                  scrolled ? "text-slate-600 dark:text-slate-400" : "text-white/75"
                }`}>

                  Pest Control Experts
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 font-bold text-sm transition-colors hover:text-brand-green ${
                      scrolled ? "text-slate-900 dark:text-white" : "text-white"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </Link>

                  {link.dropdown && (
                    <div className="absolute top-full left-0 mt-3 w-64 bg-gradient-to-b from-white to-brand-green-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl border-2 border-brand-green-100 dark:border-brand-green-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out transform group-hover:translate-y-0 group-hover:scale-100 translate-y-[-25px] scale-90 z-50 overflow-hidden">
                      <div className="p-2">
                        {link.dropdown.map((item, index) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className={`relative block px-5 py-3 text-sm font-medium text-brand-navy dark:text-white hover:text-white hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-green-light transition-all duration-300 ease-out first:rounded-t-xl last:rounded-b-xl group/item transform hover:scale-102 hover:shadow-lg overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-1 before:bg-brand-green before:transition-all before:duration-400 before:ease-out hover:before:w-full opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            <span className="relative z-10 flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-brand-green group-hover/item:bg-white transition-colors duration-300"></div>
                              {item.label}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-brand-green-light opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+923069235099"
                className={`flex items-center gap-2 font-bold text-sm transition-colors hover:text-brand-green ${
                  scrolled ? "text-slate-900 dark:text-white" : "text-white"
                }`}
              >
                <Phone size={16} />
                +92 306 9235099
              </a>

              <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                Free Inspection
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-3 rounded-xl border transition-all duration-200 ${
                  scrolled
                    ? "text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-gray-800 border-slate-300 dark:border-slate-700"
                    : "text-white hover:bg-white/30 border-white/30"
                } bg-white/20 dark:bg-black/30 backdrop-blur-md shadow-lg hover:shadow-xl`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-30 bg-black/50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <div className="lg:hidden fixed top-[88px] left-0 right-0 z-40 bg-white dark:bg-gray-950 border-t border-slate-100 dark:border-gray-800 shadow-xl max-h-[calc(100vh-88px)] overflow-y-auto">
              <div className="container-max py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 font-bold text-sm sm:text-base text-slate-800 dark:text-white drop-shadow-sm hover:text-brand-green hover:bg-brand-green-50 dark:hover:bg-gray-900 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>

                  {link.dropdown && (
                    <div className="pl-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-brand-green transition-colors"
                        >
                          - {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-3 border-t border-slate-100 dark:border-gray-800 flex flex-col gap-3">
                <Link href="/auth/login" onClick={() => setMobileOpen(false)} className="rounded-2xl border border-emerald-500/30 bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-emerald-400 hover:bg-emerald-500/10 transition">
                  Login
                </Link>
                <Link href="/auth/signup" onClick={() => setMobileOpen(false)} className="rounded-2xl bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition">
                  Sign Up
                </Link>
                <a href="tel:+923069235099" className="btn-outline text-center justify-center text-sm py-3">
                  <Phone size={16} /> Call Now
                </a>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary text-center justify-center text-sm py-3">
                  Free Inspection
                </Link>
              </div>
            </div>
          </div>
          </>
        )}
      </nav>
    </>
  );
}
