import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/motion";

const expertiseItems = [
   {
    title: "Pest Control Services",
    description:
      "Our pest control services cover a wide range of pests, including termites, rodents, cockroaches, ants, flies, mosquitoes, and more. We use effective treatments to eliminate pests and protect your property.",
    image: "/images/optimized/rodent2.webp",
  },
  {
    title: "Fumigation Services",
    description:
      "Our fumigation solutions bring efficient removal of pests to ensure that your surroundings are free of pests and safe.We use professional-grade fumigants and techniques to target pests in hard-to-reach areas, providing comprehensive protection for your property.",
    image: "/images/optimized/pest2.webp",
  },
  {
    title: "Termite Control Services",
    description:
      "Our termite control services include thorough inspections, effective treatments, and preventive measures to protect your property from termite damage. We use industry-approved methods to eliminate termites and prevent future infestations.",
    image: "/images/optimized/termite.webp",
  },
 
];

export function ExpertiseSection() {
  return (
    <section
      className="section-padding relative"
      style={{
        backgroundImage: "url('/images/optimized/pest2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10">
        <div className="container-max">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-tag justify-center bg-lime-200/200 text-lime-200 mb-4">
              <span className="w-8 h-0.5 bg-lime-200" />
              Our Expertise
              <span className="w-8 h-0.5 bg-lime-200" />
            </div>
            <h2 className="section-heading mb-4 text-white">
              Extended Site Support and <span className="text-lime-200">Specialized Services</span>
            </h2>
            <p className="text-white/90 text-lg leading-8">
              Along with pest control, Islamabad PestControl also supports clients with related hygiene
              and treatment services for residential, commercial, and managed properties.
            </p>
          </FadeIn>

          <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {expertiseItems.map((item) => (
              <StaggerItem key={item.title}>
                <article className="group overflow-hidden rounded-[15px] border border-white/20 bg-green-50 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover dark:border-gray-800 dark:bg-gray-950/95 dark:backdrop-blur-sm flex flex-col h-full">
                  <div className="h-1.5 bg-brand-green" />
                  <div className="media-zoom relative h-56">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1280px) 100vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                  </div>

                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="mb-3 font-display text-[1.35rem] font-semibold text-brand-navy transition-colors duration-300 group-hover:text-brand-green dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600 dark:text-gray-400 flex-grow">
                      {item.description}
                    </p>
                    <div className="mt-6">
                      <Link href="/services" className="btn-primary">
                        Explore
                      </Link>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
