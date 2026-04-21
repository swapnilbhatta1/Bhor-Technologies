import { caseStudies } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function CaseStudiesSection() {
  return (
    <section id="results" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Results"
          title="Measurable outcomes, not just polished deliverables."
          description="We design projects around impact so teams can clearly see the shift from operational drag to business momentum."
        />
        <div className="mt-12 space-y-6">
          {caseStudies.map((study, index) => (
            <Reveal key={study.client} delay={index * 100}>
              <article className="glass-panel overflow-hidden p-6 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <span className="inline-flex rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
                      {study.client}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-white">{study.challenge}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      Before working with Sparkentech, the team faced friction that limited speed, visibility, and confidence.
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[28px] border border-rose-500/30 bg-rose-500/10 p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-400">Before</h4>
                      <ul className="mt-4 space-y-3">
                        {study.before.map((item) => (
                          <li key={item} className="text-sm leading-7 text-slate-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[28px] border border-emerald-500/30 bg-emerald-500/10 p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">After</h4>
                      <ul className="mt-4 space-y-3">
                        {study.after.map((item) => (
                          <li key={item} className="text-sm leading-7 text-slate-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
