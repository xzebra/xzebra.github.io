---
title: Custom Overlays - AppFrames
layout: ../../../layouts/DocsLayout.astro
card:
  emoji: 🎨
  shortTitle: Custom Overlays
  shortDescription: Add text and shape overlays to highlight features and provide context.
  cta: Add overlays
  order: 8
---

Overlays in AppFrames let you add supplementary elements on top of your screenshots without modifying the original image. Perfect for highlighting features, adding callouts, or providing additional context.

## Types of Overlay Elements

AppFrames supports two types of overlay elements:

### Text Overlays
- **Callout text**: Labels, descriptions, or explanations
- **Feature highlights**: "NEW", "UPDATED", "50% OFF" badges
- **Step indicators**: "1", "2", "3" for tutorials
- **Multi-language support**: Different text per language

### Shape Overlays
- **Rectangles**: Highlight boxes, background areas
- **Triangles**: Arrows or pointers
- **Custom styling**: Solid colors, gradients, borders
- **Transparency options**: Semi-transparent highlights

*[Image placeholder: Screenshot showing both text and shape overlays highlighting different app features]*

## Adding Your First Overlay

### Step 1: Select Screenshot
1. Open your AppFrames project
2. **Navigate to the screenshot** you want to add overlays to
3. Make sure the **screenshot is selected** in the sidebar

### Step 2: Add Overlay Element
1. In the **Inspector panel** (right sidebar), find the **Layers** section
2. Click the **"+" button** next to "Overlay Elements"
3. Choose **Text Overlay** or **Shape Overlay** from the menu

*[Image placeholder: Inspector showing the Layers section with + button and overlay type menu]*

### Step 3: Position and Customize
1. **Drag the overlay** to position it where you want
2. **Resize using corner handles** to adjust size
3. **Customize properties** in the Inspector panel

## Working with Text Overlays

### Basic Text Properties
Configure your text overlay in the Inspector:
- **Text Content**: What the overlay displays
- **Font Family**: System fonts and custom fonts
- **Font Size**: Adjustable from small to large
- **Font Weight**: Regular, Medium, Semibold, Bold
- **Text Color**: Color picker with transparency

### Text Positioning and Alignment
- **Text Alignment**: Left, Center, Right, Justified
- **Max Lines**: Control how many lines text can wrap to
- **Position**: Drag to place anywhere on screenshot
- **Size**: Resize to control text area width and height

*[Image placeholder: Text overlay being positioned with alignment options visible]*

### Background Styling
Add backgrounds to make text more readable:
- **Background Color**: Solid color behind text
- **Background Transparency**: Adjust opacity
- **Corner Radius**: Rounded corners for background
- **No Background**: Transparent text directly on screenshot

### Multi-Language Text Overlays
Text overlays support localization:
1. **Add base text** in English
2. **Switch to target language** using language preview
3. **Edit overlay text** - it saves per language automatically
4. **Repeat for all languages** in your project

*[Image placeholder: Same text overlay showing "NEW" in English and "NUEVO" in Spanish]*

## Working with Shape Overlays

### Shape Types
Choose from available shapes:
- **Rectangle**: Most common for highlighting areas
- **Triangle**: Great for arrows or pointers

### Fill Styles
Customize how shapes are filled:
- **Solid Color**: Single color fill
- **Gradient**: Smooth color transitions
- **Background Image**: Use images as shape fill
- **Transparency**: Adjust opacity for see-through effects

*[Image placeholder: Different shape overlay fill styles - solid, gradient, transparent]*

### Border and Styling
- **Border Width**: Thickness of shape outline
- **Border Color**: Outline color (often contrasting)
- **Corner Radius**: Round the corners (rectangles only)
- **Shadow Effects**: Drop shadows for depth

### Shape Positioning
- **Precise Placement**: Drag to exact position needed
- **Layering**: Use z-index to control which overlays appear on top
- **Rotation**: Rotate shapes to match your design needs

## Layer Management

