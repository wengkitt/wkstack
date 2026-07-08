import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/$")({
  component: NotFound,
});

function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-heading mb-2 text-6xl font-bold tracking-tight">404</h1>
      <p className="mb-8 text-muted-foreground">The page you are looking for does not exist.</p>
      <Button render={<Link to="/" />}>Go Home</Button>
    </div>
  );
}
