# CLAUDE.md

## Project Overview

**Cel główny**: Generyczny, powtarzalny proces tworzenia pixel-perfect stron React z designów Figma.

**Core**: `.claude/commands/` - komendy definiujące cały workflow:
- `/1-analyze-project` - analiza struktury projektu Figma
- `/2-analyze-page` - analiza konkretnej strony, tworzenie planu
- `/3-generate-code` - generowanie kodu z iteracyjną weryfikacją
- `/4-refine-code` - optymalizacja i polish

**Filozofia**:
- Design jest źródłem prawdy
- Każda implementacja musi przejść weryfikację wizualną
- Iteracyjny proces: generuj → weryfikuj → napraw → powtórz

---

## Tech Stack

- **React 18+** - UI framework
- **React Router v7** - Routing
- **Vite** - Build tool and dev server
- **Tailwind CSS 4.x** - Utility-first styling

---

## Figma Node Mapping (Source of Truth)

**Filozofia**: Figma jest źródłem prawdy. Wszystkie node IDs muszą pochodzić z Figma URL.

### Automatyczne mapowanie

Tool automatycznie mapuje elementy Figma → HTML i generuje `docs/uimatch-config.json`:

```bash
make map-figma-nodes \
  FIGMA_URL='https://www.figma.com/design/BDWqfvcMQw8RpFhMMMVRa3/Gadki_www_OST?node-id=21-2' \
  URL=http://localhost:5173
```

**Output:**
- `docs/uimatch-config.json` - Config dla UIMatch verification
- `tmp/figma-mapping-report.json` - Detailed report z confidence scores

**Co tool robi:**
1. 📥 Fetchuje strukturę Figma (6572 nodes) przez REST API
2. 🔍 Skanuje HTML (sekcje z `data-section`, obrazy `<img>`)
3. 📂 Skanuje assety w `public/assets/`
4. 🔗 Matchuje automatycznie (name similarity + dimensions)
5. 📝 Generuje config + report

**Manual overrides** (dla problematycznych elementów):
```javascript
// W scripts/map-figma-nodes.cjs
manualOverrides: {
  elements: {
    'decorative-vector-2.png': '2020:792',  // Generic "Group" name w Figma
    'dog-illustration.png': '2020:773'
  }
}
```

**Przykładowy report:**
```json
{
  "stats": {
    "matchedSections": 8,
    "matchedImages": 41,
    "missingElements": 17  // W assets ale nie w HTML
  },
  "missingElements": [
    {
      "filename": "decorative-vector-2.png",
      "figmaNode": "2020:792",
      "confidence": 1.0,
      "method": "manual-override"
    }
  ]
}
```

---

## Quick Reference: Verification Process

**ZAWSZE wykonuj w tej kolejności:**

```bash
# 1. SECTION SCAN - screenshoty + wykrywanie bugów strukturalnych
make verify-sections URL=http://localhost:5173/page-name
# Output: tmp/section-scans/[timestamp]/
# Sprawdza: ZERO_HEIGHT, FLIPPED_IMAGE, BROKEN_IMAGE, DUPLICATE_IMAGE
# → Czytaj KAŻDY screenshot sekcji i napraw problemy
# → Powtarzaj aż: ✅ ALL SECTIONS PASSED

# 2. ELEMENT CHECK - dodatkowe sprawdzenia strukturalne
make verify-elements URL=http://localhost:5173/page-name
# Sprawdza: duplikaty, overlapping, broken assets, out-of-bounds
# NOWE: image clipping (obcięte obrazy), object-cover misuse, off-screen elements

# 3. ASSET CHECK - transformacje CSS, odwrócone obrazy
make verify-assets URL=http://localhost:5173/page-name
# Sprawdza: scaleX(-1), scaleY(-1), aspect ratio distortion
# Output: tmp/asset-reports/ (screenshoty logo)

# 4. ASSET MANIFEST - weryfikacja prawidłowych assetów
make verify-asset-manifest URL=http://localhost:5173/page-name
# Output: tmp/asset-manifest-reports/
# Sprawdza: wrong assets, missing assets, extra assets, wrong positions
# Wykrywa: użycie złego obrazu (np. piesek zamiast Gadek)

# 5. SEMANTIC VALIDATION - walidacja semantyczna
make verify-semantic URL=http://localhost:5173/page-name
# Sprawdza:
#  - verify-semantic-duplicates: podwójne logo/branding
#  - verify-section-dimensions: rozmiary sekcji, kart, gaps
#  - verify-design-tokens: kolory vs design system
# Output: tmp/semantic-validation/

# 6. UIMATCH - finalna weryfikacja wizualna vs Figma
make verify NODE_ID=XX-YY
# Output: tmp/uimatch-reports/
# Czytaj: diff.png, report.json
# Target: qualityGate.pass=true, pixelDiffRatio ≤8%

# 7. DIMENSION VALIDATION - wykrywanie złych NODE_ID w UIMatch (NOWE)
make verify-uimatch-dimensions
# Output: tmp/dimension-validation/dimensions-[timestamp].json
# Sprawdza:
#  - Dimension mismatch (>5% tolerance)
#  - Excessive size difference (>10% = likely wrong node)
#  - Aspect ratio mismatch
# Wykrywa: porównywanie z złym węzłem Figma (np. logo zamiast sekcji)

# 8. CONSISTENCY CHECK - spójność między stronami
make verify-consistency
# Sprawdza: Header/Footer same size, hamburger, logos

# 9. VISUAL REGRESSION - porównanie sekcji z Figma baselines
make verify-visual-regression URL=http://localhost:5173/page-name
# Output: tmp/visual-regression/[timestamp]/
# Porównuje: każda sekcja vs golden baseline z Figma
# Threshold: ≤10% pixel diff per section
# Generuj baselines: make generate-baselines

# 10. COMPREHENSIVE UIMATCH - hierarchiczna weryfikacja całej strony (NOWE)
make verify-uimatch-full URL=http://localhost:5173
# Output: tmp/uimatch-full/[timestamp]/
# Fazy: Discovery (Figma API) → Override (HTML+Config) → Execution → Reporting
# Weryfikuje: Page → Sections → Elements (automatycznie)
# Generuje: JSON report + HTML dashboard
# Config: docs/uimatch-config.json (override chain: Config > HTML > API)
```

