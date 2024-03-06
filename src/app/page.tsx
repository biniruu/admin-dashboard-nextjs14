import Link from 'next/link'

export default function Home() {
  return (
    // TODO: add '/dashboard' route
    <main className="flex h-screen items-center justify-center">
      <Link href="/dashboard" className="rounded-full bg-[hotpink] px-5 py-2">
        view dashboard🚀
      </Link>
    </main>
  )
}
