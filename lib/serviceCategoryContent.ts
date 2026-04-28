import { mainServices, type MainService, type ServiceCategory } from "@/lib/servicesConfig";

export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceGalleryCard {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tag: string;
}

export interface ServiceCategoryContent {
  heroTitle: string;
  heroDescription: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  metrics: ServiceMetric[];
  highlights: string[];
  suitableFor: string[];
  warningSigns: string[];
  faqs: ServiceFaq[];
  process: Array<{
    title: string;
    description: string;
  }>;
  image: string;
  imageAlt: string;
}

export interface ResolvedServiceCategory {
  key: string;
  slug: string;
  mainService: MainService;
  category: ServiceCategory;
  content: ServiceCategoryContent;
}

const COMMONS_BASE = "https://commons.wikimedia.org/wiki/Special:FilePath";

const remoteMedia = {
  mosquito: {
    image: `/mosquito-control.png`,
    alt: "Close-up mosquito macro photograph",
  },
  cockroach: {
    image: `/cockroach-control.png`,
    alt: "Close-up photograph of a common cockroach",
  },
  fly: {
    image: `/files-control.png`,
    alt: "Close-up image of a housefly",
  },
  ant: {
    image: `/ant-control.png`,
    alt: "Macro photograph of an ant",
  },
  bedbug: {
    image: `/bed-bugs-control.png`,
    alt: "Close-up image of a bed bug",
  },
  flea: {
    image: `${COMMONS_BASE}/Fleas%20%2814215819410%29.jpg`,
    alt: "Close-up image showing fleas",
  },
  lizard: {
    image: `/lizard-control.png`,
    alt: "Close-up photograph of a small green lizard",
  },
  woodBorer: {
    image: `/termite.png`,
    alt: "Wood-boring beetle larva close-up photograph",
  },
  mouse: {
    image: `/rodent1.jpg`,
    alt: "Close-up image of a house mouse",
  },
  fumigation: {
    termite: {
      image: `/residential-fumigation.png`,
      alt: "Termite fumigation service",
    },
    cockroach: {
      image: `/residential-fumigation.png`,
      alt: "Cockroach fumigation service",
    },
    mosquito: {
      image: `/residential-fumigation.png`,
      alt: "Mosquito fumigation service",
    },
    dengue: {
      image: `/residential-fumigation.png`,
      alt: "Dengue fumigation service",
    },
    bedBug: {
      image: `/residential-fumigation.png`,
      alt: "Bed bug fumigation service",
    },
    flies: {
      image: `/residential-fumigation.png`,
      alt: "Flies fumigation service",
    },
    ant: {
      image: `/residential-fumigation.png`,
      alt: "Ant fumigation service",
    },
    woodBorer: {
      image: `/residential-fumigation.png`,
      alt: "Wood borer fumigation service",
    },
    lizard: {
      image: `/residential-fumigation.png`,
      alt: "Lizard fumigation service",
    },
    flea: {
      image: `/residential-fumigation.png`,
      alt: "Flea fumigation service",
    },
    kitchen: {
      image: `/residential-fumigation.png`,
      alt: "Kitchen fumigation service",
    },
    drain: {
      image: `/residential-fumigation.png`,
      alt: "Drain system fumigation service",
    },
    hotel: {
      image: `/hotel-fumigation.png`,
      alt: "Hotel fumigation service",
    },
    restaurant: {
      image: `/resturant-fumigation.png`,
      alt: "Restaurant fumigation service",
    },
    guestHouse: {
      image: `/residential-fumigation.png`,
      alt: "Guest house fumigation service",
    },
    hospital: {
      image: `/hospital-fumigation.png`,
      alt: "Hospital fumigation service",
    },
    bakery: {
      image: `/resturant-fumigation.png`,
      alt: "Bakery fumigation service",
    },
    club: {
      image: `/club-fumigation.png`,
      alt: "Club fumigation service",
    },
    school: {
      image: `/school-fumigation1.png`,
      alt: "School fumigation service",
    },
    bank: {
      image: `/bank-fumigation.png`,
      alt: "Bank fumigation service",
    },
    factory: {
      image: `/factory-fumigation.png`,
      alt: "Factory fumigation service",
    },
    textile: {
      image: `/textile.png`,
      alt: "Textile  fumigation service",
    },
    packaging: {
      image: `/factory-fumigatin.png`,
      alt: "Packaging fumigation service",
    },
    pharmaceutical: {
      image: `/pharma.png`,
      alt: "Pharmaceutical fumigation service",
    },
    warehouse: {
      image: `/farm-fumigation.png`,
      alt: "Warehouse fumigation service",
    },
    container: {
      image: `/container.png`,
      alt: "Container fumigation service",
    },
  },
} as const;

