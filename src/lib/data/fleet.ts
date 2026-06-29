export interface Device {
  id: string;
  name: string;
  deviceId: string;
  imei: string;
  online: boolean;
  subscription: "Active" | "Trial" | "None";
  speed: number;
  battery: number;
  mileage: number;
  expiry: string;
}

export const DEVICES: Device[] = [
  { id: "1", name: "Toyota Hilux", deviceId: "ACT-10293", imei: "356938035643809", online: true, subscription: "Active", speed: 64, battery: 88, mileage: 12480, expiry: "2026-12-01" },
  { id: "2", name: "Ford Transit", deviceId: "ACT-10294", imei: "356938035643810", online: true, subscription: "Active", speed: 0, battery: 72, mileage: 30210, expiry: "2026-09-14" },
  { id: "3", name: "Honda Civic", deviceId: "ACT-10295", imei: "356938035643811", online: false, subscription: "Trial", speed: 0, battery: 45, mileage: 8120, expiry: "2026-07-10" },
  { id: "4", name: "Yamaha R15", deviceId: "ACT-10296", imei: "356938035643812", online: true, subscription: "None", speed: 22, battery: 95, mileage: 4300, expiry: "—" },
  { id: "5", name: "Isuzu D-Max", deviceId: "ACT-10297", imei: "356938035643813", online: false, subscription: "Active", speed: 0, battery: 60, mileage: 51200, expiry: "2026-11-22" },
];

export interface AppNotification {
  id: string;
  type: "Speed Alert" | "Power Alert" | "Geofence" | "Tamper Alert";
  device: string;
  message: string;
  time: string;
  read: boolean;
}

export const NOTIFICATIONS: AppNotification[] = [
  { id: "1", type: "Speed Alert", device: "ACT-10293", message: "exceeded 80 km/h on Airport Road.", time: "2 min ago", read: false },
  { id: "2", type: "Geofence", device: "ACT-10294", message: "exited the 'Warehouse' zone.", time: "18 min ago", read: false },
  { id: "3", type: "Power Alert", device: "ACT-10295", message: "external power was disconnected.", time: "1 hr ago", read: true },
  { id: "4", type: "Tamper Alert", device: "ACT-10297", message: "vibration detected while parked.", time: "3 hr ago", read: true },
];

export interface Geofence {
  id: string;
  name: string;
  description: string;
  shape: string;
  radius: number;
  center: string;
  onEnter: boolean;
  onExit: boolean;
}

export const GEOFENCES: Geofence[] = [
  { id: "1", name: "Home", description: "Residence parking", shape: "Circle", radius: 300, center: "23.7461, 90.3742", onEnter: true, onExit: true },
  { id: "2", name: "Warehouse", description: "Main depot", shape: "Circle", radius: 500, center: "23.8103, 90.4125", onEnter: true, onExit: false },
  { id: "3", name: "Office", description: "Dhanmondi HQ", shape: "Circle", radius: 200, center: "23.7509, 90.3934", onEnter: false, onExit: true },
];
