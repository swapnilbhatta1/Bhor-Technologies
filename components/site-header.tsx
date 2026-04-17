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
            ? "border border-white/70 bg-white/82 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "bg-white/55 backdrop-blur-md"
        }`}
      >
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-200/60 bg-white/80 text-slate-900 lg:hidden"
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
        <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/70 bg-white/92 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-500"
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