**Iteracja:** Jeśli cokolwiek FAIL → napraw → wróć do kroku 1.

### Typowe problemy i rozwiązania

| Problem | Przyczyna | Rozwiązanie |
|---------|-----------|-------------|
| `ZERO_HEIGHT` | Absolute children, brak height | Dodaj `h-[XXXpx]` do sekcji |
| `FLIPPED_IMAGE` | CSS transform z -1 | Usuń transform lub napraw asset |
| `BROKEN_IMAGE` | Zła ścieżka lub format | Sprawdź src, rozszerzenie pliku |
| `DUPLICATE_IMAGE` | Komponent renderowany 2x | Sprawdź importy i pętle |
| `IMAGE_CLIPPING` | Obraz większy niż container z overflow-hidden | Zwiększ container lub zmniejsz obraz |
| `OBJECT_COVER_MISUSE` | object-cover obcina character/mascot | Użyj object-contain lub usuń object-cover |
| `OFFSCREEN_ELEMENT` | Element poza viewport (left: -280px) | Popraw pozycję lub dodaj aria-hidden |
| `BRANDING_DUPLICATE` | Podwójne logo w sekcji | Usuń duplikat, zostaw jeden |
| `DIMENSION_MISMATCH` | Sekcja/karta zły rozmiar | Popraw wymiary zgodnie z Figma |
| `COLOR_MISMATCH` | Kolor nie pasuje do design tokens | Użyj prawidłowego tokenu z design-tokens.json |
| Logo odwrócone | scaleY(-1) w CSS | Sprawdź `tmp/asset-reports/*.png` |
| Header/Footer różne | Inne props na stronach | Użyj tych samych props |
| Tekst ucięty | Container za wąski | Zwiększ width, sprawdź wrapping |
| `WRONG_ASSET` | Zły obraz użyty | Zamień na prawidłowy asset z manifestu |
| `MISSING_ASSET` | Brak obrazu w sekcji | Dodaj asset zgodnie z manifestem |
| `WRONG_FIGMA_NODE` | UIMatch porównuje z złym węzłem | Sprawdź NODE_ID w Makefile, użyj pełnej sekcji |
| `ASPECT_RATIO_MISMATCH` | Różne proporcje Figma vs Impl | Sprawdź czy NODE_ID wskazuje właściwą sekcję |
| Visual regression >10% | Sekcja różni się od Figma | Sprawdź diff.png, napraw różnice |

---

## Figma-to-Code Workflow (Strict Mode)

### Krok 1: Analiza Projektu
```bash
/1-analyze-project <Figma-URL>
```
- Analizuje całą strukturę projektu Figma
- Wykrywa wszystkie strony i shared components
- Tworzy `[project]/docs/implementation-status.md`
- Określa kolejność implementacji

### Krok 2: Analiza Strony
```bash
/2-analyze-page <Page-Name> [Figma-URL]
```
- Analizuje konkretną stronę/sekcję
- Identyfikuje komponenty i ich hierarchię
- Wykrywa design tokens (kolory, typografia, spacing)
- Tworzy `[project]/docs/plans/YYYY-MM-DD-PageName-implementation-plan.md`

