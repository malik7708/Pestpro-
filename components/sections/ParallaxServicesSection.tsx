"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ParallaxServicesSection() {
  return (
    <section
      className="relative py-20 lg:py-32 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/termite.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6"
          >
            Professional Pest Control Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl leading-8 mb-8 text-white/90"
          >
            Our expert team provides comprehensive pest management solutions for homes and businesses across Rawalpindi/Islamabad and nearby areas. From termite treatment to disinfection services, we ensure your property is safe and pest-free.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Our Services
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
