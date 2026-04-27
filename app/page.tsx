import { HeroSection } from "@/components/home/HeroSection";
import { ParallaxServicesSection } from "@/components/sections/ParallaxServicesSection";
import { BusinessSectorsSection } from "@/components/home/BusinessSectorsSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { LocalSearchSection } from "@/components/home/LocalSearchSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ServiceAreasSection } from "@/components/home/ServiceAreasSection";
import { FAQSection } from "@/components/home/FAQSection";
import { EmergencyBanner } from "@/components/home/EmergencyBanner";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/motion";

export default function HomePage() {
  return (
    <>
      <FadeIn>
        <HeroSection />
      </FadeIn>
      <FadeIn>
        <ParallaxServicesSection />
      </FadeIn>
      <FadeIn>
        <BusinessSectorsSection />
      </FadeIn>
      <FadeIn>
        <ExpertiseSection />
      </FadeIn>
      <FadeIn>
        <WhyChooseUsSection />
      </FadeIn>
      <FadeIn>
        <LocalSearchSection />
      </FadeIn>
      <FadeIn>
        <ProcessSection />
      </FadeIn>
      <FadeIn>
        <TestimonialsSection />
      </FadeIn>
      <FadeIn>
        <ServiceAreasSection />
      </FadeIn>
      <FadeIn>
        <FAQSection />
      </FadeIn>
      <FadeIn>
        <EmergencyBanner />
      </FadeIn>
      <FadeIn>
        <CTASection />
      </FadeIn>
    </>
  );
}
