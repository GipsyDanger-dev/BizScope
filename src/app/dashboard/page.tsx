import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentSession } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getCurrentSession();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen bg-[#08080d] px-6 py-10 text-violet-50 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-violet-300">DASHBOARD</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">Welcome back{session.user.name ? `, ${session.user.name}` : ""}.</h1>
        <p className="mt-3 max-w-xl leading-7 text-violet-100/60">Your completed research and RAG conversations will appear here.</p>
        <div className="mt-10 rounded-3xl border border-dashed border-white/15 bg-white/[0.025] p-8 sm:p-10">
          <p className="text-lg font-medium text-white">Start your first market research</p>
          <p className="mt-2 max-w-lg leading-7 text-violet-100/60">Choose a category and location. The upcoming collection pipeline will save the job to your account before data analysis begins.</p>
          <Link className="mt-6 inline-flex rounded-xl bg-violet-400 px-5 py-3 font-medium text-violet-950 transition hover:bg-violet-300" href="/research/new">Create research</Link>
        </div>
      </section>
    </main>
  );
}
