import { Button } from "@/components/ui/Button";

export default function AddDeviceDonePage() {
  return (
    <div className="mx-auto grid max-w-md place-items-center py-16 text-center">
      <div className="relative grid h-20 w-20 place-items-center rounded-3xl bg-elevated">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--primary))" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
        </svg>
        <span className="absolute -bottom-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-primary text-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>
        </span>
      </div>
      <h1 className="mt-6 font-anton text-3xl uppercase">Successful</h1>
      <p className="mt-2 text-sm text-muted">Your device was successfully added.</p>
      <Button href="/dashboard" className="mt-8 w-full">Open Dashboard</Button>
    </div>
  );
}
