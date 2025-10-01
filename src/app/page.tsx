import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { SolutionSection } from "@/components/sections/solution";
import { BetaSection } from "@/components/sections/beta";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SolutionSection />
      <BetaSection />
      <PricingSection />
      <FAQSection />
    </>
  );
}
