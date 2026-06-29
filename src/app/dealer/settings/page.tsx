"use client";

import Link from "next/link";
import {
  MobileOutlined, CreditCardOutlined, LockOutlined, CustomerServiceOutlined,
  FileTextOutlined, SafetyOutlined, LogoutOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { SettingsRow } from "@/components/dashboard/SettingsRow";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { useAppDispatch } from "@/lib/store/hooks";
import { logout } from "@/lib/store/slices/authSlice";

export default function DealerSettingsPage() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = () => { dispatch(logout()); router.push("/signin"); };
  return (
    <div className="mx-auto max-w-2xl space-y-3">
      <Link href="/dashboard/profile" className="flex items-center justify-between rounded-xl border border-line bg-card px-5 py-4 hover:border-primary/40">
        <span className="font-anton text-lg uppercase text-primary">Dealer Account</span>
        <span className="h-10 w-10 rounded-full border-2 border-primary bg-elevated" />
      </Link>

      <div className="flex items-center justify-between rounded-xl border border-line bg-card px-5 py-4">
        <div>
          <p className="text-sm font-medium text-foreground">Appearance</p>
          <p className="text-xs text-muted capitalize">{theme === "dark" ? "Dark Mode" : "Light Mode"}</p>
        </div>
        <ThemeToggle />
      </div>

      <SettingsRow href="/dealer/devices" icon={<MobileOutlined />} label="Manage Devices" />
      <SettingsRow href="/dealer/stripe" icon={<CreditCardOutlined />} label="Stripe Connect" />
      <SettingsRow href="/dashboard/security" icon={<LockOutlined />} label="Security" />
      <SettingsRow href="/dashboard/support" icon={<CustomerServiceOutlined />} label="Contact & Support" />
      <SettingsRow href="/dashboard/terms" icon={<FileTextOutlined />} label="Terms & Conditions" />
      <SettingsRow href="/dashboard/privacy" icon={<SafetyOutlined />} label="Privacy & Policy" />
      <SettingsRow onClick={handleLogout} icon={<LogoutOutlined />} label="Logout" danger trailing={<span />} />
    </div>
  );
}
