"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Drawer } from "antd";
import { useAppDispatch } from "@/lib/store/hooks";
import { logout } from "@/lib/store/slices/authSlice";
import {
  DashboardOutlined,
  EnvironmentOutlined,
  HistoryOutlined,
  BellOutlined,
  MobileOutlined,
  PlusCircleOutlined,
  AimOutlined,
  UserOutlined,
  LockOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  TeamOutlined,
  WalletOutlined,
  CreditCardOutlined,
  MenuOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { type NavGroup, titleForPath } from "@/lib/data/dashboardNav";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  dashboard: <DashboardOutlined />,
  map: <EnvironmentOutlined />,
  history: <HistoryOutlined />,
  bell: <BellOutlined />,
  device: <MobileOutlined />,
  plus: <PlusCircleOutlined />,
  aim: <AimOutlined />,
  user: <UserOutlined />,
  lock: <LockOutlined />,
  setting: <SettingOutlined />,
  support: <CustomerServiceOutlined />,
  team: <TeamOutlined />,
  wallet: <WalletOutlined />,
  card: <CreditCardOutlined />,
};

function NavLinks({ nav, onNavigate }: { nav: NavGroup[]; onNavigate?: () => void }) {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isActive = (href: string) =>
    href === "/dashboard" || href === "/dealer" ? pathname === href : pathname.startsWith(href);

  const handleLogout = () => {
    dispatch(logout());
    onNavigate?.();
    router.push("/signin");
  };

  return (
    <nav className="flex flex-col gap-7">
      {nav.map((group) => (
        <div key={group.title}>
          <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-widest text-faint">{group.title}</p>
          <div className="flex flex-col gap-1">
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:bg-elevated hover:text-foreground"
                )}
              >
                <span className="text-base">{iconMap[item.icon]}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted transition-colors hover:bg-elevated hover:text-primary"
      >
        <span className="text-base"><LogoutOutlined /></span>
        Logout
      </button>
    </nav>
  );
}

export function DashboardShell({
  nav,
  children,
}: {
  nav: NavGroup[];
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const title = titleForPath(pathname);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-[1600px]">
        {/* Sidebar (desktop) */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-line bg-surface px-4 py-6 lg:flex">
          <div className="mb-8 px-2"><Logo /></div>
          <div className="flex-1 overflow-y-auto">
            <NavLinks nav={nav} />
          </div>
        </aside>

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-line bg-background/90 px-5 backdrop-blur lg:px-8">
            <div className="flex items-center gap-3">
              <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen(true)}>
                <MenuOutlined className="text-lg text-foreground" />
              </button>
              <h1 className="font-anton text-xl uppercase">{title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/dashboard/profile" className="h-9 w-9 rounded-full border-2 border-primary bg-elevated" aria-label="Profile" />
            </div>
          </header>

          <div className="flex-1 px-5 py-6 lg:px-8 lg:py-8">{children}</div>
        </div>
      </div>

      <Drawer
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
        width={280}
        styles={{ body: { padding: 16 } }}
        title={<Logo />}
      >
        <NavLinks nav={nav} onNavigate={() => setOpen(false)} />
      </Drawer>
    </div>
  );
}
