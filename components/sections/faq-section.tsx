import { faqs } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <section id="faq" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions before starting a project."
          description="If you are planning a new platform, improving operations, or strengthening security, these are the questions we hear most often."
        />
        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 70}>
              <details className="glass-panel group p-6 bg-slate-900/30 border border-white/5 backdrop-blur-xl" open={index === 0}>
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-white marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
