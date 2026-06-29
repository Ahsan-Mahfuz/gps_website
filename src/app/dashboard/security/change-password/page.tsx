"use client";

import { AuthInput, LockIcon } from "@/components/auth/AuthInput";
import { Button } from "@/components/ui/Button";

export default function ChangePasswordPage() {
  return (
    <div className="mx-auto max-w-md">
      <form className="space-y-4">
        <AuthInput label="Current Password" type="password" placeholder="Current Password" icon={<LockIcon />} />
        <AuthInput label="New Password" type="password" placeholder="New Password" icon={<LockIcon />} />
        <AuthInput label="Confirm Password" type="password" placeholder="Confirm Password" icon={<LockIcon />} />
        <Button className="w-full py-4">Change Password</Button>
      </form>
    </div>
  );
}
