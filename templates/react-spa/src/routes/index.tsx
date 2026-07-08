import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: Index,
});

const features = [
  {
    title: "React 19",
    description: "Latest React with compiler, actions, and server components support.",
    tags: ["UI"],
  },
  {
    title: "TanStack Router",
    description: "File-based routing with type-safe links, auto code-splitting, and loaders.",
    tags: ["Routing"],
  },
  {
    title: "TanStack Query",
    description: "Server state management with caching, refetching, and optimistic updates.",
    tags: ["Data"],
  },
  {
    title: "TanStack Form",
    description: "Type-safe form management with Zod validation and schema adapters.",
    tags: ["Forms"],
  },
  {
    title: "Zustand",
    description: "Lightweight client-state management with persist middleware for local storage.",
    tags: ["State"],
  },
  {
    title: "Tailwind CSS v4",
    description: "Utility-first CSS with CSS-first configuration, new @theme directive.",
    tags: ["CSS"],
  },
  {
    title: "shadcn/ui",
    description: "Component library built on @base-ui/react with base-nova styling.",
    tags: ["UI"],
  },
  {
    title: "TypeScript 6 + Oxlint",
    description: "Type safety with TS 6.0, linting and formatting with Oxlint and Oxfmt.",
    tags: ["Tooling"],
  },
];

function Index() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="font-heading mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          react-spa
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          A modern React SPA template powered by TanStack, Tailwind CSS v4, shadcn/ui, and
          TypeScript.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button render={<a href="https://tanstack.com" target="_blank" rel="noreferrer" />}>
            Get Started
          </Button>
          <Button variant="outline" render={<Link to="/about" />}>
            Learn More
          </Button>
        </div>
      </section>

      <section>
        <div className="mb-8 text-center">
          <h2 className="font-heading mb-2 text-2xl font-semibold tracking-tight">Tech Stack</h2>
          <p className="text-muted-foreground">
            Everything you need to build a production-ready SPA.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} size="sm">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>{feature.title}</CardTitle>
                  <CardAction>
                    <Badge variant="secondary">{feature.tags[0]}</Badge>
                  </CardAction>
                </div>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
