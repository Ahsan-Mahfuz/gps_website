import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your AccuTrack account to manage devices and track your fleet.",
};

const FIELD =
  "w-full rounded-lg border border-input-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-faint focus:border-primary focus:outline-none";
const LABEL = "mb-2 block text-xs font-bold uppercase tracking-wide text-muted";

export default function AccountPage() {
  return (
    <Container className="grid min-h-[70vh] place-items-center py-16">
      <div className="w-full max-w-md rounded-2xl border border-line bg-card p-8 sm:p-10">
        <h1 className="font-anton text-4xl uppercase">Sign In</h1>
        <p className="mt-2 text-sm text-muted">Welcome back. Track every vehicle, every second.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label className={LABEL} htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" className={FIELD} />
          </div>
          <div>
            <label className={LABEL} htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" className={FIELD} />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-muted">
              <input type="checkbox" className="accent-primary" /> Remember me
            </label>
            <Link href="#" className="font-semibold text-primary">Forgot password?</Link>
          </div>
          <Button type="submit" className="w-full py-4">Sign In</Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Don&apos;t have an account?{" "}
          <Link href="#" className="font-semibold text-primary">Sign Up</Link>
        </p>
      </div>
    </Container>
  );
}
