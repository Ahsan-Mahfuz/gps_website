# AccuTrack Website

Marketing + e-commerce site for the AccuTrack GPS tracking platform.
Built design-first (no backend integration yet).

## Stack

- **Next.js 15** (App Router, TypeScript, SEO via Metadata API + sitemap/robots)
- **Tailwind CSS** — all colors driven by CSS variables for instant theme switching
- **Ant Design 5** — Select, Modal, Tabs, Drawer, Badge (theme-synced)
- **Redux Toolkit** — cart state (UI-only seed data for now; RTK Query added at integration time)
- **Fonts** — Anton (display / headings), Inria Sans (body) via `next/font/google`

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

> The build fetches Anton + Inria Sans from Google Fonts — requires internet on first build.

## Theme switching (black ⇆ white)

Default theme is **black**. The toggle is in the navbar.

- Tokens live in [`src/app/globals.css`](src/app/globals.css) under `[data-theme="dark"]` / `[data-theme="light"]`.
- `ThemeProvider` flips the `data-theme` attribute on `<html>` and persists to `localStorage`.
- Tailwind reads tokens as `bg-background`, `text-foreground`, `text-primary`, etc.
- Change the brand color once in `globals.css` (`--primary`) and it flows everywhere.

## Structure

```
src/
  app/                 # routes: / product /product/[slug] cart purchase contact support account terms privacy-policy
  components/
    layout/            # Navbar, Footer
    ui/                # Button, Container, Logo, ThemeToggle, Stars, Reveal, Breadcrumb, QuantitySelector, SectionLabel
    home/ product/ cart/ contact/
  lib/
    theme/             # ThemeProvider, AntdProvider
    store/             # Redux store, cartSlice, hooks, StoreProvider
    data/              # products, home content
    site.ts            # nav, footer, contact info
```

## Pages built (from the reference design)

Home · Product list · Product detail · Cart · Purchase/checkout · Added-to-cart modal · Contact · Support · Sign-in · Privacy · Terms.

## Not yet built (app screens for a later pass)

The full app dashboard, live map, geofence, notifications, profile/settings, dealer
console, and the complete multi-step auth flow (OTP, sign-up, reset) — these mirror
`traccar_app` and can be added as a `/dashboard` section when you're ready.

## Integration (later)

When you say "integrate", wire Redux **RTK Query** API slices into `lib/store`,
replace the seed data in `lib/data/*`, and connect forms to the Traccar backend.
