# Marduk Components Library

<img alt="Rei Clones" style="display: block; margin: auto; padding-bottom: 20px;" src="./docs/images/rei-clones.png">

> _"God's in his heaven, all's right with the world."_

A lightweight React components library built with **TypeScript**, React 19, HTML, and CSS configured specifically for whatever me and my friends need.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb.svg)](https://reactjs.org/)
[![Tested](https://img.shields.io/badge/Tests-318%20passing-success.svg)](./src)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

## Features

- **TypeScript Centric** - Full type safety and IntelliSense support
- **Fully Tested** - Comprehensive test suite with React Testing Library
- **Zero Dependencies** - Only React as a peer dependency
- **Type Definitions Included** - `.d.ts` files generated automatically
- **Tree-shakeable** - Import only what you need
- **CSS Variables** - Centralized design tokens for easy theming

## Installation

```bash
npm install @markfoster314/marduk
```

## Development

### Prerequisites

- Node.js v14+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/markfoster314/marduk.git
cd marduk

# Install dependencies
npm install

# Run tests
npm test

# Start Storybook
npm run storybook

# Build the library
npm run build
```

### Available Scripts

```bash
npm test              # Run tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Generate coverage report
npm run storybook     # Start Storybook on port 2015
npm run build         # Build the library
npm run type-check    # TypeScript type checking
```

## Theming

We use CSS variables for theming. It is all centralized in `src/styles/variables.css`:

**Override variables to customize the theme:**

```css
/* In your app's CSS */
:root {
  --color-primary-500: #8b5cf6; /* Purple instead of blue */
  --color-success-500: #10b981; /* Different green */
  --radius-md: 8px; /* More rounded corners */
  --font-family-base: "Inter", sans-serif; /* Custom font */
}
```

All components will now automatically use the custom theme

## Testing

We use React Testing Library for tests:

```bash
npm test
# Test Suites: 13 passed, 13 total
# Tests:       293 passed, 293 total
# Snapshots:   0 total
# Time:        15.802 s
```

## TypeScript Support

Library was built with Typescript in mind, so there's full TypeScript support with exported types. You can make custom components with type safety like so:

```typescript
import { Button, TextInput, Breadcrumb } from "@marduk/components";
import type {
  ButtonProps,
  TextInputProps,
  BreadcrumbProps,
  BreadcrumbItem,
} from "@marduk/components";

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
}

const LoadingButton = ({ loading, ...props }: CustomButtonProps) => (
  <Button {...props}>{loading ? "Loading..." : props.children}</Button>
);
```

## Storybook

View live component examples and documentation:

```bash
npm run storybook
```

Visit `http://localhost:2015` to see everything.

## What's Included

When you install this package, you get:

```
@marduk/components/
├── dist/
│   ├── index.js              # CommonJS build
│   ├── index.esm.js          # ES Module build
│   └── *.d.ts                # TypeScript definitions
└── package.json
```

- **Compiled JavaScript** (CommonJS & ES Modules)
- **TypeScript definitions** (`.d.ts` files)
- **CSS styles** (automatically imported)

You do **not** get:

- Source files, tests, and storybook files (excluded for smaller package)

**Package size**: ~50-70KB (minified + gzipped: ~15-20KB)

## Contributing

Anyone who wants to is welcome to contribute, just try and do the following:

1. Write tests for new components/features
2. Run `npm test` and `npm run type-check` before committing
3. Try and maintain test coverage above 70%
4. Follow the general patterns of the project
5. Update Storybook stories for new features

## License

MIT © Mark Foster

## 🔗 Links

- [Report Issues](https://github.com/markfoster314/marduk/issues)
- [NPM Package](https://www.npmjs.com/package/@markfoster314/marduk)
- [Documentation](https://github.com/markfoster314/marduk#readme)

---

_Kimochi warui_
