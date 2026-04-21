import { trustSignals, trustStats } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function SocialProofSection() {
  return (
    <section className="section-shell pt-8">
      <Container>
        <div className="glass-panel overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <div>
                <span className="eyebrow">Trust Signals</span>
                <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  Why Choose Sparkentech?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                  We focus on shipping work that saves time, improves customer experience, and creates a stronger foundation for long-term scale.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {trustSignals.map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full border border-indigo-500/30 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {trustStats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 90}>
                  <article className="rounded-[30px] border border-white/5 bg-slate-900/50 p-6 shadow-sm">
                    <p className="text-3xl font-extrabold text-white sm:text-4xl">{stat.value}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{stat.label}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
