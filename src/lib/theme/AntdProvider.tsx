"use client";

import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider, theme as antdTheme } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { useTheme } from "./ThemeProvider";

const BRAND = "#FD0010";

/**
 * Bridges our CSS-variable theme into Ant Design's token system so antd
 * components (Select, Modal, Tabs, etc.) follow the black/white switch too.
 */
export function AntdProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
          token: {
            colorPrimary: BRAND,
            colorInfo: BRAND,
            borderRadius: 10,
            fontFamily: "var(--font-inria), system-ui, sans-serif",
            colorBgBase: isDark ? "#0D0D0D" : "#FFFFFF",
          },
          components: {
            Button: { controlHeight: 44, fontWeight: 600 },
            Input: { controlHeight: 48 },
            Select: { controlHeight: 48 },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
