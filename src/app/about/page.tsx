import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { HERO_STATS } from "@/lib/data/home";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AccuTrack builds professional-grade GPS tracking hardware and software for fleet operators, logistics teams, and private vehicle owners.",
};

const VALUES = [
  { title: "Reliability First", body: "99.9% platform uptime and 4G-LTE coverage mean your assets are never off the grid when it matters." },
  { title: "Built for the Field", body: "IP67-rated hardware, backup batteries, and tamper alerts engineered for the harshest real-world conditions." },
  { title: "Security by Design", body: "Encrypted telemetry, fuel-cut relays, and instant theft alerts give owners real control over their vehicles." },
  { title: "Honest Pricing", body: "One-time hardware cost, transparent subscriptions, and no hidden fees. Cancel anytime." },
];

const TIMELINE = [
  { year: "2019", text: "Founded with a single goal — make vehicle theft recovery instant and affordable." },
  { year: "2021", text: "Crossed 10,000 active trackers across private owners and small fleets." },
  { year: "2023", text: "Launched the live web dashboard and dealer program." },
  { year: "2026", text: "Over 50,000 vehicles tracked globally, every second." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-background">
        <Container className="py-16 lg:py-20">
          <Reveal className="max-w-3xl">
            <SectionLabel>About Us</SectionLabel>
            <h1 className="font-anton text-5xl uppercase leading-[0.95] sm:text-6xl">
              We keep the world&apos;s vehicles <span className="text-primary">in sight.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              AccuTrack builds professional-grade GPS tracking hardware and software for fleet operators,
              logistics teams, and private owners. From a single tracker to a thousand-vehicle fleet, we give
              you real-time location, instant alerts, and total control — engineered to never blink.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/product">Explore Products</Button>
              <Button href="/contact" variant="outline">Talk to Sales</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-line bg-surface">
        <Container className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-anton text-4xl text-foreground">
                {s.value.split(/([0-9.]+)/).map((part, i) =>
                  /[0-9]/.test(part) ? <span key={i}>{part}</span> : <span key={i} className="text-primary">{part}</span>
                )}
              </div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Our Mission</SectionLabel>
            <h2 className="font-anton text-4xl uppercase leading-tight sm:text-5xl">
              Make every vehicle accountable
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-4 text-muted">
            <p className="leading-relaxed">
              A stolen vehicle used to mean a police report and a long wait. We set out to change that — putting
              instant, accurate location data in the palm of every owner and fleet manager.
            </p>
            <p className="leading-relaxed">
              Today AccuTrack powers theft recovery, driver-behavior coaching, route optimization, and peace of
              mind for thousands of customers across the globe — all from one clean dashboard.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-surface py-20">
        <Container>
          <Reveal>
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="font-anton text-4xl uppercase leading-tight sm:text-5xl">Our values</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="rounded-2xl border border-line bg-card p-8">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-primary/10">
                  <span className="h-5 w-5 rounded bg-primary" />
                </div>
                <h3 className="font-anton text-xl uppercase">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <Container>
          <Reveal>
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="font-anton text-4xl uppercase leading-tight sm:text-5xl">From zero to 50K+</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 70} className="border-l-2 border-primary pl-5">
                <span className="font-anton text-3xl text-primary">{t.year}</span>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <Container>
          <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-card to-elevated px-6 py-16 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(253,0,16,0.15),transparent_60%)]" />
            <h2 className="relative font-anton text-3xl uppercase leading-tight sm:text-5xl">
              Ready to track with us?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-muted">
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
