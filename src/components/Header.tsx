"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-lg font-black text-slate-950" aria-label="WebBacklink home"><span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-xs text-white">WB</span>WebBacklink</Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex" aria-label="Primary navigation">
          <Link className="hover:text-slate-950" href="/categories">Categories</Link>
          <Link className="hover:text-slate-950" href="/search">Search</Link>
          <Link className="hover:text-slate-950" href="/about">About</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/search" className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400">Search</Link>
          <button className="rounded-lg p-2 text-slate-700 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? "×" : "☰"}</button>
        </div>
      </div>
      {open && <nav className="grid gap-2 border-t border-slate-100 px-5 py-4 md:hidden"><Link onClick={() => setOpen(false)} href="/categories">Categories</Link><Link onClick={() => setOpen(false)} href="/search">Search</Link><Link onClick={() => setOpen(false)} href="/about">About</Link>{categories.slice(0, 10).map((category) => <Link key={category.slug} onClick={() => setOpen(false)} href={`/categories/${category.slug}`}>{category.name}</Link>)}</nav>}
    </header>
  );
}
