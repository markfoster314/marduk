# Icons

<div align="center">
  <img src="../../docs/images/touhou.png" alt="Touhou from Touhou" width="400">
</div>

_"There's no way back"_

Icon library with individual components and a generic loader

Got any ideas for stuff to add? [Open an issue](https://github.com/markfoster314/marduk/issues/new)

## Basic Usage

```tsx
import { UserIcon, CircleInfoIcon } from "@markfoster314/marduk";

<UserIcon size="large" color="blue" />;
```

## Generic Icon Component

Load icons dynamically by name.

**NOTE**: much larger bundle size as you are importing all of the icons in the library

```tsx
import { Icon } from "@markfoster314/marduk";

<Icon name="user" size="large" />;
```

## All Svg Features Supported

Icons extend the Svg component, so they support all its features.

```tsx
<UserIcon size="large" rotate={90} color="var(--marduk-color-primary-500)" />
<CircleInfoIcon size="xl" spin spinSpeed="fast" />
<ThumbsUpIcon size="2xl" hoverColor="var(--marduk-color-success-500)" />
```

## Props

All icon components accept the same props as the Svg component:

| Prop         | Type                                                           | Default        | Description           |
| ------------ | -------------------------------------------------------------- | -------------- | --------------------- |
| `size`       | `xs \| small \| medium \| large \| xl \| 2xl \| 3xl \| number` | `medium`       | Icon size             |
| `color`      | `string`                                                       | `currentColor` | Custom color          |
| `rotate`     | `0 \| 90 \| 180 \| 270`                                        | -              | Rotation in degrees   |
| `flip`       | `horizontal \| vertical \| both`                               | -              | Flip direction        |
| `spin`       | `boolean`                                                      | `false`        | Enable spin animation |
| `spinSpeed`  | `slow \| normal \| fast`                                       | `normal`       | Spin animation speed  |
| `darkMode`   | `boolean`                                                      | `false`        | Dark mode styling     |
| `filter`     | `string`                                                       | -              | CSS filter effects    |
| `hoverColor` | `string`                                                       | -              | Color on hover        |
| `responsive` | `boolean`                                                      | `false`        | Responsive scaling    |

Plus all standard SVG element props.

## Customization

Override CSS variables for custom styling.

```tsx
<UserIcon
  size="xl"
  style={{
    "--svg-animation-spin-normal": "3s",
    "--svg-responsive-scale": 1.5,
  }}
/>
```

Check the Svg component documentation for all available CSS variables.

## Testing

Data attributes included for E2E testing.

```tsx
<UserIcon size="large" rotate={90} spin />
// data-size="large"
// data-rotate="90"
// data-spin="true"
```

---

For more examples, check out the Storybook stories.

THX 4 READING
