# Design Pipeline Template

Vite + React + TypeScript + Tailwind v4 + shadcn/ui. Start: `bun install && bun dev` (npm works too).

## Design ↔ Code rules

- Build UI only from the components in `src/components/ui/`. Missing one? Add it with
  `bunx shadcn@latest add <name>` instead of writing a new one.
- Colors, radius and fonts come from the CSS variables in `src/index.css`
  (`bg-background`, `text-muted-foreground`, `border-border`, …). Never hard-code hex or
  pixel colors from a Figma frame — map them to the nearest token.
- When implementing a Figma frame: read it with the Figma MCP (`get_design_context`,
  `get_screenshot`), translate the generated React + Tailwind to the components above,
  then compare a screenshot of the running page with the Figma screenshot and fix the
  differences.
- When sending UI to Figma: run `bun dev` and use `generate_figma_design` on
  `http://localhost:5173`.

## Issue → PR

- Read the issue with `gh issue view <n>`; the Figma link is in its body.
- Work on a branch `design/<n>-<short-name>`, open the PR with `Closes #<n>` in the body.
- "Released" means merged into `main`.
