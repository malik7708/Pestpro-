"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { mainServices } from "@/lib/servicesConfig";

const regularLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-brand-navy text-white text-center text-xs sm:text-sm py-2 px-4 font-medium">
        <span className="font-semibold">24/7 Emergency Service</span> | Call Now:{" "}
        <a href="tel:+923229162746" className="underline font-semibold hover:text-brand-green-100 transition-colors">
          +92 322 9162746
        </a>
        <span className="hidden sm:inline"> | Free inspection available</span>
      </div>

      <nav className="fixed top-8 left-0 right-0 z-50 bg-white/18 dark:bg-slate-950/40 backdrop-blur-3xl backdrop-saturate-150 border border-white/10 dark:border-slate-800/60 shadow-2xl shadow-slate-950/10 transition-all duration-500">
        <div className="container-max">
          <div className="flex items-center justify-between py-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/logo-img.png"
                  alt="PestPro Logo"
                  width={180}
                  height={50}
                  className="h-auto w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {regularLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-bold text-sm transition-colors hover:text-brand-green ${
                    scrolled ? "text-slate-900 dark:text-white" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setHoveredCategory(null)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <Link
                  href="/services"
                  className={`flex items-center gap-1 font-bold text-sm transition-colors hover:text-brand-green ${
                    scrolled ? "text-slate-900 dark:text-white" : "text-white"
                  }`}
                >
                  Services
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </Link>

                {/* Main Services Dropdown */}
                <div className="absolute top-full left-0 mt-3 w-80 bg-gradient-to-b from-white to-brand-green-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl border-2 border-brand-green-100 dark:border-brand-green-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out transform group-hover:translate-y-0 group-hover:scale-100 translate-y-[-25px] scale-90 z-50 overflow-hidden">
                  <div className="p-2">
                    {mainServices.map((mainService, idx) => (
                      <div
                        key={mainService.id}
                        className="relative group/main"
                        onMouseEnter={() => setHoveredCategory(mainService.id)}
                      >
                        <Link
                          href={mainService.href}
                          className={`relative block px-5 py-3 text-sm font-medium text-brand-navy dark:text-white hover:text-white hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-green-light transition-all duration-300 ease-out rounded-xl overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-1 before:bg-brand-green before:transition-all before:duration-400 before:ease-out hover:before:w-full opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0`}
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <span className="relative z-10 flex items-center justify-between gap-2">
                            <span className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-brand-green group-hover/main:bg-white transition-colors duration-300" />
                              {mainService.label}
                            </span>
                            <ChevronRight size={14} className="opacity-0 group-hover/main:opacity-100 group-hover/main:translate-x-1 transition-all duration-300" />
                          </span>
                        </Link>

                        {/* Sub-categories Mega Dropdown */}
                        {hoveredCategory === mainService.id && (
                          <div className="absolute left-full top-0 ml-2 w-72 bg-white dark:bg-gray-950 rounded-2xl shadow-2xl border-2 border-brand-green-100 dark:border-brand-green-200 opacity-0 invisible group/main:opacity-100 group/main:visible transition-all duration-300 z-50">
                            <div className="p-3">
                              <div className="mb-3 pb-3 border-b border-slate-200 dark:border-gray-800">
                                <h3 className="text-sm font-bold text-brand-navy dark:text-white">
                                  {mainService.label}
                                </h3>
                                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                                  {mainService.description}
                                </p>
                              </div>

                              <div className="space-y-1">
                                {mainService.categories.map((category) => (
                                  <div key={category.label} className="group/cat">
                                    <div className="px-3 py-2 rounded-lg hover:bg-brand-green-50 dark:hover:bg-gray-900 transition-colors">
                                      <p className="text-xs font-bold text-brand-green uppercase tracking-wider mb-1">
                                        {category.label}
                                      </p>
                                      <div className="space-y-0.5">
                                        {category.items.map((item) => (
                                          <Link
                                            key={item.label}
                                            href={item.href}
                                            className="text-xs text-slate-700 dark:text-slate-300 hover:text-brand-green dark:hover:text-brand-green-100 hover:pl-2 transition-all duration-200 block"
                                          >
                                            → {item.label}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+923229162746"
                className={`flex items-center gap-2 font-bold text-sm transition-colors hover:text-brand-green ${
                  scrolled ? "text-slate-900 dark:text-white" : "text-white"
                }`}
              >
                <Phone size={16} />
                +92 322 9162746
              </a>

              <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                Free Inspection
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 rounded-lg ${
                  scrolled
                    ? "text-slate-900 dark:text-white"
                    : "text-white"
                }`}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 z-30 bg-black/50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <div className="fixed top-[88px] left-0 right-0 z-40 bg-white dark:bg-gray-950 max-h-[calc(100vh-88px)] overflow-y-auto">
              <div className="container-max py-4 space-y-2">
                {regularLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 font-bold text-sm text-slate-800 dark:text-white hover:text-brand-green hover:bg-brand-green-50 dark:hover:bg-gray-900 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Services */}
                <div className="border-t border-slate-100 dark:border-gray-800 pt-2 mt-2">
                  <button
                    onClick={() => setExpandedMobileCategory(expandedMobileCategory === "services" ? null : "services")}
                    className="w-full px-4 py-3 font-bold text-sm text-slate-800 dark:text-white hover:text-brand-green hover:bg-brand-green-50 dark:hover:bg-gray-900 rounded-xl transition-colors flex items-center justify-between"
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${expandedMobileCategory === "services" ? "rotate-180" : ""}`}
                    />
                  </button>

                  {expandedMobileCategory === "services" && (
                    <div className="pl-4 space-y-2 mt-2">
                      {mainServices.map((mainService) => (
                        <div key={mainService.id}>
                          <div className="flex items-center gap-2">
                            <Link
                              href={mainService.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex-1 px-3 py-2 font-semibold text-xs text-brand-green hover:text-brand-green-light transition-colors"
                            >
                              {mainService.label}
                            </Link>
                            <button
                              onClick={() =>
                                setExpandedMobileCategory(
                                  expandedMobileCategory === mainService.id ? "services" : mainService.id
                                )
                              }
                              aria-label={`Toggle ${mainService.label}`}
                              className="px-3 py-2 text-brand-green hover:text-brand-green-light transition-colors"
                            >
                              <ChevronRight
                                size={14}
                                className={`transition-transform ${expandedMobileCategory === mainService.id ? "rotate-90" : ""}`}
                              />
                            </button>
                          </div>

                          {expandedMobileCategory === mainService.id && (
                            <div className="pl-3 space-y-2 mt-1">
                              {mainService.categories.map((category) => (
                                <div key={category.label}>
                                  <Link
                                    href={category.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="mb-1 block text-xs font-bold uppercase tracking-wider text-brand-green hover:text-brand-green-light"
                                  >
                                    {category.label}
                                  </Link>
                                  <div className="space-y-1">
                                    {category.items.map((item) => (
                                      <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-xs text-slate-600 dark:text-slate-400 hover:text-brand-green block pl-2"
                                      >
                                        → {item.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-gray-800 flex flex-col gap-3">
                  <a href="tel:+923229162746" className="btn-outline text-center justify-center text-sm py-3">
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
