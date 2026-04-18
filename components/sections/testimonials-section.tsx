import { testimonials } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  return (
    <section className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients remember most is the clarity, momentum, and confidence."
          description="Every project is designed to feel collaborative, strategic, and outcome-driven from the very first sprint."
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 100}>
              <article className="glass-panel h-full p-6 bg-slate-900/30 border border-white/5 backdrop-blur-xl">
                <p className="text-base leading-8 text-slate-300">“{testimonial.quote}”</p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
