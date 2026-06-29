import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthInput, MailIcon, LockIcon } from "@/components/auth/AuthInput";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Sign Up" };

export default function SignUpPage() {
  return (
    <AuthShell
      title="Sign Up"
      subtitle="Create your AccuTrack account in seconds."
      footer={
        <>I already have an account{" "}
          <Link href="/signin" className="font-semibold text-primary">Sign In</Link>
        </>
      }
    >
      <form className="space-y-4">
        <AuthInput label="Email" type="email" placeholder="Enter Email" icon={<MailIcon />} />
        <AuthInput label="Password" type="password" placeholder="Enter Password" icon={<LockIcon />} />
        <AuthInput label="Confirm Password" type="password" placeholder="Confirm Password" icon={<LockIcon />} />
        <Button href="/signup/verify" className="w-full py-4">Sign Up</Button>
      </form>
    </AuthShell>
  );
}
