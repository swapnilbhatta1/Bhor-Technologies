import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3 text-slate-900">
      <span className="inline-flex overflow-hidden rounded-[20px] border border-orange-100/80 bg-white shadow-sm">
        <Image
          src="/bhor-logo.png"
          alt="Bhor Technologies logo"
          width={52}
          height={52}
          className="h-[52px] w-[52px] object-cover"
          priority
        />
      </span>
      <span className="flex flex-col">
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-orange-500">Bhor</span>
        <span className="text-[0.95rem] font-extrabold tracking-[-0.03em] text-slate-900">Technologies</span>
      </span>
    </Link>
  );
}
