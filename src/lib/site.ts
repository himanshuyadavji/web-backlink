import { articles, categories, siteConfig } from "./content";

export const articleCount = articles.length;
export const categoryCount = categories.length;
export const allTags = Array.from(new Set(articles.flatMap((article) => article.tags))).sort();

export function buildUrl(path = "") {
  return `${siteConfig.url}/${path.replace(/^\//, "")}`;
}

const relatedArticlesByCategory = new Map(
  Array.from(new Set(articles.map((article) => article.categorySlug))).map((categorySlug) => [categorySlug, articles.filter((article) => article.categorySlug === categorySlug).slice(0, 6)]),
);

export function getRelatedArticles(articleSlug: string, limit = 6) {
  const article = articles.find((item) => item.slug === articleSlug);
  if (!article) return [];
  const related = relatedArticlesByCategory.get(article.categorySlug) ?? [];
  return related.filter((item) => item.slug !== articleSlug).slice(0, limit);
}
