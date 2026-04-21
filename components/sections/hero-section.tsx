import { ConsultationTrigger } from "@/components/consultation-modal";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { CyberGlobe } from "@/components/ui/cyber-globe";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const heroBullets = [
  "Automation systems that remove manual bottlenecks",
  "Scalable SaaS and product engineering for growth",
  "Security-minded delivery from concept to launch",
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-32 sm:pt-36 bg-[#090a10]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,10,16,1)_0%,rgba(15,17,26,0.85)_42%,rgba(10,12,20,1)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[78%] bg-gradient-to-b from-indigo-950/20 via-indigo-900/10 to-transparent" />
      <div className="absolute inset-0 grid-fade opacity-40" />
      <div className="hero-beam absolute left-1/2 top-24 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full opacity-60" />
      <div className="hero-sun absolute left-1/2 top-[52%] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full opacity-80" />
      <div className="absolute inset-x-0 bottom-[22%] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      {/* ── Cyber Globe — absolute background, behind all content ── */}
      <div
        className="pointer-events-none absolute right-[-6%] top-1/2 -translate-y-[48%] h-[420px] w-[420px] opacity-25 sm:h-[520px] sm:w-[520px] sm:opacity-35 lg:h-[660px] lg:w-[660px] lg:opacity-50 xl:right-[2%]"
        aria-hidden="true"
      >
        <CyberGlobe />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Rising technology for a new beginning</span>
              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.04] sm:text-5xl lg:text-[4.5rem] text-white">
                Smart Tech to Grow Your Business Faster.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                We help businesses save time and grow by combining AI automation, modern software development, and strong cybersecurity. Everything you need, all in one place.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#contact">Get a Free Consultation</ButtonLink>
                <ConsultationTrigger variant="secondary">
                  Explore Our Services
                </ConsultationTrigger>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span className="rounded-full border border-indigo-500/30 bg-white/5 px-4 py-2 font-medium">
                  Fast onboarding for qualified projects
                </span>
                <span className="rounded-full border border-indigo-500/30 bg-white/5 px-4 py-2 font-medium">
                  Senior-led delivery
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-panel relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(82,90,255,0.15),transparent_40%),linear-gradient(180deg,rgba(15,17,26,0.5),rgba(9,10,16,0.3))]" />
              <div className="relative">
                <div className="flex items-center justify-between rounded-[28px] border border-white/5 bg-slate-900/50 px-5 py-4 shadow-sm">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-400">Growth Snapshot</p>
                    <p className="mt-1 text-lg font-bold text-slate-100">Automation-first systems that scale with you</p>
                  </div>
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20">Live Strategy</span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {heroBullets.map((item) => (
                    <div
                      key={item}
                      className="sunrise-border rounded-[28px] p-5 transition duration-300 hover:-translate-y-1"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                        <CheckIcon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-sm font-medium leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-[30px] bg-indigo-950/40 border border-indigo-500/20 px-6 py-5 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">Launch momentum</p>
                      <p className="mt-2 text-2xl font-bold">Move from manual friction to measurable scale.</p>
                    </div>
                    <div className="hidden rounded-full bg-white/5 p-3 border border-white/10 sm:block">
                      <ArrowRightIcon className="h-6 w-6 text-indigo-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
