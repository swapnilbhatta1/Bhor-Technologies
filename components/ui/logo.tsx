import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3 text-slate-900">
      <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-orange-200/70 bg-white shadow-sm">
        <span className="absolute inset-x-1 bottom-[-55%] h-14 rounded-full hero-sun opacity-90" />
        <span className="relative z-10 text-lg font-extrabold text-slate-900">B</span>
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">Bhor</span>
        <span className="text-sm font-bold tracking-tight text-slate-900">Technologies</span>
      </span>
    </Link>
  );
}
