"use client";

import { AuthInput, UserIcon, MailIcon } from "@/components/auth/AuthInput";
import { Button } from "@/components/ui/Button";

const FIELD =
  "w-full rounded-lg border border-input-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-faint focus:border-primary focus:outline-none";

export default function DashboardSupportPage() {
  return (
    <div className="mx-auto max-w-md">
      <form className="space-y-4">
        <AuthInput label="Name" placeholder="Enter your name" icon={<UserIcon />} />
        <AuthInput label="Email" type="email" placeholder="Email" icon={<MailIcon />} />
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-muted">Message</label>
          <textarea rows={5} placeholder="Write here..." className={FIELD} />
        </div>
        <Button className="w-full py-4">Submit</Button>
      </form>
    </div>
  );
}
