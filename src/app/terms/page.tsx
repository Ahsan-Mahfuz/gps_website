import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing your use of AccuTrack devices, software, and services.",
};

const SECTIONS = [
  ["Acceptance of Terms", "By using AccuTrack devices and services, you agree to these terms and our privacy policy."],
  ["Subscriptions", "Live tracking requires an active subscription. Plans renew automatically and can be cancelled anytime."],
  ["Hardware Warranty", "Devices include a 2-year hardware replacement warranty covering manufacturing defects."],
  ["Acceptable Use", "You agree to use tracking services lawfully and only on vehicles you own or are authorized to track."],
];

export default function TermsPage() {
  return (
    <Container className="py-16">
      <SectionLabel>Policy</SectionLabel>
      <h1 className="font-anton text-5xl uppercase sm:text-6xl">Terms &amp; Conditions</h1>
      <div className="mt-10 max-w-3xl space-y-8">
        {SECTIONS.map(([title, body]) => (
          <section key={title}>
            <h2 className="font-anton text-xl uppercase text-foreground">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
          </section>
        ))}
      </div>
    </Container>
  );
}
