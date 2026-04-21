import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-1.5 transition-opacity hover:opacity-90">
      <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-9 w-9 text-yellow-400"
          fill="currentColor"
          stroke="rgba(0,0,0,0.8)"
          strokeWidth="0.5"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
      <div className="flex flex-col drop-shadow-sm pt-1">
        <span className="text-[1.35rem] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-500">
          Sparkentech.
        </span>
      </div>
    </Link>
  );
}
