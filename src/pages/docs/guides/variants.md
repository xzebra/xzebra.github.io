---
title: How Variants Work - AppFrames
layout: ../../../layouts/DocsLayout.astro
card:
  emoji: 🔄
  shortTitle: Variants System
  shortDescription: Understand the powerful variant system for A/B testing and property inheritance.
  cta: Learn variants
  order: 10
---

# How do variants work

Variants in AppFrames are a powerful system that allows you to create multiple versions of your screenshots while maintaining a clean, organized project structure. They're perfect for A/B testing, seasonal campaigns, and managing different approaches to your App Store screenshots.

## Understanding the Variant System

### Base vs Variants
- **Base**: Your default screenshot configuration - the foundation all variants build upon
- **Variants**: Modified versions that inherit base properties and override specific ones
- **Inheritance**: Variants automatically get all base properties unless you specifically override them

Think of it like CSS inheritance - you set up your base styles, then variants only change what's different.

*[Image placeholder: Diagram showing Base properties flowing down to Variant A and Variant B with specific overrides]*

### Property Inheritance Chain
```
Base Properties
├── Image alignment: centerTop
├── Text: "Amazing Photo Editor"
├── Background color: White
├── Text color: Black
└── Font size: 24

Variant A ("Feature Focus")
├── ✓ Inherits: Image alignment, background, font size
└── ✗ Overrides: Text → "Advanced Editing Tools"

Variant B ("Benefit Focus") 
├── ✓ Inherits: Image alignment, text, font size
└── ✗ Overrides: Background → Blue gradient, Text color → White
```

## Creating Your First Variant

### Step 1: Set Up Your Base
1. **Create your primary screenshot** with your preferred design
2. **Configure all properties**: text, positioning, colors, overlays
3. This becomes your **"Base"** - visible in the variant picker

### Step 2: Create a New Variant
1. Find the **Variant Picker** in your canvas controls
2. Click the **"+" button** next to the current variant name
3. **Name your variant** descriptively (e.g., "Headline_Test_B", "Dark_Theme")
4. The new variant is created with all base properties inherited

*[Image placeholder: Variant picker showing "Base" with a + button, then showing dropdown with multiple variants]*

### Step 3: Override Specific Properties
1. **Select your new variant** from the variant picker
2. **Make changes** to any property you want to test
3. **Only changed properties** become overrides - everything else stays inherited
4. **Visual indicators** show which properties are overridden vs inherited

## Types of Properties You Can Override

### Screenshot-Level Properties
- **Image alignment** (8-position system)
- **Background colors** and gradients
- **Device frame styles** and bezels
- **Loupe effects** (position, size, magnification)

### Text Content Properties
- **Main text content** (headlines, descriptions)
- **Font families** and weights
- **Text colors** and styling
- **Text positioning** and alignment

### Overlay Elements
- **Text overlay content** (per language)
- **Shape overlay styling** (colors, borders)
- **Overlay positioning** and sizing
- **Layer visibility** and z-index

*[Image placeholder: Inspector panel showing properties with some marked as "Override" vs "Inherited"]*

## Advanced Variant Features

### Per-Screenshot Variants
Each screenshot can have its own variant overrides:
- **Screenshot 1 in Base**: Feature highlight approach  
- **Screenshot 1 in Variant A**: Benefit-focused approach
- **Screenshot 2 in Base**: Technical specs
- **Screenshot 2 in Variant A**: User testimonial

### Language + Variant Combinations
Variants work seamlessly with localization:
- **Base + English**: Your default English experience
- **Base + Spanish**: Base approach in Spanish
- **Variant A + English**: Test approach in English  
- **Variant A + Spanish**: Test approach in Spanish

### Nested Property Resolution
AppFrames resolves properties in this order:
1. **Variant-specific override** (if exists)
2. **Base property** (if no override)
3. **System default** (if nothing set)

## Variant Management Best Practices

### Naming Conventions
Use descriptive, systematic names:
- **Test purpose**: `Headline_Test_A`, `CTA_Test_B`
- **Theme variants**: `Dark_Mode`, `Holiday_Theme`
- **Market focus**: `Enterprise_Focus`, `Consumer_Focus`
- **Feature emphasis**: `Speed_Focus`, `Quality_Focus`

