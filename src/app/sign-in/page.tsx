import SignInButton from "@/components/auth/sign-in-button";
import Link from "next/link";

const isGoogleAuthConfigured = Boolean(
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.NEXTAUTH_SECRET,
);

export default function SignInPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#08080d] p-6 text-violet-50">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-[#12111c] p-8 shadow-2xl shadow-violet-950/30">
        <Link className="text-sm text-violet-200/65 transition hover:text-violet-100" href="/">← BizScope</Link>
        <p className="mt-10 text-sm font-medium text-violet-300">WELCOME TO BIZSCOPE</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">Sign in to start researching.</h1>
        <p className="mt-3 leading-7 text-violet-100/60">Your research, RAG conversations, and reports stay private to your account.</p>
        <div className="mt-8"><SignInButton isConfigured={isGoogleAuthConfigured} /></div>
        {!isGoogleAuthConfigured && <p className="mt-4 text-sm leading-6 text-amber-200/80">Google OAuth has not been configured yet. Add the required values from <code className="rounded bg-white/10 px-1.5 py-0.5">.env.example</code> to enable sign-in.</p>}
      </section>
    </main>
  );
}
