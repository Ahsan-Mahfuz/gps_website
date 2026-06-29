"use client";

export function QuantitySelector({
  value,
  onChange,
  className,
}: {
  value: number;
  onChange: (v: number) => void;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center rounded-lg border border-input-border bg-input ${className ?? ""}`}>
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="grid h-12 w-12 place-items-center text-xl text-foreground transition-colors hover:text-primary"
      >
        −
      </button>
      <span className="w-10 text-center font-anton text-lg text-foreground">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(value + 1)}
        className="grid h-12 w-12 place-items-center text-xl text-foreground transition-colors hover:text-primary"
      >
        +
      </button>
    </div>
  );
}
