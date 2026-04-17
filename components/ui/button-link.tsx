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
    "bg-[#FE7F2D] text-white shadow-[0_18px_40px_rgba(254,127,45,0.24)] hover:-translate-y-0.5 hover:bg-[#f36c10]",
  secondary:
    "bg-white/90 text-slate-900 sunrise-border hover:-translate-y-0.5 hover:bg-white",
  ghost:
    "border border-orange-200/70 bg-white/70 text-slate-700 hover:-translate-y-0.5 hover:bg-white/90",
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
