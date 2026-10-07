import Link from "next/link";
import { categories } from "@/lib/content";

const footerCategories = categories.slice(0, 8);

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 text-2xl font-black tracking-tight text-white" aria-label="WebBacklink home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400 text-sm font-black text-slate-950">WB</span>
            WebBacklink
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">A calm, practical library for people building better digital habits, productive systems, and useful online skills.</p>
          <p className="mt-5 text-sm text-slate-500">© {new Date().getFullYear()} WebBacklink. All rights reserved.</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link className="hover:text-emerald-300" href="/categories">All categories</Link></li>
            <li><Link className="hover:text-emerald-300" href="/about">About us</Link></li>
            <li><Link className="hover:text-emerald-300" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-emerald-300" href="/search">Search guides</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Popular categories</h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {footerCategories.map((category) => <li key={category.slug}><Link className="text-slate-400 hover:text-emerald-300" href={`/categories/${category.slug}`}>{category.name}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 text-xs leading-6 text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link className="hover:text-white" href="/privacy">Privacy Policy</Link>
            <Link className="hover:text-white" href="/terms">Terms &amp; Conditions</Link>
            <Link className="hover:text-white" href="/disclaimer">Disclaimer</Link>
            <Link className="hover:text-white" href="/contact">Contact</Link>
          </div>
          <p className="text-center text-slate-500">Built for useful learning with care by <span className="font-semibold text-slate-300">WebBacklink</span>.</p>
          <p className="text-center text-xs text-slate-500">External resource suggestion: <a className="font-semibold text-emerald-300 hover:text-emerald-200" href="https://www.raxiwingame.online/" target="_blank" rel="noopener noreferrer sponsored">Raxi Win</a>.</p>
        </div>
      </div>
    </footer>
  );
}
