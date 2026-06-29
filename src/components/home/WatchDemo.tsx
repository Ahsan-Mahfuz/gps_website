"use client";

import { useEffect, useState } from "react";
import { Modal } from "antd";
import { Button } from "@/components/ui/Button";

const PATH = "M40 300 C 120 240, 110 170, 200 150 S 360 110, 320 50 L 360 30";

export function WatchDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>Watch Demo</Button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
        width={720}
        styles={{ content: { background: "rgb(var(--card))", borderRadius: 16, padding: 0 } }}
      >
        <TrackerDemo live={open} />
      </Modal>
    </>
  );
}

function TrackerDemo({ live }: { live: boolean }) {
  const [speed, setSpeed] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!live) return;
    const id = setInterval(() => {
      setSpeed(40 + Math.round(Math.abs(Math.sin(Date.now() / 800)) * 45));
      setElapsed((e) => e + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [live]);

  const mins = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const secs = String(elapsed % 60).padStart(2, "0");

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
        <span className="font-anton text-lg uppercase tracking-wide">Live Tracking Demo</span>
        <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Toyota Hilux · ACT-10293</span>
      </div>

      <div className="relative h-72 overflow-hidden rounded-xl border border-line bg-surface">
        <svg className="absolute inset-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="demogrid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgb(var(--line))" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#demogrid)" />
        </svg>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 320" fill="none" preserveAspectRatio="xMidYMid meet">
          <path d={PATH} stroke="rgb(var(--primary))" strokeWidth="4" strokeLinecap="round" />
          <circle cx="40" cy="300" r="6" fill="rgb(var(--primary))" />
          <circle r="8" fill="#fff" stroke="rgb(var(--primary))" strokeWidth="3">
            {live && (
              <animateMotion dur="6s" repeatCount="indefinite" path={PATH} rotate="auto" />
            )}
          </circle>
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { label: "Speed", value: `${speed} km/h` },
          { label: "Trip Time", value: `${mins}:${secs}` },
          { label: "Battery", value: "88%" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-line bg-background p-4 text-center">
            <p className="font-anton text-2xl text-primary">{s.value}</p>
            <p className="mt-1 text-xs text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <Button href="/product">Get Your Tracker</Button>
      </div>
    </div>
  );
}
