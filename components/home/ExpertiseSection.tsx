import Image from "next/image";
import Link from "next/link";

const expertiseItems = [
  {
    title: "Fumigation Services",
    description:
      "Our fumigation solutions bring efficient removal of pests to ensure that your surroundings are free of pests and safe.",
    image: "/pest2.png",
  },
  {
    title: "Termite Proofing",
    description:
      "We prepare complete termite proofing to safeguard your home from the structural damage caused by termites.",
    image: "/termite.png",
  },
  {
    title: "Rodents Control",
    description:
      "Our rodent control services are designed to protect your building and storage structures while preventing the damage that rodents cause.",
    image: "/rodent2.png",
  },
  {
    title: "Disinfection",
    description:
      "Our COVID-19 disinfection service is a priority for safety and health, providing a safer and cleaner environment for you and your family members.",
    image: "/Disinfection.png",
  },
  {
    title: "Water Tank Cleaning Services",
    description:
      "To ensure a safe and clean supply of water, we provide professional cleaning of water tanks for commercial and residential properties and homes.",
    image: "/tank.png",
  },
  {
    title: "Floor Scoring, Cleaning and Polishing",
    description:
      "The well-qualified floor scoring, cleaning and polishing solutions warrant that your floors are spotless to extend their lives and improve their appearance.",
    image: "/floor.png",
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
            <div className="section-tag justify-center">
              <span className="w-8 h-0.5 bg-brand-green" />
              Our Expertise
              <span className="w-8 h-0.5 bg-brand-green" />
            </div>
            <h2 className="section-heading mb-4 text-white">
              Extended Site Support and <span className="text-[#c8e87d]">Specialized Services</span>
            </h2>
            <p className="text-white/90 text-lg leading-8">
              Along with pest control, PestPro also supports clients with related hygiene,
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
