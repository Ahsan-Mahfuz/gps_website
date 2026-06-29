export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "trackers" | "accessories";
  shortDescription: string;
  longDescription: string;
  price: number;
  rating: number;
  reviews: number;
  sold: number;
  image: string;
  gallery: string[];
  highlights: string[];
  boxContents: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "rut145",
    slug: "rut-145",
    name: "RUT 145",
    category: "trackers",
    shortDescription:
      "A Permanent Hardwire GPS Tracker Built For Fleet Operators And High-Security Installs. Features Ignition Detection, Fuel-Cut Relay Support, Internal Backup Battery, And Tamper Alerts — All Over A Dedicated 4G LTE Connection With Industrial-Grade Durability.",
    longDescription:
      "The AccuTrack Pro is engineered for vehicles that don't stop. Wired directly into your vehicle's electrical system, it draws power continuously while a built-in backup battery keeps it transmitting even if the main power is cut — a critical feature for theft recovery scenarios. Combined with ignition-based engine status detection and an optional fuel-cut relay, the Pro gives fleet managers and security-conscious owners a level of control that consumer trackers simply can't match.",
    price: 79,
    rating: 4.8,
    reviews: 312,
    sold: 1840,
    image: "/products/rut145.svg",
    gallery: ["/products/rut145.svg", "/products/rut145.svg", "/products/rut145.svg"],
    highlights: [
      "±1.5m GPS Accuracy With GLONASS + Galileo Support For Reliable Positioning In Dense Urban Areas And Tunnels.",
      "3-Second Live Updates Over 4G LTE — The Fastest Refresh Rate In Our Lineup.",
      "Tamper & Power-Cut Alerts Notify You Instantly Via App And SMS If The Device Is Disconnected.",
      "Optional Fuel-Cut Relay Lets You Remotely Immobilize The Vehicle From The Dashboard — Ideal For Stolen Vehicle Recovery.",
      "IP67 Waterproof Casing Rated For Permanent Under-Dash Or Engine-Bay Installation.",
    ],
    boxContents: [
      "1× AccuTrack Pro Device",
      "1× Hardwire Harness (3m)",
      "1× Internal Backup Battery (Pre-Installed)",
      "1× Pre-Activated 4G SIM Card",
      "2× Adhesive Mounting Pads",
      "1× Quick Start Guide",
      "1× 2-Year Warranty Card",
    ],
  },
  {
    id: "rut276",
    slug: "rut-276",
    name: "RUT 276",
    category: "trackers",
    shortDescription:
      "Dual-SIM industrial cellular router with failover, built for mission-critical fleet connectivity.",
    longDescription:
      "The RUT276 brings carrier-grade redundancy to the field with dual-SIM failover, ensuring your assets stay online across coverage gaps. Built for the harshest conditions.",
    price: 99,
    rating: 4.7,
    reviews: 188,
    sold: 920,
    image: "/products/rut276.svg",
    gallery: ["/products/rut276.svg", "/products/rut276.svg", "/products/rut276.svg"],
    highlights: [
      "Dual-SIM automatic failover for uninterrupted uptime.",
      "Industrial DIN-rail mountable enclosure.",
      "Wide 9–50V DC input range for any vehicle platform.",
    ],
    boxContents: [
      "1× RUT276 Device",
      "1× DIN-Rail Mount",
      "1× Power Harness",
      "1× Quick Start Guide",
    ],
  },
  {
    id: "rut260",
    slug: "rut-260",
    name: "RUT 260",
    category: "trackers",
    shortDescription:
      "Compact 4G LTE Cat 6 router delivering high-speed connectivity for connected vehicles.",
    longDescription:
      "The RUT260 offers LTE Cat 6 speeds in a compact, rugged form factor — ideal for connected vehicle gateways and remote telemetry.",
    price: 89,
    rating: 4.6,
    reviews: 142,
    sold: 760,
    image: "/products/rut260.svg",
    gallery: ["/products/rut260.svg", "/products/rut260.svg", "/products/rut260.svg"],
    highlights: [
      "LTE Cat 6 up to 300 Mbps download speeds.",
      "Dual-band Wi-Fi access point.",
      "Compact rugged aluminium housing.",
    ],
    boxContents: ["1× RUT260 Device", "1× Antenna Set", "1× Power Adapter"],
  },
  {
    id: "rut281",
    slug: "rut-281",
    name: "RUT 281",
    category: "accessories",
    shortDescription:
      "eSIM-ready LTE router with global connectivity profiles for cross-border fleets.",
    longDescription:
      "The RUT281 ships eSIM-ready with global connectivity profiles, perfect for cross-border logistics that need seamless roaming.",
    price: 109,
    rating: 4.9,
    reviews: 96,
    sold: 540,
    image: "/products/rut281.svg",
    gallery: ["/products/rut281.svg", "/products/rut281.svg", "/products/rut281.svg"],
    highlights: [
      "Embedded eSIM with global profiles.",
      "Seamless cross-border roaming.",
      "Remote fleet management ready.",
    ],
    boxContents: ["1× RUT281 Device", "1× eSIM (Pre-Activated)", "1× Antenna Set"],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
