# Roadmap

## Overview

Marduk is a lightweight React component library with zero dependencies, built for rapid development. This roadmap tracks the library's evolution from beta to production-ready status across three tiers: Primitives, Compositions, and Templates.

## Current Status

- Version: 0.3.0 (ready for release)
- Test Coverage: 1000+ tests passing
- Production-Ready Components: 20 (all primitives complete)
- Total Primitive Components: 20
- v0.3.0 Status: COMPLETE - All primitives production-ready

## v0.2.1 - Interim Release (2025-11-09)

Released 4 production-ready components (Title, Button, Svg, Link) with preset systems and breaking changes. v0.3.0 work continues with remaining 13 components.

## v0.3.0 - Production-Ready Primitives COMPLETE

**Goal:** Establish a comprehensive foundation of production-ready primitive components.

**Status:** **COMPLETE** - All 20 primitive components are production-ready

**Release Date:** Ready for release

**Scope:** 20 components total (all complete)

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
- LoadingIndicator (WIP → Ready)
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
- Check [CONTRIBUTING.md](../CONTRIBUTING.md) for detailed guidelines
- Reach out to [@markfoster314](https://github.com/markfoster314)

---

**Last Updated:** December 2025  
**Version:** 0.3.0  
**Status:** Ready for release
