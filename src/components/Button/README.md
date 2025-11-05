# Button

A flexible, accessible button component

Got any ideas for stuff to add? [Open an issue](https://github.com/markfoster314/marduk/issues/new)

## Basic Usage

```tsx
import { Button } from "@markfoster314/marduk";

<Button variant="primary">Click me</Button>;
```

## Variants

Current variants : `primary`, `secondary`, `success`, `warning`, or `danger`.

```tsx
<Button variant="success">Save</Button>
<Button variant="danger">Delete</Button>
```

## Appearances

`filled` (default), `outline`, or `text`.

```tsx
<Button variant="primary" appearance="outline">Outline</Button>
<Button variant="success" appearance="text">Text Button</Button>
```

## Sizes

`small`, `medium` (default), or `large`.

```tsx
<Button size="small">Small</Button>
<Button size="large">Large</Button>
```

## Icons

Add icons on either side, or make it icon-only.

```tsx
<Button leftIcon={<UserIcon />}>Profile</Button>
<Button rightIcon={<ArrowIcon />}>Next</Button>
<Button iconOnly leftIcon={<SearchIcon />}>Search</Button>
```

## Loading State

Currently shows a spinner.

TODO: add more loading state indicator options

```tsx
<Button loading>Loading...</Button>
<Button loading loadingText="Saving...">Save</Button>
```

## Async onClick

Handles loading state for async operations automatically.

NOTE: supports both onClick and onClick async at the same time. onClick will trigger before onClick async

```tsx
<Button
  onClickAsync={async () => {
    await saveData();
  }}
>
  Save
</Button>
```

## Polymorphic

Render as anything using the `as` prop.

```tsx
<Button as="a" href="/profile">Profile</Button>
<Button as={Link} to="/home">Home</Button>
```

## Dark Mode

```tsx
<Button darkMode variant="primary">
  Dark Button
</Button>
```

## Full Width

```tsx
<Button fullWidth>Stretch me</Button>
```

## Customization

Override CSS variables for custom styling.

```tsx
<Button
  style={
    {
      "--button-border-radius": "999px",
      "--button-active-scale": "1",
      "--button-icon-gap": "12px",
    } as React.CSSProperties
  }
>
  Custom Button
</Button>
```

### Available CSS Variables

- `--button-bg` / `--button-bg-hover`
- `--button-color` / `--button-color-hover`
- `--button-border-color` / `--button-border-width`
- `--button-border-radius`
- `--button-font-weight`
- `--button-focus-outline-color` / `--button-focus-outline-width` / `--button-focus-outline-offset`
- `--button-active-scale`
- `--button-icon-gap`
- `--button-disabled-opacity` / `--button-disabled-filter`

## Props

| Prop           | Type                                                   | Default   | Description                           |
| -------------- | ------------------------------------------------------ | --------- | ------------------------------------- |
| `variant`      | `primary \| secondary \| success \| warning \| danger` | `primary` | Button color scheme                   |
| `appearance`   | `filled \| outline \| text`                            | `filled`  | Visual style                          |
| `size`         | `small \| medium \| large`                             | `medium`  | Button size                           |
| `disabled`     | `boolean`                                              | `false`   | Disable the button                    |
| `loading`      | `boolean`                                              | `false`   | Show loading state                    |
| `loadingText`  | `string`                                               | -         | Override text during loading          |
| `leftIcon`     | `ReactNode`                                            | -         | Icon on the left                      |
| `rightIcon`    | `ReactNode`                                            | -         | Icon on the right                     |
| `iconOnly`     | `boolean`                                              | `false`   | Hide text, show only icon             |
| `fullWidth`    | `boolean`                                              | `false`   | Stretch to full width                 |
| `darkMode`     | `boolean`                                              | `false`   | Dark mode styling                     |
| `as`           | `ElementType`                                          | `button`  | Render as different element           |
| `onClick`      | `function`                                             | -         | Click handler                         |
| `onClickAsync` | `async function`                                       | -         | Async click handler with auto-loading |

Plus all standard button/element props.

## Accessibility

- Keyboard navigable (Tab, Enter, Space)
- Proper ARIA attributes (`aria-busy`, `aria-disabled`)
- Screen reader support (icon-only buttons keep text for SR)
- High contrast mode support
- Reduced motion support

## Testing

Data attributes are included for E2E testing:

```tsx
<Button variant="primary" size="large" loading />
// data-variant="primary"
// data-appearance="filled"
// data-size="large"
// data-loading="true"
```

---

For more examples, check out the Storybook stories.

THX 4 READING