### Organizing Complex Tests
For multiple simultaneous tests:
```
Base (Control)
├── Headline_Test_A
├── Headline_Test_B  
├── Background_Test_A
├── Background_Test_B
└── Combined_Test_AB (best of both)
```

### Variant Cleanup
Keep your project organized:
- **Archive old variants** after tests complete
- **Document test results** before deleting variants
- **Keep winning variants** as reference for future tests
- **Limit active variants** to avoid confusion

*[Image placeholder: Variant management interface showing organized variants with archive options]*

## Working with Variant Previews

### Switching Between Variants
1. **Use the variant picker** in canvas controls
2. **Switch instantly** between any variant
3. **See real-time changes** as you select different variants
4. **Combine with language preview** to test all combinations

### Preview Workflows
Efficient testing workflow:
1. **Set up base** with your control design
2. **Create variant** with test changes
3. **Switch back and forth** to compare directly  
4. **Take screenshots** of each for team review
5. **Test on actual devices** if possible

### Side-by-Side Comparison
While AppFrames doesn't have built-in side-by-side view:
1. **Take exports** of each variant
2. **Use external tools** for comparison
3. **Share with team** for feedback
4. **Document differences** for reference

## Variant Performance and Limitations

### Performance Considerations
- **Moderate variant count**: 5-10 variants per project recommended
- **Property complexity**: Simple overrides perform better than complex ones
- **Memory usage**: Each variant stores only overrides, not full copies
- **Export time**: More variants = longer export times

### Technical Limitations
- **Cannot override**: Device types, core screenshot structure
- **Inheritance only**: No "parent variant" relationships beyond base
- **No variant groups**: Each variant relates only to base
- **Export organization**: Each variant exports to separate folders

## Advanced Use Cases

### Seasonal Campaigns
Create variants for different seasons or events:
- **Base**: Year-round messaging
- **Holiday_Variant**: Christmas/holiday theming
- **Back_to_School**: August/September messaging
- **Summer_Sale**: Seasonal promotion focus

### Market Segmentation
Test different approaches for different audiences:
- **Base**: General consumer focus
- **Enterprise_Variant**: Business/productivity emphasis
- **Creative_Variant**: Artistic/design professional focus
- **Student_Variant**: Educational/learning focus

### Feature Launch Variants
When launching new features:
- **Base**: Existing feature set
- **New_Feature_Highlight**: Emphasizes latest addition
- **Feature_Comparison**: Shows before/after or competitive advantage
- **Integration_Focus**: Shows how new feature works with existing ones

## Troubleshooting Variants

### Variant Not Showing Changes
- **Check variant selection** in picker
- **Verify property was actually changed** vs just viewed
- **Look for inheritance indicators** in Inspector
- **Try switching to base and back** to refresh

### Unexpected Inheritance Behavior
- **Properties inherit by default** - you must actively override
- **Some properties are linked** - changing one affects others
- **Language settings apply** to all variants unless overridden
- **Clear overrides** using reset buttons if needed

### Export Issues with Variants
- **Check export settings** include variants
- **Verify folder organization** matches your expectations  
- **Ensure variant names** are file-system safe (no special characters)
- **Test with single variant** first if having issues

## Integration with Other Features

### Variants + Localization
Perfect combination for global A/B testing:
- **Test messaging approaches** across different cultures
- **Cultural adaptation variants** for different markets
- **Language-specific design** considerations

### Variants + Overlays
Test different overlay strategies:
- **Callout variants**: Different text overlay approaches
- **Highlighting variants**: Different ways to emphasize features
- **Tutorial variants**: Different step-by-step approaches

### Variants + Device Types
While device types can't be variant-specific:
- **Test approaches** across different device sizes
- **Consistent theming** across iPhone, iPad, Mac
- **Device-appropriate** messaging in variants

---

## Next Steps

- [Export your variants](/docs/guides/export)
- [Localized A/B testing](/docs/guides/localized-ab-tests)
- Learn about [custom overlays](/docs/guides/overlays)