"use client";

import { signIn } from "next-auth/react";

export default function SignInButton({ isConfigured }: { isConfigured: boolean }) {
  return (
    <button
      className="w-full rounded-xl bg-violet-400 px-5 py-3 font-medium text-violet-950 transition hover:bg-violet-300 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={!isConfigured}
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      type="button"
    >
      Continue with Google
    </button>
  );
}