const itemDescriptions: Record<string, string> = {
  "termite control proofing":
    "Barrier treatment and proofing support focused on stopping active termite pressure around structural wood and foundation contact points.",
  "pre termite treatment":
    "Preventive termite treatment planned before finishing works so the structure has stronger long-term protection from the ground up.",
  "post termite treatment":
    "Post-construction termite control for built properties where drilling, spot treatment, and perimeter planning are needed.",
  "rodent rat control":
    "Structured rat control for kitchens, stores, roofs, and utility areas where rodent movement affects hygiene and safety.",
  "mouse control":
    "Mouse control designed for fast indoor activity, nesting points, and repeat entry routes in residential and commercial spaces.",
  "mosquito control":
    "Targeted mosquito reduction for outdoor resting areas, shaded corners, drainage zones, and family-use spaces.",
  "flies control":
    "Fly control for kitchens, waste zones, drains, and food-handling areas where hygiene complaints can spread quickly.",
  "ant control":
    "Ant control focused on trails, nesting points, wall edges, and repeated movement through kitchens, pantries, and outdoor borders.",
  "cockroaches control":
    "Cockroach treatment for kitchens, drains, cupboards, storage points, and hidden damp areas with strong recurring activity.",
  "bed bugs control":
    "Bed bug treatment for bedrooms, furniture edges, mattresses, and hospitality rooms where bite complaints or repeat infestations appear.",
  "fleas control":
    "Flea treatment for flooring, soft furnishings, pet-related zones, and hidden indoor corners where activity builds up fast.",
  "lizard control":
    "Lizard control for homes, shops, storerooms, and perimeter entry areas where insects and warm surfaces attract repeat activity.",
  "wood borer control":
    "Wood borer control for furniture, frames, panels, and wooden fittings showing dust, holes, or internal wood damage.",
  "dengue control services":
    "Dengue-focused mosquito control built around breeding prevention, outdoor treatment, and rapid response in high-risk seasons.",
  "termite fumigation":
    "Residential fumigation support for termite pressure in wall edges, concealed wood zones, and vulnerable household structures.",
  "cockroaches fumigation":
    "Fumigation coverage for roach-prone kitchens, pantry lines, drain-adjacent areas, and shared indoor spaces.",
  "mosquito fumigation":
    "Property-wide fumigation support to reduce mosquito activity around resting zones, entry points, and outdoor use areas.",
  "dengue fumigation":
    "Fumigation planned for dengue-risk environments where mosquito complaints and standing-water conditions need quick action.",
  "bed bugs fumigation":
    "Room-focused fumigation support for sleeping areas, hospitality spaces, and soft-furnishing zones affected by bed bug activity.",
  "flies fumigation":
    "Fumigation for fly-heavy spaces such as kitchens, dining areas, food service counters, and waste-adjacent locations.",
  "ant fumigation":
    "Ant fumigation support for persistent trails and nest activity in indoor and outdoor areas that need broader coverage.",
  "wood borer fumigation":
    "Fumigation for wood-borer risk in household timber elements, furniture, storage fixtures, and concealed wood surfaces.",
  "lizard fumigation":
    "Fumigation planning for lizard-prone interiors where insect attraction and entry gaps support recurring movement.",
  "fleas fumigation":
    "Fumigation support for flea activity in homes, pet-related spaces, fabric-heavy areas, and low-visibility floor zones.",
  "kitchen fumigation":
    "Kitchen fumigation built for cooking zones, service counters, food storage edges, and sanitation-sensitive interiors.",
  "drain system fumigation":
    "Drain-system fumigation for damp service channels, waste lines, and odor-prone points where insects keep returning.",
  "hotel fumigation":
    "Hotel fumigation for guest rooms, corridors, laundry areas, service backrooms, and high-turnover hospitality environments.",
  "restaurants fumigation":
    "Restaurant fumigation for kitchens, storage, dining zones, waste points, and operational areas that require stronger hygiene control.",
  "guest houses fumigation":
    "Guest house fumigation for bedrooms, common corridors, furniture-heavy rooms, and regular occupancy turnover.",
  "hospital fumigation":
    "Hospital fumigation for controlled environments where sanitation, patient comfort, and sensitive operational areas matter.",
  "bakeries fumigation":
    "Bakery fumigation for production counters, flour storage, service sections, and warm preparation environments.",
  "jem s club fumigation":
    "Club fumigation for active shared spaces, lounges, service areas, and hospitality-driven daily operations.",
  "schools fumigation":
    "School fumigation for classrooms, corridors, washrooms, cafeterias, and shared-use learning environments.",
  "banks fumigation":
    "Bank fumigation for customer halls, office rooms, archives, counters, and support spaces requiring discreet treatment planning.",
  "factories fumigation":
    "Factory fumigation for broad production floors, utility sections, storage lanes, and routine industrial pest pressure.",
  "textile factories fumigation":
    "Textile-site fumigation for fabric storage, production areas, packaging zones, and lint-prone operational sections.",
  "packaging factories fumigation":
    "Packaging facility fumigation for stored material, dispatch areas, pallet zones, and production support corridors.",
  "pharmaceutical factories fumigation":
    "Pharmaceutical fumigation planned for controlled manufacturing spaces, storage rooms, and clean operational workflows.",
  "ware houses fumigation":
    "Warehouse fumigation support for pallet storage, racks, dispatch lanes, and broad movement corridors.",
  "container fumigation services":
    "Container fumigation for loaded or staged units where cargo protection and enclosed-space treatment are required.",
};