### Krok 3: Generowanie Kodu (Strict Mode)
```bash
/3-generate-code <Page-Name>
```

**Proces z obowiązkowymi bramkami weryfikacyjnymi:**

```
PHASE 1: Preparation
    ↓
PHASE 2: Asset Extraction → GATE 1 (Asset Verification)
    ↓
PHASE 3: Code Generation → GATE 2 (Position Verification)
    ↓
PHASE 4: Visual Verification → GATE 3 (UIMatch Quality)
    ↓
DONE ✓
```

**Każda bramka MUSI przejść przed kontynuacją.**

### Krok 4: Refinement
```bash
/4-refine-code <Page-Name>
```
- Sprawdza jakość kodu (PropTypes, JSDoc, accessibility)
- Optymalizuje komponenty
- Ekstrahuje design tokens

---

## Mandatory Verification Gates

### Gate 1: Asset Verification
Po pobraniu assetów, MUSI przejść:
- [ ] Wszystkie pliki pobrane (size > 0 bytes)
- [ ] Każdy plik ma UNIKALNY rozmiar (brak duplikatów)
- [ ] Wszystkie Node IDs i współrzędne (X, Y) udokumentowane

### Gate 2: Position Verification
Po wygenerowaniu kodu, MUSI przejść:
- [ ] Wszystkie pozycje używają DOKŁADNYCH współrzędnych z Figma
- [ ] Format: `left-[Xpx] top-[Ypx]` (z metadanych węzła)
- [ ] Wszystkie sekcje mają atrybut `data-section`
- [ ] Kontenery z absolute children mają explicite wymiary

### Per-Section Verification (Phase 5)
**Przed UIMatch**, skanuj każdą sekcję osobno:
```bash
make verify-sections URL=http://localhost:5173/page-name
```

**Output:** `tmp/section-scans/[timestamp]/`
- Screenshot każdej sekcji (`[section-name].png`)
- Raport JSON z wykrytymi problemami

**MUSI przejść:**
- [ ] Wszystkie sekcje mają screenshoty
- [ ] Brak ZERO_HEIGHT sections
- [ ] Brak FLIPPED_IMAGE issues
- [ ] Wizualna weryfikacja każdej sekcji

### Gate 3: UIMatch Quality Gate
Po weryfikacji wizualnej, MUSI przejść:
- [ ] `qualityGate.pass` = true
- [ ] `pixelDiffRatio` ≤ 8%
- [ ] Brak STRUCTURAL issues w diff.png (tylko FONT akceptowalne)

### Kategoryzacja różnic w diff.png

| Typ | Przykłady | Akcja |
|-----|-----------|-------|
| STRUCTURAL | Zła pozycja, brakujący element, zły rozmiar | MUSI NAPRAWIĆ |
| FONT | Anti-aliasing tekstu, różnica wagi (~5%) | AKCEPTOWALNE |

---

## Asset Manifest

Podczas generowania kodu, tworzony jest Asset Manifest z dokładnymi współrzędnymi:

```markdown
## Asset Manifest - [PageName]

| Asset | Node ID | X | Y | W | H | File | Size |
|-------|---------|---|---|---|---|------|------|
| GADKI logo | 32:569 | 68 | 143 | 175 | 76 | gadki-logo.svg | 17974 |
| FDDS logo | 32:614 | 110 | 64 | 164 | 71 | fdds-logo.svg | 17966 |

### Verification
- [x] All downloaded
- [x] All sizes unique
- [x] All positions documented
```

**Zasada**: Współrzędne z Asset Manifest są używane DOKŁADNIE w kodzie:
```jsx
// Asset Manifest: X=68, Y=143, W=175, H=76
<div className="absolute left-[68px] top-[143px] w-[175px] h-[76px]">
```

---

## Element Verification System

**Uruchamiaj PRZED UIMatch** - wykrywa bugi strukturalne, które UIMatch % nie wykryje.

### Uruchomienie
```bash
make verify-elements URL=http://localhost:5173/page-name
```

### Sprawdzane problemy

| Check | Wykrywa | Przykład |
|-------|---------|----------|
| **Duplicate Images** | Ten sam obraz w tej samej sekcji | Double logo w header |
| **Overlapping Elements** | Elementy nachodzące na siebie | Tekst na awatar |
| **Broken Assets** | Obrazy z naturalSize 0x0 | PNG z rozszerzeniem .svg |
| **Out-of-Bounds** | Elementy poza viewport | Element z x=-500 |
| **Image Clipping** (NOWE) | Obraz większy niż container z overflow-hidden | Gadek 258x268 w container 180x180 |
| **Object-Cover Misuse** (NOWE) | object-cover obcina character/mascot | Gadek z object-cover: cover |
| **Offscreen Elements** (NOWE) | Non-decorative element off-screen | Gadek CTA z left: -280px |

