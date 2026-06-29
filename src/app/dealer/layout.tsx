import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { AuthGate } from "@/components/auth/AuthGate";
import { DEALER_NAV } from "@/lib/data/dashboardNav";

export default function DealerLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell nav={DEALER_NAV}>
      <AuthGate>{children}</AuthGate>
    </DashboardShell>
  );
}
