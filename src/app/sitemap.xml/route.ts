import { articles, categories, siteConfig } from "@/lib/content";

const base = siteConfig.url.replace(/\/$/, "");

const staticRoutes = [
  "",
  "/categories",
  "/search",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
];

// Escape characters that are special in XML
function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const now = new Date().toISOString();

  const urls = [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "daily" : "weekly",
      priority:
        route === ""
          ? "1.0"
          : route === "/categories"
            ? "0.9"
            : "0.7",
    })),

    ...categories.map((category) => ({
      url: `${base}/categories/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: "0.8",
    })),

    ...articles.map((article) => ({
      url: `${base}/articles/${article.slug}`,
      lastModified: new Date(article.publishedAt).toISOString(),
      changeFrequency: "monthly",
      priority: "0.7",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
