import { InfoRow } from "@/components/dashboard/widgets";
import { Button } from "@/components/ui/Button";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-xl">
      <div className="rounded-2xl border border-line bg-card p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="h-14 w-14 rounded-full border-2 border-primary bg-elevated" />
            <span className="font-anton text-xl uppercase text-primary">Jordan Hayes</span>
          </div>
          <Button href="/dashboard/profile/edit" className="px-5 py-2 text-xs">Edit</Button>
        </div>
        <div className="mt-6 divide-y divide-line border-t border-line pt-2">
          <InfoRow label="Email" value="jordan.hayes@example.com" />
          <InfoRow label="Phone" value="+880 1634 101222" />
        </div>
      </div>
    </div>
  );
}
