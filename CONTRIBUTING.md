# Contributing to Marduk

## Prerequisites

- Node.js 20.x or higher (24.x recommended for development, see `.nvmrc`)
- npm >= 9.0.0
- Git

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/markfoster314/marduk.git
cd marduk
```

2. Install dependencies:

```bash
npm install
```

3. Run Storybook for development:

```bash
npm run storybook
```

4. Run tests:

```bash
npm test
```

## Development Workflow

### Git Hooks

The project uses Husky to enforce code quality:

- **Pre-commit**: Runs Prettier and ESLint on staged files automatically
- **Pre-push**: Runs full test suite before pushing to remote

### Commit Message Format

Commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>: <description>

[optional body]

[optional footer]
```

**Allowed types:**

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, missing semicolons, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `revert` - Reverting changes
- `ci` - CI/CD changes
- `build` - Build system changes

**Examples:**

```bash
git commit -m "feat: add dark mode preset to Text component"
git commit -m "fix: resolve Box rendering issue with nested presets"
git commit -m "docs: update README with preset examples"
```

Invalid commits will be rejected by the commit-msg hook.

## Code Standards

### Formatting

- **Prettier** handles all code formatting automatically
- Configuration: `.prettierrc.json`
- Runs automatically on commit via lint-staged
- Manual formatting: `npm run format`
- Check formatting: `npm run format:check`

### Linting

- **ESLint** enforces code quality rules
- Configuration: `eslint.config.mjs`
- Runs automatically on commit via lint-staged
- Manual linting: `npm run lint`
- Auto-fix issues: `npm run lint:fix`

### Editor Configuration

- **EditorConfig** maintains consistent settings across editors
- Configuration: `.editorconfig`
- **VSCode**: Install recommended extensions (`.vscode/extensions.json`)
  - Prettier
  - ESLint
  - EditorConfig

## Component Development

### Component Structure

```
src/components/ComponentName/
├── ComponentName.tsx          # Main component file
├── ComponentName.types.ts     # TypeScript types
├── ComponentName.css          # Component styles
├── ComponentName.test.tsx     # Unit tests
├── ComponentName.stories.tsx  # Storybook stories
├── presets.ts                 # Preset configurations (if applicable)
├── augmentation.ts            # TypeScript module augmentation (if applicable)
└── README.md                  # Component documentation
```

### Preset System

Components should follow the preset pattern for consistent, composable styling:

1. Define presets in `presets.ts`:

```typescript
export const builtInPresets = {
  default: {
    // preset configuration
  },
};

export function definePresets(customPresets) {
  // preset definition logic
}
```

2. Add module augmentation in `augmentation.ts`:

```typescript
declare module "@markfoster314/marduk" {
  interface ComponentPresets {
    default: ComponentPresetConfig;
    // list all built-in presets
  }
}
```

3. Export presets from main `index.ts`

### Component Status

Mark component maturity in Storybook stories using constants:

```typescript
import { STORYBOOK_STATUS } from "../../utils/storybook/constants";

const meta: Meta<typeof Component> = {
  title: "Components/Component",
  component: Component,
  tags: ["autodocs", "status:ready"], // or status:wip, status:barebones
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.READY, // or WIP, WIP_FUNCTIONAL, BAREBONES
    },
  },
};
```

**Status Levels:**

- 🟢 **READY** - Production-ready, fully tested, documented
- 🟡 **WIP** - Functional but needs improvements or refactoring
- ⚪ **BAREBONES** - Basic implementation, placeholder, needs significant work

### Testing Requirements

- Write unit tests for all components
- Use React Testing Library
- Test accessibility (roles, labels, keyboard navigation)
- Aim for >80% code coverage
- Tests must pass before merging

**Test structure:**

```typescript
describe("ComponentName", () => {
  it("renders with default props", () => {
    // test implementation
  });

  it("applies presets correctly", () => {
    // test implementation
  });

  it("is accessible", () => {
    // test implementation
  });
});
```

**Run tests:**

```bash
npm test                 # Run all tests
npm run test:watch       # Watch mode
npm run test:coverage    # Coverage report
```

### Storybook Documentation

- Create comprehensive stories demonstrating component usage
- Include examples for all major prop combinations
- Add interactive controls for key props
- Document accessibility features
- Keep stories focused (5-10 stories maximum per component)

## Pull Request Process

1. Create a feature branch:

```bash
git checkout -b feat/component-name
```

2. Make your changes following the code standards

3. Ensure all checks pass:

```bash
npm run format:check     # Check formatting
npm run lint             # Check linting
npm test                 # Run tests
npm run build            # Verify build
```

4. Commit your changes using conventional commits

5. Push your branch:

```bash
git push origin feat/component-name
```

6. Open a Pull Request with:
   - Clear description of changes
   - Screenshots/GIFs for UI changes
   - Link to related issues

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] All tests pass
- [ ] New tests added for new features
- [ ] Documentation updated (README, component docs)
- [ ] Storybook stories added/updated
- [ ] No linter errors or warnings
- [ ] Component status badge added to stories
- [ ] Commit messages follow conventional commits

## Project Structure

```
marduk/
├── .husky/                 # Git hooks
├── .storybook/             # Storybook configuration
├── .vscode/                # VSCode settings
├── src/
│   ├── components/         # React components
│   ├── icons/              # Icon components
│   ├── styles/             # Global styles and CSS variables
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   └── index.ts            # Main entry point
├── .editorconfig           # Editor configuration
├── .prettierrc.json        # Prettier configuration
├── .prettierignore         # Prettier ignore patterns
├── eslint.config.mjs       # ESLint configuration
├── .commitlintrc.json      # Commitlint configuration
├── jest.config.js          # Jest configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

### Code of Conduct

See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## Need Help?

- Check existing components for examples
- Review [README.md](./README.md) for preset system details
- Open an issue for questions or suggestions
- Reach out to [@markfoster314](https://github.com/markfoster314)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
