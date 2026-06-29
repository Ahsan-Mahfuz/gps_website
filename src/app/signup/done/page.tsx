import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { ContinueAsUser } from "@/components/auth/ContinueAsUser";

export const metadata: Metadata = { title: "Welcome" };

function CheckBadge() {
  return (
    <div className="relative grid h-24 w-24 place-items-center rounded-3xl bg-elevated">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--primary))" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
      <span className="absolute bottom-3 right-3 grid h-6 w-6 place-items-center rounded-full bg-primary text-white">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>
      </span>
    </div>
  );
}

export default function SignUpDonePage() {
  return (
    <AuthShell title="Welcome" subtitle="Your account was successfully created.">
      <div className="flex flex-col items-center gap-8">
        <CheckBadge />
        <ContinueAsUser to="/dashboard/add-device" />
      </div>
    </AuthShell>
  );
}
