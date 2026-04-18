import { AutomationIcon, DevelopmentIcon, SaasIcon, SecurityIcon } from "@/components/icons";
import { serviceCards } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ConsultationTrigger } from "@/components/consultation-modal";

const iconMap = {
  automation: AutomationIcon,
  saas: SaasIcon,
  development: DevelopmentIcon,
  security: SecurityIcon,
};

export function ServicesSection() {
  return (
    <section id="services" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="End-to-end digital services built for high-growth teams."
          description="From automation strategy to secure SaaS delivery, every engagement is designed to remove friction and create sustainable growth."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];

            return (
              <Reveal key={card.title} delay={index * 100}>
                <div className="h-full">
                  <ConsultationTrigger
                    service={card.title}
                    className="block h-full w-full text-left p-0 border-none bg-transparent hover:bg-transparent shadow-none"
                    variant="ghost"
                  >
                    <article className="glass-panel flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-orange-500/30 cursor-pointer">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-slate-900">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                    </article>
                  </ConsultationTrigger>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