### Jak naprawić

| Problem | Przyczyna | Rozwiązanie |
|---------|-----------|-------------|
| Duplikaty | Błędna struktura komponentu | Sprawdź import, usuń duplikat |
| Overlapping | Złe absolute positioning | Użyj flow layout lub popraw top/left |
| Broken asset | Zła ścieżka lub rozszerzenie | Sprawdź plik, zmień rozszerzenie |
| Out-of-bounds | Błędne współrzędne | Zwykle celowe (dekoracja) - warning OK |
| Image clipping | Container za mały lub obraz za duży | Zwiększ container lub zmniejsz/obróć obraz |
| Object-cover misuse | object-cover crops character | Użyj object-contain lub usuń object-fit |
| Offscreen element | Negative left/top position | Popraw pozycję lub dodaj aria-hidden="true" |

### Skrypt
Lokalizacja: `scripts/verify-elements.cjs`

```bash
# Podstawowe użycie
node scripts/verify-elements.cjs http://localhost:5173/page

# Tylko jedna sekcja
node scripts/verify-elements.cjs http://localhost:5173/page --section=header
```

---

## Asset Manifest Verification

**Wykrywa użycie ZŁYCH assetów** - nawet jeśli nazwa pliku jest poprawna, porównuje pozycje i oczekiwane assety z manifestu.

### Uruchomienie
```bash
make verify-asset-manifest URL=http://localhost:5173/page-name
```

### Sprawdzane problemy

| Check | Wykrywa | Przykład |
|-------|---------|----------|
| **WRONG_ASSET** | Zły obraz w danej pozycji | piesek zamiast Gadek |
| **MISSING_ASSET** | Brakujący obraz | Logo nie dodane |
| **EXTRA_ASSET** | Nieoczekiwany obraz | Dodatkowy element |
| **POSITION_MISMATCH** | Zła pozycja assetu | Logo przesunięte o 50px |

### Asset Manifest Format
Plik: `docs/asset-manifest.json`

```json
{
  "page": "Homepage",
  "sections": {
    "newsletter": {
      "description": "Newsletter section with Gadek mascot",
      "assets": [
        { "name": "gadek-mascot.png", "nodeId": "2007:1601", "x": 901, "y": 0, "w": 179, "h": 186, "role": "mascot", "critical": true }
      ],
      "notes": "Mascot should be Gadek (white dog with red scarf)"
    }
  }
}
```

### Skrypt
Lokalizacja: `scripts/verify-asset-manifest.cjs`

```bash
node scripts/verify-asset-manifest.cjs http://localhost:5173 --manifest=docs/asset-manifest.json
```

---

## Visual Regression System

**Porównuje sekcje z golden baselines z Figma** - pixel-level comparison używając pixelmatch.

### Workflow

```bash
# 1. Generuj baselines z Figma (jednorazowo lub po zmianach w designie)
make generate-baselines

# 2. Uruchom test regresji
make verify-visual-regression URL=http://localhost:5173/page-name
```

### Output
```
tmp/visual-regression/[timestamp]/
├── [section-name]/
│   ├── impl.png      # Screenshot implementacji
│   ├── baseline.png  # Golden baseline z Figma
│   └── diff.png      # Visual diff (różnice na czerwono)
└── report.json       # Metryki i status
```

### Thresholds
| Threshold | Wartość | Opis |
|-----------|---------|------|
| Pixel diff | ≤10% | Akceptowalna różnica per sekcja |
| Color threshold | 0.1 | Tolerancja kolorów w pixelmatch |

### Skrypt
Lokalizacja: `scripts/verify-visual-regression.cjs`

```bash
# Generuj baselines
node scripts/verify-visual-regression.cjs --generate-baselines

# Uruchom test
node scripts/verify-visual-regression.cjs http://localhost:5173
```

---

## Per-Section Figma Comparison

**Porównuje każdą sekcję z odpowiednim węzłem Figma** - fetchuje screenshot z Figma API.

### Uruchomienie
```bash
make verify-sections-figma URL=http://localhost:5173/page-name
```

### Section Map
Mapowanie sekcji na węzły Figma w `scripts/verify-sections-figma.cjs`:

```javascript
const DEFAULT_SECTION_MAP = {
  'hero': { nodeId: '50-64', name: 'Hero Title' },
  'newsletter': { nodeId: '2007-1614', name: 'Newsletter' },
  'footer': { nodeId: '2007-1189', name: 'Footer' },
  // ...
};
```