const categoryContent: Record<string, ServiceCategoryContent> = {
  "pest-control/termite": {
    heroTitle: "Termite Control Services in Islamabad/Rawalpindi and Nearby Areas",
    heroDescription:
      "Protect homes, offices, and construction sites from hidden termite activity with inspection-led treatment, proofing plans, and reliable follow-up support.",
    overviewTitle: "Stop structural damage before termites spread",
    overviewParagraphs: [
      "Termites can stay active behind walls, under floors, and around wood fixtures for months before visible damage appears. Our termite control service is designed to locate activity early, reduce colony pressure, and protect high-risk areas with targeted treatment.",
      "We tailor termite proofing for residential, commercial, and newly built properties so clients get a treatment plan that fits the layout, moisture profile, and level of infestation. This helps reduce repeat issues and supports longer-lasting protection.",
      "For property owners searching for termite treatment, anti-termite proofing, or pre- and post-construction termite solutions, this page covers the most common treatment paths in one place.",
    ],
    metrics: [
      { value: "3+", label: "Termite treatment options" },
      { value: "Pre + Post", label: "Construction stage coverage" },
      { value: "Inspection-led", label: "Service approach" },
    ],
    highlights: [
      "Detailed site inspection to identify active zones and entry points",
      "Pre-construction and post-construction termite treatment options",
      "Targeted application around foundations, walls, woodwork, and soil contact points",
      "Service advice to reduce moisture and future termite attraction",
    ],
    suitableFor: [
      "Homes with wooden doors, cabinets, flooring, or roof framing",
      "Commercial buildings with storage rooms or hidden utility spaces",
      "New construction projects needing preventive termite proofing",
      "Properties showing mud tubes, hollow wood, or recurring termite signs",
    ],
    warningSigns: [
      "Mud tubes along walls, pillars, or skirting lines",
      "Hollow-sounding wood, damaged frames, or bubbling paint",
      "Recurring termite dust, wings, or activity near damp areas",
    ],
    faqs: [
      {
        question: "What is the difference between pre-termite and post-termite treatment?",
        answer:
          "Pre-termite treatment is applied during construction to build a preventive barrier, while post-termite treatment is used on completed properties where targeted access and remedial treatment are required.",
      },
      {
        question: "How often should termite-prone properties be inspected?",
        answer:
          "Properties with heavy wood use, older structures, or moisture issues benefit from regular inspection so early activity is found before structural damage spreads.",
      },
      {
        question: "Can termite treatment support both homes and commercial buildings?",
        answer:
          "Yes. The treatment scope can be adjusted for houses, offices, construction sites, storage-heavy buildings, and managed commercial properties.",
      },
    ],
    process: [
      {
        title: "Inspection and risk mapping",
        description:
          "We inspect the structure, locate termite evidence, and identify vulnerable points around walls, soil lines, wood joins, and damp areas.",
      },
      {
        title: "Treatment planning",
        description:
          "Our team selects the right treatment approach for the property type, infestation level, and construction stage.",
      },
      {
        title: "Application and sealing",
        description:
          "We apply the treatment in targeted zones and guide you on practical prevention steps to strengthen long-term results.",
      },
    ],
    image: "/termite1.png",
    imageAlt: "Professional termite control treatment being applied near a wall and floor edge",
  },
  "pest-control/rodent": {
    heroTitle: "Rodent Control Services in Islamabad/Rawalpindi and Nearby Areas",
    heroDescription:
      "Reduce rat and mouse activity with professional rodent control designed for homes, offices, warehouses, kitchens, and storage-heavy environments.",
    overviewTitle: "Eliminate rodent activity with a structured plan",
    overviewParagraphs: [
      "Rodents contaminate food storage, damage wiring, and create ongoing hygiene risks in both homes and commercial properties. Our rodent control service focuses on locating movement patterns, nesting zones, and access points so treatment is more effective from day one.",
      "Instead of relying on one quick fix, we combine inspection, placement strategy, and prevention guidance to help clients reduce repeat rodent activity and keep sensitive areas protected.",
      "This service category is useful for anyone searching for rat control, mouse control, warehouse rodent treatment, or indoor rodent removal for kitchens and service spaces.",
    ],
    metrics: [
      { value: "2+", label: "Rodent-focused options" },
      { value: "Food-safe", label: "Sensitive-site planning" },
      { value: "Homes + stores", label: "Property coverage" },
    ],
    highlights: [
      "Inspection of entry points, nesting areas, and food-source zones",
      "Control plans for homes, offices, warehouses, kitchens, and stores",
      "Safe placement strategy for monitoring and control points",
      "Practical recommendations to reduce reinfestation pressure",
    ],
    suitableFor: [
      "Homes with ceiling spaces, kitchen activity, or outdoor access gaps",
      "Restaurants, cafes, and bakeries with food storage concerns",
      "Warehouses, stores, and distribution sites with packaging exposure",
      "Properties with chewing marks, droppings, noise, or foul odor",
    ],
    warningSigns: [
      "Droppings near storage areas, kitchen edges, or wall lines",
      "Scratching sounds in ceilings, ducts, or closed utility spaces",
      "Chewed wires, packaging damage, or recurring foul odor",
    ],
    faqs: [
      {
        question: "Is rodent control only for large warehouses?",
        answer:
          "No. Rodent issues affect homes, restaurants, offices, and retail spaces too. The treatment plan simply changes based on the size and sensitivity of the property.",
      },
      {
        question: "What areas usually need the closest inspection?",
        answer:
          "Storage zones, food points, ceiling spaces, service ducts, exterior wall gaps, and waste-adjacent areas are usually the highest-priority locations.",
      },
      {
        question: "Can mouse and rat control be handled under one visit plan?",
        answer:
          "Yes. Activity is assessed first, then the service is adjusted for the species, access routes, and level of infestation found on site.",
      },
    ],
    process: [
      {
        title: "Survey and activity tracking",
        description:
          "We inspect walls, ceilings, service ducts, storage areas, and exterior edges to locate rodent movement and likely nesting spots.",
      },
      {
        title: "Targeted control setup",
        description:
          "Our team places control measures where they are most effective while considering the property layout and sensitivity of the space.",
      },
      {
        title: "Prevention follow-up",
        description:
          "We share site-specific housekeeping and exclusion guidance to help maintain results after treatment.",
      },
    ],
    image: "/rodent2.png",
    imageAlt: "Rodent control service setup in Islamabad/Rawalpindi for a commercial kitchen environment",
  },
  "pest-control/insects": {
    heroTitle: "Insect Control Services for Homes, Offices, and Commercial Sites",
    heroDescription:
      "Get targeted insect control for cockroaches, ants, mosquitoes, flies, bed bugs, fleas, and other common pests with treatment tailored to the problem area.",
    overviewTitle: "Fast action for high-activity insect zones",
    overviewParagraphs: [
      "Insect problems often spread quickly through kitchens, drains, washrooms, bedrooms, waste zones, and outdoor entry points. Our insect control service is built to address active infestations while improving site conditions that allow pests to return.",
      "Each property needs a different approach depending on pest type, traffic level, moisture, and sanitation patterns. We focus on practical treatment and easy prevention guidance to support cleaner, healthier spaces.",
      "The service cards below cover some of the most searched pest problems, including mosquito control, cockroach control, fly control, ant control, bed bug treatment, flea control, lizard control, and wood borer issues.",
    ],
    metrics: [
      { value: "8+", label: "Common pest types covered" },
      { value: "Indoor + outdoor", label: "Problem-zone coverage" },
      { value: "Targeted", label: "Treatment style" },
    ],
    highlights: [
      "Treatment plans for crawling and flying insects across multiple environments",
      "Coverage for kitchens, bedrooms, washrooms, drains, stores, and workspaces",
      "Service options for residential and commercial pest activity",
      "Clear aftercare guidance to support better ongoing pest prevention",
    ],
    suitableFor: [
      "Homes facing roach, ant, bed bug, or mosquito activity",
      "Offices, schools, and clinics requiring cleaner shared spaces",
      "Restaurants and food businesses with strict hygiene needs",
      "Properties with repeat insect activity after seasonal changes",
    ],
    warningSigns: [
      "Roaches, ants, or flies showing up repeatedly in wet or food-handling areas",
      "Mosquito complaints around standing water, gardens, or shaded corners",
      "Bites, insect trails, or hidden pest activity in beds, drains, and storage areas",
    ],
    faqs: [
      {
        question: "Can one insect control visit cover multiple pest types?",
        answer:
          "Yes. Many properties have overlapping pest issues, so treatment can be organized around the main hotspots and the species found during inspection.",
      },
      {
        question: "Which insect problems need the quickest response?",
        answer:
          "Cockroaches in kitchens, flies in food areas, bed bugs in bedrooms, and mosquitoes around family-use outdoor areas usually need fast action.",
      },
      {
        question: "Is insect control useful for commercial properties too?",
        answer:
          "Absolutely. Offices, clinics, schools, restaurants, and retail spaces often need structured insect treatment to support hygiene and comfort.",
      },
    ],
    process: [
      {
        title: "Pest identification",
        description:
          "We identify the main insect issue, where it is active, and what environmental conditions are supporting it.",
      },
      {
        title: "Zone-based treatment",
        description:
          "Our team treats the most affected indoor and outdoor points with a service plan matched to the site and pest type.",
      },
      {
        title: "Site care guidance",
        description:
          "We explain what to improve in waste handling, moisture control, and routine cleaning to help prevent recurring infestations.",
      },
    ],
    image: "/pest2.png",
    imageAlt: "General insect control service being carried out in an indoor property setting",
  },
  "pest-control/dengue": {
    heroTitle: "BestDengue Control Services in Islamabad/Rawalpindi",
    heroDescription:
      "Support healthier residential and commercial environments with dengue control services focused on mosquito hotspots, breeding zones, and rapid response treatment.",
    overviewTitle: "Reduce mosquito pressure around your property",
    overviewParagraphs: [
      "Mosquito activity increases quickly around standing water, outdoor shade, drainage areas, and poorly managed open spaces. Our dengue control service focuses on reducing mosquito breeding pressure and treating active problem zones before they affect families, staff, students, or visitors.",
      "We work with households, offices, schools, and commercial properties that need a reliable mosquito control plan during high-risk periods or after visible mosquito population growth.",
      "For search intent around dengue spray service, mosquito breeding control, or preventive mosquito treatment, this page keeps the service scope simple and easy to browse.",
    ],
    metrics: [
      { value: "Rapid", label: "Response for high-risk seasons" },
      { value: "Outdoor-led", label: "Focus area" },
      { value: "Homes + institutions", label: "Service fit" },
    ],
    highlights: [
      "Inspection of mosquito-prone zones and standing-water risk points",
      "Treatment support for homes, schools, offices, and community sites",
      "Practical prevention advice for outdoor and semi-covered areas",
      "Useful for seasonal mosquito spikes and high-complaint properties",
    ],
    suitableFor: [
      "Residential communities during mosquito season",
      "Schools, clinics, and offices with outdoor movement areas",
      "Sites with drainage issues or water collection points",
      "Families and businesses looking for preventive mosquito control",
    ],
    warningSigns: [
      "Mosquito complaints increase near dusk or after rain",
      "Standing water remains around drains, pots, roofs, or open containers",
      "Families, staff, or students report repeated bites in outdoor-use zones",
    ],
    faqs: [
      {
        question: "Does dengue control focus only on indoor treatment?",
        answer:
          "No. Outdoor breeding points and shaded mosquito resting areas are often the highest-priority zones for dengue-related mosquito control.",
      },
      {
        question: "When should a property book dengue control support?",
        answer:
          "It is especially useful during mosquito season, after weather changes, or whenever the property starts seeing repeated outdoor mosquito complaints.",
      },
      {
        question: "Can schools and offices use the same dengue control category?",
        answer:
          "Yes. The same service can be adapted for schools, offices, housing areas, clinics, and mixed-use community environments.",
      },
    ],
    process: [
      {
        title: "Breeding-site review",
        description:
          "We inspect the property for standing water, drainage problems, shaded resting areas, and other mosquito-supporting conditions.",
      },
      {
        title: "Mosquito control treatment",
        description:
          "Our team treats key areas to reduce active mosquito presence and improve the overall comfort of the space.",
      },
      {
        title: "Prevention planning",
        description:
          "We advise on cleanup and water-management steps that help lower future breeding risk around the property.",
      },
    ],
    image: "/pest3.png",
    imageAlt: "Outdoor mosquito and dengue control service near a residential property",
  },
  "fumigation/residential": {
    heroTitle: "Best Residential Fumigation Services in Islamabad/Rawalpindi.",
    heroDescription:
      "Residential fumigation services designed for houses, apartments, kitchens, bedrooms, and drain-related pest problems with careful planning for day-to-day living spaces.",
    overviewTitle: "Home fumigation tailored to common household pest issues",
    overviewParagraphs: [
      "Residential properties need fumigation plans that account for room use, family routines, pest intensity, and high-traffic indoor areas. Our service is designed for practical home protection with attention to bedrooms, kitchens, drains, and hidden pest zones.",
      "Whether the issue involves roaches, bed bugs, mosquitoes, ants, termites, or general insect pressure, we organize the treatment around the needs of the property so the service feels clear, structured, and easy to follow.",
      "The gallery below shows the most common residential fumigation requests so visitors can quickly understand where the service fits in real household situations.",
    ],
    metrics: [
      { value: "12+", label: "Home fumigation service types" },
      { value: "Bedroom to drain", label: "Coverage range" },
      { value: "Family-focused", label: "Planning style" },
    ],
    highlights: [
      "Suitable for homes, apartments, family residences, and rental units",
      "Fumigation support for bedrooms, kitchens, drains, and living areas",
      "Treatment planning based on pest type and property layout",
      "Clear preparation and aftercare guidance for residents",
    ],
    suitableFor: [
      "Families dealing with repeat indoor pest complaints",
      "Rental homes preparing for tenant turnover or occupancy support",
      "Apartments with shared-wall or drainage-related pest spread",
      "Homes needing seasonal or problem-specific fumigation service",
    ],
    warningSigns: [
      "Pests keep returning from kitchens, drains, or wall-adjacent rooms",
      "Bites, sightings, or odor issues affect bedrooms and living areas",
      "Shared residential layouts allow pests to move between rooms or units",
    ],
    faqs: [
      {
        question: "What types of pests are commonly handled under residential fumigation?",
        answer:
          "Residential fumigation often covers termites, cockroaches, mosquitoes, bed bugs, ants, flies, fleas, drain-related insect problems, and similar household pest pressure.",
      },
      {
        question: "Is residential fumigation useful for apartments as well as houses?",
        answer:
          "Yes. Apartments often benefit from room-based and system-based fumigation where pest movement is linked to shared walls, drainage, or repeated indoor migration.",
      },
      {
        question: "Can kitchen and drain issues be included in the same visit plan?",
        answer:
          "They can. Residential fumigation can be organized around multiple household hotspots so treatment is practical and easier to manage.",
      },
    ],
    process: [
      {
        title: "Home assessment",
        description:
          "We review the property layout, pest complaint, and the rooms or systems where activity is highest.",
      },
      {
        title: "Room-by-room fumigation planning",
        description:
          "Our team organizes treatment coverage around the parts of the home that need the most attention.",
      },
      {
        title: "Aftercare support",
        description:
          "We explain the next steps for ventilation, cleaning, and household prevention after the service is complete.",
      },
    ],
    image: "/hero2.png",
    imageAlt: "Residential fumigation service being prepared for a home interior",
  },
  "fumigation/commercial": {
    heroTitle: "Best Commercial Fumigation Services in Islamabad/Rawalpindi.",
    heroDescription:
      "Commercial fumigation services for restaurants, cafes, hotels, schools, hospitals, offices, and customer-facing properties that need stronger hygiene protection.",
    overviewTitle: "Commercial fumigation for business continuity and hygiene standards",
    overviewParagraphs: [
      "Commercial spaces require pest control solutions that protect staff, visitors, stored goods, and brand reputation. Our commercial fumigation service is structured for high-traffic properties where hygiene, consistency, and responsive scheduling matter.",
      "We support businesses across hospitality, education, food, healthcare, and office environments with treatment strategies that focus on active zones and recurring problem points.",
      "If someone is comparing hotel fumigation, restaurant fumigation, school pest fumigation, or clinic sanitation support, this service page now shows those options directly with visual cards.",
    ],
    metrics: [
      { value: "10+", label: "Commercial site types" },
      { value: "Customer-facing", label: "Environment support" },
      { value: "Scheduled", label: "Operational planning" },
    ],
    highlights: [
      "Coverage for hospitality, food service, office, school, and healthcare sites",
      "Useful for kitchens, service areas, storage rooms, seating zones, and washrooms",
      "Supports cleaner customer-facing and staff-only environments",
      "Flexible planning for recurring or one-time fumigation requirements",
    ],
    suitableFor: [
      "Restaurants, bakeries, and cafes managing food-safe environments",
      "Hotels and guest houses protecting guest comfort and reputation",
      "Schools, colleges, and training centers with daily foot traffic",
      "Clinics and hospitals requiring cleaner controlled spaces",
    ],
    warningSigns: [
      "Customer complaints increase around smell, flies, roaches, or visible pests",
      "Storage, kitchens, or service corridors show repeated insect activity",
      "Operations need better pest control without disrupting daily business flow",
    ],
    faqs: [
      {
        question: "Can commercial fumigation be scheduled around business hours?",
        answer:
          "Yes. Planning is usually adjusted around the property type, customer traffic, access windows, and the sensitivity of the working environment.",
      },
      {
        question: "Which commercial properties need fumigation most often?",
        answer:
          "Food businesses, hospitality spaces, schools, clinics, and customer-facing interiors often need stronger recurring pest prevention.",
      },
      {
        question: "Does the same category cover both small and large business sites?",
        answer:
          "It does. The service can be scaled from compact cafes and shops to larger hotels, institutions, and multi-room commercial facilities.",
      },
    ],
    process: [
      {
        title: "Site review and scheduling",
        description:
          "We assess the business environment, note sensitive operating areas, and align the service with practical access timing.",
      },
      {
        title: "Targeted treatment delivery",
        description:
          "Our team focuses on the problem zones that affect hygiene, comfort, storage, and daily operations the most.",
      },
      {
        title: "Operational prevention advice",
        description:
          "We share simple recommendations for waste control, housekeeping, and site management to help sustain better results.",
      },
    ],
    image: "/community-image.png",
    imageAlt: "Commercial fumigation support for a shared indoor business environment",
  },
  "fumigation/industrial": {
    heroTitle: "Best Industrial Fumigation Services in Islamabad/Rawalpindi.",
    heroDescription:
      "Industrial fumigation services built for warehouses, factories, packaging sites, and production environments where pest activity can affect operations and stored materials.",
    overviewTitle: "Industrial fumigation for large-scale facilities and inventory protection",
    overviewParagraphs: [
      "Industrial properties face pest pressure from loading activity, storage cycles, packaging waste, raw materials, and broad floor coverage. Our industrial fumigation service is designed for larger environments where thorough site awareness and practical treatment planning are essential.",
      "We support factories, warehouses, containers, and specialized production sites with fumigation plans that help reduce contamination risk and protect business continuity.",
      "This page now groups factory, packaging, pharmaceutical, textile, warehouse, and container fumigation into a more visual layout so the service options are easier to compare.",
    ],
    metrics: [
      { value: "6+", label: "Industrial service types" },
      { value: "Large-area", label: "Coverage model" },
      { value: "Inventory-aware", label: "Planning approach" },
    ],
    highlights: [
      "Coverage for factories, warehouses, packaging units, and container areas",
      "Useful for high-volume storage, logistics, and production facilities",
      "Supports pest management in broad floorplans and service corridors",
      "Planning that reflects operational realities and inventory movement",
    ],
    suitableFor: [
      "Warehouses holding packaged goods or sensitive stock",
      "Factories managing storage, waste, and raw material handling",
      "Distribution sites with repeated loading and unloading activity",
      "Industrial properties preparing for inspections or routine pest control",
    ],
    warningSigns: [
      "Pest evidence appears near pallets, loading docks, packaging, or raw material zones",
      "Large facilities struggle with repeated activity in storage corridors and utility spaces",
      "Operations need broader fumigation planning across production and warehouse sections",
    ],
    faqs: [
      {
        question: "What makes industrial fumigation different from residential or commercial work?",
        answer:
          "Industrial fumigation typically covers larger floor areas, storage-heavy environments, loading activity, and operations where inventory protection is a major priority.",
      },
      {
        question: "Can this category support both warehouses and production factories?",
        answer:
          "Yes. The same service framework can be adjusted for warehouses, factories, packaging sites, containers, and specialized industrial operations.",
      },
      {
        question: "Is industrial fumigation useful before inspections or operational reviews?",
        answer:
          "It often is. Many businesses use industrial pest services to strengthen hygiene, storage control, and presentation before audits and site reviews.",
      },
    ],
    process: [
      {
        title: "Facility inspection",
        description:
          "We review storage layouts, production lines, waste zones, service corridors, and loading areas to map the treatment plan.",
      },
      {
        title: "Large-area fumigation planning",
        description:
          "Our team organizes treatment to match the scale, access needs, and risk points of the industrial site.",
      },
      {
        title: "Post-service site control",
        description:
          "We provide site-focused prevention advice to help reduce future pest pressure across the facility.",
      },
    ],
    image: "/pest2.png",
    imageAlt: "Industrial fumigation service for a warehouse or factory environment",
  },
};

