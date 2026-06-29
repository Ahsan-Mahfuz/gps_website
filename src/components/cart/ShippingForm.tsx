"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const FIELD =
  "w-full rounded-lg border border-input-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-faint focus:border-primary focus:outline-none";
const LABEL = "mb-2 block text-xs font-bold uppercase tracking-wide text-muted";

function Field({ label, name, type = "text", placeholder, full }: { label: string; name: string; type?: string; placeholder?: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className={LABEL} htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} className={FIELD} />
    </div>
  );
}

export function ShippingForm() {
  const [sameAddress, setSameAddress] = useState(true);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2 className="font-anton text-2xl uppercase">Shipping Address</h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="First Name" name="firstName" />
        <Field label="Last Name" name="lastName" />
        <Field label="Email" name="email" type="email" />
        <Field label="Phone Number" name="phone" type="tel" />
        <Field label="Address Line 1" name="address1" full />
        <Field label="Address Line 2" name="address2" full />
        <Field label="Postcode" name="postcode" />
        <Field label="City" name="city" />
      </div>

      <label className="mt-6 flex cursor-pointer items-center gap-3 text-sm font-semibold uppercase tracking-wide text-foreground">
        <button
          type="button"
          role="checkbox"
          aria-checked={sameAddress}
          onClick={() => setSameAddress((v) => !v)}
          className={`grid h-6 w-6 place-items-center rounded-md border transition-colors ${
            sameAddress ? "border-primary bg-primary text-white" : "border-input-border bg-input"
          }`}
        >
          {sameAddress && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 12 5 5L20 7" />
            </svg>
          )}
        </button>
        Billing and delivery address are the same
      </label>

      <Button type="submit" variant="dark" className="mt-8 w-full py-4">
        Next
      </Button>
    </form>
  );
}
