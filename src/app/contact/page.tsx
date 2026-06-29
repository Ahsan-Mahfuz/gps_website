import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AccuTrack. Our team responds within 2 business hours — whether you're buying one unit or deploying a fleet.",
};

const INFO = [
  { title: "Office Location", lines: [SITE.address] },
  { title: "Phone", lines: [SITE.phone, SITE.phone] },
  { title: "Email", lines: [SITE.email, SITE.supportEmail] },
  { title: "Office Hours", lines: ["Sun–Thu (9am–6pm)", "Fri–Sat: Closed"] },
];

export default function ContactPage() {
  return (
    <Container className="py-16">
      <div className="max-w-xl">
        <SectionLabel>Get In Touch</SectionLabel>
        <h1 className="font-anton text-5xl uppercase leading-[0.95] sm:text-6xl">
          Let&apos;s Talk Tracking.
        </h1>
        <p className="mt-5 text-muted">
          Our team responds within 2 business hours. Whether you&apos;re buying one unit or deploying a fleet, we&apos;re here to help you make the right call.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Left: map + info cards */}
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl border border-line bg-elevated">
            <div className="relative h-72 w-full bg-[radial-gradient(circle_at_30%_40%,rgba(253,0,16,0.18),transparent_50%)]">
              <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 400 280" fill="none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <path key={i} d={`M0 ${20 + i * 22} Q 200 ${i * 18} 400 ${30 + i * 20}`} stroke="rgb(var(--line))" strokeWidth="1" />
                ))}
                <path d="M40 240 Q 160 120 260 80 T 380 40" stroke="#FD0010" strokeWidth="2.5" fill="none" />
              </svg>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-anton text-2xl uppercase text-foreground">
                Headquarters
              </span>
            </div>
            <div className="flex items-end justify-between gap-4 p-6">
              <div>
                <h3 className="font-anton text-lg uppercase">Headquarters</h3>
                <p className="mt-1 text-sm text-muted">{SITE.address}</p>
              </div>
              <Button href="#" className="shrink-0">Get Direction</Button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {INFO.map((c) => (
              <div key={c.title} className="rounded-2xl border border-line bg-card p-5">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-primary/40 bg-primary/10">
                    <span className="h-4 w-4 rounded-sm bg-primary" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-foreground">{c.title}</h4>
                    {c.lines.map((l, i) => (
                      <p key={i} className="mt-1 text-sm text-muted">{l}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <ContactForm />
      </div>
    </Container>
  );
}
