import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function AutomationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M5 12h5m4 0h5M12 5v5m0 4v5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M19 7l-1.8 1.1M7 19l-1.8 1.1M19 17l-1.8-1.1M7 5 5.2 6.1" />
    </svg>
  );
}

export function SaasIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="3" />
      <path d="M3.5 10h17M8 15h2m4 0h2" />
    </svg>
  );
}

export function DevelopmentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="m8 8-4 4 4 4m8-8 4 4-4 4" />
      <path d="m14 5-4 14" />
    </svg>
  );
}

export function SecurityIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 3 5.5 6v5.5c0 4.2 2.7 8.1 6.5 9.5 3.8-1.4 6.5-5.3 6.5-9.5V6L12 3Z" />
      <path d="m9.6 12.2 1.8 1.8 3.3-3.8" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m5 12 4.2 4.2L19 7.8" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 1 0 5.3 7a2.02 2.02 0 0 0-.05-4ZM20.44 13.08c0-3.48-1.86-5.1-4.34-5.1A3.76 3.76 0 0 0 12.7 9.8V8.5H9.33c.04.86 0 11.5 0 11.5h3.38v-6.43c0-.34.03-.68.13-.92.27-.68.89-1.39 1.93-1.39 1.36 0 1.9 1.04 1.9 2.55V20h3.38l-.01-6.92Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-6.78 7.74L23 22h-6.1l-4.78-6.47L6.45 22H3.34l7.25-8.28L1 2h6.25l4.32 5.87L18.9 2Zm-1.07 18.1h1.69L6.33 3.8H4.52l13.31 16.3Z" />
    </svg>
  );
}