### Output
```
tmp/section-comparison/[timestamp]/
├── [section-name]/
│   ├── impl.png    # Screenshot implementacji
│   ├── figma.png   # Screenshot z Figma API
│   └── report.json # Porównanie
└── summary.json    # Podsumowanie wszystkich sekcji
```

### Skrypt
Lokalizacja: `scripts/verify-sections-figma.cjs`

```bash
# Z domyślną mapą sekcji
node scripts/verify-sections-figma.cjs http://localhost:5173

# Z własną mapą
node scripts/verify-sections-figma.cjs http://localhost:5173 --section-map=custom-map.json
```

---

## Semantic Validation System

**Wykrywa problemy semantyczne** - rozumie znaczenie elementów, nie tylko piksele.

### Komponenty

System składa się z 3 uzupełniających się skryptów:

1. **verify-semantic-duplicates.cjs** - Wykrywa duplikaty brandingowe
2. **verify-section-dimensions.cjs** - Waliduje wymiary sekcji i elementów
3. **verify-design-tokens.cjs** - Waliduje kolory względem design systemu

### Uruchomienie

```bash
# Wszystkie sprawdzenia semantyczne
make verify-semantic URL=http://localhost:5173/page-name

# Indywidualnie
make verify-semantic-duplicates URL=http://localhost:5173/page-name
make verify-section-dimensions URL=http://localhost:5173/page-name
make verify-design-tokens URL=http://localhost:5173/page-name
```

### 1. Semantic Duplicates

**Wykrywa**: Podwójne logo, branding elements, nie tylko duplikaty plików.

**Logika**:
- Grupuje obrazy według znaczenia (GADKI logo, FDDS logo)
- Ignoruje intentional patterns (separator, wave, decoration)
- Sprawdza perceptual similarity dla pewności

**Output**: `tmp/semantic-validation/duplicates-[timestamp].json`

**Przykładowe wykrycia**:
- Duplicate GADKI logo w hero section (2 różne SVG, oba widoczne)
- Podwójny wordmark w footer

**Skrypt**: `scripts/verify-semantic-duplicates.cjs`

### 2. Section Dimensions

**Wykrywa**: Sekcje/elementy o złych rozmiarach względem Figma.

**Sprawdza**:
- Szerokość/wysokość sekcji
- Font size nagłówków
- Wymiary kart (width, height, gap)

**Manifest**: `docs/section-dimensions.json`

```json
{
  "homepage": {
    "materials": {
      "width": 1728,
      "heading": { "fontSize": 200, "tolerance": 5 },
      "cards": { "width": 380, "height": 480, "gap": 20, "tolerance": 5 },
      "tolerances": { "width": 5 }
    }
  }
}
```

**Output**: Report z różnicami vs oczekiwane wymiary

**Przykładowe wykrycia**:
- Materials section zła szerokość (1800px zamiast 1728px)
- Karty 400x500 zamiast 380x480
- Gap między kartami 30px zamiast 20px

**Skrypt**: `scripts/verify-section-dimensions.cjs`

### 3. Design Tokens

**Wykrywa**: Kolory nie pasujące do design systemu.

**Sprawdza**:
- Background colors sekcji
- Text colors (TODO)
- Font families i sizes (TODO)

**Manifest**: `docs/design-tokens.json`

```json
{
  "colors": {
    "primary-red": "#E83F4B",
    "beige-bg": "#EFEEE8",
    "footer-bg": "#F6F5F1"
  },
  "validation": {
    "homepage": {
      "footer": {
        "selector": "footer[data-section='footer']",
        "backgroundColor": "footer-bg"
      }
    }
  }
}
```

**Tolerancja**: 5 RGB units (subtelne różnice renderingu OK)

**Output**: Report z color mismatches

**Przykładowe wykrycia**:
- Footer background #EFEEE8 zamiast #F6F5F1 (beige-bg vs footer-bg)
- Hero background nie primary-red

**Skrypt**: `scripts/verify-design-tokens.cjs`

### Dlaczego Semantic Validation?

**Problemy NIE wykrywane przez pixel comparison**:
- Duplicate logo (oba prawidłowe piksele, ale za dużo ich)
- Zła skala sekcji (proporcje OK, ale rozmiar absolutny zły)
- Zły kolor (nieznacznie inny odcień, pixel diff <1%)

**Semantic validation rozumie ZNACZENIE**:
- To jest logo → powinno być jedno per sekcja
- To jest character → nie powinien być obcięty object-cover
- To jest footer → powinien mieć kolor footer-bg, nie beige-bg

---

## Visual Verification System (UIMatch)

### Instalacja
```bash
npm install -D @uimatch/cli playwright
npx playwright install chromium
```

