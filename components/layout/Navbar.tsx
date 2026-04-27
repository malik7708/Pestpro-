"use client";

import { useEffect, useState } from "react";
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
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setExpandedMobileCategory(null);
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
                    className="h-auto w-auto"
                    priority
                  />
                </div>
              </Link>
            </motion.div>

            <motion.div
              className="hidden items-center gap-8 lg:flex"
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
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                <div className="absolute left-0 top-full z-50 mt-3 w-80 translate-y-[-25px] scale-90 overflow-hidden rounded-2xl border-2 border-brand-green-100 bg-gradient-to-b from-white to-brand-green-50 opacity-0 invisible shadow-2xl transition-all duration-500 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 dark:border-brand-green-200 dark:from-gray-900 dark:to-gray-800">
                  <div className="p-2">
                    {mainServices.map((mainService, idx) => (
                      <div
                        key={mainService.id}
                        className="relative group/main"
                        onMouseEnter={() => setHoveredCategory(mainService.id)}
                      >
                        <Link
                          href={mainService.href}
                          className="relative block overflow-hidden rounded-xl px-5 py-3 text-sm font-medium text-brand-navy transition-all duration-300 ease-out before:absolute before:left-0 before:top-0 before:h-1 before:w-0 before:bg-brand-green before:transition-all before:duration-400 before:ease-out before:content-[''] hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-green-light hover:text-white hover:before:w-full dark:text-white"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <span className="relative z-10 flex items-center justify-between gap-2">
                            <span className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-brand-green transition-colors duration-300 group-hover/main:bg-white" />
                              {mainService.label}
                            </span>
                            <ChevronRight size={14} className="translate-x-0 opacity-0 transition-all duration-300 group-hover/main:translate-x-1 group-hover/main:opacity-100" />
                          </span>
                        </Link>

                        {hoveredCategory === mainService.id && (
                          <div className="absolute left-full top-0 z-50 ml-2 w-72 rounded-2xl border-2 border-brand-green-100 bg-white opacity-0 invisible shadow-2xl transition-all duration-300 group-hover/main:visible group-hover/main:opacity-100 dark:border-brand-green-200 dark:bg-gray-950">
                            <div className="p-3">
                              <div className="mb-3 border-b border-slate-200 pb-3 dark:border-gray-800">
                                <h3 className="text-sm font-bold text-brand-navy dark:text-white">
                                  {mainService.label}
                                </h3>
                                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                                  {mainService.description}
                                </p>
                              </div>

                              <div className="space-y-1">
                                {mainService.categories.map((category) => (
                                  <div key={category.label} className="group/cat">
                                    <div className="rounded-lg px-3 py-2 transition-colors hover:bg-brand-green-50 dark:hover:bg-gray-900">
                                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-brand-green">
                                        {category.label}
                                      </p>
                                      <div className="space-y-0.5">
                                        {category.items.map((item) => (
                                          <Link
                                            key={item.label}
                                            href={item.href}
                                            className="block text-xs text-slate-700 transition-all duration-200 hover:pl-2 hover:text-brand-green dark:text-slate-300 dark:hover:text-brand-green-100"
                                          >
                                            â†’ {item.label}
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
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden items-center gap-3 lg:flex"
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

            <div className="flex lg:hidden">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileOpen((value) => !value)}
                className={`rounded-lg p-2 ${
                  scrolled ? "text-slate-900 dark:text-white" : "text-white"
                }`}
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
                className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                onClick={closeMobileMenu}
              />
              <motion.div
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.28, ease }}
                className="fixed left-0 right-0 top-[88px] z-40 max-h-[calc(100vh-88px)] overflow-y-auto bg-white dark:bg-gray-950"
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
                    <button
                      onClick={() => setExpandedMobileCategory(expandedMobileCategory === "services" ? null : "services")}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-slate-800 transition-colors hover:bg-brand-green-50 hover:text-brand-green dark:text-white dark:hover:bg-gray-900"
                    >
                      Services
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${expandedMobileCategory === "services" ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {expandedMobileCategory === "services" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 space-y-2 pl-4">
                            {mainServices.map((mainService) => (
                              <div key={mainService.id}>
                                <div className="flex items-center gap-2">
                                  <Link
                                    href={mainService.href}
                                    onClick={closeMobileMenu}
                                    className="flex-1 px-3 py-2 text-xs font-semibold text-brand-green transition-colors hover:text-brand-green-light"
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
                                    className="px-3 py-2 text-brand-green transition-colors hover:text-brand-green-light"
                                  >
                                    <ChevronRight
                                      size={14}
                                      className={`transition-transform ${expandedMobileCategory === mainService.id ? "rotate-90" : ""}`}
                                    />
                                  </button>
                                </div>

                                <AnimatePresence initial={false}>
                                  {expandedMobileCategory === mainService.id && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.22 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="mt-1 space-y-2 pl-3">
                                        {mainService.categories.map((category) => (
                                          <div key={category.label}>
                                            <Link
                                              href={category.href}
                                              onClick={closeMobileMenu}
                                              className="mb-1 block text-xs font-bold uppercase tracking-wider text-brand-green transition-colors hover:text-brand-green-light"
                                            >
                                              {category.label}
                                            </Link>
                                            <div className="space-y-1">
                                              {category.items.map((item) => (
                                                <Link
                                                  key={item.label}
                                                  href={item.href}
                                                  onClick={closeMobileMenu}
                                                  className="block pl-2 text-xs text-slate-600 hover:text-brand-green dark:text-slate-400"
                                                >
                                                  â†’ {item.label}
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
