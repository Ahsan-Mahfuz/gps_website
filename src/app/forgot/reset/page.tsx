import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthInput, LockIcon } from "@/components/auth/AuthInput";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "New Password" };

export default function ResetPage() {
  return (
    <AuthShell title="New Password" subtitle="Create a new password.">
      <form className="space-y-4">
        <AuthInput label="New Password" type="password" placeholder="Enter New Password" icon={<LockIcon />} />
        <AuthInput label="Confirm Password" type="password" placeholder="Confirm New Password" icon={<LockIcon />} />
        <Button href="/signin" className="w-full py-4">Change Password</Button>
      </form>
    </AuthShell>
  );
}
