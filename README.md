# Marduk Institute Library

<div align="center">
  <img alt="Rei Clones" src="./docs/images/rei-clones.png" width="600">
</div>

> _"God's in his heaven, all's right with the world."_

Mark's React Components library

[![TypeScript](https://img.shields.io/badge/TypeScript-4.1+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0+-61dafb.svg)](https://reactjs.org/)
[![Node](https://img.shields.io/badge/Node-20+-green.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-7+-red.svg)](https://www.npmjs.com/)
[![npm version](https://img.shields.io/npm/v/@markfoster314/marduk.svg)](https://www.npmjs.com/package/@markfoster314/marduk)
[![License](https://img.shields.io/github/license/markfoster314/marduk.svg)](https://github.com/markfoster314/marduk/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![CI](https://github.com/markfoster314/marduk/actions/workflows/ci.yml/badge.svg)](https://github.com/markfoster314/marduk/actions)
[![codecov](https://codecov.io/gh/markfoster314/marduk/branch/main/graph/badge.svg)](https://codecov.io/gh/markfoster314/marduk)

## What's This?

A lightweight React component library built for rapid development. Zero runtime dependencies (just React), fully typed with TypeScript, and themeable with CSS variables. Made for solo devs and startup enthusiasts

**Three layers of abstraction:**

- **Primitives** - Base components (Button, Text, Box, Link, Svg)
- **Compositions** - Pre-built patterns (LoadingScreen, Alert, Modal)
- **Templates** _(coming soon)_ - Full page layouts (SignupPage, ProfilePage, DashboardLayout)

Start with primitives for full control, use compositions for speed, or drop in templates to ship faster.

**Responsive by default:**

Components automatically scale across three breakpoints:

- **Mobile** (0-767px): Base sizes
- **Tablet** (768px+): ~12-17% larger
- **Desktop** (1024px+): ~25-33% larger

## Philosophy

Stop rebuilding the same components and patterns on every project.

1. **Flexible primitives** - Highly customizable base components with preset system
2. **Ready-to-use compositions** - Common UI patterns that work out of the box
3. **Production templates** _(roadmap)_ - Complete page layouts for auth, profiles, settings, etc.

**Design principles:**

- Zero dependencies - Only React as a peer dependency
- Preset system - Composable, type-safe styling configurations
- CSS variables - Theme without rebuilding
- TypeScript-first - Full type safety and IntelliSense
- Accessibility - WCAG compliant, keyboard navigation, ARIA labels
- Polymorphic - Components adapt to your semantic HTML needs

**Current status:**

- **Core primitives:** Production-ready (Box, Text)
- **Library status:** Beta - actively expanding
- **Test coverage:** 822 tests passing
- **Docs:** [Live Storybook](https://markfoster314.github.io/marduk/)
- **Contributions:** Welcome and encouraged!

## Installation

```bash
npm install @markfoster314/marduk
```

## Quick Start

import CSS at the root of your application

```tsx
// Add to your app's entry point (main.tsx, App.tsx, _app.tsx, etc.)
import "@markfoster314/marduk/styles.css";
```

```tsx
import { Button, Alert, TextInput } from "@markfoster314/marduk";

function App() {
  return (
    <>
      <Button variant="primary" appearance="filled">
        Click me
      </Button>

      <Alert variant="success" closable>
        All good!
      </Alert>

      <TextInput label="Email" placeholder="you@example.com" />
    </>
  );
}
```

## Presets System

Presets are composable, customizable, and fully typed.

### Using Presets

Pass presets as an array to supported components:

```tsx
import { Box } from "@markfoster314/marduk";

<Box preset={["stack"]}>
  <div>Item 1</div>
  <div>Item 2</div>
</Box>

<Box preset={["stack", "card"]}>
  Vertical layout with card styling
</Box>
```

### Custom Presets

Define your own presets at app startup:

```tsx
import { defineBoxPresets } from "@markfoster314/marduk";

defineBoxPresets({
  hero: {
    display: "flex",
    direction: "column",
    justify: "center",
    align: "center",
    padding: "3xl",
    gap: "lg",
  },
  container: {
    width: "1200px",
    margin: "auto",
    padding: "xl",
  },
});

<Box preset={["hero"]}>Hero section</Box>;
```

### TypeScript Support

Add type definitions for autocomplete on custom presets:

```tsx
// In your app's type definitions
declare module "@markfoster314/marduk" {
  interface BoxPresets {
    hero: BoxPresetConfig;
    container: BoxPresetConfig;
  }
}
```

### Composing Presets

Combine multiple presets by passing an array. Later presets overwrite earlier ones:

```tsx
<Box preset={["grid3", "spaceBetween"]}>Flex layout with grid spacing</Box>
```

### Override Preset Values

Props always override preset values:

```tsx
<Box preset={["stack"]} gap="xl">
  Uses stack preset but with xl gap instead of md
</Box>

<Box preset={["stack", "card"]} backgroundColor="blue">
  Presets merged, then props override
</Box>
```

## Production Ready Features

**Primitives:** [Text](src/components/Text) | [Box](src/components/Box) | [Title](src/components/Title) | [Button](src/components/Button) | [Svg](src/components/Svg) | [Link](src/components/Link)

## In Progress Features

**Compositions:** [Alert](src/compositions/Alert) | [LoadingScreen](src/compositions/LoadingScreen)

## Barebones Features

**Primitives:** [TextInput](src/components/TextInput) | [Checkbox](src/components/Checkbox) | [RadioButtons](src/components/RadioButtons) | [Toggle](src/components/Toggle) | [Dropdown](src/components/Dropdown) | [ProgressBar](src/components/ProgressBar) | [Tooltip](src/components/Tooltip)

**Compositions:** [Modal](src/compositions/Modal) | [Toast](src/compositions/Toast) | [Pagination](src/compositions/Pagination) | [Breadcrumb](src/compositions/Breadcrumb)

[Icons](src/icons)

## Roadmap

[v0.3.0 and beyond](docs/ROADMAP.md) - 17 components to production-ready.

## Development

```bash
git clone https://github.com/markfoster314/marduk.git
cd marduk
npm install
npm run storybook  # Opens on localhost:2015
```

**Useful commands:**

```bash
npm test                 # Run tests
npm run test:watch       # Watch mode
npm run test:coverage    # Coverage report
npm run lint             # Lint code
npm run format:check     # Check formatting
npm run type-check       # TypeScript check
npm run storybook        # Dev server
npm run build-storybook  # Build docs
npm run build            # Build library
```

## Theming

Everything uses CSS variables, so theming is easy. Just override whatever you need changed for your project:

```css
:root {
  --marduk-color-primary-500: #8b5cf6;
  --marduk-color-success-500: #10b981;
  --marduk-radius-md: 8px;
  --marduk-font-family-base: "Inter", sans-serif;
}
```

Components also have their own CSS variables for granular control:

```tsx
<Button
  style={
    {
      "--button-border-radius": "999px",
      "--button-active-scale": "1",
    } as React.CSSProperties
  }
>
  Pill Button
</Button>
```

## TypeScript

Fully typed with exported types for everything:

```typescript
import { Button } from "@markfoster314/marduk";
import type { ButtonProps } from "@markfoster314/marduk";

interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const MyButton = ({ isLoading, ...props }: CustomButtonProps) => (
  <Button loading={isLoading} {...props} />
);
```

## Contributing

Contributions welcome. See [Contributing Guide](./CONTRIBUTING.md), [Code of Conduct](./CODE_OF_CONDUCT.md), and [roadmap](docs/ROADMAP.md).

- [Report a bug](https://github.com/markfoster314/marduk/issues/new?template=bug_report.md)
- [Request a feature](https://github.com/markfoster314/marduk/issues/new?template=feature_request.md)
- [General discussion](https://github.com/markfoster314/marduk/issues)

## License

MIT © Mark Foster

---

_Kimochi warui_
