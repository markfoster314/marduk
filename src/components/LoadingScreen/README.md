# LoadingScreen

<div align="center">
  <img src="../../../docs/images/touhou.png" alt="Touhou from Touhou" width="400">
</div>

_"Okay, let me ask you, are you sure? 'Cause I've seen this once before"_

Full-screen loading overlay

Got any ideas for stuff to add? [Open an issue](https://github.com/markfoster314/marduk/issues/new)

## Basic Usage

```tsx
import { LoadingScreen } from "@markfoster314/marduk";

<LoadingScreen />;
```

## Animations

Choose from 10 different animations: `pulse` (default), `rotate`, `breathe`, `glitch`, `ripple`, `bounce`, `swing`, `flip`, `orbit`, or `shake`.

```tsx
<LoadingScreen animation="ripple" />
<LoadingScreen animation="glitch" />
<LoadingScreen animation="bounce" />
```

## Custom Text

Change the loading text or hide it completely.

```tsx
<LoadingScreen text="Processing your request" />
<LoadingScreen showText={false} />
```

## Custom Icon

Pass any React element as the icon.

```tsx
import { YourLogo } from "./icons";

<LoadingScreen icon={<YourLogo />} />;
```

## Text Variants

Style the text with variants: `default`, `primary`, `secondary`, `success`, `danger`, `warning`, or `muted`.

```tsx
<LoadingScreen textVariant="primary" />
<LoadingScreen textVariant="danger" text="Error loading" />
```

## Dark Mode

```tsx
<LoadingScreen darkMode />
```

## Customization

Override CSS variables for custom styling.

```tsx
<LoadingScreen
  style={{
    "--loading-screen-bg-light": "#f5f5f5",
    "--loading-screen-icon-size": "10rem",
    "--loading-screen-pulse-duration": "3s",
    "--loading-screen-shadow-color": "rgba(255, 0, 0, 0.5)",
  }}
/>
```

Available variables: icon sizing, animation durations, shadow colors, text styling, and more. Check the CSS file for the complete list.

## Props

| Prop          | Type                                                                                          | Default     | Description            |
| ------------- | --------------------------------------------------------------------------------------------- | ----------- | ---------------------- |
| `animation`   | `pulse \| rotate \| breathe \| glitch \| ripple \| bounce \| swing \| flip \| orbit \| shake` | `pulse`     | Animation type         |
| `showText`    | `boolean`                                                                                     | `true`      | Show/hide loading text |
| `text`        | `string`                                                                                      | `"Loading"` | Custom loading text    |
| `icon`        | `ReactElement`                                                                                | -           | Custom icon element    |
| `darkMode`    | `boolean`                                                                                     | `false`     | Dark mode styling      |
| `textVariant` | `default \| primary \| secondary \| success \| danger \| warning \| muted`                    | `default`   | Text color variant     |
| `style`       | `CSSProperties`                                                                               | -           | Custom inline styles   |

## Testing

Data attributes included for E2E testing: `data-animation`, `data-show-text`, `data-dark-mode`, `data-text-variant`

```tsx
<LoadingScreen animation="bounce" darkMode />
// data-animation="bounce"
// data-dark-mode="true"
```

---

For more examples, check out the Storybook stories.

THX 4 READING
