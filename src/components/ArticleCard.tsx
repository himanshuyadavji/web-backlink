import Link from "next/link";
import type { Article, Category } from "@/lib/content";

export function ArticleCard({ article, category }: { article: Article; category: Category }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700"><Link href={`/categories/${category.slug}`}>{category.name}</Link><span aria-hidden="true">•</span><span>{article.readTime} min read</span></div>
      <h3 className="text-xl font-bold leading-snug text-slate-950 group-hover:text-emerald-700"><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
    </article>
  );
}
