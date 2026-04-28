// Hierarchical services configuration for navbar and pages

export interface ServiceItem {
  href: string;
  label: string;
  description?: string;
}

export interface ServiceCategory {
  label: string;
  description: string;
  href: string;
  icon?: string;
  items: ServiceItem[];
}

export interface MainService {
  id: string;
  label: string;
  description: string;
  href: string;
  categories: ServiceCategory[];
  image?: string;
  shortDesc?: string;
}

export const mainServices: MainService[] = [
  {
    id: "pest-control",
    label: "Pest Control Services",
    description: "Comprehensive pest control solutions for all types of pests",
    href: "/services/pest-control",
    shortDesc: "Termite, rodent, insect & pest control services",
    categories: [
      {
        label: "Termite Control",
        description: "Termite treatment and proofing",
        href: "/services/pest-control/termite",
        items: [
          { href: "/services/pest-control/termite", label: "Termite Control / Proofing" },
          { href: "/services/pest-control/termite", label: "Pre-Termite Treatment" },
          { href: "/services/pest-control/termite", label: "Post-Termite Treatment" },
        ],
      },
      {
        label: "Rodent Control",
        description: "Rat and rodent elimination",
        href: "/services/pest-control/rodent",
        items: [
          { href: "/services/pest-control/rodent", label: "Rodent / Rat Control" },
          { href: "/services/pest-control/rodent", label: "Mouse Control" },
        ],
      },
      {
        label: "Insect Control",
        description: "Flies, ants, mosquito & other insects",
        href: "/services/pest-control/insects",
        items: [
          { href: "/services/pest-control/insects", label: "Mosquito Control" },
          { href: "/services/pest-control/insects", label: "Flies Control" },
          { href: "/services/pest-control/insects", label: "Ant Control" },
          { href: "/services/pest-control/insects", label: "Cockroaches Control" },
          { href: "/services/pest-control/insects", label: "Bed Bugs Control" },
          { href: "/services/pest-control/insects", label: "Fleas Control" },
          { href: "/services/pest-control/insects", label: "Lizard Control" },
          { href: "/services/pest-control/insects", label: "Wood Borer Control" },
        ],
      },
      {
        label: "Dengue Control",
        description: "Dengue prevention and control",
        href: "/services/pest-control/dengue",
        items: [
          { href: "/services/pest-control/dengue", label: "Dengue Control Services" },
        ],
      },
    ],
  },
  {
    id: "fumigation",
    label: "Fumigation Services",
    description: "Comprehensive fumigation for residential, commercial & industrial",
    href: "/services/fumigation",
    shortDesc: "Residential, commercial & industrial fumigation",
    categories: [
      {
        label: "Residential Fumigation",
        description: "Home and apartment fumigation",
        href: "/services/fumigation/residential",
        items: [
          { href: "/services/fumigation/residential", label: "Termite Fumigation" },
          { href: "/services/fumigation/residential", label: "Cockroaches Fumigation" },
          { href: "/services/fumigation/residential", label: "Mosquito Fumigation" },
          { href: "/services/fumigation/residential", label: "Dengue Fumigation" },
          { href: "/services/fumigation/residential", label: "Bed Bugs Fumigation" },
          { href: "/services/fumigation/residential", label: "Flies Fumigation" },
          { href: "/services/fumigation/residential", label: "Ant Fumigation" },
          { href: "/services/fumigation/residential", label: "Wood Borer Fumigation" },
          { href: "/services/fumigation/residential", label: "Lizard Fumigation" },
          { href: "/services/fumigation/residential", label: "Fleas Fumigation" },
          { href: "/services/fumigation/residential", label: "Kitchen Fumigation" },
          { href: "/services/fumigation/residential", label: "Drain System Fumigation" },
        ],
      },
      {
        label: "Commercial Fumigation",
        description: "Businesses and commercial spaces",
        href: "/services/fumigation/commercial",
        items: [
          { href: "/services/fumigation/commercial", label: "Hotel Fumigation" },
          { href: "/services/fumigation/commercial", label: "Restaurants Fumigation" },
          { href: "/services/fumigation/commercial", label: "Guest Houses Fumigation" },
          { href: "/services/fumigation/commercial", label: "Hospital Fumigation" },
          { href: "/services/fumigation/commercial", label: "Bakeries Fumigation" },
          { href: "/services/fumigation/commercial", label: "Jem's Club Fumigation" },
          { href: "/services/fumigation/commercial", label: "Schools Fumigation" },
          { href: "/services/fumigation/commercial", label: "Banks Fumigation" },
        ],
      },
      {
        label: "Industrial Fumigation",
        description: "Factories and industrial facilities",
        href: "/services/fumigation/industrial",
        items: [
          { href: "/services/fumigation/industrial", label: "Factories Fumigation" },
          { href: "/services/fumigation/industrial", label: "Textile Factories Fumigation" },
          { href: "/services/fumigation/industrial", label: "Packaging Factories Fumigation" },
          { href: "/services/fumigation/industrial", label: "Pharmaceutical Factories Fumigation" },
          { href: "/services/fumigation/industrial", label: "Ware Houses Fumigation" },
          { href: "/services/fumigation/industrial", label: "Container Fumigation Services" },
        ],
      },
    ],
  },
];

// Flat array for quick access
export const allServices = mainServices.flatMap((main) =>
  main.categories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.label, mainService: main.label }))
  )
);

// Main service cards for homepage display
export const mainServiceCards = [
  {
    id: "pest-control",
    number: "01",
    title: "Pest Control Services",
    description: "Complete pest elimination including termite control, rodent treatment, and insect control solutions for homes and businesses.",
    icon: "🐭",
    href: "/services/pest-control",
  },
  {
    id: "fumigation",
    number: "02",
    title: "Fumigation Services",
    description: "Professional fumigation services for residential, commercial, and industrial properties with specialized treatment plans.",
    icon: "💨",
    href: "/services/fumigation",
  },
  {
    id: "termite-control",
    number: "03", 
    title: "Termite Control Services",
    description: "Specialized termite control solutions to protect your property from structural damage.",
    icon: "🐜",
    href: "/services/pest-control/termite",
  },
  {
    id: "rodent-control",
    number: "04",
    title: "Rodent Control Services",
    description: "Effective rodent control solutions to eliminate infestations and prevent future occurrences.",
    icon: "🐀",
    href: "/services/pest-control/rodent",
  },
  {
    id: "insect-control",
    number: "05",
    title: "Insect Control Services",
    description: "Comprehensive insect control solutions to protect your property from various pest infestations.",
    icon: "🦋",
    href: "/services/pest-control/insect",
  }
];
