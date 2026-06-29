export const DEALER_STATS = {
  totalDevices: 142,
  sold: 96,
  unsold: 46,
};

export const UNSOLD_DEVICES = [
  { id: "ACT-20410", imei: "356938035649001" },
  { id: "ACT-20411", imei: "356938035649002" },
  { id: "ACT-20412", imei: "356938035649003" },
  { id: "ACT-20413", imei: "356938035649004" },
];

export const CUSTOMERS = [
  { name: "Tahmina Hossain", email: "tahmina@example.com", deviceId: "ACT-10293" },
  { name: "Rafiq Islam", email: "rafiq@example.com", deviceId: "ACT-10294" },
  { name: "Sadia Karim", email: "sadia@example.com", deviceId: "ACT-10295" },
  { name: "Imran Chowdhury", email: "imran@example.com", deviceId: "ACT-10296" },
];

export const PAYMENTS = [
  { customer: "Tahmina Hossain", device: "Toyota Hilux", amount: 21.99, plan: "Monthly", date: "2026-06-21", status: "Active", commission: 4.4 },
  { customer: "Rafiq Islam", device: "Ford Transit", amount: 21.99, plan: "Monthly", date: "2026-06-18", status: "Active", commission: 4.4 },
  { customer: "Sadia Karim", device: "Honda Civic", amount: 21.99, plan: "Monthly", date: "2026-06-12", status: "Inactive", commission: 4.4 },
];

export const DEALER_DEVICES = [
  { id: "ACT-10293", imei: "356938035643809", sold: true, customer: "Tahmina Hossain", email: "tahmina@example.com", subscription: "Active" },
  { id: "ACT-10294", imei: "356938035643810", sold: true, customer: "Rafiq Islam", email: "rafiq@example.com", subscription: "Active" },
  { id: "ACT-20410", imei: "356938035649001", sold: false, customer: null, email: null, subscription: "Inactive" },
  { id: "ACT-20411", imei: "356938035649002", sold: false, customer: null, email: null, subscription: "Inactive" },
];
