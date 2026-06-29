import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Reliable support and direct communication. Get in touch with the AccuTrack team, browse help topics, or send us your inquiry.",
};

const TOPICS = [
  { title: "Getting Started", body: "Install your device, scan the QR code, and activate your account in under 2 minutes." },
  { title: "Device & Hardware", body: "Wiring, backup battery, SIM activation, and troubleshooting connection issues." },
  { title: "Billing & Plans", body: "Manage your subscription, update payment methods, and review invoices." },
  { title: "Alerts & Geofences", body: "Set up theft alerts, speed limits, and custom geo-fence zones." },
  { title: "Account & Security", body: "Reset passwords, manage devices, and configure two-factor authentication." },
  { title: "Returns & Warranty", body: "30-day returns and 2-year hardware replacement warranty details." },
];

const FAQS = [
  ["How fast does support respond?", "Our team responds within 2 business hours during office hours (Sun–Thu, 9am–6pm)."],
  ["Do you offer phone support?", `Yes — call us at ${SITE.phone} during business hours, or open a ticket anytime.`],
  ["Where can I track my order?", "You'll receive a tracking link by email once your device ships."],
];

export default function SupportPage() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center">
          <SectionLabel>Contact &amp; Support</SectionLabel>
        </div>
        <h1 className="font-anton text-5xl uppercase sm:text-6xl">Support</h1>
        <p className="mt-4 text-muted">
          Reliable support and direct communication. Get in touch with our team, visit our location, or send us your inquiry.
        </p>
        <div className="mt-7 flex justify-center gap-4">
          <Button href="/contact">Contact Us</Button>
          <Button href={`mailto:${SITE.supportEmail}`} variant="outline">Email Support</Button>
        </div>
      </div>

      {/* Help topics */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map((t) => (
          <Link
            key={t.title}
            href="/contact"
            className="group rounded-2xl border border-line bg-card p-7 transition-colors hover:border-primary/50"
          >
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
              <span className="h-4 w-4 rounded bg-primary group-hover:bg-white" />
            </div>
            <h3 className="font-anton text-lg uppercase text-foreground group-hover:text-primary">{t.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
          </Link>
        ))}
      </div>

      {/* FAQ */}
      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="text-center font-anton text-3xl uppercase">Frequently Asked</h2>
        <div className="mt-8 space-y-4">
          {FAQS.map(([q, a]) => (
            <details key={q} className="rounded-xl border border-line bg-card p-5">
              <summary className="cursor-pointer font-semibold text-foreground">{q}</summary>
              <p className="mt-3 text-sm text-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </Container>
  );
}
