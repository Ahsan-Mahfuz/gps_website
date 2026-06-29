"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthInput, MailIcon, LockIcon } from "@/components/auth/AuthInput";
import { Button } from "@/components/ui/Button";
import { useAppDispatch } from "@/lib/store/hooks";
import { login } from "@/lib/store/slices/authSlice";

export function SignInForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") || "/dashboard";
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Design-phase login — accepts any credentials and creates a session.
    const name = email ? email.split("@")[0].replace(/[._]/g, " ") : "Jordan Hayes";
    dispatch(login({ name: name || "Jordan Hayes", email: email || "you@example.com", role: "customer" }));
    router.push(redirect);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <AuthInput label="Email" type="email" placeholder="Enter Email" icon={<MailIcon />} onChange={setEmail} />
      <AuthInput label="Password" type="password" placeholder="Enter Password" icon={<LockIcon />} />
      <div className="text-right">
        <Link href="/forgot" className="text-sm text-muted underline hover:text-foreground">Forgot Password?</Link>
      </div>
      <Button type="submit" className="w-full py-4">Sign In</Button>
    </form>
  );
}
