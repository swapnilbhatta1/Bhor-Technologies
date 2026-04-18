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
              <article className="glass-panel h-full p-6 transition duration-300 hover:-translate-y-1 bg-slate-900/30 border border-white/5 backdrop-blur-xl hover:bg-slate-800/40 hover:border-indigo-500/30">
                <span className="inline-flex rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
                  Pain Point
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{point.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
