import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { OtpInput } from "@/components/auth/OtpInput";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Verify" };

export default function ForgotVerifyPage() {
  return (
    <AuthShell title="Verification" subtitle="Enter your 6-digit code.">
      <form className="space-y-6">
        <OtpInput length={4} masked />
        <Button href="/forgot/reset" className="w-full py-4">Verify</Button>
        <p className="text-center text-sm text-muted">
          Haven&apos;t got the OTP?{" "}
          <Link href="#" className="font-semibold text-primary">Resend</Link>
        </p>
      </form>
    </AuthShell>
  );
}
