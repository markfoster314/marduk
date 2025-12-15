# Image

Smart image component with lazy loading, placeholder support, error handling, and aspect ratio control.

## Basic Usage

```tsx
import { Image } from "@markfoster314/marduk";

// Basic usage
<Image src="photo.jpg" alt="Description" />

// With aspect ratio
<Image src="photo.jpg" alt="Description" aspectRatio="16:9" />

// With placeholder
<Image src="photo.jpg" alt="Description" placeholder="placeholder.jpg" />

// With preset
<Image src="photo.jpg" alt="Description" preset={["rounded"]} />
```

## Lazy Loading

Lazy loading is enabled by default to improve performance:

```tsx
// Lazy loading (default)
<Image src="photo.jpg" alt="Description" />

// Eager loading
<Image src="photo.jpg" alt="Description" lazy={false} />
```

Images with `lazy={true}` (default) only load when they enter the viewport, reducing initial page load time.

## Object Fit

Control how the image fits within its container:

```tsx
<Image src="photo.jpg" alt="Contain" objectFit="contain" />
<Image src="photo.jpg" alt="Cover" objectFit="cover" />
<Image src="photo.jpg" alt="Fill" objectFit="fill" />
<Image src="photo.jpg" alt="None" objectFit="none" />
<Image src="photo.jpg" alt="Scale Down" objectFit="scale-down" />
```

**Options:**

- `contain` - Image scales to fit within container, maintaining aspect ratio
- `cover` - Image fills container, may be cropped (default)
- `fill` - Image stretches to fill container, may distort
- `none` - Image maintains original size
- `scale-down` - Behaves like `none` or `contain`, whichever is smaller

## Aspect Ratio

Maintain consistent image dimensions:

```tsx
<Image src="photo.jpg" alt="Square" aspectRatio="1:1" />
<Image src="photo.jpg" alt="Standard" aspectRatio="4:3" />
<Image src="photo.jpg" alt="Widescreen" aspectRatio="16:9" />
<Image src="photo.jpg" alt="Ultrawide" aspectRatio="21:9" />
<Image src="photo.jpg" alt="Auto" aspectRatio="auto" />
```

**Available ratios:**

- `1:1` - Square
- `4:3` - Standard
- `16:9` - Widescreen
- `21:9` - Ultrawide
- `auto` - Natural aspect ratio (default)

## Sizing

Control image dimensions:

```tsx
// Fixed width
<Image src="photo.jpg" alt="Fixed width" width="300" />

// Fixed height
<Image src="photo.jpg" alt="Fixed height" height="200" />

// Fixed dimensions
<Image src="photo.jpg" alt="Fixed size" width="400" height="300" />

// Responsive (max-width: 100%)
<Image src="photo.jpg" alt="Responsive" />
```

Width and height can be strings (`"300px"`, `"50%"`) or numbers (pixels).

## Placeholder

Show a placeholder image while loading or on error:

```tsx
<Image src="photo.jpg" alt="Description" placeholder="placeholder.jpg" />
```

The placeholder:

- Shows while the main image is loading
- Replaces the main image if it fails to load
- Is hidden from screen readers (`aria-hidden="true"`)

## Error Handling

Graceful error handling with fallback options:

```tsx
// With placeholder fallback
<Image
  src="photo.jpg"
  alt="Description"
  placeholder="fallback.jpg"
/>

// Without placeholder - shows error message
<Image src="invalid.jpg" alt="Description" />
```

**Error behavior:**

- If `placeholder` is provided, shows placeholder image
- Otherwise, displays a fallback div with "Image failed to load" message
- Error fallback includes `role="img"` and `aria-label` for accessibility

## Preset System

Presets provide composable, type-safe styling configurations:

```tsx
// Built-in presets
<Image src="photo.jpg" alt="Rounded" preset={["rounded"]} />
<Image src="photo.jpg" alt="Circle" preset={["circle"]} />
<Image src="photo.jpg" alt="Thumbnail" preset={["thumbnail"]} />
<Image src="photo.jpg" alt="Cover" preset={["cover"]} />

// Combine multiple presets
<Image src="photo.jpg" alt="Combined" preset={["rounded", "cover"]} />
```

