# wkstack

Scaffold modern React SPAs with best-in-class tooling — TanStack ecosystem, Tailwind CSS v4, shadcn/ui, React Compiler, and Oxlint.

```bash
pnpm create wkstack my-app
cd my-app
pnpm install
pnpm dev
```

## CLI

```
pnpm create wkstack [project-name] [options]
```

| Option                         | Description          |
| ------------------------------ | -------------------- |
| `-t, --template <name>`       | Template to use      |
| `-h, --help`                  | Show help            |
| `-v, --version`               | Show version number  |

Prompts are shown interactively when arguments are omitted.

## Available Templates

| Template      | Description                                     |
| ------------- | ----------------------------------------------- |
| `react-spa`   | React SPA with TanStack, Tailwind v4, shadcn/ui |

### react-spa

A production-ready React single-page application pre-configured with:

- **React 19** — Compiler, actions, server components
- **TypeScript 6** — Strict mode with bundler resolution
- **Vite 8** — Instant HMR, path aliases (`@/`)
- **Tailwind CSS v4** — CSS-first configuration, OKLCH tokens, dark mode
- **TanStack Router** — File-based routing, type-safe links, auto code-splitting
- **TanStack Query** — Server state with 5-min stale time, 1 retry
- **TanStack Form** — Type-safe forms with Zod validation
- **Zustand** — Client state with localStorage persistence
- **shadcn/ui** (base-nova) — Button, Card, Badge, Sheet, Input, Label, Separator
- **React Compiler** — Automatic memoization via Babel plugin
- **Oxlint + Oxfmt** — Rust-powered linting and formatting
- **Geist** — Variable font from Vercel
- **lucide-react** — Icon library

## License

MIT
