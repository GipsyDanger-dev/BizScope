const previewMetrics = [
  ["184", "Businesses"],
  ["4.42", "Avg. rating"],
  ["387", "Median reviews"],
  ["72/100", "Competition"],
];

const workflow = [
  ["01", "Collect", "Acquire permitted place data and retain refreshable research records."],
  ["02", "Analyze", "Normalize businesses, score competition, and detect geographic signals."],
  ["03", "Ask", "Retrieve only the current research context before AI generates an answer."],
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#08080d] px-6 py-6 text-violet-50 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.24),transparent_28%),radial-gradient(circle_at_85%_16%,rgba(79,70,229,0.16),transparent_24%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:auto,auto,40px_40px,40px_40px]" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <span className="text-lg font-semibold tracking-tight">BizScope</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-violet-200">
          Local market intelligence
        </span>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1.5 text-sm text-violet-200">
            Data-backed, explainable, research-scoped AI
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Understand the local market before you enter it.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-violet-100/65">
            BizScope turns permitted place data into competitor analysis,
            geographic signals, and AI answers grounded in your research.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/research/new" className="rounded-xl bg-violet-400 px-5 py-3 font-medium text-violet-950 transition hover:bg-violet-300">
              Start market research
            </Link>
            <a className="rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 font-medium text-violet-100 transition hover:bg-white/[0.08]" href="#how-it-works">
              How it works
            </a>
          </div>
          <p className="mt-5 text-sm text-violet-100/45">Insights are evidence-based signals, not guarantees of success.</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#12111c]/85 p-5 shadow-2xl shadow-violet-950/30 backdrop-blur sm:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div><p className="text-sm text-violet-200/65">Research preview</p><h2 className="mt-1 text-lg font-medium text-white">Coffee Shops — Lowokwaru</h2></div>
            <span className="rounded-full bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-200">Demo</span>
          </div>
          <div className="grid grid-cols-2 gap-3 py-5 sm:grid-cols-4">
            {previewMetrics.map(([value, label]) => <div key={label} className="rounded-2xl bg-white/[0.045] p-3"><p className="text-xl font-semibold text-white">{value}</p><p className="mt-1 text-xs text-violet-100/50">{label}</p></div>)}
          </div>
          <div className="rounded-2xl border border-violet-300/10 bg-violet-400/[0.06] p-4">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-violet-200/70">RAG answer</p>
            <p className="mt-2 leading-7 text-violet-50/85">This market shows strong activity. Competitor strength is driven by review volume and density, while lower-density areas warrant further validation.</p>
            <p className="mt-3 text-xs text-violet-200/60">Based on 184 analyzed businesses · Research-scoped sources</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl border-t border-white/10 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {workflow.map(([step, title, description]) => <article key={step} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"><p className="text-sm font-medium text-violet-300">{step}</p><h2 className="mt-6 text-xl font-medium text-white">{title}</h2><p className="mt-2 leading-7 text-violet-100/55">{description}</p></article>)}
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
