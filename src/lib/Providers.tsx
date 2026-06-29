"use client";

import { ThemeProvider } from "./theme/ThemeProvider";
import { AntdProvider } from "./theme/AntdProvider";
import { StoreProvider } from "./store/StoreProvider";

/**
 * Single client boundary that composes every app-wide provider:
 * Redux store → Theme (black/white) → Ant Design config.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <ThemeProvider>
        <AntdProvider>{children}</AntdProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
