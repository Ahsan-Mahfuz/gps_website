import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

/** Centered auth card used by every sign-in / sign-up / reset screen. */
export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <Container className="grid min-h-[78vh] place-items-center py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="rounded-2xl border border-line bg-card p-8 sm:p-10">
          <h1 className="font-anton text-3xl uppercase sm:text-4xl">{title}</h1>
          {subtitle && <p className="font-desc mt-2 text-base leading-relaxed text-muted">{subtitle}</p>}
          <div className="mt-8">{children}</div>
        </div>
        {footer && <div className="mt-6 text-center text-sm text-muted">{footer}</div>}
      </div>
    </Container>
  );
}
