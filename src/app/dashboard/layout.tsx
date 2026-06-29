import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { AuthGate } from "@/components/auth/AuthGate";
import { USER_NAV } from "@/lib/data/dashboardNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell nav={USER_NAV}>
      <AuthGate>{children}</AuthGate>
    </DashboardShell>
  );
}
