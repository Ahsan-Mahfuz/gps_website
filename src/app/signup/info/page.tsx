import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthInput, UserIcon } from "@/components/auth/AuthInput";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Your Information" };

export default function SignUpInfoPage() {
  return (
    <AuthShell title="Your Info" subtitle="Add a photo and your name to finish setting up.">
      <form className="space-y-6">
        <div className="flex justify-center">
          <button type="button" className="grid h-28 w-28 place-items-center rounded-3xl border border-input-border bg-input text-muted">
            <UserIcon />
            <span className="mt-1 text-xs">Add Photo</span>
          </button>
        </div>
        <AuthInput label="Name" type="text" placeholder="Enter your name" icon={<UserIcon />} />
        <Button href="/signup/done" className="w-full py-4">Continue</Button>
      </form>
    </AuthShell>
  );
}