### UIMatch Profiles
| Profile | pixelDiffRatio | colorΔE | Use Case |
|---------|---------------|---------|----------|
| `component/strict` | ≤1% | ≤3.0 | Komponenty bez tekstu (obrazy, ikony) |
| `component/dev` | ≤8% | ≤5.0 | **Domyślny** - full-page z tekstem |
| `lenient` | Higher tolerance | Higher | Prototypy, rough drafts |

### Strategia Weryfikacji

**Ważne ograniczenie:** Font rendering między Figma a przeglądarką powoduje ~5% różnic, których nie da się uniknąć.

```
Full-page z tekstem → component/dev (≤8%)
Sekcje bez tekstu   → component/strict (≤1%)
```

**Komendy Makefile:**
```bash
make verify-sections URL=...   # Scan ALL sections (screenshots + issues)
make verify                    # UIMatch (default)
make uimatch-strict           # UIMatch strict profile
make verify-section SECTION=hero  # Single section UIMatch
```

### Per-Section Verification

Komponenty muszą mieć atrybut `data-section`:
```jsx
<div data-section="hero" className="...">
  <HeroSection />
</div>
```

Weryfikacja sekcji:
```bash
make verify-section SECTION=hero NODE_ID=50-64
```

### Uruchomienie
```bash
# Ustaw token Figma
export FIGMA_ACCESS_TOKEN=$(grep FIGMA_ACCESS_TOKEN .env | cut -d= -f2)

# Uruchom UIMatch
npx -p @uimatch/cli uimatch compare \
  figma=FILE_KEY:NODE_ID \
  story=http://localhost:5173 \
  selector="body" \
  outDir=./[project]/tmp/uimatch-reports \
  profile=component/dev \
  text=true
```

### Output UIMatch
- `report.json` - Metryki i quality gate status
- `diff.png` - Visual diff z highlighted differences
- `metrics.dfs` - Design Fidelity Score (0-100)
- `qualityGate.pass` - Boolean pass/fail

### Quality Gate Check
```javascript
const report = require('./[project]/tmp/uimatch-reports/report.json');
if (!report.qualityGate?.pass) {
  console.error(`Quality gate failed (DFS=${report.metrics?.dfs})`);
}
```

---

## Comprehensive UIMatch Verification

**Single-command hierarchical verification** - automatycznie weryfikuje całą stronę: Page → Sections → Elements.

### Uruchomienie

```bash
# Podstawowe użycie
make verify-uimatch-full URL=http://localhost:5173

# Z własną konfiguracją
make verify-uimatch-full URL=http://localhost:5173 CONFIG=docs/custom-config.json

# Bezpośrednio przez skrypt
node scripts/verify-uimatch-full.cjs http://localhost:5173 --config=docs/uimatch-config.json
```

### Jak działa: 4 fazy

System działa w 4 fazach z automatycznym wykrywaniem i nadpisywaniem:

```
PHASE 1: Discovery (Figma API)
    ↓ Fetchuje strukturę Figma, auto-matchuje HTML → Figma nodes

PHASE 2: Override (HTML + Config)
    ↓ Nadpisuje: Config > HTML data-node-id > Figma API

PHASE 3: Execution (UIMatch)
    ↓ Uruchamia UIMatch hierarchicznie: Page → Sections → Elements

PHASE 4: Reporting
    ↓ Generuje JSON (automation) + HTML (interactive dashboard)
```

#### Phase 1: Discovery (Figma API Auto-Matching)

Automatycznie fetchuje strukturę Figma i dopasowuje elementy HTML:

**Auto-matching logic:**
- Sekcje: `[data-section]` → szuka węzłów Figma po nazwie
- Obrazy: `<img>` → dopasowuje po nazwie pliku (ignoruje decorative/wave)
- Matching priority: exact match → word boundary → substring

**Output:**
```
📋 Built node map: 1523 nodes
🔍 Auto-matching 15 elements...
  ✅ hero → Hero Title (50:64)
  ✅ footer → Footer (2007:1189)
  ⚠️  custom-element → NO MATCH
```

#### Phase 2: Override System (Priority Chain)

System nadpisywania w kolejności: **Config > HTML > Figma API**

**1. Figma API (najniższy priorytet)** - auto-match z fazy 1

**2. HTML data-node-id** - nadpisuje auto-match:
```jsx
<div data-section="hero" data-node-id="50-64">
  <HeroSection />
</div>
```

**3. Config file (najwyższy priorytet)** - nadpisuje wszystko:
```json
{
  "sections": {
    "hero": {
      "nodeId": "50-64",
      "profile": "component/dev"
    }
  }
}
```

**Output:**
```
📝 Applying HTML data-node-id overrides...
  ✅ hero: 50-123 → 50-64 (HTML)

📝 Applying config overrides from docs/uimatch-config.json...
  ✅ page: 21-2 (config)
  ✅ materials: 43-120 (config, component/strict)
```

