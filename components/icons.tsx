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

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7h2.3l.35-2.73H13.5V9.52c0-.79.22-1.33 1.35-1.33H16.3V5.74c-.7-.08-1.4-.12-2.1-.12-2.08 0-3.5 1.27-3.5 3.62v2.03H8.35V14h2.35v7h2.8Z" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.34-1.66a11.8 11.8 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.17-1.23-6.15-3.45-8.42ZM12.08 21.8h-.01a9.83 9.83 0 0 1-5-1.37l-.36-.21-3.76.99 1-3.67-.24-.38a9.84 9.84 0 0 1-1.52-5.25c0-5.43 4.42-9.85 9.87-9.85 2.64 0 5.12 1.02 6.98 2.9a9.8 9.8 0 0 1 2.89 6.97c0 5.44-4.42 9.87-9.85 9.87Zm5.41-7.4c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.16-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.46 1.08 2.88 1.23 3.08.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.03-1.42.25-.69.25-1.28.17-1.41-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  );
}
