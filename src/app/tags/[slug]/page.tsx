import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, getCategory } from "@/lib/content";
import { allTags } from "@/lib/site";

export function generateStaticParams() { return allTags.map((tag) => ({ slug: tag })); }
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { return params.then(({ slug }) => ({ title: `Topics tagged ${slug}`, description: `Browse practical WebBacklink guides tagged ${slug}.` })); }
export default async function TagPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const tagArticles = articles.filter((article) => article.tags.includes(slug)); if (!tagArticles.length) notFound(); const category = getCategory(tagArticles[0].categorySlug)!; return <div><div className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><h1 className="text-4xl font-black">#{slug}</h1><p className="mt-4 text-lg text-slate-300">{tagArticles.length} practical guides related to {slug}.</p></div></div><div className="mx-auto max-w-7xl px-5 py-14 sm:px-8"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{tagArticles.map((article) => <ArticleCard key={article.slug} article={article} category={category} />)}</div></div></div>; }