#### Phase 3: UIMatch Execution

Uruchamia UIMatch dla każdego elementu w hierarchii:

```
📄 Page-level:
  🔍 page (21-2, component/dev)

📦 Section-level:
  🔍 hero (50-64, component/dev)
  🔍 footer (2007-1189, component/dev)
  🔍 materials (43-120, component/strict)

🎨 Element-level:
  🔍 gadki-logo (23-4, component/strict)
  🔍 fdds-logo (32-614, component/strict)
```

Każdy element używa własnego profilu UIMatch (dev vs strict).

#### Phase 4: Reporting

Generuje dwa formaty raportów:

**JSON Report** (`tmp/uimatch-full/[timestamp]/report.json`):
```json
{
  "timestamp": "2025-11-30T12:34:56.789Z",
  "url": "http://localhost:5173",
  "summary": {
    "total": 10,
    "passed": 8,
    "failed": 2,
    "overallDFS": 87.3
  },
  "page": { "name": "page", "nodeId": "21-2", "dfs": 85.4, "passed": true },
  "sections": [...],
  "elements": [...]
}
```

**HTML Dashboard** (`tmp/uimatch-full/[timestamp]/report.html`):
- Interaktywna tabela z wszystkimi wynikami
- Visual diff gallery (klikalne screenshoty)
- Metrics: DFS, Pixel Diff, Status
- Source tracking (config/html/figma-api)

### Configuration File Format

Plik: `docs/uimatch-config.json`

```json
{
  "$schema": "https://json-schema.org/draft-07/schema#",

  "page": {
    "nodeId": "21-2",
    "profile": "component/dev",
    "selector": "body"
  },

  "sections": {
    "hero": {
      "nodeId": "50-64",
      "profile": "component/dev",
      "selector": "[data-section='hero']"
    },
    "materials": {
      "nodeId": "43-120",
      "profile": "component/strict",
      "selector": "[data-section='materials']"
    },
    "footer": {
      "nodeId": "2007-1189",
      "profile": "component/dev",
      "selector": "[data-section='footer']"
    }
  },

  "elements": {
    "gadki-logo": {
      "selector": "img[src*='gadki-logo.svg']",
      "nodeId": "23-4",
      "profile": "component/strict"
    },
    "fdds-logo": {
      "selector": "img[src*='fdds-logo.svg']",
      "nodeId": "32-614",
      "profile": "component/strict"
    }
  }
}
```

**Pola obowiązkowe:**
- `nodeId` - Node ID z Figma (format: `XX-YY`)
- `selector` - CSS selector dla UIMatch

**Pola opcjonalne:**
- `profile` - UIMatch profile (`component/dev` | `component/strict` | `lenient`)
  - Default: `component/dev`

### Priority Override Chain

System nadpisywania działa jak **cascade** - każdy poziom nadpisuje poprzedni:

```
1. Figma API Auto-Match (baseline)
   ↓
2. HTML data-node-id Attributes (override auto-match)
   ↓
3. Config File (override everything)
```

**Przykład:**
```javascript
// 1. Figma API auto-match
hero → "Hero Title" (50:123)  // znaleziono automatycznie

// 2. HTML override
<div data-section="hero" data-node-id="50-64">
hero → (50-64)  // HTML nadpisuje 50:123 → 50-64

// 3. Config override
{ "hero": { "nodeId": "50-99", "profile": "component/strict" } }
hero → (50-99, component/strict)  // Config nadpisuje 50-64 → 50-99
```

**Source tracking** - raport pokazuje skąd pochodzi każde mapowanie:
- `figma-api` - automatyczne dopasowanie
- `html-attribute` - z `data-node-id`
- `config` - z pliku konfiguracyjnego

### Output Structure

```
tmp/uimatch-full/[timestamp]/
├── report.json                 # Machine-readable summary
├── report.html                 # Interactive dashboard
├── page/
│   └── [uimatch-timestamp]/
│       ├── report.json
│       ├── diff.png
│       ├── figma.png
│       └── impl.png
├── hero/
│   └── [uimatch-timestamp]/
│       ├── report.json
│       ├── diff.png
│       ├── figma.png
│       └── impl.png
├── footer/
│   └── [uimatch-timestamp]/...
└── gadki-logo/
    └── [uimatch-timestamp]/...
```

**Struktura katalogów:**
- Główny folder: `tmp/uimatch-full/[timestamp]/` (timestamp całego uruchomienia)
- Subfoldery: `page/`, `[section-name]/`, `[element-name]/`
- UIMatch output: każdy subfolder zawiera katalog z UIMatch timestamp

### Kiedy używać

