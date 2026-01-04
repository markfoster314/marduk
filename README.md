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
- **Compositions** - Pre-built patterns (LoadingIndicator, Alert, Modal)
- **Templates** _(coming soon)_ - Full page layouts (SignupPage, ProfilePage, DashboardLayout)

Start with primitives for full control, use compositions for speed, or drop in templates to ship faster.

**Responsive by default:**

Components automatically scale across three breakpoints using uniform multipliers:

- **Mobile** (0-767px): Base sizes (1.0×)
- **Tablet** (768px+): 15% larger (1.15×)
- **Desktop** (1024px+): 30% larger (1.30×)

All sizing properties (font-size, padding, icons) scale consistently for smooth UI transitions.

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

- **Core primitives:** 20 production-ready components (all primitives complete!)
- **Library status:** v0.3.0 - Ready for release
- **Test coverage:** 1000+ tests passing
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

Combine multiple presets by passing an array. Later presets override earlier ones, with one important exception: **the `style` object is deeply merged**:

```tsx
<Box preset={["grid3", "spaceBetween"]}>Flex layout with grid spacing</Box>
```

**Deep merge behavior:**

- Regular properties (size, weight, etc.): Later presets replace earlier values
- The `style` object: CSS properties from all presets are combined
- Conflicting CSS properties: Last preset wins
- Explicit props: Always override all preset values

```tsx
// Example: Multiple presets with styles
<Link preset={["nav", "highlight"]}>
  {/* nav: { style: { textTransform: "uppercase" } }
      highlight: { style: { color: "red", fontWeight: "bold" } }
      Result: All CSS properties combined */}
  Navigation Link
</Link>
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

## Compositions

Compositions are higher-level UI patterns built using primitive components. They provide ready-to-use solutions for common interface patterns while maintaining flexibility through primitive customization.

### Composition Philosophy

**Built with primitives:**

- All compositions use in-house primitive components (Box, Text, Title, Button, etc.) internally
- This ensures consistency, theming, and maintainability across the library

**Primitive customization:**

- Compositions allow you to pass primitive components as props for maximum flexibility
- This lets you customize styling, presets, or behavior of internal primitives without modifying the composition itself

### Example: Customizing Primitives in Compositions

```
import { Alert, Text, Title, Button } from "@markfoster314/marduk";

// Default Alert uses internal primitives
<Alert variant="success" title="Success">
Operation completed successfully
</Alert>

// Customize the icon in LoadingIndicator
<LoadingIndicator
icon={<CustomSpinner />}
text="Loading..."
/>

// Card allows custom title component
<Card
title={<Title level={2} preset={["primary"]}>Custom Title</Title>}

Card content
</Card>

// Alert with custom close button
<Alert
variant="warning"
closable
// The close button is a Button primitive internally
// You can customize it by passing a custom Button component if the API supports it
>
Warning message
</Alert>
```

### When to Use Compositions vs Primitives

- **Use Compositions** when you need a complete, ready-to-use pattern (Alert, Modal, Card)
- **Use Primitives** when you need full control over layout and styling
- **Customize Compositions** by passing primitive components as props when available

**Note:** Not all compositions expose all internal primitives as props. Check individual component documentation for available customization options.

## Production Ready Features

**Primitives:** [Text](src/components/Text) | [Box](src/components/Box) | [Title](src/components/Title) | [Button](src/components/Button) | [Svg](src/components/Svg) | [Link](src/components/Link) | [Badge](src/components/Badge) | [Avatar](src/components/Avatar) | [Divider](src/components/Divider) | [Image](src/components/Image) | [Skeleton](src/components/Skeleton) | [Spinner](src/components/Spinner) | [Toggle](src/components/Toggle) | [Checkbox](src/components/Checkbox) | [RadioButtons](src/components/RadioButtons) | [TextInput](src/components/TextInput) | [Dropdown](src/components/Dropdown) | [ProgressBar](src/components/ProgressBar) | [Tooltip](src/components/Tooltip) | [Icon](src/icons)

## In Progress Features

**Compositions:** [Alert](src/compositions/Alert) | [LoadingIndicator](src/compositions/LoadingIndicator)

## Barebones Features

**Compositions:** [Modal](src/compositions/Modal) | [Toast](src/compositions/Toast) | [Pagination](src/compositions/Pagination) | [Breadcrumb](src/compositions/Breadcrumb) | [Card](src/compositions/Card) | [Tabs](src/compositions/Tabs) | [Accordion](src/compositions/Accordion) | [Table](src/compositions/Table) | [Form](src/compositions/Form) | [Menu](src/compositions/Menu) | [Sidebar](src/compositions/Sidebar) | [DatePicker](src/compositions/DatePicker) | [Autocomplete](src/compositions/Autocomplete) | [Popover](src/compositions/Popover) | [Wizard](src/compositions/Wizard) | [Timeline](src/compositions/Timeline) | [Carousel](src/compositions/Carousel) | [DataGrid](src/compositions/DataGrid)

## Icon Library

[Icons](src/icons)

## Roadmap

[v0.3.0 and beyond](docs/ROADMAP.md) - All primitives production-ready! Next: compositions.

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

### Responsive Scaling

The library uses uniform responsive multipliers to ensure all components scale consistently:

```css
:root {
  --marduk-scale-mobile: 1;
  --marduk-scale-tablet: 1.15; /* 15% larger at 768px+ */
  --marduk-scale-desktop: 1.3; /* 30% larger at 1024px+ */
}
```

Override these to customize responsive behavior across all components:

```css
/* More aggressive scaling for larger screens */
:root {
  --marduk-scale-tablet: 1.2; /* 20% larger */
  --marduk-scale-desktop: 1.4; /* 40% larger */
}
```

**Note:** Title component uses semantic heading scales and does not use these multipliers.

### Dark Mode

Marduk handles dark mode through **explicit preset selection**, not automatic system preference detection:

```
// Light mode app - use light presets
<Text preset={["primary"]}>Primary text</Text>
<Button preset={["success"]} appearance="filled">Success button</Button>
<Link preset={["danger"]}>Danger link</Link>


// Dark mode app - use dark presets
<Text preset={["primaryDark"]}>Primary text</Text>
<Button preset={["successDark"]} appearance="filled">Success button</Button>
<Link preset={["dangerDark"]}>Danger link</Link>**Philosophy:**
```

Build your application for **one consistent theme** (light or dark), not both simultaneously. This approach gives you:

- **Full control**: Explicitly choose which components use which theme
- **Predictable behavior**: No automatic switching based on system preferences
- **Simpler implementation**: No need for theme providers or context
- **Better performance**: No runtime theme calculations

All production components include dark mode presets (`primaryDark`, `successDark`, etc.) that work with dark backgrounds. Choose your theme at the application level and use the appropriate presets consistently throughout.

**Note:** The library does not use `@media (prefers-color-scheme: dark)` for automatic theme switching. If you need automatic theme switching based on user preference, implement it at the application level and conditionally pass the appropriate presets.

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
