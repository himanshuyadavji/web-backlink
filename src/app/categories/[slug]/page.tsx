import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, categories, getCategory } from "@/lib/content";

export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => { const category = getCategory(slug); if (!category) return {}; return { title: category.name, description: category.description, alternates: { canonical: `/categories/${category.slug}` }, openGraph: { title: category.name, description: category.description, url: `/categories/${category.slug}` } }; });
}
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const category = getCategory(slug); if (!category) notFound(); const categoryArticles = articles.filter((article) => article.categorySlug === slug); const siblings = categories.filter((item) => item.parent === category.parent && item.slug !== slug).slice(0, 8); return <div><div className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><nav aria-label="Breadcrumb"><ol className="flex flex-wrap gap-2 text-sm text-slate-400"><li><Link href="/">Home</Link></li><li>/</li><li><Link href="/categories">Categories</Link></li><li>/</li><li>{category.name}</li></ol></nav><h1 className="mt-8 text-4xl font-black sm:text-5xl">{category.name}</h1><p className="mt-4 max-w-2xl text-lg text-slate-300">{category.description}</p></div></div><div className="mx-auto max-w-7xl px-5 py-14 sm:px-8"><div className="mb-10 grid gap-3 md:grid-cols-2">{siblings.map((item) => <Link key={item.slug} href={`/categories/${item.slug}`} className="rounded-xl border border-slate-200 p-4 font-semibold hover:border-emerald-300 hover:bg-emerald-50">{item.name}</Link>)}</div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{categoryArticles.map((article) => <ArticleCard key={article.slug} article={article} category={category} />)}</div></div></div>; }
