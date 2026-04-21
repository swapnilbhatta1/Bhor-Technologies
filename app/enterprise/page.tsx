import { ConsultationProvider } from "@/components/consultation-modal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Enterprise | Sparkentech",
  description: "Enterprise solutions by Sparkentech. Innovate, automate, and secure the future of your business together.",
};

export default function EnterprisePage() {
  return (
    <ConsultationProvider>
      <div className="relative overflow-x-clip bg-slate-950 text-slate-50 font-sans selection:bg-red-500/30 selection:text-red-200 min-h-screen flex flex-col">
        <SiteHeader />
        
        {/* Deep, rich dark background with subtle indigo aura */}
        <div className="absolute top-0 inset-x-0 h-[800px] overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full bg-indigo-900/20 blur-[120px]" />
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-indigo-900/10 blur-[100px]" />
        </div>

        {/* Using flex-1 to push footer down if content is short */}
        <main className="flex-1 pt-32 pb-24 lg:pt-48 lg:pb-32">
          <Container>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
              
              {/* Left Side: Image */}
              <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
                <div className="relative aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-slate-900 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
                  {/* Image Placeholder - User needs to place founder.jpg in /public directory */}
                  <img
                    src="/founder.png"
                    alt="Founder & CEO"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Outer lighting ring */}
                  <div className="absolute inset-0 rounded-3xl border border-white/10 ring-1 ring-inset ring-white/5 pointer-events-none z-20" />
                </div>
                
                {/* Decorative glow behind image */}
                <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-indigo-600/20 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 max-w-[420px]" />
              </div>

              {/* Right Side: Content */}
              <div className="flex flex-col gap-8 order-1 lg:order-2">
                
                {/* Highlight Box */}
                <div className="inline-flex flex-col self-start rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-5 sm:p-6 shadow-[0_0_40px_-10px_rgba(82,90,255,0.15)] backdrop-blur-xl transition duration-500 hover:border-indigo-500/50 hover:bg-indigo-500/15">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                    Swapnil Bhatta
                  </h2>
                  <p className="text-lg sm:text-xl font-semibold text-slate-100">
                    Founder & CEO, <span className="text-indigo-400">Sparkentech</span>
                  </p>
                </div>

                {/* Message Content */}
                <div className="prose prose-invert prose-lg md:prose-xl text-slate-300 max-w-none">
                  <p className="leading-relaxed font-light">
                    At <strong className="font-semibold text-white">Sparkentech</strong>, the word &apos;Sparken&apos; signifies a new dawn—a fresh start driven by innovation. As the CEO, my core vision is to bridge the gap between complex technology and real-world business growth.
                  </p>
                  
                  <p className="leading-relaxed font-light mt-6 sm:mt-8">
                    We don&apos;t just write code or build websites; we design <span className="text-indigo-400 font-medium">intelligent ecosystems</span>. By combining AI automation, scalable software, and ironclad cybersecurity, our goal is to help you save time, reduce costs, and scale faster. Your success is the metric we measure our performance by.
                  </p>
                  
                  <blockquote className="mt-10 sm:mt-12 text-xl sm:text-[1.35rem] font-medium text-white italic border-l-4 border-indigo-500 pl-6 py-2 leading-snug">
                    &quot;Let&apos;s innovate, automate, and secure the future of your business together.&quot;
                  </blockquote>
                </div>
              </div>

            </div>
          </Container>
        </main>

        <div className="bg-[#090a10]">
          <SiteFooter />
        </div>
      </div>
    </ConsultationProvider>
  );
}
