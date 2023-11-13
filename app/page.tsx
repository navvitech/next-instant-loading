import Link from "next/link";

export default function Home() {
  return <main>
    <div className="flex gap-5">
      <Link href="/">Home</Link>
      <Link href="/no-suspense">Page with data</Link>
      <Link href="/stream">Page with Suspense stream</Link>
      <Link href="/query">React Query</Link>
    </div>
  </main>;
}

// export const dynamic = "force-dynamic";
