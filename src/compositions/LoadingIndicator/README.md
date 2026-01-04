# LoadingIndicator

<div align="center">
  <img src="../../../docs/images/touhou.png" alt="Touhou from Touhou" width="400">
</div>

_"Okay, let me ask you, are you sure? 'Cause I've seen this once before"_

Loading indicator with icon and optional text

## Basic Usage

```tsx
import { LoadingIndicator } from "@markfoster314/marduk";

<LoadingIndicator />;
```

## Animations

Choose from 10 different animations: `pulse` (default), `rotate`, `breathe`, `glitch`, `ripple`, `bounce`, `swing`, `flip`, `orbit`, or `shake`.

```tsx
<LoadingIndicator animation="ripple" />
<LoadingIndicator animation="glitch" />
<LoadingIndicator animation="bounce" />
```

## Custom Text

Change the loading text or hide it completely.

```tsx
<LoadingIndicator text="Processing your request" />
<LoadingIndicator showText={false} />
```

## Custom Text Component

You can pass a custom React element as the text using the `customText` prop. If `customText` is provided, it takes precedence over the default `text` prop. Note that when using `customText`, the animated dots are not automatically included.

```tsx
import { LoadingIndicator, Text } from "@markfoster314/marduk";

<LoadingIndicator
  customText={<Text preset={["primary"]} size="md">Custom loading message</Text>}
  text="This text prop will be ignored when customText is provided"
/>

<LoadingIndicator
  customText={
    <div>
      <Text preset={["primary"]} weight="semibold">Processing</Text>
      <Text preset={["primary"]} size="sm">This may take a moment</Text>
    </div>
  }
  text="Loading with complex custom text"
/>
```

## Custom Icon

Pass any React element as the icon.

```tsx
import { YourLogo } from "./icons";

<LoadingIndicator icon={<YourLogo />} />;
```

## Text Variants

Style the text with variants: `default`, `primary`, `secondary`, `success`, `danger`, `warning`, or `muted`.

```tsx
<LoadingIndicator textVariant="primary" />
<LoadingIndicator textVariant="danger" text="Error loading" />
```

## Dark Mode

```tsx
<LoadingIndicator darkMode />
```

## Fullscreen vs Container Mode

By default, the loading indicator is positioned relative to its container. In container mode, it's wrapped in a Box with `min-height: 200px` to ensure proper sizing. Set `fullscreen={true}` for the original fullscreen overlay behavior.

```tsx
{
  /* Container mode (default) - relative to parent */
  /* Wrapped in a Box with min-height: 200px */
}
<div style={{ width: "400px", height: "300px", position: "relative" }}>
  <LoadingIndicator position="middle-center" />
</div>;

{
  /* Fullscreen mode - covers entire viewport */
}
<LoadingIndicator fullscreen position="middle-center" />;
```

## Position

Control where the loading indicator appears on the screen. Default is `middle-center`.

```tsx
<LoadingIndicator position="top-left" />
<LoadingIndicator position="top-center" />
<LoadingIndicator position="top-right" />
<LoadingIndicator position="middle-left" />
<LoadingIndicator position="middle-center" /> {/* default */}
<LoadingIndicator position="middle-right" />
<LoadingIndicator position="bottom-left" />
<LoadingIndicator position="bottom-center" />
<LoadingIndicator position="bottom-right" />
```

Positions work in both fullscreen and container modes. In fullscreen mode, non-center positions have transparent backgrounds.

## Customization

Override CSS variables for custom styling.

```tsx
<LoadingIndicator
  style={{
    "--loading-indicator-bg-light": "#f5f5f5",
    "--loading-indicator-icon-size": "10rem",
    "--loading-indicator-pulse-duration": "3s",
    "--loading-indicator-shadow-color": "rgba(255, 0, 0, 0.5)",
  }}
/>
```

Available variables: icon sizing, animation durations, shadow colors, text styling, and more. Check the CSS file for the complete list.

## Responsive Design

The loading indicator scales automatically across three breakpoints:

- **Mobile** (0-767px): Base sizes (icon: 6rem, gap: 2rem, text: 1.25rem)
- **Tablet** (768px+): ~15% larger (icon: 8rem + scale, gap: 2.5rem, text: 1.375rem)
- **Desktop** (1024px+): ~30% larger (icon: 9rem + scale, gap: 3rem, text: 1.5rem)

The icon, gap, and text size all scale proportionally for smooth UI transitions.

## Props

| Prop          | Type                                                                                                                                  | Default         | Description                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------- |
| `animation`   | `pulse \| rotate \| breathe \| glitch \| ripple \| bounce \| swing \| flip \| orbit \| shake`                                         | `pulse`         | Animation type                                                      |
| `showText`    | `boolean`                                                                                                                             | `true`          | Show/hide loading text                                              |
| `text`        | `string`                                                                                                                              | `"Loading"`     | Custom loading text                                                 |
| `customText`  | `ReactElement`                                                                                                                        | -               | Custom text component (takes precedence over `text`)                |
| `icon`        | `ReactElement`                                                                                                                        | -               | Custom icon element                                                 |
| `darkMode`    | `boolean`                                                                                                                             | `false`         | Dark mode styling                                                   |
| `textVariant` | `default \| primary \| secondary \| success \| danger \| warning \| muted`                                                            | `default`       | Text color variant                                                  |
| `position`    | `top-left \| top-center \| top-right \| middle-left \| middle-center \| middle-right \| bottom-left \| bottom-center \| bottom-right` | `middle-center` | Position of the indicator                                           |
| `fullscreen`  | `boolean`                                                                                                                             | `false`         | Use fullscreen overlay (fixed positioning) vs relative to container |
| `style`       | `CSSProperties`                                                                                                                       | -               | Custom inline styles                                                |

## Accessibility

- Uses `role="status"` for screen reader announcements
- Uses `aria-live="polite"` for non-intrusive loading updates
- Uses `aria-busy={true}` to indicate loading state
- Provides `aria-label` when text is hidden
- Animations disabled when `prefers-reduced-motion` is set
- WCAG 2.1 compliant

## Testing

Data attributes included for E2E testing: `data-animation`, `data-show-text`, `data-position`, `data-fullscreen`, `data-dark-mode`, `data-text-variant`

```tsx
<LoadingIndicator animation="bounce" position="top-right" fullscreen darkMode />
// data-animation="bounce"
// data-position="top-right"
// data-fullscreen="true"
// data-dark-mode="true"
```

---

For more examples, check out the Storybook stories.

THX 4 READING
