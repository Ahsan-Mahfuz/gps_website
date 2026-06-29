export interface NavItem {
  label: string;
  href: string;
  icon: string; // antd icon key (see DashboardShell iconMap)
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const USER_NAV: NavGroup[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: "dashboard" },
      { label: "Live Map", href: "/dashboard/map", icon: "map" },
      { label: "History", href: "/dashboard/history", icon: "history" },
      { label: "Notifications", href: "/dashboard/notifications", icon: "bell" },
    ],
  },
  {
    title: "Devices",
    items: [
      { label: "Manage Devices", href: "/dashboard/devices", icon: "device" },
      { label: "Add Device", href: "/dashboard/add-device", icon: "plus" },
      { label: "Geofence", href: "/dashboard/geofence", icon: "aim" },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "Profile", href: "/dashboard/profile", icon: "user" },
      { label: "Security", href: "/dashboard/security", icon: "lock" },
      { label: "Settings", href: "/dashboard/settings", icon: "setting" },
      { label: "Contact & Support", href: "/dashboard/support", icon: "support" },
    ],
  },
];

/** Exact-path → page title (for routes that aren't top-level nav items). */
export const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/map": "Live Map",
  "/dashboard/history": "History",
  "/dashboard/notifications": "Notifications",
  "/dashboard/devices": "Manage Devices",
  "/dashboard/add-device": "Add Device",
  "/dashboard/subscription": "Activate Device",
  "/dashboard/geofence": "Geofence",
  "/dashboard/geofence/add": "Add Geofence",
  "/dashboard/profile": "Profile",
  "/dashboard/profile/edit": "Edit Profile",
  "/dashboard/security": "Security",
  "/dashboard/security/change-password": "Change Password",
  "/dashboard/settings": "Settings",
  "/dashboard/support": "Contact & Support",
  "/dashboard/privacy": "Privacy & Policy",
  "/dashboard/terms": "Terms & Conditions",
  "/dealer": "Dashboard",
  "/dealer/customers": "Customers",
  "/dealer/payments": "Payment History",
  "/dealer/devices": "Manage Device",
  "/dealer/assign": "Assign Device",
  "/dealer/stripe": "Stripe Connect",
  "/dealer/settings": "Settings",
};

export function titleForPath(pathname: string): string {
  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];
  // longest prefix match
  const match = Object.keys(PAGE_TITLES)
    .filter((p) => pathname.startsWith(p))
    .sort((a, b) => b.length - a.length)[0];
  return match ? PAGE_TITLES[match] : "Dashboard";
}

export const DEALER_NAV: NavGroup[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", href: "/dealer", icon: "dashboard" },
      { label: "Customers", href: "/dealer/customers", icon: "team" },
      { label: "Payment History", href: "/dealer/payments", icon: "wallet" },
    ],
  },
  {
    title: "Devices",
    items: [
      { label: "Manage Devices", href: "/dealer/devices", icon: "device" },
      { label: "Assign Device", href: "/dealer/assign", icon: "plus" },
      { label: "Stripe Connect", href: "/dealer/stripe", icon: "card" },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "Settings", href: "/dealer/settings", icon: "setting" },
      { label: "Contact & Support", href: "/dashboard/support", icon: "support" },
    ],
  },
];
