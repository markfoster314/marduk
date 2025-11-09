# Roadmap

## Overview

Marduk is a lightweight React component library with zero dependencies, built for rapid development. This roadmap tracks the library's evolution from beta to production-ready status across three tiers: Primitives, Compositions, and Templates.

## Current Status

- Version: 0.2.0
- Test Coverage: 822 tests passing
- Production-Ready Components: 2 (Box, Text)
- Total Components: 17

## v0.3.0 - Production-Ready Primitives

**Goal:** Establish a comprehensive foundation of production-ready primitive components.

**Timeline:** TBD

**Scope:** 17 components total

### Components to Upgrade (3)

**Button** - Interactive action component

- Status: WIP → Ready
- Tasks:
  - Complete all variant testing (primary, secondary, success, warning, danger)
  - Complete all appearance testing (filled, outline, text)
  - Test all size combinations (small, medium, large)
  - Icon placement testing (left, right, icon-only)
  - Loading state implementation
  - Async onClick handling
  - Disabled state accessibility
  - Keyboard navigation (Enter, Space)
  - Focus management
  - Add preset system support

**Title** - Semantic heading component

- Status: WIP → Ready
- Tasks:
  - Test all heading levels (h1-h6)
  - Test all variants (default, primary, secondary, success, warning, danger)
  - Alignment testing (left, center, right)
  - Size override testing
  - Weight override testing
  - Truncation testing (single-line, multi-line clamp)
  - Underline styles testing
  - Dark mode support
  - Add preset system support

**Svg** - Icon wrapper component

- Status: WIP → Ready
- Tasks:
  - Size testing (xs, small, medium, large, xl, 2xl, 3xl)
  - Rotation testing (0, 90, 180, 270)
  - Flip testing (horizontal, vertical, both)
  - Animation testing (spin speeds, heartpulse)
  - Filter testing
  - Hover color testing
  - Responsive scaling
  - Dark mode support
  - Add preset system support

### New Components (7)

**Link** - Navigation primitive

- Status: New → Ready
- Features:
  - Internal/external link variants
  - Icon support (left, right)
  - Underline styles
  - Active/visited states
  - Keyboard navigation
  - ARIA labels
  - Preset system
  - All Text component features

**Badge** - Status indicators and labels

- Status: New → Ready
- Features:
  - Variants (primary, secondary, success, warning, danger, info)
  - Sizes (small, medium, large)
  - Dot indicator option
  - Number/count display
  - Positioning (standalone, overlay on other components)
  - Preset system

**Spinner** - Loading indicator

- Status: New → Ready
- Features:
  - Sizes (small, medium, large)
  - Color variants
  - Speed control
  - Label for accessibility
  - Preset system

**Divider** - Visual separator

- Status: New → Ready
- Features:
  - Orientation (horizontal, vertical)
  - Thickness variants
  - Color variants
  - With label/text option
  - Spacing control
  - Preset system

**Image** - Smart image component

- Status: New → Ready
- Features:
  - Lazy loading
  - Placeholder support
  - Error state handling
  - Aspect ratio control
  - Object fit options
  - Responsive sizes
  - Alt text enforcement
  - Preset system

**Avatar** - User avatar component

- Status: New → Ready
- Features:
  - Image with fallback (initials, icon)
  - Sizes (xs, small, medium, large, xl)
  - Shapes (circle, square, rounded)
  - Status indicator (online, offline, busy)
  - Group/stack support
  - Preset system

**Skeleton** - Loading placeholder

- Status: New → Ready
- Features:
  - Shape variants (text, circle, rectangle)
  - Animation (pulse, wave, none)
  - Size control (width, height)
  - Count (multiple skeleton lines)
  - Preset system

### Barebones to Ready (7)

**TextInput** - Text input field

- Status: Barebones → Ready
- Tasks:
  - All input types (text, email, password, number, tel, url)
  - Label and placeholder
  - Error state and messages
  - Disabled state
  - Required indicator
  - Helper text
  - Icons (left, right)
  - Clear button option
  - Character count
  - Preset system

**Checkbox** - Checkbox input

- Status: Barebones → Ready
- Tasks:
  - Checked/unchecked states
  - Indeterminate state
  - Disabled state
  - Label positioning
  - Error state
  - Keyboard navigation
  - ARIA attributes
  - Preset system

**RadioButtons** - Radio button group

- Status: Barebones → Ready
- Tasks:
  - Group management
  - Disabled state
  - Error state
  - Layout (vertical, horizontal)
  - Keyboard navigation (arrow keys)
  - ARIA attributes
  - Preset system

**Toggle** - Switch/toggle component