function getCategorySlug(category: ServiceCategory) {
  const segments = category.href.split("/").filter(Boolean);
  return segments[segments.length - 1] ?? "";
}

function normalizeLabel(label: string) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getItemMedia(itemLabel: string, fallbackImage: string, fallbackAlt: string) {
  const label = normalizeLabel(itemLabel);

  // FUMIGATION HANDLERS - CHECK FIRST before general pest types
  if (label.includes("hotel") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.hotel.image,
      imageAlt: remoteMedia.fumigation.hotel.alt,
    };
  }

  if (label.includes("restaurants") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.restaurant.image,
      imageAlt: remoteMedia.fumigation.restaurant.alt,
    };
  }

  if (label.includes("guest house") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.guestHouse.image,
      imageAlt: remoteMedia.fumigation.guestHouse.alt,
    };
  }

  if (label.includes("hospital") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.hospital.image,
      imageAlt: remoteMedia.fumigation.hospital.alt,
    };
  }

  if (label.includes("bakeries") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.bakery.image,
      imageAlt: remoteMedia.fumigation.bakery.alt,
    };
  }

  if ((label.includes("club") || label.includes("jem s")) && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.club.image,
      imageAlt: remoteMedia.fumigation.club.alt,
    };
  }

  if (label.includes("schools") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.school.image,
      imageAlt: remoteMedia.fumigation.school.alt,
    };
  }

  if (label.includes("banks") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.bank.image,
      imageAlt: remoteMedia.fumigation.bank.alt,
    };
  }

  if (label.includes("factories") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.factory.image,
      imageAlt: remoteMedia.fumigation.factory.alt,
    };
  }

  if (label.includes("textile") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.textile.image,
      imageAlt: remoteMedia.fumigation.textile.alt,
    };
  }

  if (label.includes("packaging") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.packaging.image,
      imageAlt: remoteMedia.fumigation.packaging.alt,
    };
  }

  if (label.includes("pharmaceutical") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.pharmaceutical.image,
      imageAlt: remoteMedia.fumigation.pharmaceutical.alt,
    };
  }

  if (label.includes("ware house") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.warehouse.image,
      imageAlt: remoteMedia.fumigation.warehouse.alt,
    };
  }

  if (label.includes("container") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.container.image,
      imageAlt: remoteMedia.fumigation.container.alt,
    };
  }

  if (label.includes("termite") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.termite.image,
      imageAlt: remoteMedia.fumigation.termite.alt,
    };
  }

  if (label.includes("cockroach") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.cockroach.image,
      imageAlt: remoteMedia.fumigation.cockroach.alt,
    };
  }

  if ((label.includes("mosquito") || label.includes("dengue")) && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.mosquito.image,
      imageAlt: remoteMedia.fumigation.mosquito.alt,
    };
  }

  if (label.includes("bed bug") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.bedBug.image,
      imageAlt: remoteMedia.fumigation.bedBug.alt,
    };
  }

  if (label.includes("flies") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.flies.image,
      imageAlt: remoteMedia.fumigation.flies.alt,
    };
  }

  if (label.includes("ant") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.ant.image,
      imageAlt: remoteMedia.fumigation.ant.alt,
    };
  }

  if ((label.includes("wood borer") || label.includes("borer")) && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.woodBorer.image,
      imageAlt: remoteMedia.fumigation.woodBorer.alt,
    };
  }

  if (label.includes("lizard") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.lizard.image,
      imageAlt: remoteMedia.fumigation.lizard.alt,
    };
  }

  if (label.includes("flea") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.flea.image,
      imageAlt: remoteMedia.fumigation.flea.alt,
    };
  }

  if (label.includes("kitchen") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.kitchen.image,
      imageAlt: remoteMedia.fumigation.kitchen.alt,
    };
  }

  if (label.includes("drain") && label.includes("fumigation")) {
    return {
      image: remoteMedia.fumigation.drain.image,
      imageAlt: remoteMedia.fumigation.drain.alt,
    };
  }

  // GENERAL PEST CONTROL HANDLERS
  if (label.includes("pre termite")) {
    return {
      image: "/pre-contruction-termite.png",
      imageAlt: "Pre-construction termite treatment area",
    };
  }

  if (label.includes("post termite")) {
    return {
      image: "/post-contruction-termite.png",
      imageAlt: "Post-construction termite treatment service",
    };
  }

  if (label.includes("termite")) {
    return {
      image: "/termite1.png",
      imageAlt: "Termite control service image",
    };
  }

  if (label.includes("mouse")) {
    return {
     image: "/rodent1.jpg",
      imageAlt: "Rodent control service image",
    };
  }

  if (label.includes("rodent") || label.includes("rat")) {
    return {
      image: "/rodent2.png",
      imageAlt: "Rodent control service image",
    };
  }

  if (label.includes("mosquito") || label.includes("dengue")) {
    return {
      image: "/dengue-comtrol.png",
      imageAlt: "Dengue control service image",
    };
  }

  if (label.includes("cockroach")) {
    return {
      image: "/cockroach-control.png",
      imageAlt: "Cockroach control service image",
    };
  }

  if (label.includes("flies") || label.includes("fly")) {
    return {
      image: "/files-control.png",
      imageAlt: "Flies control service image",
    };
  }

  if (label.includes("ant")) {
    return {
      image: "/ant-control.png",
      imageAlt: "Ant control service image",
    };
  }

  if (label.includes("bed bug")) {
    return {
      image: "/bed-bugs-control.png",
      imageAlt: "Bed bug control service image",
    };
  }

  if (label.includes("lizard")) {
    return {
     image: "/lizard-control.png",
      imageAlt: "Lizard control service image",
    };
  }

  if (label.includes("wood borer") || label.includes("borer")) {
    return {
      image: "/termite.png",
      imageAlt: "Termite control service image",
    };
  }

  if (label.includes("kitchen")) {
    return {
      image: "/pest3.png",
      imageAlt: "Residential kitchen service image",
    };
  }

  if (label.includes("drain")) {
    return {
      image: "/pest3.png",
      imageAlt: "Drain-system service image",
    };
  }

  if (
    label.includes("hotel") ||
    label.includes("guest house") ||
    label.includes("restaurants") ||
    label.includes("bakeries") ||
    label.includes("club")
  ) {
    return {
      image: "/cta.jpg",
      imageAlt: "Commercial hospitality service environment",
    };
  }

  if (label.includes("hospital") || label.includes("schools") || label.includes("banks")) {
    return {
      image: "/community-image.png",
      imageAlt: "Commercial institutional service environment",
    };
  }

  if (
    label.includes("factories") ||
    label.includes("textile") ||
    label.includes("packaging") ||
    label.includes("pharmaceutical") ||
    label.includes("ware house") ||
    label.includes("container")
  ) {
    return {
      image: "/cta.jpg",
      imageAlt: "Industrial fumigation service environment",
    };
  }

  return {
    image: fallbackImage,
    imageAlt: fallbackAlt,
  };
}

