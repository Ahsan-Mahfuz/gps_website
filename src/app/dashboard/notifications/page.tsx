"use client";

import { useState } from "react";
import { NOTIFICATIONS } from "@/lib/data/fleet";
import { EmptyState } from "@/components/dashboard/widgets";

export default function NotificationsPage() {
  const [items, setItems] = useState(NOTIFICATIONS);
  const markRead = (id: string) =>
    setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));

  if (items.length === 0) return <EmptyState title="No notifications yet" />;

  return (
    <div className="mx-auto max-w-2xl space-y-3">
      {items.map((n) => (
        <button
          key={n.id}
          onClick={() => markRead(n.id)}
          className={`block w-full rounded-xl border px-5 py-4 text-left transition-colors ${
            n.read ? "border-line bg-card" : "border-primary/50 bg-primary/5"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-primary">
              {n.type}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">{n.time}</span>
              {!n.read && <span className="h-2 w-2 rounded-full bg-primary" />}
            </div>
          </div>
          <p className="mt-2 text-sm text-foreground">
            <span className="font-bold">{n.device}</span> <span className="text-muted">{n.message}</span>
          </p>
        </button>
      ))}
    </div>
  );
}
