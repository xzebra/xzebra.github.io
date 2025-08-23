---
title: Loupe Effects - AppFrames
layout: ../../../layouts/DocsLayout.astro
card:
  emoji: 🔍
  shortTitle: Loupe Effects
  shortDescription: Add magnification effects to highlight specific areas of your screenshots.
  cta: Add loupe
  order: 9
---

The loupe effect in AppFrames allows you to magnify and highlight specific areas of your screenshots, perfect for drawing attention to important UI elements, buttons, or features in your app.

## What is a Loupe Effect?

A loupe effect creates a magnified "zoom bubble" that shows a detailed view of a specific area of your screenshot. It's commonly used in App Store screenshots to:
- **Highlight small UI elements** like buttons or icons
- **Show detailed interactions** like gestures or taps
- **Emphasize specific features** that might be hard to see
- **Guide user attention** to important parts of your app

*[Image placeholder: Screenshot showing a loupe effect magnifying a small UI button on an iPhone screenshot]*

## Enabling the Loupe Effect

### Step 1: Select Your Screenshot
1. Open your AppFrames project
2. **Select the device** containing the screenshot you want to modify
3. **Click on the specific screenshot** you want to add a loupe to

### Step 2: Enable Loupe in Inspector
1. In the **Inspector panel** (right sidebar), look for the **Loupe** section
2. **Toggle on "Enable Loupe"** - this activates the loupe effect for this screenshot
3. The loupe will appear on your screenshot with default settings

*[Image placeholder: Inspector panel showing the Loupe section with Enable Loupe toggle]*

### Step 3: Position the Loupe
1. **Click and drag the loupe** to position it where you want the magnification
2. **Resize the loupe** by dragging the corners to change its size
3. The loupe automatically magnifies whatever area it's positioned over

## Customizing Loupe Appearance

### Size and Position
- **Move loupe**: Click and drag anywhere inside the loupe circle
- **Resize loupe**: Drag the corner handles to make it larger or smaller  
- **Snap to elements**: The loupe will subtly snap to align with UI elements

### Magnification Settings
In the Inspector, you can adjust:
- **Scale**: How much to magnify (1.5x to 4x typical range)
- **Higher values** = more magnification
- **Lower values** = less magnification but wider view

*[Image placeholder: Loupe at different magnification levels - 1.5x, 2x, 3x]*

### Visual Styling
Customize the loupe's appearance:
- **Corner Radius**: Make the loupe more or less rounded
- **Border Width**: Thickness of the loupe border
- **Border Color**: Color of the loupe border (usually white or your brand color)
- **Shadow Opacity**: How prominent the drop shadow appears
- **Shadow Radius**: Size of the shadow blur effect

## Best Practices for Loupe Effects

### When to Use Loupes
**Good use cases:**
- **Small interactive elements** like '+' buttons, toggles, or icons
- **Text that's hard to read** in the main screenshot
- **Gesture indicators** showing where users should tap
- **Feature callouts** for new or important functionality

**Avoid using for:**
- **Large UI elements** that are already clearly visible
- **Multiple loupes** on the same screenshot (confusing)
- **Essential content** - the main message should be clear without the loupe

*[Image placeholder: Good vs bad examples of loupe usage]*

### Positioning Strategy
- **Don't cover important content** with the loupe itself
- **Place in corners or empty areas** when possible
- **Use consistent positioning** across similar screenshots
- **Ensure the source area is still visible** outside the loupe

### Size Guidelines
- **Small loupes (20-30% of screenshot)**: For highlighting specific buttons or icons
- **Medium loupes (30-40% of screenshot)**: For showing UI interactions or text
- **Large loupes (40%+ of screenshot)**: Rarely recommended, can be distracting

## Working with Loupes Across Languages

### Language-Specific Loupes
Since different languages may have different UI layouts:
1. **Position loupes per language** if text length affects layout
2. **Use variants** to create language-specific loupe positions
3. **Test in preview** to ensure loupes point to correct elements

### Consistent Highlighting
- **Same relative position** across languages when possible
- **Adjust for text expansion** in longer languages like German
- **Consider RTL languages** - loupe positioning may need to flip

*[Image placeholder: Same screenshot in English vs German showing loupe adjustment for text length differences]*

## Advanced Loupe Techniques

### Multiple Screenshots with Coordinated Loupes
For a sequence of screenshots showing a process:
1. **Use consistent loupe styling** across all screenshots
2. **Position loupes to show progression** through your app
3. **Vary the magnified content** but keep the loupe appearance consistent

### Loupe with Overlays
Combine loupes with other overlay elements:
- **Add text callouts** near the loupe explaining what it shows
- **Use arrows** pointing from loupe to the original area
- **Add badges** on the loupe border for additional context

### A/B Testing with Loupes
Test different loupe approaches:
- **Variant A**: No loupe, clean screenshot
- **Variant B**: Loupe highlighting main feature
- **Variant C**: Different loupe position or size

## Troubleshooting Common Issues

### Loupe Not Appearing
- **Check "Enable Loupe"** is toggled on in Inspector
- **Ensure screenshot is selected** - loupes are per-screenshot
- **Try adjusting loupe size** - very small loupes might not be visible

### Loupe Showing Wrong Content
- **Reposition the loupe** by dragging it to the correct area
- **Check the source positioning** - the loupe shows what's underneath its position marker
- **Zoom out** on canvas to see the full relationship between loupe and source

### Performance Issues
- **Limit to one loupe per screenshot** for best performance
- **Reduce shadow effects** if experiencing slowdowns
- **Lower magnification scale** for complex UI areas

### Visual Conflicts
- **Avoid placing loupe over text** that users need to read
- **Choose contrasting border colors** so loupe stands out
- **Adjust shadow opacity** if loupe blends into background

## Export Considerations

### High Resolution Export
Loupes maintain their quality when exporting:
- **Magnified content stays sharp** at full export resolution
- **Border and shadow effects** export at full quality
- **No pixelation** from the magnification effect

### File Size Impact
- **Loupes don't significantly increase** export file size
- **Complex magnified areas** may add slight file size
- **Shadow effects** have minimal impact on file size

## Loupe Effect in Different Contexts

### Marketing Screenshots
- **Product feature highlights**: Show off specific capabilities
- **User interface tours**: Guide users through key interactions
- **Detail emphasis**: Make small elements clearly visible

### App Store Optimization
- **Conversion testing**: Test screenshots with and without loupes
- **Feature prominence**: Make important features impossible to miss
- **User guidance**: Show exactly where users should look or tap

---

## Next Steps

- [Create custom overlays](/docs/guides/overlays)
- [Work with variants](/docs/guides/variants)
- Learn about [text styling](/docs/guides/markdown)