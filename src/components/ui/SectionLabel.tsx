export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-primary" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
        {children}
      </span>
    </div>
  );
}
