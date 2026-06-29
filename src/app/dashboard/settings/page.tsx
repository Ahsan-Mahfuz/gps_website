"use client";

import Link from "next/link";
import {
  MobileOutlined, AimOutlined, LockOutlined, CustomerServiceOutlined,
  FileTextOutlined, SafetyOutlined, LogoutOutlined, DeleteOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { SettingsRow } from "@/components/dashboard/SettingsRow";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { useAppDispatch } from "@/lib/store/hooks";
import { logout } from "@/lib/store/slices/authSlice";

export default function SettingsPage() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = () => { dispatch(logout()); router.push("/signin"); };
  return (
    <div className="mx-auto max-w-2xl space-y-3">
      {/* Profile tile */}
      <Link href="/dashboard/profile" className="flex items-center justify-between rounded-xl border border-line bg-card px-5 py-4 hover:border-primary/40">
        <span className="font-anton text-lg uppercase text-primary">Jordan Hayes</span>
        <span className="h-10 w-10 rounded-full border-2 border-primary bg-elevated" />
      </Link>

      {/* Appearance */}
      <div className="flex items-center justify-between rounded-xl border border-line bg-card px-5 py-4">
        <div>
          <p className="text-sm font-medium text-foreground">Appearance</p>
          <p className="text-xs text-muted capitalize">{theme === "dark" ? "Dark Mode" : "Light Mode"}</p>
        </div>
        <ThemeToggle />
      </div>

      <SettingsRow href="/dashboard/devices" icon={<MobileOutlined />} label="Manage Devices" />
      <SettingsRow href="/dashboard/geofence" icon={<AimOutlined />} label="Add Location" />
      <SettingsRow href="/dashboard/security" icon={<LockOutlined />} label="Security" />
      <SettingsRow href="/dashboard/support" icon={<CustomerServiceOutlined />} label="Contact & Support" />
      <SettingsRow href="/dashboard/terms" icon={<FileTextOutlined />} label="Terms & Conditions" />
      <SettingsRow href="/dashboard/privacy" icon={<SafetyOutlined />} label="Privacy & Policy" />

      <div className="pt-3">
        <SettingsRow icon={<DeleteOutlined />} label="Delete Account" danger trailing={<span />} />
      </div>
      <SettingsRow onClick={handleLogout} icon={<LogoutOutlined />} label="Logout" danger trailing={<span />} />
    </div>
  );
}
