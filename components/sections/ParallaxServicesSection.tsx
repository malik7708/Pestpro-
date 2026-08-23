import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ParallaxServicesSection() {
  return (
    <section
      className="relative overflow-hidden bg-scroll py-20 text-white lg:py-32"
      style={{
        backgroundImage: "url('/images/optimized/termite.webp')",
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
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Professional Pest Control Services
          </h2>
          <p className="mb-8 text-lg leading-8 text-white/90 sm:text-xl">
            Our expert team provides comprehensive pest management solutions for homes and businesses across Rawalpindi/Islamabad and nearby areas. From termite treatment to fumigation services, we ensure your property is safe and pest-free.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-8 py-4 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-brand-green-dark"
          >
            Explore Our Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
