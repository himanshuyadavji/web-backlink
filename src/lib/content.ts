export type Category = {
  slug: string;
  name: string;
  parent: string;
  description: string;
  keywords: string[];
};

export type Article = {
  slug: string;
  categorySlug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  author: string;
  authorRole: string;
  featured: boolean;
  tags: string[];
  intro: string;
  sections: Array<{ heading: string; body: string[] }>;
  checklist: string[];
  example: string;
  takeaway: string;
};

export const siteConfig = {
  name: "WebBacklink",
  url: "https://webbacklink.vercel.app",
  description: "Practical, useful guides for productivity, digital work, and smarter online systems.",
  logo: "WB",
};

const families = [
  "Digital Productivity", "Remote Work", "Career Development", "Business Operations", "Creative Work", "Web Design", "SEO Strategy",
  "Content Systems", "Analytics", "Cybersecurity", "Health & Wellbeing", "Learning", "Environment", "Technology",
  "Community Growth", "Home Organization", "Gardening", "Cooking", "Travel Planning", "Personal Finance",
] as const;

const subtopics = [
  "Systems", "Planning", "Automation", "Measurement", "Habits",
];

export const categories: Category[] = families.flatMap((family) =>
  subtopics.map((subtopic) => ({
    slug: `${family.toLowerCase().replaceAll(" ", "-")}-${subtopic.toLowerCase()}`,
    name: `${subtopic} in ${family}`,
    parent: family,
    description: `Practical guidance, workflows, examples, and checklists for ${subtopic.toLowerCase()} within ${family.toLowerCase()}.`,
    keywords: [subtopic, family, `${subtopic} tips`, `${family} guide`],
  })),
);

const articlePatterns = [
  "A practical guide to", "How to build a reliable", "The complete workflow for", "Common mistakes with", "A focused checklist for",
  "How to measure progress in", "Simple systems for", "A beginner-friendly approach to", "Ways to improve", "A stepped plan for",
];

const articleOutcomes = ["better decisions", "more consistent results", "clearer priorities", "stronger long-term value", "less avoidable friction"];
const articleVerbs = ["start", "implement", "review", "measure", "refine"];

const formatTitle = (category: Category, index: number) => {
  const pattern = articlePatterns[index % articlePatterns.length];
  const outcome = articleOutcomes[(index * 7 + category.slug.length) % articleOutcomes.length];
  return `${pattern} ${category.name} for ${outcome}`;
};

const articleDescription = (category: Category, index: number) => {
  const action = articleVerbs[index % articleVerbs.length];
  return `Learn how to ${action} ${category.name.toLowerCase()} with practical steps, examples, common mistakes, and a useful checklist.`;
};

const makeSections = (category: Category) => {
  const topics = [
    `Start with the outcome you want from ${category.name.toLowerCase()}`,
    `Create a repeatable process for ${category.name.toLowerCase()}`,
    `Use evidence to improve ${category.name.toLowerCase()}`,
    `Avoid the most common barriers in ${category.name.toLowerCase()}`,
  ];
  const bodies = [
    `Begin by defining a clear target, the audience, and the decision that matters most. In ${category.name.toLowerCase()}, separate the essential outcome from optional tasks so the work remains focused even when time is limited.`,
    `A useful process should be small enough to repeat and specific enough to evaluate. Map the main inputs, activities, and outputs, then choose one practical action to perform first.`,
    `Track a small set of useful signals rather than collecting every available metric. Review the results after a defined interval and adjust one variable at a time.`,
    `Many attempts fail because they rely on assumptions instead of evidence. Identify the most likely friction points, test a minimal version, and keep the changes that create measurable value.`,
  ];
  return topics.map((heading, sectionIndex) => ({ heading, body: [bodies[sectionIndex], `${heading} works best when the process is documented, reviewed, and made easy to repeat. Apply the same principle to ${category.parent.toLowerCase()} and keep each step connected to a concrete outcome.`] }));
};

const makeChecklist = (category: Category) => [
  `Define one clear goal for ${category.name.toLowerCase()}.`,
  `Identify the smallest useful starting point for the topic.`,
  `Document the key steps and ownership for each action.`,
  `Review the result using a simple, measurable signal.`,
  `Keep the process flexible enough to improve after evidence arrives.`,
  `Schedule a short review so the approach does not become stale.`,
];

const makeExample = (category: Category, index: number) => {
  const scenario = index % 3 === 0 ? "a small team" : index % 3 === 1 ? "an independent professional" : "a personal project";
  return `Consider ${scenario} applying ${category.name.toLowerCase()}. It begins with one defined result, one practical action, and one weekly review. The initial version is intentionally limited, which makes it easier to learn and improve without adding unnecessary complexity.`;
};

export const articles: Article[] = categories.flatMap((category, categoryIndex) =>
  Array.from({ length: 100 }, (_, index) => {
    const articleIndex = categoryIndex * 100 + index;
    const title = formatTitle(category, index);
    const slug = `${category.slug}-${String(index + 1).padStart(3, "0")}`;
    const tag = category.keywords[index % category.keywords.length];
    return {
      slug,
      categorySlug: category.slug,
      title,
      description: articleDescription(category, index),
      excerpt: `${articleDescription(category, index)} Explore a practical framework, real-world example, and checklist that can be used immediately.`,
      publishedAt: new Date(Date.UTC(2026, 0, 1 + ((articleIndex * 7) % 365))).toISOString(),
      readTime: 5 + ((articleIndex * 3) % 9),
      author: "Maya Chen",
      authorRole: "Digital productivity editor",
      featured: index === 0 && categoryIndex % 5 === 0,
      tags: [tag, category.parent.toLowerCase(), "practical guide", "workflow"],
      intro: `${title} gives readers a clear way to approach ${category.name.toLowerCase()} without adding unnecessary complexity. The method below separates the goal, the process, the evidence, and the next decision so each step can be understood and applied.`,
      sections: makeSections(category),
      checklist: makeChecklist(category),
      example: makeExample(category, index),
      takeaway: `The most useful version of ${category.name.toLowerCase()} is the one that produces a consistent decision, a visible result, and a clear next action.`,
    };
  }),
);

export const articleBySlug = new Map(articles.map((article) => [article.slug, article]));
export const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));
export const getArticle = (slug: string) => articleBySlug.get(slug);
export const getCategory = (slug: string) => categoryBySlug.get(slug);
