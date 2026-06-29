const SECTIONS = [
  ["Information We Collect", "We collect account details, device telemetry, and location data necessary to provide real-time tracking services."],
  ["How We Use Your Data", "Your data powers live tracking, alerts, and trip history. We never sell your location data to third parties."],
  ["Data Security", "All data is encrypted in transit and at rest. Access is restricted to authorized personnel only."],
  ["Your Rights", "You may request access, correction, or deletion of your data at any time by contacting our support team."],
];

export default function DashboardPrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {SECTIONS.map(([title, body]) => (
        <section key={title}>
          <h2 className="font-anton text-xl uppercase text-foreground">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
        </section>
      ))}
    </div>
  );
}
