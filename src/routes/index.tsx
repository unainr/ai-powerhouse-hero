import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroContent } from "@/components/HeroContent";
import { LogoMarquee } from "@/components/LogoMarquee";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StatsSection } from "@/components/StatsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Power AI — The Future of Talent Acquisition" },
      { name: "description", content: "The most powerful AI ever deployed in talent acquisition. Match, screen, and hire the best talent 10x faster." },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-background">
      {/* Hero section with video background */}
      <div className="relative min-h-screen overflow-hidden">
        <BackgroundVideo />
        <div className="relative z-10 min-h-screen flex flex-col" style={{ overflow: "visible" }}>
          <Navbar />
          <HeroContent />
          <LogoMarquee />
        </div>
      </div>

      {/* Below-fold sections */}
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
