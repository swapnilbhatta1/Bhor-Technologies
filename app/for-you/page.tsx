import Link from "next/link";
import { ConsultationProvider } from "@/components/consultation-modal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "For You | Sparkentech",
  description: "Discover curated apps, tools, and resources built for you by Sparkentech.",
};

export default function ForYouPage() {
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
            <div className="mb-16 md:mb-24 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
                For You
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
                Explore our curated collection of tools and applications designed to make your digital life easier and more secure.
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* NotifyVault Card */}
              <div className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50 hover:bg-white/10">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div>
                  {/* Icon Placeholder */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/30 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  
                  <h3 className="mb-3 text-2xl font-bold text-white">NotifyVault</h3>
                  <p className="mb-8 text-slate-300 leading-relaxed">
                    A fast, efficient, and secure way to manage your notifications. Never lose an important alert again.
                  </p>
                </div>
                
                <Link
                  href="/apps/notifyvault"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:ring-white/40"
                >
                  View Details
                </Link>
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
