# UIMatch Verification - GADKI Quick Start

## Wymagania

```bash
# 1. Ustaw token Figma
export FIGMA_ACCESS_TOKEN=your_token_here
# lub w pliku .env:
# FIGMA_ACCESS_TOKEN=your_token_here

# 2. Uruchom dev server
npm run dev
```

## Podstawowe użycie

```bash
# Wzorzec
make verify NODE=<nazwa> CONFIG=scripts_gadki/uimatch-config.json

# Przykłady
make verify NODE=hero CONFIG=scripts_gadki/uimatch-config.json
make verify NODE=mama CONFIG=scripts_gadki/uimatch-config.json
make verify NODE=page CONFIG=scripts_gadki/uimatch-config.json
```

## Dostępne node'y

| Alias | Node | Figma ID | Opis |
|-------|------|----------|------|
| `page` | page | 21-2 | Cała strona |
| `hero` | hero-bg | 30-294 | Hero background (tylko wave) |
| `title` | title | 50-64 | GADKI title + subtitle |
| `mama` | avatar-mama | 2007-220 | Avatar Mama |
| `tata` | avatar-tata | 2007-208 | Avatar Tata |
| `max` | avatar-max | 2007-205 | Avatar Max |
| `gadek` | avatar-gadek | 2007-212 | Avatar Gadek (pies) |
| `corka` | avatar-corka | 2007-224 | Avatar Córka |

## Lista wszystkich node'ów

```bash
make verify-list CONFIG=scripts_gadki/uimatch-config.json
```

## Opcje dodatkowe

```bash
# Strict profile (dla obrazów bez tekstu)
make verify NODE=mama CONFIG=scripts_gadki/uimatch-config.json PROFILE=component/strict

# Inny URL
make verify NODE=hero CONFIG=scripts_gadki/uimatch-config.json URL=http://localhost:3000
```

## Output

Raporty zapisywane w: `tmp/uimatch-reports/[timestamp]/`

- `report.json` - metryki (DFS, pixelDiffRatio, qualityGate)
- `diff.png` - wizualne różnice
- `figma.png` - screenshot z Figma
- `story.png` - screenshot implementacji

## Interpretacja wyników

| Metryka | OK | Do poprawy |
|---------|----|----|
| `qualityGate.pass` | `true` | `false` |
| `pixelDiffRatio` | ≤8% | >8% |
| `metrics.dfs` | >90 | <90 |

## Troubleshooting

| Problem | Rozwiązanie |
|---------|-------------|
| `Config file not found` | Sprawdź ścieżkę CONFIG |
| `FIGMA_ACCESS_TOKEN not set` | Ustaw zmienną środowiskową |
| `Dimension mismatch` | Użyj `--size=pad` (domyślne) |
| Wysokie `pixelDiffRatio` | Sprawdź diff.png, popraw różnice strukturalne |
