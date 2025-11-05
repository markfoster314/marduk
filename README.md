# Marduk Institute Library

<div align="center">
  <img alt="Rei Clones" src="./docs/images/rei-clones.png" width="600">
</div>

> _"God's in his heaven, all's right with the world."_

Mark's React Components library

[![TypeScript](https://img.shields.io/badge/TypeScript-4.1+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0+-61dafb.svg)](https://reactjs.org/)
[![Node](https://img.shields.io/badge/Node-18+-green.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-7+-red.svg)](https://www.npmjs.com/)
[![npm version](https://img.shields.io/npm/v/@markfoster314/marduk.svg)](https://www.npmjs.com/package/@markfoster314/marduk)
[![License](https://img.shields.io/github/license/markfoster314/marduk.svg)](https://github.com/markfoster314/marduk/blob/main/LICENSE)

## What's This?

A lightweight component library built for me and my friends. Zero dependencies (just React), responsive, fully typed, and themeable with CSS variables.

**Notes:**

- Currently a WIP

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

## Components in a ~finished state

**UI Elements:** [Button](src/components/Button/README.md)

**Typography Elements:** [Title](src/components/Title/README.md) | [Text](src/components/Text/README.md)

**Icon Elements:** [Svg](src/components/Svg/README.md)

## Development

```bash
git clone https://github.com/markfoster314/marduk.git
cd marduk
npm install
npm run storybook  # Opens on localhost:2015
```

**Useful commands:**

```bash
npm test              # Run tests
npm run test:watch    # Tests in watch mode
npm run storybook     # Component playground
npm run build         # Build the library
npm run type-check    # TypeScript checking
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

## Storybook

See all components in action:

```bash
npm run storybook  # localhost:2015
```

## Testing

```bash
npm test
# Test Suites: 18 passed, 18 total
# Tests:       797 passed, 797 total
```

## Contributing

PRs will be more welcome in the future once we're off the ground.

For PRs:

- Write tests for updates
- Run `npm test` and `npm run type-check` before committing
- Follow existing patterns
- Update Storybook stories

[Open an issue](https://github.com/markfoster314/marduk/issues) if you have ideas or find bugs.

## License

MIT © Mark Foster

---

_Kimochi warui_
