import { SearchExperience } from "@/components/SearchExperience";

export const metadata = { title: "Search Guides", description: "Search all 10,000 practical WebBacklink guides by topic, category, or keyword." };
export default function SearchPage() { return <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><h1 className="text-4xl font-black">Search the library</h1><p className="mt-4 max-w-2xl text-lg text-slate-600">Find clear, practical guides for any topic you want to learn.</p><div className="mt-8"><SearchExperience /></div></div>; }
