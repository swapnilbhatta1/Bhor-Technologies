import { processSteps } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  return (
    <section id="process" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="A structured process that keeps execution fast, focused, and low-friction."
          description="From discovery through scale, we keep strategy and implementation aligned so progress stays visible and measurable."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 90}>
              <article className="glass-panel h-full p-6 bg-slate-900/30 border border-white/5 backdrop-blur-xl">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">{step.step}</span>
                <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
