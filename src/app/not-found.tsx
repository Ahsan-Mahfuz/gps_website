import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="grid min-h-[70vh] place-items-center py-20 text-center">
      <div>
        <p className="font-anton text-7xl text-primary sm:text-8xl">404</p>
        <h1 className="mt-4 font-anton text-3xl uppercase">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Back Home</Button>
          <Button href="/product" variant="outline">Browse Products</Button>
        </div>
      </div>
    </Container>
  );
}
