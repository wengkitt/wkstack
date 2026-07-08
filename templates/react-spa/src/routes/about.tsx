import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-heading mb-2 text-3xl font-bold tracking-tight">About</h1>
      <p className="mb-8 text-muted-foreground">What this template provides and how to use it.</p>

      <Separator className="mb-8" />

      <section className="mb-8">
        <h2 className="font-heading mb-3 text-xl font-semibold tracking-tight">Overview</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          This template is a pre-configured starting point for building single-page applications
          with React. It includes routing, data fetching, form management, state management, and a
          comprehensive UI component library.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          All tools are configured to work together out of the box. The development environment uses
          Vite for fast HMR, Oxlint for linting, and Oxfmt for formatting.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading mb-3 text-xl font-semibold tracking-tight">Getting Started</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Run the development server and start editing routes in{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-medium">src/routes/</code>.
        </p>
        <div className="mb-4 rounded-lg bg-muted p-4">
          <code className="text-sm">npm run dev</code>
        </div>
        <p className="leading-relaxed text-muted-foreground">
          Add shadcn/ui components with{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-medium">
            pnpm dlx shadcn@latest add
          </code>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading mb-3 text-xl font-semibold tracking-tight">
          Project Structure
        </h2>
        <div className="rounded-lg bg-muted p-4">
          <pre className="text-sm leading-relaxed">
            <code>{`src/
├── components/   # Shared components
│   └── ui/       # shadcn/ui components
├── hooks/        # Custom React hooks
├── lib/          # Utilities and config
├── routes/       # File-based route pages
├── stores/       # Zustand state stores
├── App.tsx       # Root layout
├── index.css     # Global styles (Tailwind CSS v4)
└── main.tsx      # Application entry point`}</code>
          </pre>
        </div>
      </section>

      <Separator className="mb-8" />

      <div className="flex items-center gap-3">
        <Button render={<Link to="/" />}>Back to Home</Button>
      </div>
    </div>
  );
}