### Built-in Presets

- **`rounded`** - Adds medium border radius
- **`circle`** - Makes image circular (50% border radius)
- **`thumbnail`** - Square thumbnail (1:1 aspect ratio, 100px × 100px, cover fit)
- **`cover`** - Full width with cover fit

### Custom Presets

Define your own presets:

```tsx
import { defineImagePresets } from "@markfoster314/marduk";

defineImagePresets({
  hero: {
    objectFit: "cover",
    aspectRatio: "16:9",
    width: "100%",
  },
  avatar: {
    objectFit: "cover",
    aspectRatio: "1:1",
    width: "80px",
    height: "80px",
    style: {
      borderRadius: "50%",
    },
  },
});

<Image src="photo.jpg" alt="Hero" preset={["hero"]} />;
```

## Custom Styling

Override styles using CSS variables or inline styles:

```tsx
// Custom border
<Image
  src="photo.jpg"
  alt="Custom"
  style={
    {
      border: "4px solid #8b5cf6",
      borderRadius: "12px",
    } as React.CSSProperties
  }
/>

// Custom shadow
<Image
  src="photo.jpg"
  alt="Shadow"
  style={
    {
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    } as React.CSSProperties
  }
/>
```

### Available CSS Variables

```css
--image-fit              /* Object fit (default: cover) */
--image-aspect-ratio     /* Aspect ratio (default: auto) */
--image-border-radius    /* Border radius (default: 0) */
--image-error-bg         /* Error fallback background */
--image-error-color      /* Error fallback text color */
--image-error-font-size  /* Error fallback font size */
```

## Responsive Design

Images are responsive by default:

- `max-width: 100%` ensures images don't overflow containers
- `height: auto` maintains aspect ratio
- Works seamlessly with responsive layouts

```tsx
// Responsive image that scales with container
<Box style={{ maxWidth: "500px" }}>
  <Image src="large-photo.jpg" alt="Responsive" />
</Box>
```

## Accessibility

- **Alt text required** - Ensures images are accessible to screen readers
- **Error fallback** - Includes `role="img"` and `aria-label` when image fails
- **Placeholder hidden** - Placeholder images are marked `aria-hidden="true"`
- **Semantic HTML** - Uses native `<img>` element for proper semantics

## Props

| Prop          | Type                                                       | Default   | Description                 |
| ------------- | ---------------------------------------------------------- | --------- | --------------------------- |
| `src`         | `string`                                                   | -         | Image source URL (required) |
| `alt`         | `string`                                                   | -         | Alt text (required)         |
| `lazy`        | `boolean`                                                  | `true`    | Enable lazy loading         |
| `placeholder` | `string`                                                   | -         | Placeholder image URL       |
| `objectFit`   | `"contain" \| "cover" \| "fill" \| "none" \| "scale-down"` | `"cover"` | Object fit style            |
| `aspectRatio` | `"1:1" \| "4:3" \| "16:9" \| "21:9" \| "auto"`             | `"auto"`  | Aspect ratio                |
| `width`       | `string \| number`                                         | -         | Image width                 |
| `height`      | `string \| number`                                         | -         | Image height                |
| `preset`      | `string[]`                                                 | `[]`      | Preset configurations       |
| `className`   | `string`                                                   | -         | Additional CSS classes      |
| `style`       | `CSSProperties`                                            | -         | Inline styles               |
| `onLoad`      | `(e: SyntheticEvent) => void`                              | -         | Load event handler          |
| `onError`     | `(e: SyntheticEvent) => void`                              | -         | Error event handler         |

Plus all standard HTML image element props.

## Testing

Data attributes are included for E2E testing:

```tsx
<Image src="photo.jpg" alt="Test" objectFit="cover" aspectRatio="16:9" />
// data-fit="cover"
// data-aspect-ratio="16:9"
// data-preset="..." (if preset provided)
```

Available attributes: `data-fit`, `data-aspect-ratio`, `data-preset`

---

For more examples, check out the Storybook stories.
