import { redirect } from "next/navigation";
import { getCurrentSession } from "@/lib/auth";

export default async function ResearchLayout({ children }: { children: React.ReactNode }) {
  const session = await getCurrentSession();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return children;
}
