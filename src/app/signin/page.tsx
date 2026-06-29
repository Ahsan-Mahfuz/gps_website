import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { SignInForm } from "@/components/auth/SignInForm";

export const metadata: Metadata = { title: "Sign In" };

export default function SignInPage() {
  return (
    <AuthShell
      title="Sign In"
      subtitle="Welcome back. Track every vehicle, every second."
      footer={
        <>I don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-primary">Create Account</Link>
        </>
      }
    >
      <Suspense fallback={<div className="h-64" />}>
        <SignInForm />
      </Suspense>
    </AuthShell>
  );
}
