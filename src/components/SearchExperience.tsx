"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { articles, categories } from "@/lib/content";

export function SearchExperience() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => { const normalized = query.trim().toLowerCase(); if (!normalized) return articles.slice(0, 12); return articles.filter((article) => [article.title, article.description, article.excerpt, ...article.tags].join(" ").toLowerCase().includes(normalized)).slice(0, 24); }, [query]);
  return <div><label htmlFor="site-search" className="sr-only">Search WebBacklink guides</label><div className="flex rounded-2xl border border-slate-300 bg-white p-2 shadow-sm focus-within:border-emerald-500"><input id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by topic, skill, or keyword…" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-lg outline-none" autoComplete="off" /><button className="rounded-xl bg-slate-950 px-5 py-3 font-bold text-white hover:bg-emerald-700">Search</button></div><p className="mt-4 text-sm text-slate-500">{results.length} result{results.length === 1 ? "" : "s"} · Search runs locally in your browser.</p><div className="mt-8 grid gap-4 md:grid-cols-2">{results.map((article) => { const category = categories.find((item) => item.slug === article.categorySlug)!; return <Link key={article.slug} href={`/articles/${article.slug}`} className="rounded-2xl border border-slate-200 p-5 hover:border-emerald-300 hover:bg-emerald-50"><span className="text-xs font-bold uppercase tracking-wider text-emerald-700">{category.name}</span><h2 className="mt-2 font-bold text-slate-950">{article.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{article.excerpt}</p></Link>; })}</div>{!results.length && <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500">No guides matched that search. Try a broader topic.</div>}</div>;
}
