import { HeroSection } from "@/components/home/HeroSection";
import { ParallaxServicesSection } from "@/components/sections/ParallaxServicesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BusinessSectorsSection } from "@/components/home/BusinessSectorsSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ServiceAreasSection } from "@/components/home/ServiceAreasSection";
import { FAQSection } from "@/components/home/FAQSection";
import { EmergencyBanner } from "@/components/home/EmergencyBanner";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ParallaxServicesSection />
      <ServicesSection />
      <BusinessSectorsSection />
      <ExpertiseSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <FAQSection />
      <EmergencyBanner />
      <CTASection />
    </>
  );
}
