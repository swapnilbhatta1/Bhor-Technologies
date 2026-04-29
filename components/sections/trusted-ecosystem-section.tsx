import { Container } from "@/components/ui/container";

const ecosystemLogos = [
  {
    name: "Google",
    color: "#4285F4",
    glow: "rgba(66, 133, 244, 0.4)",
    logo: (
      <span className="font-medium text-3xl tracking-tight" style={{ fontFamily: "'Product Sans', Arial, sans-serif" }}>
        Google
      </span>
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
      <span className="font-semibold text-[1.65rem] tracking-tight" style={{ fontFamily: "Inter, Helvetica, sans-serif" }}>
        OpenAI
      </span>
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
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
          <path d="M17.53 5.568c-1.897 0-3.616.757-4.873 1.986l-.16.155-.062-.058A7.054 7.054 0 0 0 7.56 5.568C3.416 5.568 0 8.956 0 13.06c0 4.103 3.416 7.491 7.56 7.491 2.222 0 4.223-.951 5.617-2.482l.135-.148.058.06c1.373 1.455 3.298 2.57 5.385 2.57 4.143 0 7.56-3.388 7.56-7.491 0-4.103-3.417-7.492-7.56-7.492zm0 11.237c-1.722 0-3.342-.962-4.475-2.617l-.28-.41.222-.387C14.072 11.454 15.683 10.4 17.53 10.4c2.203 0 4.026 1.832 4.026 4.06 0 2.227-1.823 4.06-4.026 4.06zM7.56 16.883c-2.202 0-4.025-1.832-4.025-4.06 0-2.228 1.823-4.06 4.025-4.06 1.748 0 3.327.942 4.45 2.584l.26.377-.206.36c-1.077 1.884-2.73 2.92-4.504 2.92z"/>
        </svg>
        <span className="font-semibold text-2xl tracking-tight" style={{ fontFamily: "Inter, Helvetica, sans-serif" }}>Meta</span>
      </div>
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
