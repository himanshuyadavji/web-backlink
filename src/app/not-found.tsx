import Link from "next/link";

export default function NotFound() { return <div className="mx-auto max-w-2xl px-5 py-20 text-center"><h1 className="text-4xl font-black">Page not found</h1><p className="mt-4 text-lg text-slate-600">The page may have moved or no longer exists.</p><Link href="/" className="mt-7 inline-block rounded-xl bg-slate-950 px-5 py-3 font-bold text-white">Return home</Link></div>; }
