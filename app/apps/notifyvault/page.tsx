import Link from "next/link";
import { ConsultationProvider } from "@/components/consultation-modal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "NotifyVault | Sparkentech",
  description: "Fast and efficient notification management. Secure, private, and lightweight.",
};

export default function NotifyVaultPage() {
  return (
    <ConsultationProvider>
      <div className="relative overflow-x-clip bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 min-h-screen flex flex-col">
        <SiteHeader />
        
        {/* Background glow */}
        <div className="absolute top-0 inset-x-0 h-[800px] overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full bg-indigo-900/20 blur-[120px]" />
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-indigo-900/10 blur-[100px]" />
        </div>

        <main className="flex-1 pt-32 pb-24 lg:pt-48 lg:pb-32">
          <Container>
            
            {/* Breadcrumb / Back link */}
            <div className="mb-8">
               <Link href="/for-you" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                 </svg>
                 Back to For You
               </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              
              {/* Left Column: App Info & Download */}
              <div className="lg:col-span-5 flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                
                {/* Header */}
                <div className="flex items-center gap-6">
                  {/* App Icon */}
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-[28px] bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg ring-1 ring-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">NotifyVault</h1>
                    <div className="mt-1 flex items-center gap-3">
                      <span className="inline-flex items-center rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-xs font-semibold text-indigo-300 ring-1 ring-inset ring-indigo-500/30">
                        v1.0
                      </span>
                      <span className="text-sm text-slate-400">Android</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-slate-300">
                  Your personal notification history manager. Keep track of what matters, securely and efficiently.
                </p>

                {/* Download Button */}
                <a
                  href="/notifyvault.apk"
                  download="notifyvault.apk"
                  className="group relative inline-flex w-full items-center justify-center gap-3 rounded-full bg-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download APK
                  <span className="absolute -inset-0.5 -z-10 rounded-full bg-indigo-500/20 blur opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </div>

              {/* Right Column: Features */}
              <div className="lg:col-span-7 flex flex-col justify-center lg:pl-8">
                <h2 className="mb-8 text-3xl font-bold text-white">About NotifyVault</h2>
                
                <ul className="flex flex-col gap-6">
                  {[
                    {
                      title: "Fast and efficient",
                      desc: "Lightning fast notification management without draining your battery.",
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      )
                    },
                    {
                      title: "Secure, private, and lightweight",
                      desc: "Only 2.7 MB in size. Your data stays on your device, private and secure.",
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      )
                    },
                    {
                      title: "Built for easy access",
                      desc: "Quickly review your most important alerts whenever you need them.",
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      )
                    }
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {feature.icon}
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{feature.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
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
