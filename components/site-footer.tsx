import Link from "next/link";

import { FacebookIcon, LinkedinIcon, WhatsappIcon, XIcon } from "@/components/icons";
import { footerLinks } from "@/lib/site-data";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-indigo-500/10 bg-slate-950 pb-10 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <Container>
        <div className="glass-panel px-6 py-8 sm:px-8 lg:px-10 border-white/5 bg-white/5">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <Logo />
              <p className="mt-5 max-w-md text-base leading-8 text-slate-400">
                Innovate. Automate. Secure. Leading the future of AI-driven digital transformation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="mailto:hello.spearkentech@gmail.com">hello.sparkentech@gmail.com</ButtonLink>
                <ButtonLink href="tel:+8801349963230" variant="secondary">
                  +8801349963230
                </ButtonLink>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-400">Explore</h3>
              <div className="mt-5 flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-slate-400 transition hover:text-indigo-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-400">Follow</h3>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-indigo-500/30 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:text-indigo-400"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1FdXNqkWQv/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-indigo-500/30 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:text-indigo-400"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/message/EJ5CJSKODCIWI1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-indigo-500/30 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:text-indigo-400"
                  aria-label="WhatsApp"
                >
                  <WhatsappIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-indigo-500/30 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:text-indigo-400"
                  aria-label="X"
                >
                  <XIcon className="h-5 w-5" />
                </a>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Limited onboarding slots each month to keep strategy and delivery hands-on.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-indigo-500/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Sparkentech. All rights reserved.</p>
            <p>AI Automation | SaaS | Web & App Development | Cyber Security</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
