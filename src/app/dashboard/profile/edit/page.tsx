"use client";

import { AuthInput, UserIcon } from "@/components/auth/AuthInput";
import { Button } from "@/components/ui/Button";

export default function ProfileEditPage() {
  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-8 flex justify-center">
        <button type="button" className="relative h-24 w-24 rounded-full border-2 border-primary bg-elevated">
          <span className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-primary text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
          </span>
        </button>
      </div>
      <form className="space-y-4">
        <AuthInput label="Full Name" placeholder="Full Name" icon={<UserIcon />} />
        <AuthInput label="Phone Number" type="tel" placeholder="Phone Number" icon={<UserIcon />} />
        <Button className="w-full py-4">Save Changes</Button>
      </form>
    </div>
  );
}