| Scenario | Command | Opis |
|----------|---------|------|
| **Quick single check** | `make verify NODE_ID=XX-YY` | Weryfikacja jednego elementu |
| **Per-section check** | `make verify-section SECTION=hero` | Weryfikacja jednej sekcji |
| **Full page verification** | `make verify-uimatch-full URL=...` | **Hierarchiczna weryfikacja całej strony** |
| **CI/CD automation** | `verify-uimatch-full` w pipeline | JSON output dla automatyzacji |

**Zalety verify-uimatch-full:**
- ✅ Automatyczne wykrywanie wszystkich sekcji/elementów
- ✅ Hierarchiczna organizacja (Page → Sections → Elements)
- ✅ Flexibilne overrides (Config > HTML > API)
- ✅ Per-element profiles (strict dla logo, dev dla sekcji)
- ✅ Comprehensive reporting (JSON + HTML)
- ✅ Single command dla całej strony

**Użyj verify-uimatch-full gdy:**
- Chcesz zweryfikować całą stronę jedną komendą
- Potrzebujesz hierarchicznego raportu (page/sections/elements)
- Masz różne profile dla różnych elementów (strict logo, dev sections)
- Automatyzujesz weryfikację w CI/CD (JSON output)

---

## Development Commands

```bash
npm install      # Install dependencies
npm run dev      # Dev server (http://localhost:5173/)
npm run build    # Production build
npm run lint     # Check code quality
```

### Makefile (Verification)
```bash
# Element Verification (run FIRST)
make verify-elements URL=http://localhost:5173/page

# UIMatch Visual Verification
make verify                    # UIMatch (default profile)
make verify-full URL=...       # Elements + UIMatch combined
make uimatch-strict            # Strict profile (≤1% diff)
make help                      # Show all commands
```

---

## Figma Integration

### MCP Tools
- `mcp__figma__get_design_context` - Get design context and code
- `mcp__figma__get_screenshot` - Get design screenshots
- `mcp__figma__get_metadata` - Get structure overview

### Requirements
- `FIGMA_ACCESS_TOKEN` in `.env` file
- Figma desktop app running (for MCP)

---

## Project Isolation

**WAŻNE**: Każdy projekt Figma ma własny katalog. Wszystkie pliki projektu muszą być w `[project]/`:

```
[project]/           # np. gadki/, landing/, dashboard/
├── src/            # Kod źródłowy
├── docs/           # Dokumentacja i plany
├── tmp/            # Pliki tymczasowe i raporty
└── public/         # Assets statyczne
```

Przy starcie nowego projektu:
1. Utwórz katalog projektu: `mkdir -p gadki/{src,docs,tmp,public}`
2. Wszystkie komendy workflow operują w kontekście tego katalogu

---

## File Structure

```
[project]/                              # Katalog projektu (np. gadki/)
├── src/
│   ├── components/                     # Shared components
│   │   └── layout/                     # Header, Footer, etc.
│   ├── pages/                          # Page components
│   │   └── [PageName]/
│   │       ├── index.jsx               # Main page component
│   │       └── components/             # Page-specific components
│   └── App.jsx                         # Routes
│
├── docs/
│   ├── implementation-status.md        # Project tracking
│   └── plans/                          # Implementation plans
│       └── YYYY-MM-DD-PageName-implementation-plan.md
│
├── tmp/
│   └── uimatch-reports/                # UIMatch output
│       ├── report.json                 # Metrics & quality gate
│       ├── diff.png                    # Visual diff
│       ├── figma.png                   # Figma screenshot
│       └── story.png                   # Implementation screenshot
│
└── public/
    └── assets/                         # Images, icons, fonts
```

---

## Best Practices

### Przed Implementacją
1. Zawsze uruchom `/1-analyze-project` najpierw
2. Sprawdź czy Figma design odpowiada produkcji (jeśli istnieje)
3. Zidentyfikuj interactive components (carousel, accordion, modal)

### Podczas Implementacji
1. Implementuj sekcję po sekcji
2. Po każdej sekcji uruchom visual comparison
3. Fix discrepancies natychmiast (nie odkładaj na później)

### Po Implementacji
1. Uruchom full-page visual comparison
2. Cel: >95% similarity score
3. Review diff image dla pozostałych różnic
4. Document any intentional deviations

### Playwright Settings
```javascript
// Dla długich operacji użyj timeout 5 minut
await page.goto(url, { timeout: 300000 })
```

---

## Temporary Files

Wszystkie pliki tymczasowe w `[project]/tmp/`:
- UIMatch reports: `uimatch-reports/`
- Screenshots: `verify-*.png`
- Diff images: `diff-*.png`

**Ważne**: Używaj katalog projektu (`gadki/tmp/`), nie system `/tmp/`.
