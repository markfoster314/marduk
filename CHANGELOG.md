# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Planned

- v0.4.0 → Core compositions production-ready
- v0.5.0 → First templates added
- v1.0.0 → API stable, proven in production

## [0.3.0] - 2025-12-15

### Added
- **13 new production-ready primitive components:**
  - Avatar - User avatar with image fallback, status indicators, and multiple shapes
  - Divider - Visual separator with orientation, thickness, and label support
  - Image - Smart image component with lazy loading, placeholder, and error handling
  - Skeleton - Loading placeholder with multiple shapes and animations
  - Spinner - Loading indicator with sizes, speeds, and labels
  - Toggle - Switch component with label positioning and responsive sizing
  - Checkbox - Checkbox input with indeterminate state and error handling
  - RadioButtons - Radio button group with horizontal/vertical layouts
  - TextInput - Text input with multiple types, validation states, and helper text
  - Dropdown - Select dropdown with disabled options and error states
  - ProgressBar - Progress indicator with variants, labels, and animations
  - Tooltip - Hover tooltip with positioning and delay control
  - Icon - Icon component with transformations and animations

- Comprehensive test coverage with data attributes for all new components
- Responsive CSS implementation using global scale multipliers for all components
- Complete README documentation for all 20 primitive components
- Data attributes for testing across all components

### Changed
- Updated all remaining primitive components from BAREBONES/WIP to production-ready status
- Enhanced test coverage to 1000+ tests
- Improved Storybook documentation with comprehensive stories for all components
- Updated component status badges to `status:ready` in Storybook

### Fixed
- Checkbox checkmark centering (now properly centered vertically and horizontally)
- Dropdown text padding (offset to left to accommodate arrow button)
- Tooltip Storybook controls (hide React internals in children prop)

### Technical
- All 20 primitive components now meet production-ready criteria
- Zero linting errors across all components
- Comprehensive responsive design support
- Full accessibility compliance (WCAG 2.1 Level AA)

## [0.2.1] - 2025-11-09

### Added
- Link component with preset system, external link security, icon support
- Preset systems for Title, Button, Svg components
- Icon Storybook improvements with comprehensive controls
- Responsive design documentation (3 breakpoints)
- Component-scoped CSS variables across all components

### Changed
- **BREAKING:** Title - removed `variant` and `darkMode` props, use `preset` instead
- **BREAKING:** Button - removed `variant` and `darkMode` props, use `preset` instead  
- **BREAKING:** Svg - removed `darkMode` prop, use `preset` instead
- Updated test coverage to 936 tests

### Fixed
- Svg preset CSS variables (now use correct --marduk-* prefix)
- Button Storybook icon controls (select dropdowns instead of object display)

### Note
- Semantic versioning not followed, but breaking changes only affect WIP and BAREBONES features and this project has no users yet except for me :)

## [0.2.0] - 2025-11-08

### Added

- Path alias support (`@/`) for cleaner imports across the codebase
- Separated compositions into dedicated directory structure
- Enhanced Storybook configuration for ES modules

### Changed

- **BREAKING:** Migrated composition components (Alert, LoadingIndicator, Modal) from `components/` to `compositions/` directory
- Updated all internal imports to use `@/` path alias
- Improved TypeScript configuration with `bundler` module resolution for better compatibility with modern tooling
- Updated ESLint rules to enforce path alias usage

### Fixed

- React 19 compatibility issues in story files (removed unnecessary React imports)
- React Hooks violations in interactive Storybook stories
- Module resolution issues with Storybook 10
- Build errors with module augmentation files
- Type safety improvements (removed `any` usage in polymorphic components)

### Technical

- Configured path aliases across TypeScript, Jest, Storybook, and Rollup
- All tests passing (822 tests)
- Zero linting errors with stricter rules

## [0.1.4] - 2024-11-05

### Added

- Decided how to handle css for the project (exporting)
- two new components finished, Text and Title

### Changed

- Build settings

## [0.1.3] - 2024-11-04

### Added

- Button component overhaul: appearances, loading, icons, async onClick
- CSS variables for component-level theming
- started icons repo

### Changed

- Improved accessibility across components

## [0.1.2] - 2024-11-03

### Changed

- Added Text and Title components
- Updated button components
- Incorporated dark mode styles

### Fixed

- CSS not being properly imported
- Minor fixes and improvements

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

[Unreleased]: https://github.com/markfoster314/marduk/compare/v0.2.1...HEAD
[0.2.1]: https://github.com/markfoster314/marduk/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/markfoster314/marduk/compare/v0.1.4...v0.2.0
[0.1.0]: https://github.com/markfoster314/marduk/releases/tag/v0.1.0
