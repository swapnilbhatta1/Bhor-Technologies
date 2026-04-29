"use client";

import { useRef } from "react";
import { ConsultationTrigger } from "@/components/consultation-modal";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const heroBullets = [
  "Automation systems that remove manual bottlenecks",
  "Scalable SaaS and product engineering for growth",
  "Security-minded delivery from concept to launch",
];

export function HeroSection() {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    panelRef.current.style.setProperty("--mouse-x", `${x}px`);
    panelRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="relative isolate overflow-hidden pt-32 sm:pt-36 bg-[#090a10]">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      {/* Dark overlay to ensure text remains readable over the video */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#090a10] to-transparent z-0" />

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
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#contact" className="w-full sm:w-auto justify-center">Get a Free Consultation</ButtonLink>
                <div className="w-full sm:w-auto">
                  <ConsultationTrigger variant="secondary" className="w-full justify-center">
                    Explore Our Services
                  </ConsultationTrigger>
                </div>
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
            <div 
              ref={panelRef}
              onMouseMove={handleMouseMove}
              className="group relative overflow-hidden p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] transition-all duration-500 md:hover:rounded-[40px] md:hover:scale-[1.02]"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.2), inset 0 -1px 2px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Dynamic Mouse Glow (Water reflection) */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.15), transparent 40%)"
                }}
              />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-[20px] sm:rounded-[28px] border border-white/5 bg-slate-900/50 px-4 sm:px-5 py-4 shadow-sm">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-indigo-400">Growth Snapshot</p>
                    <p className="mt-1 text-base sm:text-lg font-bold text-slate-100">Automation-first systems that scale with you</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-400 border border-indigo-500/20">Live Strategy</span>
                </div>
                <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2">
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
                <div className="mt-5 sm:mt-6 rounded-[24px] sm:rounded-[30px] bg-indigo-950/40 border border-indigo-500/20 px-5 sm:px-6 py-4 sm:py-5 text-white">
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div>
                      <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">Launch momentum</p>
                      <p className="mt-1.5 sm:mt-2 text-lg sm:text-2xl font-bold leading-tight">Move from manual friction to measurable scale.</p>
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