- Status: Barebones → Ready
- Tasks:
  - On/off states
  - Disabled state
  - Label support
  - Size variants
  - Icons option
  - Keyboard navigation
  - ARIA switch role
  - Preset system

**Dropdown** - Select/dropdown menu

- Status: Barebones → Ready
- Tasks:
  - Single/multi-select
  - Search/filter
  - Disabled options
  - Option groups
  - Custom option rendering
  - Keyboard navigation (arrow keys, type-ahead)
  - Portal rendering
  - Focus management
  - ARIA combobox pattern
  - Preset system

**ProgressBar** - Progress indicator

- Status: Barebones → Ready
- Tasks:
  - Determinate/indeterminate modes
  - Variants (default, success, warning, danger)
  - Size options
  - Label/percentage display
  - Striped animation option
  - ARIA progressbar role
  - Preset system

**Tooltip** - Hover tooltip

- Status: Barebones → Ready
- Tasks:
  - Positioning (top, bottom, left, right)
  - Trigger types (hover, focus, click)
  - Delay control
  - Arrow indicator
  - Max-width control
  - Portal rendering
  - Keyboard accessibility
  - ARIA tooltip role
  - Preset system

## Production-Ready Definition

A component is considered production-ready when it meets all criteria:

### Testing

- Test coverage >90%
- All variants tested
- All prop combinations tested
- Edge cases covered
- Responsive behavior tested
- Dark mode tested (if applicable)

### TypeScript

- Full type definitions
- Preset system integration (if applicable)
- Module augmentation for custom presets
- Exported types for all props
- Generic polymorphic types (if applicable)

### Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation implemented
- ARIA attributes correct
- Screen reader tested
- Focus management
- Color contrast verified

### Documentation

- Complete Storybook stories
- All major use cases demonstrated
- Interactive controls for key props
- Accessibility features documented
- README.md with examples

### Code Quality

- Zero linter errors
- Zero type errors
- Follows project conventions
- Component-level CSS variables
- Responsive design
- Performance optimized

### Status Badge

- Storybook status updated: `status:ready`
- README updated to reflect status

## Release Checklist

Before releasing v0.3.0:

- [ ] All 17 components meet production-ready criteria
- [ ] Update CHANGELOG.md
- [ ] Version bump to 0.3.0 in package.json
- [ ] All tests passing (target: >1000 tests)
- [ ] Build succeeds without errors
- [ ] Type checking passes
- [ ] Linting passes with zero warnings
- [ ] Storybook builds successfully
- [ ] README updated with new components
- [ ] Update status badges in all stories
- [ ] npm publish
- [ ] GitHub release with release notes
- [ ] Update Storybook deployment

## Future Roadmap

### v0.4.0 - Production-Ready Compositions

**Target components:**

- Alert (WIP → Ready)
- LoadingScreen (WIP → Ready)
- Modal (Barebones → Ready)
- Toast (Barebones → Ready)
- Pagination (Barebones → Ready)
- Breadcrumb (Barebones → Ready)

**New compositions:**

- Card
- Tabs
- Accordion
- Menu/Navigation
- Table
- Form

### v0.5.0 - First Templates

**Target templates:**

- LoginPage
- SignupPage
- ProfilePage
- SettingsPage
- DashboardLayout
- ErrorPage (404, 500)

### v1.0.0 - Stable API

**Goals:**

- API stable and proven in production
- All primitives production-ready
- Core compositions production-ready
- Essential templates available
- Comprehensive documentation
- Migration guides
- Community adoption

## Contributing

Contributions are welcome! Here's how to get involved:

### Picking Up Work

1. Check the [v0.3.0 Milestone](https://github.com/markfoster314/marduk/milestone/1) on GitHub
2. Find an unassigned component
3. Comment on the issue to claim it
4. Fork and create a feature branch
5. Follow the production-ready checklist
6. Submit a PR

### Branch Strategy

- `main` - stable code
- `release/v0.3.0` - v0.3.0 work-in-progress
- `feat/component-name` - individual component work

Feature branches should branch off `release/v0.3.0` and merge back into it.

### Component Development Checklist

- [ ] Component implementation
- [ ] TypeScript types with preset support
- [ ] Comprehensive tests (>90% coverage)
- [ ] Storybook stories (all variants)
- [ ] README.md documentation
- [ ] Accessibility testing
- [ ] Dark mode support
- [ ] Responsive design
- [ ] Update status badge to `status:ready`

### Questions?

- Open a [Discussion](https://github.com/markfoster314/marduk/discussions)
- Check [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines
- Reach out to [@markfoster314](https://github.com/markfoster314)

---

**Last Updated:** November 2025  
**Version:** 0.2.0  
**Next Release:** v0.3.0 (TBD)
