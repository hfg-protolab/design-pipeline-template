# Design Pipeline Template

Eine kleine Workshop-Seite (Vite + React + shadcn/ui), an der wir die Design-Pipeline
durchspielen:

- **A · Figma → Code:** Frame in Figma → Issue → Claude Code setzt um → Pull Request → Merge
- **B · Code → Figma → Code:** Claude Code baut → Seite nach Figma holen → in Figma ändern →
  Claude Code übernimmt die Änderung → Pull Request → Merge
- **C · Feedback → Code:** Feedback-Issue mit Beschreibung und Screenshot → Claude Code
  schlägt eine Lösung vor (auf Wunsch erst in Figma) → setzt um → Pull Request → Merge

## Vor dem Kurs einrichten (ca. 15 Min)

1. **Accounts:** GitHub und Figma (Education-Account reicht).
2. **Installieren:**
   - [Bun](https://bun.sh) (oder Node.js)
   - [GitHub CLI](https://cli.github.com), danach `gh auth login`
   - [Claude Code](https://claude.com/claude-code): `curl -fsSL https://claude.ai/install.sh | bash`
     (Zugang über den AI Hub: Coding-Tool → Einrichtung)
3. **Eigenes Repo:** oben auf GitHub **Use this template → Create a new repository**,
   dann klonen:
   ```bash
   gh repo clone <dein-name>/design-pipeline-template
   cd design-pipeline-template
   bun install
   ```
4. **Figma mit Claude Code verbinden:**
   ```bash
   claude plugin install figma@claude-plugins-official
   ```
   Claude Code starten (`claude`), `/mcp` eingeben, **figma** wählen, im Browser anmelden.
5. **Test:** `bun dev` → http://localhost:5173 zeigt die Workshop-Seite.

## A · Figma → Code

1. In Figma einen Frame gestalten (Komponenten aus der Kurs-Library benutzen).
2. Auf GitHub **Issues → New issue → Design-Änderung**, Figma-Link einfügen.
3. In Claude Code:
   > Setz Issue #1 um.
4. Claude liest Issue und Frame, baut es mit den vorhandenen Komponenten und vergleicht
   das Ergebnis mit dem Figma-Screenshot.
5. > Mach einen Pull Request.

   Auf GitHub ansehen, **Merge** — das Issue schließt sich automatisch.

## B · Code → Figma → Code

1. In Claude Code etwas bauen lassen, z. B.:
   > Füg unter den Workshops eine FAQ-Sektion hinzu.
2. > Bring die Seite von localhost nach Figma.
3. In Figma die neuen Frames überarbeiten.
4. > Übernimm meine Änderungen aus Figma: <Link zum Frame>
5. Pull Request, Merge.

## C · Feedback → Code

1. Auf GitHub **Issues → New issue → Feedback**: beschreiben, was stört oder fehlt, und
   einen Screenshot hineinziehen (gern mit Markierung).
2. In Claude Code:
   > Schau dir Issue #3 an.
3. Claude liest Text und Screenshot, fasst zusammen und schlägt eine Lösung vor.
   Passt sie nicht: nachschärfen. Lieber erst sehen?
   > Zeig mir den Vorschlag in Figma.

   Dann in Figma anpassen und wie bei **B** zurückholen.
4. > Setz es um und mach einen Pull Request.
5. Merge — das Issue schließt sich automatisch.

## Gut zu wissen

- Claude benutzt nur Komponenten aus `src/components/ui/` und die Farben aus
  `src/index.css` — die Regeln stehen in `CLAUDE.md`.
- Neue Komponente nötig? `bunx shadcn@latest add <name>`
