# Tooltip

A tooltip component that displays contextual information on hover or focus.

## Basic Usage

```tsx
import { Tooltip } from "@markfoster314/marduk";

// Basic tooltip
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>

// With custom position
<Tooltip content="Tooltip text" position="bottom">
  <Button>Hover me</Button>
</Tooltip>
```

## Positions

Four positioning options:

```tsx
<Tooltip content="Top" position="top"> {/* default */}
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Bottom" position="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left" position="left">
  <Button>Left</Button>
</Tooltip>

<Tooltip content="Right" position="right">
  <Button>Right</Button>
</Tooltip>
```

## Delay

Control the delay before showing the tooltip:

```tsx
// Default delay (200ms)
<Tooltip content="Tooltip">
  <Button>Hover</Button>
</Tooltip>

// Custom delay
<Tooltip content="Tooltip" delay={500}>
  <Button>Hover</Button>
</Tooltip>

// No delay
<Tooltip content="Tooltip" delay={0}>
  <Button>Hover</Button>
</Tooltip>
```

## Content

Tooltip content can be a string or ReactNode:

```tsx
// String content
<Tooltip content="Simple text">
  <Button>Hover</Button>
</Tooltip>

// ReactNode content
<Tooltip content={<span>Custom <strong>content</strong></span>}>
  <Button>Hover</Button>
</Tooltip>
```

## Triggers

Tooltips appear on:

- Mouse hover (mouseEnter)
- Focus (for keyboard navigation)
- And hide on mouseLeave or blur

## Accessibility

- Semantic tooltip role
- Keyboard accessible (focus/blur)
- Screen reader support
- WCAG 2.1 compliant

Tooltips automatically appear on focus for keyboard users.

## Props

```typescript
interface TooltipProps {
  children: ReactElement;
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number; // default: 200ms
}
```

## Customization

Override styles using CSS variables:

```tsx
<Tooltip
  content="Custom tooltip"
  style={{
    "--tooltip-bg-color": "#custom-color",
  }}
>
  <Button>Hover</Button>
</Tooltip>
```

### Available CSS Variables

- `--tooltip-bg-color` - Background color
- `--tooltip-text-color` - Text color
- `--tooltip-padding` - Padding

## Responsive Design

Tooltip padding automatically scales with global responsive multipliers:

- Mobile: `--marduk-scale-mobile`
- Tablet: `--marduk-scale-tablet` (768px+)
- Desktop: `--marduk-scale-desktop` (1024px+)

## Testing

Data attributes included for testing:

```tsx
<Tooltip content="Tooltip" position="bottom" delay={500} />
// data-position="bottom"
// data-delay="500"
// data-visible="true" (when visible)
```

Available attributes: `data-position`, `data-delay`, `data-visible`

---

For more examples, check out the Storybook stories.
