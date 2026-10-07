import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, categories } from "@/lib/content";

export default function Home() {
  const featured = articles.filter((article) => article.featured).slice(0, 6);
  const popular = articles.slice(0, 6);
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Practical knowledge, made useful</div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Better work starts with a <span className="text-emerald-400">better system.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Clear, actionable guides for productivity, remote work, business, technology, wellbeing, and everyday improvement.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/categories" className="rounded-xl bg-emerald-400 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-emerald-500/10 transition hover:-translate-y-0.5 hover:bg-emerald-300">Browse all guides</Link><Link href="/search" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-bold transition hover:bg-white/10">Search the library</Link></div>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"><strong className="block text-3xl font-black text-emerald-400 sm:text-4xl">10,000+</strong><span className="mt-2 block text-sm leading-5 text-slate-300">Unique practical guides</span></div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"><strong className="block text-3xl font-black text-emerald-400 sm:text-4xl">100</strong><span className="mt-2 block text-sm leading-5 text-slate-300">Focused categories</span></div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"><strong className="block text-3xl font-black text-emerald-400 sm:text-4xl">5 min</strong><span className="mt-2 block text-sm leading-5 text-slate-300">Average reading time</span></div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"><strong className="block text-3xl font-black text-emerald-400 sm:text-4xl">100%</strong><span className="mt-2 block text-sm leading-5 text-slate-300">Original content plan</span></div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Browse by topic</p><h2 className="mt-2 text-3xl font-black tracking-tight">Find your next useful guide</h2></div><Link href="/categories" className="text-sm font-bold text-emerald-700 hover:text-emerald-800">View all →</Link></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{categories.slice(0, 20).map((category, index) => <Link key={category.slug} href={`/categories/${category.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"><span className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-700"><span>{category.parent}</span><span className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-500 transition group-hover:bg-emerald-100 group-hover:text-emerald-700">{index + 1}</span></span><h3 className="mt-5 font-bold text-slate-950 transition group-hover:text-emerald-700">{category.name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p></Link>)}</div>
      </section>
      <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Editor’s picks</p><h2 className="mt-2 text-3xl font-black tracking-tight">Featured guides</h2></div><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{featured.map((article) => { const category = categories.find((item) => item.slug === article.categorySlug)!; return <ArticleCard key={article.slug} article={article} category={category} />; })}</div></div></section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Fresh from the library</p><h2 className="mt-2 text-3xl font-black tracking-tight">Latest guides</h2></div><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{popular.map((article) => { const category = categories.find((item) => item.slug === article.categorySlug)!; return <ArticleCard key={article.slug} article={article} category={category} />; })}</div></section>
    </>
  );
}
