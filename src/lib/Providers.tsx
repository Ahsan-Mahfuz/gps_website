"use client";

import { ThemeProvider } from "./theme/ThemeProvider";
import { AntdProvider } from "./theme/AntdProvider";
import { StoreProvider } from "./store/StoreProvider";
import { AuthPersistence } from "./store/AuthPersistence";

/**
 * Single client boundary that composes every app-wide provider:
 * Redux store → Theme (black/white) → Ant Design config.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <AuthPersistence />
      <ThemeProvider>
        <AntdProvider>{children}</AntdProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
