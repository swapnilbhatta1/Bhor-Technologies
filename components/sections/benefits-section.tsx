import { benefitCards } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function BenefitsSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Benefits"
              title="Designed to create faster growth with less operational drag."
              description="Bhor Technologies focuses on business outcomes that compound: speed, efficiency, automation, resilience, and a stronger digital foundation."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {benefitCards.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 90}>
                <article className="glass-panel h-full p-6">
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
