"use client";

import Link from "next/link";
import { AuthInput } from "@/components/auth/AuthInput";
import { Button } from "@/components/ui/Button";

export default function AddDevicePage() {
  return (
    <div className="mx-auto max-w-md">
      <p className="text-sm text-muted">Add your Device</p>
      <form className="mt-6 space-y-4">
        <AuthInput label="Device Name" placeholder="Enter device name" />
        <AuthInput label="IMEI Number" placeholder="Enter IMEI number" />
        <Button href="/dashboard/subscription" className="w-full py-4">Continue</Button>
      </form>

      <Link
        href="/dashboard"
        className="mt-5 block rounded-lg border border-line py-3 text-center text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
      >
        Open Dashboard
      </Link>
      <p className="mt-3 text-center text-xs italic text-muted">
        Note: You can add your device later from the dashboard.
      </p>
    </div>
  );
}
