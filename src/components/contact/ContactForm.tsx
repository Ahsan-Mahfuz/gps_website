"use client";

import { useState } from "react";
import { Select } from "antd";
import { Button } from "@/components/ui/Button";

const FIELD =
  "w-full rounded-lg border border-input-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-faint focus:border-primary focus:outline-none";
const LABEL = "mb-2 block text-xs font-bold uppercase tracking-wide text-muted";

const TABS = ["General Enquiry", "Support"] as const;

export function ContactForm() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("General Enquiry");

  return (
    <div className="rounded-2xl border border-line bg-card">
      <div className="grid grid-cols-2 overflow-hidden rounded-t-2xl">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`py-4 text-sm font-semibold transition-colors ${
              tab === t ? "bg-elevated text-foreground" : "bg-card text-muted hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-5 p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={LABEL} htmlFor="fname">First Name</label>
            <input id="fname" className={FIELD} />
          </div>
          <div>
            <label className={LABEL} htmlFor="lname">Last Name</label>
            <input id="lname" className={FIELD} />
          </div>
          <div>
            <label className={LABEL} htmlFor="cemail">Email Address</label>
            <input id="cemail" type="email" className={FIELD} />
          </div>
          <div>
            <label className={LABEL} htmlFor="cphone">Phone Number</label>
            <input id="cphone" type="tel" className={FIELD} />
          </div>
        </div>

        <div>
          <label className={LABEL}>Subject</label>
          <Select
            className="w-full"
            size="large"
            defaultValue="choose"
            options={[
              { value: "choose", label: "Choose Topic" },
              { value: "sales", label: "Sales Enquiry" },
              { value: "support", label: "Technical Support" },
              { value: "billing", label: "Billing" },
            ]}
          />
        </div>

        <div>
          <label className={LABEL}>Message</label>
          <textarea rows={6} placeholder="Tell us how we can help…" className={FIELD} />
        </div>

        <Button type="submit" className="w-full py-4">
          {tab === "Support" ? "Submit Ticket" : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
