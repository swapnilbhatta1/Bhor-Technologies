"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ConsultationTrigger } from "@/components/consultation-modal";
import { navItems } from "@/lib/site-data";
import { Logo } from "@/components/ui/logo";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 14);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition duration-300 sm:px-6 ${
          isScrolled
            ? "border border-white/10 bg-slate-950/80 shadow-[0_16px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            : "bg-white/5 border border-white/10 backdrop-blur-md"
        }`}
      >
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-indigo-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ConsultationTrigger>Book a Free Consultation</ConsultationTrigger>
        </div>
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </div>
      {isMenuOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/10 bg-slate-950/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ConsultationTrigger className="mt-4 w-full" variant="primary" onClick={() => setIsMenuOpen(false)}>
            Book a Free Consultation
          </ConsultationTrigger>
        </div>
      ) : null}
    </header>
  );
}
