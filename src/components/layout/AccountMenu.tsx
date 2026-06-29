"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dropdown } from "antd";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { logout } from "@/lib/store/slices/authSlice";

export function AccountMenu() {
  const { isAuthenticated, user } = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  if (!isAuthenticated || !user) {
    return (
      <Link
        href="/signin"
        aria-label="Sign in"
        className="grid h-9 w-9 place-items-center rounded-full border-2 border-primary bg-elevated text-xs font-bold text-muted"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
      </Link>
    );
  }

  const initial = user.name.trim().charAt(0).toUpperCase() || "U";

  return (
    <Dropdown
      trigger={["click"]}
      menu={{
        items: [
          { key: "name", label: <span className="font-semibold">{user.name}</span>, disabled: true },
          { type: "divider" },
          { key: "dashboard", label: <Link href="/dashboard">Dashboard</Link> },
          { key: "devices", label: <Link href="/dashboard/devices">My Devices</Link> },
          { key: "profile", label: <Link href="/dashboard/profile">Profile</Link> },
          { type: "divider" },
          {
            key: "logout",
            danger: true,
            label: "Logout",
            onClick: () => {
              dispatch(logout());
              router.push("/");
            },
          },
        ],
      }}
    >
      <button
        aria-label="Account menu"
        className="grid h-9 w-9 place-items-center rounded-full border-2 border-primary bg-primary/10 font-anton text-sm text-primary"
      >
        {initial}
      </button>
    </Dropdown>
  );
}