export function getServiceCategoryPageData(
  mainServiceId: string,
  categorySlug: string
): ResolvedServiceCategory | null {
  const mainService = mainServices.find((service) => service.id === mainServiceId);
  if (!mainService) {
    return null;
  }

  const category = mainService.categories.find((entry) => getCategorySlug(entry) === categorySlug);
  if (!category) {
    return null;
  }

  const key = `${mainServiceId}/${categorySlug}`;
  const content = categoryContent[key];

  if (!content) {
    return null;
  }

  return {
    key,
    slug: categorySlug,
    mainService,
    category,
    content,
  };
}

export function getStaticCategoryParams(mainServiceId: string) {
  const mainService = mainServices.find((service) => service.id === mainServiceId);
  return (
    mainService?.categories.map((category) => ({
      category: getCategorySlug(category),
    })) ?? []
  );
}

export function getRelatedServiceCategories(mainServiceId: string, currentSlug: string) {
  const allCategories = mainServices.flatMap((service) =>
    service.categories.map((category) => ({
      mainService: service,
      category,
      slug: getCategorySlug(category),
    }))
  );

  const sameService = allCategories.filter(
    (entry) => entry.mainService.id === mainServiceId && entry.slug !== currentSlug
  );
  const otherServices = allCategories.filter((entry) => entry.mainService.id !== mainServiceId);

  return [...sameService.slice(0, 2), ...otherServices.slice(0, 2)].slice(0, 4);
}

export function getCategoryServiceCards(data: ResolvedServiceCategory): ServiceGalleryCard[] {
  return data.category.items.map((item) => {
    const normalized = normalizeLabel(item.label);
    const media = getItemMedia(item.label, data.content.image, data.content.imageAlt);

    return {
      title: item.label,
      description:
        itemDescriptions[normalized] ??
        `${item.label} support planned around ${data.category.label.toLowerCase()} needs for homes, offices, and commercial properties.`,
      image: media.image,
      imageAlt: media.imageAlt,
      tag: data.mainService.label,
    };
  });
}
