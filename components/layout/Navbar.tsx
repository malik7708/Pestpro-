"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { mainServices } from "@/lib/servicesConfig";

const regularLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [activeDesktopServiceId, setActiveDesktopServiceId] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const [expandedMobileService, setExpandedMobileService] = useState<string | null>(null);

  const topServices = useMemo(
    () => mainServices.filter((service) => service.id === "pest-control" || service.id === "termite-control" || service.id === "fumigation"),
    []
  );

  const activeDesktopService = activeDesktopServiceId
    ? topServices.find((service) => service.id === activeDesktopServiceId)
    : null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setExpandedMobileCategory(null);
    setExpandedMobileService(null);
  };

  const toggleMobileService = (serviceId: string) => {
    setExpandedMobileService((current) => (current === serviceId ? null : serviceId));
  };

  const openDesktopServices = () => {
    setDesktopServicesOpen(true);
  };

  const closeDesktopServices = () => {
    setDesktopServicesOpen(false);
    setActiveDesktopServiceId(null);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease }}
        className="bg-brand-navy px-4 py-2 text-center text-xs font-medium text-white sm:text-sm"
      >
        <span className="font-semibold">24/7 Emergency Service</span> | Call Now:{" "}
        <a href="tel:+923229162746" className="font-semibold underline transition-colors hover:text-brand-green-100">
          +92 322 9162746
        </a>
        <span className="hidden sm:inline"> | Free inspection available</span>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08, ease }}
        className="fixed left-0 right-0 top-8 z-50 border border-white/10 bg-white/18 shadow-2xl shadow-slate-950/10 backdrop-blur-3xl backdrop-saturate-150 transition-all duration-500 dark:border-slate-800/60 dark:bg-slate-950/40"
      >
        <div className="container-max">
          <div className="flex items-center justify-between py-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link href="/" className="flex items-center gap-3 group">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/logo-img.png"
                    alt="PestPro Logo"
                    width={180}
                    height={50}
                    className="h-auto w-auto max-w-[170px] sm:max-w-[180px]"
                    priority
                  />
                </div>
              </Link>
            </motion.div>

            <motion.div
              className="hidden items-center gap-7 xl:flex"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.16,
                  },
                },
              }}
            >
              {regularLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    className={`font-bold text-sm transition-colors hover:text-brand-green ${
                      scrolled ? "text-slate-900 dark:text-white" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35 }}
                className="relative"
                onMouseEnter={openDesktopServices}
                onMouseLeave={closeDesktopServices}
              >
                <Link
                  href="/services"
                  className={`flex items-center gap-1 font-bold text-sm transition-colors hover:text-brand-green ${
                    scrolled ? "text-slate-900 dark:text-white" : "text-white"
                  }`}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${desktopServicesOpen ? "rotate-180" : ""}`}
                  />
                </Link>

                <AnimatePresence>
                  {desktopServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.22, ease }}
                      className="absolute left-0 top-full z-50 mt-3 flex items-start gap-3"
                    >
                      <div className="w-[330px] rounded-[28px] border-2 border-brand-green-100 bg-gradient-to-b from-white to-brand-green-50 p-3 shadow-2xl dark:border-brand-green-200 dark:from-gray-900 dark:to-gray-800">
                        {topServices.map((service) => {
                          const isActive = activeDesktopService?.id === service.id;

                          return (
                            <button
                              key={service.id}
                              type="button"
                              onMouseEnter={() => setActiveDesktopServiceId(service.id)}
                              className={`mb-2 flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-all duration-200 last:mb-0 ${
                                isActive
                                  ? "bg-brand-green text-white shadow-lg"
                                  : "bg-transparent text-brand-navy hover:bg-brand-green/10 dark:text-white"
                              }`}
                            >
                              <span className="flex items-center gap-3">
                                <span
                                  className={`h-2.5 w-2.5 rounded-full ${
                                    isActive ? "bg-white" : "bg-brand-green"
                                  }`}
                                />
                                <span className="text-base font-semibold">{service.label}</span>
                              </span>
                              <ChevronRight
                                size={16}
                                className={`transition-transform duration-200 ${isActive ? "translate-x-1" : ""}`}
                              />
                            </button>
                          );
                        })}
                      </div>

                      {activeDesktopService && (
                        <motion.div
                          key={activeDesktopService.id}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 8 }}
                          transition={{ duration: 0.2, ease }}
                          className="w-[360px] max-h-[70vh] overflow-y-auto rounded-[28px] border-2 border-brand-green-100 bg-white p-4 shadow-2xl dark:border-brand-green-200 dark:bg-gray-950"
                        >
                          <div className="mb-4 border-b border-slate-200 pb-4 dark:border-gray-800">
                            <h3 className="text-lg font-bold text-brand-navy dark:text-white">
                              {activeDesktopService.label}
                            </h3>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                              {activeDesktopService.shortDesc ?? activeDesktopService.description}
                            </p>
                          </div>

                          <div className="space-y-3">
                            {activeDesktopService.categories.map((category) => (
                              <div
                                key={category.label}
                                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-800 dark:bg-gray-900"
                              >
                                <Link
                                  href={category.href}
                                  className="mb-2 block text-sm font-bold uppercase tracking-[0.16em] text-brand-green hover:text-brand-green-dark"
                                >
                                  {category.label}
                                </Link>
                                <div className="space-y-1.5">
                                  {category.items.map((item) => (
                                    <Link
                                      key={item.label}
                                      href={item.href}
                                      className="block text-sm text-slate-700 transition-all duration-200 hover:translate-x-1 hover:text-brand-green dark:text-slate-300 dark:hover:text-brand-green-100"
                                    >
                                      &gt; {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden items-center gap-3 xl:flex"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
            >
              <a
                href="tel:+923229162746"
                className={`flex items-center gap-2 font-bold text-sm transition-colors hover:text-brand-green ${
                  scrolled ? "text-slate-900 dark:text-white" : "text-white"
                }`}
              >
                <Phone size={16} />
                +92 322 9162746
              </a>

              <Link href="/contact" className="btn-primary px-5 py-2.5 text-sm">
                Free Inspection
              </Link>
            </motion.div>

            <div className="flex xl:hidden">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileOpen((value) => !value)}
                className={`rounded-lg p-2 ${
                  scrolled ? "text-slate-900 dark:text-white" : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.span
                    key={mobileOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-30 bg-black/50 xl:hidden"
                onClick={closeMobileMenu}
              />
              <motion.div
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.28, ease }}
                className="fixed left-0 right-0 top-[88px] z-40 max-h-[calc(100vh-88px)] overflow-y-auto bg-white dark:bg-gray-950 xl:hidden"
              >
                <motion.div
                  className="container-max space-y-2 py-4"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.04,
                        delayChildren: 0.04,
                      },
                    },
                  }}
                >
                  {regularLinks.map((link) => (
                    <motion.div
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-800 transition-colors hover:bg-brand-green-50 hover:text-brand-green dark:text-white dark:hover:bg-gray-900"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="mt-2 border-t border-slate-100 pt-2 dark:border-gray-800"
                  >
                    <div className="flex w-full items-center rounded-xl transition-colors hover:bg-brand-green-50 dark:hover:bg-gray-900">
                      <Link
                        href="/services"
                        onClick={closeMobileMenu}
                        className="flex-1 px-4 py-3 text-sm font-bold text-slate-800 dark:text-white"
                      >
                        Services
                      </Link>
                      <button
                        onClick={() => setExpandedMobileCategory(expandedMobileCategory === "services" ? null : "services")}
                        className="flex items-center justify-center px-4 py-3 text-slate-800 dark:text-white"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${expandedMobileCategory === "services" ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {expandedMobileCategory === "services" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 space-y-3">
                            {topServices.map((service) => (
                              <div
                                key={service.id}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-gray-800 dark:bg-gray-900"
                              >
                                <button
                                  onClick={() => toggleMobileService(service.id)}
                                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-green/10 dark:text-white"
                                >
                                  <span>{service.label}</span>
                                  <ChevronRight
                                    size={16}
                                    className={`transition-transform ${expandedMobileService === service.id ? "rotate-90" : ""}`}
                                  />
                                </button>

                                <AnimatePresence initial={false}>
                                  {expandedMobileService === service.id && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.22 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="mt-2 space-y-3 px-3 pb-2">
                                        {service.categories.map((category) => (
                                          <div
                                            key={category.label}
                                            className="rounded-xl border border-slate-200 bg-white px-3 py-3 dark:border-gray-800 dark:bg-gray-950"
                                          >
                                            <Link
                                              href={category.href}
                                              onClick={closeMobileMenu}
                                              className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-brand-green"
                                            >
                                              {category.label}
                                            </Link>
                                            <div className="space-y-1.5">
                                              {category.items.map((item) => (
                                                <Link
                                                  key={item.label}
                                                  href={item.href}
                                                  onClick={closeMobileMenu}
                                                  className="block text-xs text-slate-600 transition-colors hover:text-brand-green dark:text-slate-400"
                                                >
                                                  &gt; {item.label}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="flex flex-col gap-3 border-t border-slate-100 pt-3 dark:border-gray-800"
                  >
                    <a href="tel:+923229162746" className="btn-outline justify-center py-3 text-center text-sm">
                      <Phone size={16} /> Call Now
                    </a>
                    <Link href="/contact" onClick={closeMobileMenu} className="btn-primary justify-center py-3 text-center text-sm">
                      Free Inspection
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
