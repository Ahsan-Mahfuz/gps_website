import { LockOutlined } from "@ant-design/icons";
import { SettingsRow } from "@/components/dashboard/SettingsRow";

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <SettingsRow href="/dashboard/security/change-password" icon={<LockOutlined />} label="Change Password" />
    </div>
  );
}
