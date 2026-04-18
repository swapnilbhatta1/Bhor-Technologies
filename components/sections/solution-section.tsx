import { CheckIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  "Map and automate the workflows that waste the most time first",
  "Build digital products with a premium user experience and scalable architecture",
  "Integrate security practices directly into design, development, and deployment",
  "Create systems that support long-term growth instead of short-term patchwork",
];

export function SolutionSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="The Solution"
              title="Our Mission: Your Success"
              description="At Bhor Technologies, we believe in new beginnings. We build secure and smart digital systems so you can focus on what matters most: growing your business."
            />
            <div className="mt-8">
              <ButtonLink href="#services">Explore Our Services</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-panel relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,211,111,0.25),transparent_34%)]" />
              <div className="relative space-y-4">
                {pillars.map((item) => (
                  <div key={item} className="flex gap-4 rounded-[26px] border border-orange-100/80 bg-white/85 p-5">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                      <CheckIcon className="h-5 w-5" />
                    </div>
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
