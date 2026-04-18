import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-90">
      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 shadow-sm transition-transform duration-300 group-hover:scale-105">
        {/* Placeholder if you want to use the icon still, or remove img entirely */}
        <Image
          src="/bhor-logo.png"
          alt="Spearkentech logo"
          width={32}
          height={32}
          className="h-7 w-7 object-contain opacity-90 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-indigo-400">Spearken</span>
        <span className="text-xl font-bold tracking-tight text-slate-100">Tech.</span>
      </div>
    </Link>
  );
}
