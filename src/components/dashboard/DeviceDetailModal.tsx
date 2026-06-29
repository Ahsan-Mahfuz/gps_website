"use client";

import { Modal } from "antd";
import { InfoRow } from "./widgets";
import { Button } from "@/components/ui/Button";
import type { Device } from "@/lib/data/fleet";

export function DeviceDetailModal({
  device,
  onClose,
}: {
  device: Device | null;
  onClose: () => void;
}) {
  return (
    <Modal
      open={!!device}
      onCancel={onClose}
      footer={null}
      centered
      width={460}
      styles={{ content: { background: "rgb(var(--card))", borderRadius: 16 } }}
    >
      {device && (
        <div>
          <h3 className="font-anton text-2xl uppercase">Device Details</h3>
          <div className="mt-5 divide-y divide-line">
            <InfoRow label="Name" value={device.name} />
            <InfoRow label="Device ID" value={device.deviceId} />
            <InfoRow label="IMEI" value={device.imei} />
            <InfoRow label="Status" value={device.online ? "Online" : "Offline"} valueClass={device.online ? "text-success" : "text-muted"} />
            <InfoRow label="Subscription" value={device.subscription} />
            <InfoRow label="Speed" value={`${device.speed} mph`} />
            <InfoRow label="Battery" value={`${device.battery}%`} />
            <InfoRow label="Mileage" value={`${device.mileage.toLocaleString()} mi`} />
          </div>
          <Button variant="dark" onClick={onClose} className="mt-6 w-full">Close</Button>
        </div>
      )}
    </Modal>
  );
}
