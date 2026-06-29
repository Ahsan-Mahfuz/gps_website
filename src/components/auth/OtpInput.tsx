"use client";

import { useRef, useState } from "react";

/** 4-digit OTP boxes (matches the app's PinCodeTextField). */
export function OtpInput({ length = 4, masked = false }: { length?: number; masked?: boolean }) {
  const [vals, setVals] = useState<string[]>(Array(length).fill(""));
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const setAt = (i: number, v: string) => {
    const next = [...vals];
    next[i] = v.slice(-1);
    setVals(next);
    if (v && i < length - 1) refs.current[i + 1]?.focus();
  };

  return (
    <div className="flex justify-center gap-3">
      {vals.map((v, i) => (
        <input
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          value={v}
          inputMode="numeric"
          type={masked ? "password" : "text"}
          maxLength={1}
          onChange={(e) => setAt(i, e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !vals[i] && i > 0) refs.current[i - 1]?.focus();
          }}
          className="h-14 w-14 rounded-xl border-2 border-input-border bg-input text-center font-anton text-xl text-foreground focus:border-primary focus:outline-none"
        />
      ))}
    </div>
  );
}
