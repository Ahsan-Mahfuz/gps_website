import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { WatchDemo } from "@/components/home/WatchDemo";
import {
  HERO_STATS,
  HERO_TAGS,
  FEATURES,
  STEPS,
  PLANS,
  REVIEWS,
} from "@/lib/data/home";
import { cn } from "@/lib/utils";

function CheckCircle() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-primary">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden border-b border-line bg-background">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_75%_30%,rgba(253,0,16,0.14),transparent_55%)]" />
        <div className="relative grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Image bleeds to the screen's left edge — no container padding */}
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-background sm:aspect-[16/10] lg:aspect-auto lg:h-[640px]">
              <Image
                src="/home/home.png"
                alt="AccuTrack live vehicle tracking on a phone"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-left-top"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="flex flex-col items-start px-5 pb-12 sm:px-8 lg:px-12 lg:py-10">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Live GPS · Always Connected
            </span>
            <h1 className="font-anton text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              Track Every<br />Vehicle,<br />
              <span className="text-primary">Every Second.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Real-time 4G-LTE tracking, instant theft alerts, and a live web dashboard — engineered for fleet operators, logistics teams, and private owners.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/product">Order Now</Button>
              <WatchDemo />
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {HERO_TAGS.map((t) => (
                <span key={t} className="rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1.5 text-xs text-foreground">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── STATS BAR ───────── */}
      <section className="border-b border-line bg-background">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-10">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-anton text-4xl text-foreground">
                {s.value.split(/([0-9.]+)/).map((part, i) =>
                  /[0-9]/.test(part) ? (
                    <span key={i}>{part}</span>
                  ) : (
                    <span key={i} className="text-primary">{part}</span>
                  )
                )}
              </div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── FEATURES ───────── */}
      <section className="py-20">
        <Container>
          <Reveal>
            <SectionLabel>Core Features</SectionLabel>
            <h2 className="max-w-2xl font-anton text-4xl uppercase leading-tight sm:text-5xl">
              Everything you need to stay in control
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Built for fleet managers and individual owners who need reliable, always-on vehicle intelligence.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={i} delay={i * 60} className="group bg-card p-8 transition-colors hover:bg-elevated">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <div className="h-5 w-5 rounded bg-primary group-hover:bg-white" />
                </div>
                <h3 className="font-anton text-xl uppercase text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────── HOW IT WORKS ───────── */}
      <section id="how" className="border-y border-line bg-surface py-20">
        <Container>
          <Reveal>
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="max-w-2xl font-anton text-4xl uppercase leading-tight sm:text-5xl">
              Up &amp; running in minutes
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              No technician needed. Simple plug-and-track setup with instant cloud connectivity.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              {STEPS.map((s, i) => (
                <Reveal key={s.no} delay={i * 80} className="flex gap-6">
                  <span className="font-anton text-4xl text-primary">{s.no}</span>
                  <div>
                    <h3 className="font-anton text-xl uppercase text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120} className="relative min-h-[300px] overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-elevated to-card">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full border-2 border-primary/40 bg-primary/10" />
                  <p className="font-anton text-2xl uppercase text-foreground">Plug · Pair · Track</p>
                  <p className="mt-2 text-sm text-muted">Live in under 2 minutes</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ───────── PRICING ───────── */}
      <section className="py-20">
        <Container>
          <Reveal className="text-center">
            <SectionLabel>
              <span className="mx-auto">Pricing</span>
            </SectionLabel>
            <h2 className="font-anton text-4xl uppercase leading-tight sm:text-5xl">
              Simple, transparent plans
            </h2>
            <p className="mt-4 text-muted">One-time device cost. No hidden fees. Cancel anytime.</p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
            {PLANS.map((p, i) => (
              <Reveal
                key={i}
                delay={i * 80}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-card p-8",
                  p.popular ? "border-primary shadow-[0_0_40px_-12px_rgba(253,0,16,0.5)]" : "border-line"
                )}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                )}
                <span className="text-xs font-bold uppercase tracking-widest text-muted">{p.name}</span>
                <div className="mt-3 flex items-end gap-1">
                  <span className="font-anton text-5xl text-primary">${p.price}</span>
                  <span className="mb-2 text-sm text-muted">Per Tracker</span>
                </div>
                <p className="mt-4 text-sm font-bold uppercase text-foreground">What You Get</p>
                <ul className="mt-4 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted">
                      <CheckCircle />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={p.popular ? "primary" : "dark"}
                  className="mt-8 w-full"
                  href="/product"
                >
                  {p.cta}
                </Button>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────── REVIEWS ───────── */}
      <section className="border-y border-line bg-surface py-20">
        <Container>
          <Reveal className="text-center">
            <SectionLabel><span className="mx-auto">Customer Reviews</span></SectionLabel>
            <h2 className="font-anton text-4xl uppercase leading-tight sm:text-5xl">Trusted by thousands</h2>
            <p className="mt-4 text-muted">Real stories from owners and operators who rely on AccuTrack.</p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={i} delay={i * 80} className="rounded-2xl border border-line bg-card p-7">
                <Stars rating={r.rating} />
                <p className="mt-4 text-sm leading-relaxed text-muted">“{r.body}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full border border-primary/40 bg-elevated" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{r.name}</p>
                    <p className="text-xs text-muted">{r.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="py-20">
        <Container>
          <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-card to-elevated px-6 py-20 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(253,0,16,0.15),transparent_60%)]" />
            <h2 className="relative font-anton text-4xl uppercase leading-tight sm:text-6xl">
              Know where your<br />
              <span className="text-primary">vehicle is</span> right now.
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-muted">
              Join over 50,000 drivers and fleet operators who trust AccuTrack every single day.
            </p>
            <div className="relative mt-8 flex justify-center">
              <Button href="/product">Order Your Tracker</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
