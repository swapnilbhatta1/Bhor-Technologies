import { Container } from "@/components/ui/container";

const ecosystemLogos = [
  {
    name: "Google",
    color: "#4285F4",
    glow: "rgba(66, 133, 244, 0.4)",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    color: "#635BFF",
    glow: "rgba(99, 91, 255, 0.4)",
    logo: (
      <span className="font-bold text-2xl tracking-tighter" style={{ fontFamily: "Arial, sans-serif" }}>
        stripe
      </span>
    ),
  },
  {
    name: "OpenAI",
    color: "#10A37F",
    glow: "rgba(16, 163, 127, 0.4)",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0462 6.0462 0 0 0 5.7718-4.2247c.666-.114 1.292-.373 1.838-.752a6.0125 6.0125 0 0 0 2.155-2.844 5.98 5.98 0 0 0-.7428-6.3582zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829v-2.3324a.0804.0804 0 0 1 .0332-.0615l4.8303-2.7865a4.4992 4.4992 0 0 1 6.6803 4.66l-.142-.0852-4.783-2.7582a.7712.7712 0 0 0-.7806 0l-5.8428 3.3685zm.853-3.2384a4.485 4.485 0 0 1-2.3655 1.9728V4.8019a.7664.7664 0 0 0-.3879-.6765L10.7253.7711l2.0201-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7865a4.504 4.504 0 0 1-2.3408 6.1223zm-10.3707 1.059-2.02-1.1686a.071.071 0 0 1-.038-.052V2.7692a4.504 4.504 0 0 1 7.3709-3.4536l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813zm5.0216-2.5273-3.946-2.278V7.0515l3.946 2.2781zm-4.732 2.7317L5.2659 12l3.9461 2.278V9.7214z" />
      </svg>
    ),
  },
  {
    name: "Anthropic",
    color: "#D1B490",
    glow: "rgba(209, 180, 144, 0.4)",
    logo: (
      <span className="font-serif text-[1.65rem] font-medium tracking-tight">
        Anthropic
      </span>
    ),
  },
  {
    name: "Meta",
    color: "#0668E1",
    glow: "rgba(6, 104, 225, 0.4)",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M17.5 4.5c-2.4 0-4.5 1.4-5.5 3.5-1-2.1-3.1-3.5-5.5-3.5-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5c2.4 0 4.5-1.4 5.5-3.5 1 2.1 3.1 3.5 5.5 3.5 3.6 0 6.5-2.9 6.5-6.5s-2.9-6.5-6.5-6.5zM6.5 14.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm11 0c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    color: "#0A66C2",
    glow: "rgba(10, 102, 194, 0.4)",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Microsoft",
    color: "#00A4EF",
    glow: "rgba(0, 164, 239, 0.4)",
    logo: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M0 0h11v11H0zM13 0h11v11H13zM0 13h11v11H0zM13 13h11v11H13z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight" style={{ fontFamily: "Segoe UI, sans-serif" }}>Microsoft</span>
      </div>
    ),
  },
  {
    name: "Perplexity",
    color: "#14B8A6",
    glow: "rgba(20, 184, 166, 0.4)",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-7 h-7">
          <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1L19.1 4.9" />
        </svg>
        <span className="font-serif italic text-2xl font-bold tracking-tight">Perplexity</span>
      </div>
    ),
  },
  {
    name: "Vercel",
    color: "#FFFFFF",
    glow: "rgba(255, 255, 255, 0.4)",
    logo: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 1L24 22H0L12 1Z" />
        </svg>
        <span className="font-bold text-2xl tracking-tighter" style={{ fontFamily: "Inter, sans-serif" }}>Vercel</span>
      </div>
    ),
  },
  {
    name: "Hostinger",
    color: "#673DE6",
    glow: "rgba(103, 61, 230, 0.4)",
    logo: (
      <span className="font-bold text-2xl tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>
        HOSTINGER
      </span>
    ),
  },
  {
    name: "GitHub",
    color: "#FFFFFF",
    glow: "rgba(255, 255, 255, 0.4)",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        <span className="font-bold text-2xl tracking-tighter" style={{ fontFamily: "Helvetica, sans-serif" }}>GitHub</span>
      </div>
    ),
  },
];

export function TrustedEcosystemSection() {
  return (
    <section className="bg-[#0A0A0A] py-24 sm:py-32 relative overflow-hidden">
      {/* Top and Bottom soft border gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
          Powering Excellence with <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Industry-Leading Tech</span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
          We leverage the world&rsquo;s most advanced platforms and AI models to deliver scalable solutions.
        </p>

        {/* Marquee Container */}
        <div className="mt-16 sm:mt-20 w-full overflow-hidden relative">
          
          {/* Mask for smooth fade out at edges */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

          {/* Marquee Track */}
          <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
            
            {/* Duplicated list for infinite scroll effect */}
            {[...ecosystemLogos, ...ecosystemLogos].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="group flex-shrink-0 flex items-center justify-center px-8 sm:px-12 py-4 cursor-default transition-all duration-500"
                style={
                  {
                    "--hover-color": brand.color,
                    "--hover-glow": brand.glow,
                  } as React.CSSProperties
                }
              >
                <div className="text-slate-500 transition-all duration-500 group-hover:text-[var(--hover-color)] [filter:drop-shadow(0_0_0_transparent)] group-hover:[filter:drop-shadow(0_0_12px_var(--hover-glow))] flex items-center">
                  {brand.logo}
                </div>
              </div>
            ))}

          </div>
        </div>
      </Container>
    </section>
  );
}
