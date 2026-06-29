import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthInput, MailIcon } from "@/components/auth/AuthInput";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Forgot Password" };

export default function ForgotPage() {
  return (
    <AuthShell title="Forgot Password" subtitle="You will receive a verification code.">
      <form className="space-y-5">
        <AuthInput label="Email" type="email" placeholder="Enter Email" icon={<MailIcon />} />
        <Button href="/forgot/verify" className="w-full py-4">Get OTP</Button>
      </form>
    </AuthShell>
  );
}
