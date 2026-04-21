import { ConsultationTrigger } from "@/components/consultation-modal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function FinalCtaSection() {
  return (
    <section className="section-shell pt-8">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-slate-950 px-6 py-10 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:px-8 lg:px-12 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,90,255,0.2),transparent_34%),radial-gradient(circle_at_80%_25%,rgba(82,90,255,0.1),transparent_22%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-400">
                  Limited monthly onboarding
                </span>
                <h2 className="mt-6 text-3xl font-extrabold leading-tight text-balance sm:text-4xl lg:text-[3rem]">
                  Start Your Digital Transformation Today
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  If your business is ready to automate, launch, secure, or scale, Sparkentech can help you move quickly with the right systems behind you.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink href="#contact">Get Started</ButtonLink>
                <ConsultationTrigger variant="secondary">
                  Book a Free Consultation
                </ConsultationTrigger>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