### Understanding Layers
Each overlay exists on its own layer:
- **Z-Index**: Controls stacking order (higher numbers on top)
- **Visibility**: Toggle overlays on/off without deleting
- **Organization**: Name overlays for easier management

*[Image placeholder: Layers panel showing multiple overlays with z-index controls]*

### Layer Operations
- **Reorder Layers**: Drag overlays up/down in layers list
- **Duplicate Layers**: Copy overlay with all settings
- **Delete Layers**: Remove overlay completely
- **Toggle Visibility**: Temporarily hide without deleting

### Managing Multiple Overlays
When working with several overlays:
1. **Use descriptive names**: "Feature Callout", "Price Badge", "Step 1"
2. **Group related overlays**: Similar z-index values
3. **Test visibility combinations**: Some overlays work better alone

## Advanced Overlay Techniques

### Creating Callout Systems
Build consistent callout styles across screenshots:
1. **Create base overlay** with desired styling
2. **Duplicate to other screenshots**
3. **Adjust position and text** per screenshot
4. **Maintain consistent appearance**

### Highlighting UI Elements
Use overlays to draw attention:
- **Semi-transparent rectangles** over important buttons
- **Arrows pointing** to key features
- **Text labels** explaining functionality
- **Step-by-step indicators** for tutorials

*[Image placeholder: Screenshot with systematic highlighting showing a user flow through an app]*

### Brand Consistency
Maintain your brand identity:
- **Use brand colors** for overlay backgrounds
- **Consistent font choices** across all overlays
- **Standard sizing** for similar types of callouts
- **Uniform styling** for badges and labels

## Overlay Best Practices

### Visual Hierarchy
Create clear visual hierarchy:
- **Primary overlays**: High contrast, bold styling
- **Secondary overlays**: Subtle styling, lower opacity  
- **Supporting overlays**: Minimal styling, small size

### Readability Guidelines
Ensure overlays are readable:
- **High contrast** between text and background
- **Sufficient text size** for mobile viewing
- **Clear backgrounds** for text overlays
- **No overlapping** text elements

### Performance Considerations
Keep projects performant:
- **Limit overlay count** per screenshot (5-7 maximum recommended)
- **Optimize complex gradients** 
- **Use simple shapes** when possible
- **Clean up unused overlays** periodically

## Overlays Across Variants

### Variant-Specific Overlays
Create different overlays for A/B tests:
1. **Set up base overlays** for your default variant
2. **Create new variant** for testing
3. **Modify overlays** for that specific variant
4. **Compare performance** between variants

### Consistent vs Variable Overlays
- **Consistent**: Keep same overlays across variants for fair testing
- **Variable**: Test different overlay approaches as part of the experiment

## Troubleshooting Common Issues

### Overlays Not Appearing
- **Check visibility toggle** in layers panel
- **Verify z-index** - element might be behind others
- **Check transparency** - might be too transparent to see
- **Ensure overlay is enabled** in layer properties

### Text Too Small/Large
- **Adjust font size** in text properties
- **Resize text area** by dragging corners
- **Check text wrapping** settings (max lines)
- **Preview on actual device size** for real-world sizing

### Positioning Problems
- **Use zoom** to position precisely
- **Snap to grid** if available
- **Check rotation** - element might be rotated unexpectedly
- **Reset position** and start over if needed

### Language-Specific Issues
- **Verify language preview** is set correctly
- **Check text length** in longer languages
- **Ensure proper encoding** for special characters
- **Test all language combinations**

## Export Behavior

### How Overlays Export
- **Renders as part of final image** - not separate layers
- **Maintains full quality** at export resolution
- **Preserves transparency effects**
- **Includes all visible overlays** only

### File Size Impact
- **Minimal size increase** for most overlays
- **Complex gradients** may slightly increase file size
- **Transparency effects** have minimal impact
- **Multiple overlays** don't significantly affect size

---

## Next Steps

- [Work with variants](/docs/guides/variants)
- [Text styling with markdown](/docs/guides/markdown)
- Learn about [loupe effects](/docs/guides/loupe-effect)