import { problemPoints } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProblemSection() {
  return (
    <section id="problem" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title="Too many businesses are trying to scale on slow, insecure, and disconnected systems."
          description="Growth becomes harder when teams are buried in manual work, tools do not talk to each other, and product or security decisions are constantly reactive."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {problemPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 90}>
              <article className="glass-panel h-full p-6 transition duration-300 hover:-translate-y-1">
                <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                  Pain Point
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{point.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
