# Toast

<div align="center">
  <img src="../../../docs/images/touhou.png" alt="Touhou from Touhou" width="400">
</div>

_"I killed some lively and exciting guys on my way up here..."_

Non-intrusive notification messages that appear temporarily to provide user feedback

## Basic Usage

```tsx
import { Toast } from "@markfoster314/marduk";

<Toast message="This is a toast notification" />;
```

## Variants

Choose from 4 variants: `info` (default), `success`, `warning`, or `error`.

```tsx
<Toast variant="info" message="Information message" />
<Toast variant="success" message="Success message" />
<Toast variant="warning" message="Warning message" />
<Toast variant="error" message="Error message" />
```

## Positions

Toast can be positioned in 6 different locations. Default is `top-right`.

```tsx
<Toast position="top-right" message="Top right position" />
<Toast position="top-left" message="Top left position" />
<Toast position="top-center" message="Top center position" />
<Toast position="bottom-right" message="Bottom right position" />
<Toast position="bottom-left" message="Bottom left position" />
<Toast position="bottom-center" message="Bottom center position" />
```

## Auto Dismiss

Toasts automatically dismiss after a specified duration (in milliseconds). Set `duration={0}` to prevent auto-dismiss.

```tsx
<Toast message="This will auto-dismiss in 5 seconds" duration={5000} />
<Toast message="This toast stays until manually closed" duration={0} />
```

## Manual Close

Toasts include a close button that can be clicked to dismiss them manually.

```tsx
<Toast message="Click the X to close" onClose={() => console.log("Closed")} />
```

## Custom Text

You can pass a custom React element as the message text using the `customText` prop. If `customText` is provided, it takes precedence over the default `message` prop.

```tsx
import { Toast, Text } from "@markfoster314/marduk";

<Toast
  variant="info"
  customText={<Text preset={["primary"]} size="md">Custom message text</Text>}
  message="This message prop will be ignored when customText is provided"
/>

<Toast
  variant="success"
  customText={
    <div>
      <Text preset={["success"]} weight="semibold">Success!</Text>
      <Text preset={["success"]} size="sm">Your changes have been saved.</Text>
    </div>
  }
  message="Toast with complex custom text"
/>
```

## Custom Icon

You can pass a custom React element as the icon using the `customIcon` prop. If `customIcon` is provided, it replaces the default variant icon.

```tsx
import { Toast } from "@markfoster314/marduk";

<Toast
  variant="info"
  customIcon={<span style={{ fontSize: "20px" }}>🔔</span>}
  message="Toast with custom emoji icon"
/>

<Toast
  variant="error"
  customIcon={<CustomErrorIcon />}
  message="Toast with custom icon component"
/>
```

## Custom Button

You can pass a custom React element as the close button using the `customButton` prop. If `customButton` is provided, it replaces the default close button.

```tsx
import { Toast, Button } from "@markfoster314/marduk";

<Toast
  variant="info"
  customButton={
    <Button appearance="text" size="small" onClick={() => console.log("Custom close")}>
      Close
    </Button>
  }
  message="Toast with custom close button"
/>

<Toast
  variant="warning"
  customButton={
    <button
      type="button"
      onClick={() => console.log("Dismissed")}
      style={{ padding: "4px 8px", fontSize: "12px" }}
    >
      Dismiss
    </button>
  }
  message="Toast with custom button element"
/>
```

## Customization

Override CSS variables for custom styling.

```tsx
<Toast
  variant="info"
  message="Custom styled toast"
  style={{
    "--toast-bg": "#e3f2fd",
    "--toast-border-color": "#1976d2",
    "--toast-text-color": "#0d47a1",
    "--toast-icon-size": "24px",
    "--toast-min-width": "350px",
    "--toast-offset": "30px",
  }}
/>
```

Available variables: colors (bg, border, text, icon), sizing (padding, gap, icon size, min/max width, offset), close button (opacity, hover background), animation (duration, translate), and more. Check the CSS file for the complete list.

## Props

| Prop           | Type                                                                                  | Default     | Description                                                     |
| -------------- | ------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------- |
| `message`      | `string`                                                                              | -           | Toast message text (required)                                   |
| `variant`      | `info \| success \| warning \| error`                                                 | `info`      | Toast variant                                                   |
| `position`     | `top-right \| top-left \| bottom-right \| bottom-left \| top-center \| bottom-center` | `top-right` | Toast position on screen                                        |
| `duration`     | `number`                                                                              | `5000`      | Auto-dismiss duration in milliseconds (0 = no auto-dismiss)     |
| `onClose`      | `() => void`                                                                          | -           | Callback fired when toast is dismissed                          |
| `customText`   | `ReactElement`                                                                        | -           | Custom message text component (takes precedence over `message`) |
| `customIcon`   | `ReactElement`                                                                        | -           | Custom icon component (replaces default variant icon)           |
| `customButton` | `ReactElement`                                                                        | -           | Custom close button component (replaces default button)         |

## Testing

Data attributes included for E2E testing: `data-variant`, `data-position`

```tsx
<Toast variant="error" message="Error message" position="top-right" />
// data-variant="error"
// data-position="top-right"
// role="alert"
// aria-label="Close toast" on close button
```

## Accessibility

- Uses `role="alert"` for screen reader announcements
- Error toasts use `aria-live="assertive"` for immediate announcements
- Other variants use `aria-live="polite"` for polite announcements
- Uses `aria-atomic="true"` to ensure entire message is read
- Close button has proper `aria-label` for screen readers
- Close button is keyboard accessible
- Animations disabled when `prefers-reduced-motion` is set
- Enhanced contrast in high contrast mode

---

For more examples, check out the Storybook stories.

THX 4 READING
