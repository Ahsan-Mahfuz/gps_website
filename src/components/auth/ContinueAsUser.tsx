"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useAppDispatch } from "@/lib/store/hooks";
import { login } from "@/lib/store/slices/authSlice";

/** Completes signup by creating a session, then routes onward. */
export function ContinueAsUser({ to, label = "Continue" }: { to: string; label?: string }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <Button
      className="w-full py-4"
      onClick={() => {
        dispatch(login({ name: "Jordan Hayes", email: "you@example.com", role: "customer" }));
        router.push(to);
      }}
    >
      {label}
    </Button>
  );
}
