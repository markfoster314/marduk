# Svg

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"I guess power comes at a price in every world."_

SVG icon component with animations and transformations

## Basic Usage

```tsx
import { Svg } from "@markfoster314/marduk";

<Svg>
  <path d="M12 2 L2 7 l10 5 10-5-10-5z" />
</Svg>;
```

## Preset System

Presets provide composable, type-safe styling configurations:

```tsx
// Color presets
<Svg preset={["primary"]}>
  <path d="..." />
</Svg>

// Size presets
<Svg preset={["large"]}>
  <path d="..." />
</Svg>

// Loading preset (with spin)
<Svg preset={["loading"]}>
  <path d="..." />
</Svg>

// Combine multiple presets
<Svg preset={["xl", "success"]}>
  <path d="..." />
</Svg>

// Dark mode presets
<Svg preset={["primaryDark"]}>
  <path d="..." />
</Svg>
```

### Built-in Presets

**Base:**

- `default` - Medium size, currentColor
- `icon` - Medium size, decorative
- `loading` - Spin animation enabled

**Colors (Light):**

- `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `muted`

**Colors (Dark):**

- `primaryDark`, `secondaryDark`, `successDark`, `dangerDark`, `warningDark`, `infoDark`, `mutedDark`

**Sizes:**

- `large`, `xl`

### Custom Presets

Define your own presets:

```tsx
import { defineSvgPresets } from "@markfoster314/marduk";

defineSvgPresets({
  brand: {
    color: "var(--brand-color)",
    size: "large",
  },
  spinner: {
    spin: true,
    spinSpeed: "fast",
    size: "xl",
  },
});

<Svg preset={["brand"]}>
  <path d="..." />
</Svg>;
```

## Customization

Override CSS variables for custom styling.

```tsx
<Svg
  style={
    {
      "--svg-rotation-90": "75deg",
      "--svg-animation-spin-normal": "2s",
      "--svg-responsive-scale": 1.5,
    } as React.CSSProperties
  }
>
  <CustomIcon />
</Svg>
```

### Available CSS Variables

**Rotation:**

- `--svg-rotation-90`, `--svg-rotation-180`, `--svg-rotation-270`, `--svg-rotation-360`

**Scaling:**

- `--svg-scale-flip`, `--svg-scale-normal`
- `--svg-responsive-scale`

**Animation Durations:**

- `--svg-animation-spin-slow`, `--svg-animation-spin-normal`, `--svg-animation-spin-fast`
- `--svg-animation-heartpulse-duration`

**Heartpulse Animation:**

- `--svg-heartpulse-scale-start`, `--svg-heartpulse-scale-peak`
- `--svg-heartpulse-shadow-dark`, `--svg-heartpulse-shadow-light`
- `--svg-heartpulse-shadow-offset-mobile/tablet/desktop`
- `--svg-heartpulse-shadow-peak-mobile/tablet/desktop`

## Props

| Prop             | Type                                                           | Default        | Description                                |
| ---------------- | -------------------------------------------------------------- | -------------- | ------------------------------------------ |
| `preset`         | `string[]`                                                     | `[]`           | Preset configurations (composable)         |
| `size`           | `xs \| small \| medium \| large \| xl \| 2xl \| 3xl \| number` | `medium`       | Icon size with responsive scaling          |
| `color`          | `string`                                                       | `currentColor` | Custom color                               |
| `viewBox`        | `string`                                                       | `0 0 24 24`    | SVG viewBox attribute                      |
| `align`          | `left \| center \| right`                                      | -              | Horizontal alignment                       |
| `rotate`         | `0 \| 90 \| 180 \| 270`                                        | -              | Rotation in degrees                        |
| `flip`           | `horizontal \| vertical \| both`                               | -              | Flip direction                             |
| `spin`           | `boolean`                                                      | `false`        | Enable spin animation                      |
| `spinSpeed`      | `slow \| normal \| fast`                                       | `normal`       | Spin animation speed                       |
| `animation`      | `heartpulse`                                                   | -              | Custom animation type                      |
| `strokeWidth`    | `number \| string`                                             | -              | Stroke width for outlined icons            |
| `strokeLinecap`  | `butt \| round \| square`                                      | -              | Stroke line cap style                      |
| `strokeLinejoin` | `miter \| round \| bevel`                                      | -              | Stroke line join style                     |
| `hoverColor`     | `string`                                                       | -              | Color on hover                             |
| `responsive`     | `boolean`                                                      | `false`        | Enable responsive scaling for custom sizes |
| `filter`         | `string`                                                       | -              | CSS filter effects                         |
| `title`          | `string`                                                       | -              | Accessible title for screen readers        |
| `description`    | `string`                                                       | -              | Accessible description                     |
| `decorative`     | `boolean`                                                      | `false`        | Mark as decorative (aria-hidden)           |

Plus all standard SVG element props.

## Accessibility

- Proper ARIA attributes (`role="img"`, `aria-hidden`)
- Support for `<title>` and `<desc>` elements for screen readers
- Decorative prop for icons that are purely visual
- High contrast mode support (enhanced outlines on hover)
- Reduced motion support (disables all animations)
- WCAG 2.1 compliant

## Responsive Design

Like the rest of the application, these three breakpoints are supported in the component itself:

- **Mobile** (0-767px): Base sizes
- **Tablet** (768px+): ~12-17% larger
- **Desktop** (1024px+): ~25-33% larger

Example sizing:

- `xs`: 12px → 14px → 16px
- `small`: 16px → 20px → 24px
- `medium`: 24px → 28px → 32px
- `large`: 32px → 36px → 40px
- `xl`: 48px → 54px → 60px
- `2xl`: 64px → 72px → 80px
- `3xl`: 96px → 108px → 120px

Custom numeric sizes remain fixed unless `responsive={true}` is set.

## Testing

Data attributes are included for E2E testing:

```tsx
<Svg size="large" rotate={90} spin spinSpeed="fast" />
// data-size="large"
// data-rotate="90"
// data-spin="true"
// data-spin-speed="fast"
```

Available attributes: `data-size`, `data-custom-size`, `data-responsive`, `data-filter`, `data-preset`, `data-align`, `data-rotate`, `data-flip`, `data-spin`, `data-spin-speed`, `data-animation`, `data-decorative`, `data-custom-color`, `data-hoverable`, `data-stroke-width`

---

For more examples, check out the Storybook stories.

THX 4 READING
