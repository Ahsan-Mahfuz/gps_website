import { InfoRow } from "@/components/dashboard/widgets";
import { Button } from "@/components/ui/Button";

export default function StripeConnectPage() {
  const connected = true;
  return (
    <div className="mx-auto max-w-lg">
      <div className="text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#635BFF] font-anton text-3xl text-white">S</div>
        <h1 className="mt-4 font-anton text-2xl uppercase">Stripe Connect</h1>
        <p className="mt-2 text-sm text-muted">
          {connected
            ? "Your Stripe account is connected. You can receive commission payments."
            : "Connect your Stripe account to receive commission payments."}
        </p>
      </div>

      {connected && (
        <div className="mt-8 rounded-2xl border border-line bg-card p-6">
          <div className="divide-y divide-line">
            <InfoRow label="Connection" value="Connected" valueClass="text-success" />
            <InfoRow label="Status" value="Active" valueClass="text-success" />
            <InfoRow label="Details Submitted" value="Yes" valueClass="text-success" />
            <InfoRow label="Charges Enabled" value="Yes" valueClass="text-success" />
            <InfoRow label="Account ID" value="acct_1Q8…7Xa" valueClass="text-muted" />
          </div>
        </div>
      )}

      <Button className="mt-8 w-full py-4">{connected ? "Update Stripe Account" : "Connect Stripe"}</Button>
    </div>
  );
}
