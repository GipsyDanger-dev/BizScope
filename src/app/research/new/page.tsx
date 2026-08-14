const categoryOptions = ["Coffee Shop", "Restaurant", "Gym", "Salon", "Dental Clinic", "Laundry", "Coworking Space"];
const radiusOptions = [1, 3, 5, 10];
const resultOptions = [25, 50, 100];

export default function NewResearchPage() {
  return (
    <main className="min-h-screen bg-[#08080d] px-6 py-10 text-violet-50 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <Link className="text-sm text-violet-200/65 transition hover:text-violet-100" href="/">← Back to BizScope</Link>
        <div className="mt-12 rounded-3xl border border-white/10 bg-[#12111c] p-6 shadow-2xl shadow-violet-950/20 sm:p-10">
          <p className="text-sm font-medium text-violet-300">NEW RESEARCH</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">What market do you want to understand?</h1>
          <p className="mt-3 max-w-xl leading-7 text-violet-100/60">Configure the market boundary first. Data collection and RAG analysis will use only this research scope.</p>

          <form className="mt-10 grid gap-6" aria-label="Create market research">
            <label className="grid gap-2 text-sm font-medium text-violet-100">
              Business category
              <select className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base font-normal text-white outline-none ring-violet-400 focus:ring-2" defaultValue="Coffee Shop">
                {categoryOptions.map((category) => <option className="bg-[#12111c]" key={category}>{category}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-violet-100">
              Location
              <input className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base font-normal text-white outline-none placeholder:text-violet-100/30 focus:ring-2 focus:ring-violet-400" placeholder="e.g. Lowokwaru, Malang" required />
            </label>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-violet-100">
                Search radius
                <select className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base font-normal text-white outline-none focus:ring-2 focus:ring-violet-400" defaultValue="5">
                  {radiusOptions.map((radius) => <option className="bg-[#12111c]" key={radius} value={radius}>{radius} km</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-violet-100">
                Maximum businesses
                <select className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base font-normal text-white outline-none focus:ring-2 focus:ring-violet-400" defaultValue="100">
                  {resultOptions.map((count) => <option className="bg-[#12111c]" key={count} value={count}>{count}</option>)}
                </select>
              </label>
            </div>
            <div className="mt-2 rounded-xl border border-violet-300/10 bg-violet-400/[0.06] p-4 text-sm leading-6 text-violet-100/65">
              The research job will deduplicate Place IDs, persist its progress, then generate analytics and research-scoped RAG documents.
            </div>
            <button type="button" className="mt-2 rounded-xl bg-violet-400 px-5 py-3 font-medium text-violet-950 opacity-70" disabled>
              Sign in to start research
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
import Link from "next/link";
