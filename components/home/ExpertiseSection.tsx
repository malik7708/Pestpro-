import Image from "next/image";
import Link from "next/link";

const expertiseItems = [
   {
    title: "Pest Control Services",
    description:
      "Our pest control services cover a wide range of pests, including termites, rodents, cockroaches, ants, flies, mosquitoes, and more. We use effective treatments to eliminate pests and protect your property.",
    image: "/rodent2.png",
  },
  {
    title: "Fumigation Services",
    description:
      "Our fumigation solutions bring efficient removal of pests to ensure that your surroundings are free of pests and safe.We use professional-grade fumigants and techniques to target pests in hard-to-reach areas, providing comprehensive protection for your property.",
    image: "/pest2.png",
  },
  {
    title: "Termite Control Services",
    description:
      "Our termite control services include thorough inspections, effective treatments, and preventive measures to protect your property from termite damage. We use industry-approved methods to eliminate termites and prevent future infestations.",
    image: "/termite.png",
  },
 
];

export function ExpertiseSection() {
  return (
    <section
      className="section-padding relative"
      style={{
        backgroundImage: "url('/pest2.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-tag justify-center bg-lime-200/200 text-lime-200 mb-4">
              <span className="w-8 h-0.5 bg-lime-200" />
              Our Expertise
              <span className="w-8 h-0.5 bg-lime-200" />
            </div>
            <h2 className="section-heading mb-4 text-white">
              Extended Site Support and <span className="text-lime-200">Specialized Services</span>
            </h2>
            <p className="text-white/90 text-lg leading-8">
              Along with pest control, IC PestControl also supports clients with related hygiene,
              treatment, and maintenance services for residential, commercial, and managed properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {expertiseItems.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[15px] bg-green-50 dark:bg-gray-950/95 backdrop-blur-sm border border-white/20 dark:border-gray-800 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="h-1.5 bg-brand-green" />
                <div className="relative h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
                </div>

                <div className="p-7">
                  <h3 className="font-display text-[1.35rem] font-semibold text-brand-navy dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-7">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    <Link href="/services" className="btn-primary">
                      Explore
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
