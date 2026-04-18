import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-[#525AFF] text-white shadow-[0_18px_40px_rgba(82,90,255,0.3)] hover:-translate-y-0.5 hover:bg-[#6974ff]",
  secondary:
    "bg-white/10 text-white sunrise-border hover:-translate-y-0.5 hover:bg-white/20 backdrop-blur-md",
  ghost:
    "border border-indigo-500/30 bg-white/5 text-slate-300 hover:-translate-y-0.5 hover:bg-white/10",
};

export function buttonLinkClasses(
  variant: NonNullable<ButtonLinkProps["variant"]> = "primary",
  className = "",
) {
  return `inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition duration-300 ${variantClasses[variant]} ${className}`;
}

export function ButtonLink({ href, children, variant = "primary", className = "", onClick }: ButtonLinkProps) {
  const classes = buttonLinkClasses(variant, className);
  const isAnchor = href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");

  if (isAnchor) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
