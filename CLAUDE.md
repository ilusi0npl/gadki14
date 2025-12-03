# CLAUDE.md

## Project Overview

DO NOT COMMIT ANYTHING WITHOUT EXPLICIT ASKED!

**Cel**: Pixel-perfect implementacja stron React z designów Figma.

**Filozofia**:
- Design (Figma) jest źródłem prawdy
- Każda implementacja musi przejść weryfikację wizualną
- Iteracyjny proces: generuj → weryfikuj → napraw → powtórz

---

## Tech Stack

- **React 18+** - UI framework
- **React Router v7** - Routing
- **Vite** - Build tool and dev server
- **Tailwind CSS 4.x** - Utility-first styling

---

## Verification Tools

Mamy 2 narzędzia do weryfikacji wizualnej:

### 1. Sections Verification (Figma → Crop → Compare)

**Najlepsze do porównywania sekcji strony z Figma.**

```bash
# Wszystkie sekcje
make verify-sections SECTIONS_CONFIG=scripts_gadki/sections-config.json

# Pojedyncza sekcja
make verify-section SECTION=hero SECTIONS_CONFIG=scripts_gadki/sections-config.json
```

**Co robi:**
1. Pobiera pełny screenshot strony z Figma API
2. Tnie go na sekcje według bounds w configu
3. Robi screenshot każdej sekcji z implementacji (Playwright)
4. Porównuje każdą parę (pixelmatch)
5. Generuje HTML report

**Config:** `scripts_gadki/sections-config.json`
```json
{
  "figmaFileKey": "BDWqfvcMQw8RpFhMMMVRa3",
  "figmaNodeId": "21-2",
  "pageWidth": 1728,
  "sections": {
    "hero": { "y": 0, "height": 865, "selector": "[data-section='hero']" },
    "about": { "y": 865, "height": 700, "selector": "[data-section='about']" }
  }
}
```

**Output:** `tmp/figma-sections/[timestamp]/report.html`

**Skrypt:** `scripts/verify-figma-sections.cjs`

### 2. UIMatch (Single Node Comparison)

**Do porównywania pojedynczych elementów (awatary, logo, komponenty).**

```bash
# Lista dostępnych nodes
make verify-list CONFIG=scripts_gadki/uimatch-config.json

# Weryfikacja node'a
make verify NODE=title CONFIG=scripts_gadki/uimatch-config.json
make verify NODE=avatar-mama CONFIG=scripts_gadki/uimatch-config.json
```

**Config:** `scripts_gadki/uimatch-config.json`
```json
{
  "figmaFileKey": "BDWqfvcMQw8RpFhMMMVRa3",
  "defaultProfile": "component/dev",
  "defaultUrl": "http://localhost:5173",
  "outputDir": "tmp/uimatch-reports",
  "nodes": {
    "title": { "id": "50-64", "name": "GADKI title", "selector": "[data-node-id='50:64']" },
    "avatar-mama": { "id": "2007-220", "name": "Mama avatar", "selector": "[data-node-id='2007:220']", "profile": "component/strict" }
  },
  "aliases": { "mama": "avatar-mama" }
}
```

**UIMatch Profiles:**
| Profile | pixelDiffRatio | Use Case |
|---------|---------------|----------|
| `component/strict` | ≤1% | Komponenty bez tekstu (obrazy, ikony) |
| `component/dev` | ≤8% | **Domyślny** - full-page z tekstem |

**Output:** `tmp/uimatch-reports/`

**Skrypt:** `scripts/verify-uimatch.cjs`

### Kiedy użyć którego narzędzia?

| Scenariusz | Narzędzie |
|------------|-----------|
| Porównanie sekcji (hero, footer, about) | `verify-sections` |
| Porównanie pojedynczego elementu | `verify` (UIMatch) |
| Porównanie awatara/logo | `verify` z `component/strict` |

---

## Development Commands

```bash
npm install      # Install dependencies
npm run dev      # Dev server (http://localhost:5173/)
npm run build    # Production build
npm run lint     # Check code quality
```

### Makefile
```bash
make help                      # Show all commands
make verify-list CONFIG=...    # List UIMatch nodes
make verify NODE=... CONFIG=.. # UIMatch verification
make verify-sections ...       # Sections verification
make verify-section SECTION=.. # Single section
make screenshot                # Take screenshot
make install-uimatch           # Install dependencies
make clean                     # Clean tmp files
```

---

## Figma Integration

### Requirements
- `FIGMA_ACCESS_TOKEN` in `.env` file
- Figma desktop app running (for MCP tools)

### MCP Tools
- `mcp__figma__get_design_context` - Get design context and code
- `mcp__figma__get_screenshot` - Get design screenshots
- `mcp__figma__get_metadata` - Get structure overview

---

## File Structure

```
scripts/                          # Generic verification scripts
├── verify-figma-sections.cjs    # Sections verification
└── verify-uimatch.cjs           # UIMatch single node

scripts_gadki/                    # Project-specific configs
├── sections-config.json         # Sections bounds for verify-sections
└── uimatch-config.json          # UIMatch nodes config

src/                              # React application
├── components/                   # Shared components
├── pages/                        # Page components
└── App.jsx                       # Routes

tmp/                              # Temporary files (gitignored)
├── figma-sections/              # verify-sections output
└── uimatch-reports/             # verify output

public/assets/                    # Static assets
```

---

## Best Practices

### Komponenty muszą mieć `data-section`
```jsx
<div data-section="hero" className="...">
  <HeroSection />
</div>
```

### Workflow weryfikacji
1. Uruchom `verify-sections` dla wszystkich sekcji
2. Sprawdź HTML report dla każdej sekcji
3. Napraw różnice i powtórz
4. Dla elementów (logo, awatary) użyj `verify` z UIMatch
