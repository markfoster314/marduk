# Marduk Institute Library

<img alt="Rei Clones" style="display: block; margin: auto; padding-bottom: 20px;" src="./docs/images/rei-clones.png">

> _"God's in his heaven, all's right with the world."_

A lightweight React components library built with **TypeScript**, React 19, HTML, and CSS configured specifically for whatever me and my friends need.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://reactjs.org/)
[![CI Status](https://github.com/markfoster314/marduk/actions/workflows/ci.yml/badge.svg)](https://github.com/markfoster314/marduk/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/markfoster314/marduk/branch/main/graph/badge.svg)](https://codecov.io/gh/markfoster314/marduk)
[![npm version](https://img.shields.io/npm/v/@markfoster314/marduk.svg)](https://www.npmjs.com/package/@markfoster314/marduk)
[![npm downloads](https://img.shields.io/npm/dm/@markfoster314/marduk.svg)](https://www.npmjs.com/package/@markfoster314/marduk)
[![GitHub](https://img.shields.io/github/license/markfoster314/marduk.svg)](https://github.com/markfoster314/marduk/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/markfoster314/marduk.svg?style=social)](https://github.com/markfoster314/marduk)

## Features

- **Zero Dependencies** - Only React as a peer dependency
- **Tree-shakeable** - Import only what you need
- **CSS Variables** - Centralized design tokens for easy theming

I find myself rebuilding the same things over and over again every time I make a new project, so I'm putting together this library so all this stuff is in one place.

## Installation

```bash
npm install @markfoster314/marduk
```

## Development

### Prerequisites

- Node.js v18.14+
- npm or yarn

### Setup

```bash
git clone https://github.com/markfoster314/marduk.git
cd marduk

npm install

npm run storybook
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
  --color-primary-500: #8b5cf6;
  --color-success-500: #10b981;
  --radius-md: 8px;
  --font-family-base: "Inter", sans-serif;
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
import { Button, TextInput, Breadcrumb } from "@markfoster314/marduk";
import type {
  ButtonProps,
  TextInputProps,
  BreadcrumbProps,
  BreadcrumbItem,
} from "@markfoster314/marduk";

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
@markfoster314/marduk/
├── dist/
│   ├── components/           # Components, duh
│   ├── index.js              # CommonJS build
│   ├── index.esm.js          # ES Module build
│   └── *.d.ts                # TypeScript definitions
├── package.json
├── CHANGELOG.md
├── README.md
└── LICENSE
```

**Package size**: ~50-70KB

## Contributing

Anyone who wants to is welcome to contribute, just try and do the following:

1. Write tests for new components/features
2. Run `npm test` and `npm run type-check` before committing
3. Try and maintain test coverage above 70%
4. Follow the general patterns of the project
5. Update Storybook stories for new features

## License

MIT © Mark Foster

## Links

- [Report Issues](https://github.com/markfoster314/marduk/issues)
- [NPM Package](https://www.npmjs.com/package/@markfoster314/marduk)
- [Documentation](https://github.com/markfoster314/marduk#readme)

---

_Kimochi warui_
