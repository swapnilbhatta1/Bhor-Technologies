import { ConsultationProvider } from "@/components/consultation-modal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustedEcosystemSection } from "@/components/sections/trusted-ecosystem-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function HomePage() {
  return (
    <ConsultationProvider>
      <div className="relative overflow-x-clip">
        <SiteHeader />
        <main>
          <HeroSection />
          <TrustedEcosystemSection />
          <ProblemSection />
          <SolutionSection />
          <ServicesSection />
          <SocialProofSection />
          <CaseStudiesSection />
          <TestimonialsSection />
          <ProcessSection />
          <BenefitsSection />
          <FaqSection />
          <FinalCtaSection />
        </main>
        <SiteFooter />
      </div>
    </ConsultationProvider>
  );
}
