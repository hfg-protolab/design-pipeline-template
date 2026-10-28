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

- Read the issue with `gh issue view <n> --comments`; a Figma link, if any, is in its body.
- Screenshots in the issue (`https://github.com/user-attachments/assets/…`): download every
  one and look at it before deciding anything —
  `curl -sSL -H "Authorization: Bearer $(gh auth token)" -o shot-1.png "<url>"` into a temp
  folder, then read the file. The text is often only in the image.
- A feedback issue without a Figma link: restate what is reported, propose a solution in
  two or three sentences and ask before building. Offer to show the proposal in Figma first
  (build it, then `generate_figma_design`) so it can be adjusted there.
- Work on a branch `design/<n>-<short-name>`, open the PR with `Closes #<n>` in the body.
- "Released" means merged into `main`.
