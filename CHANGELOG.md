# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned

- Literally whatever I wind up using when building my react sites will be added as time goes on

## [0.1.1] - 2024-11-03

### Changed

- Updated dependencies to latest versions
- Updated CI workflow to use Node.js 24
- Added Codecov integration

### Fixed

- Minor fixes and improvements

## [0.1.0] - 2024-11-02

### Added

#### Core Features

- Initial release of the Marduk Components library
- TypeScript support with full type definitions
- React 19 compatibility
- Tree-shakeable ES modules and CommonJS builds
- Comprehensive test suite (293 passing tests across 13 suites)
- Storybook documentation for all components
- CSS Variables system for centralized theming

#### Components (13 total)

- **Button** - 5 variants (primary, secondary, success, danger, outline) and 3 sizes
- **TextInput**
- **Breadcrumb**
- **Checkbox**
- **Dropdown**
- **Toggle**
- **RadioButtons**
- **Alert** - 4 variants (info, success, warning, error)
- **Toast**
- **ProgressBar**
- **Pagination**
- **Tooltip**
- **Modal**

#### Theming System

- Centralized CSS variables in `src/styles/variables.css`
- Easy theme customization by overriding CSS variables

#### Developer Experience

- Full TypeScript definitions exported
- Storybook documentation
- Jest + React Testing Library test suite
- ESLint and TypeScript strict mode
- Rollup bundler for optimized builds
- Source maps for debugging

#### Documentation

- Initial README.md

### Technical Details

- **Package Size**: ~62.7 KB (minified)
- **Zero Runtime Dependencies**: Only React 19 as peer dependency
- **Browser Support**: Modern browsers (ES2015+)
- **Build Outputs**: CommonJS and ES Modules
- **Test Coverage**: High coverage across all components
- **Bundle Format**: Tree-shakeable for optimal bundle sizes

### File Structure

```
@markfoster314/marduk/
├── dist/
│   ├── index.js              # CommonJS build
│   ├── index.esm.js          # ES Module build
│   ├── index.d.ts            # TypeScript definitions
│   └── components/           # Component type definitions
└── package.json
```

### Dependencies

- **Peer Dependencies**:
  - react: ^19.0.0
  - react-dom: ^19.0.0

### Breaking Changes

- None (initial release)

### Known Issues

- None reported

---

## Release Notes

### 0.1.0 Highlights

This is the initial public release of Marduk. This is my components library and I will be adding to it as time goes by and I build more things.

**Key Features**:

- **13 Components** - Just some small components that should be useful to start.
- **Lightweight** - zero runtime dependencies
- **Well Tested** - not sure how long it will stay this way lol but for now we have good test coverage

### Migration Guide

This is the initial release, so there is no migration guide. For installation instructions, check the [README.md](./README.md).

### Installation Instructions

```bash
# Install the package
npm install @markfoster314/marduk

# Or with yarn
yarn add @markfoster314/marduk

# Or with pnpm
pnpm add @markfoster314/marduk
```

---

## Links

- [npm Package](https://www.npmjs.com/package/@markfoster314/marduk)
- [GitHub Repository](https://github.com/markfoster314/marduk)
- [Documentation](https://github.com/markfoster314/marduk#readme)
- [Report Issues](https://github.com/markfoster314/marduk/issues)

---

[Unreleased]: https://github.com/markfoster314/marduk/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/markfoster314/marduk/releases/tag/v0.1.0
