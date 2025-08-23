---
title: Create A/B Tests - AppFrames
layout: ../../../layouts/DocsLayout.astro
card:
  emoji: 🧪
  shortTitle: A/B Testing
  shortDescription: Test different screenshot approaches to optimize your App Store conversion rates.
  cta: Start testing
  order: 6
---

AppFrames' powerful variants system lets you create A/B tests for your App Store screenshots. Test different messaging, layouts, and designs to optimize your App Store conversion rates.

## Understanding Variants

### What are Variants?
Variants are different versions of your screenshots that you can test against each other. Each variant can have:
- **Different text content** (headlines, descriptions)
- **Different image positioning** (8-position alignment system)  
- **Different background colors**
- **Different overlay elements**
- **Different text styling** (fonts, colors, sizes)

### Base vs Variant Properties
- **Base properties**: The default values for all screenshots
- **Variant overrides**: Specific changes for that variant only
- **Inheritance**: Variants inherit base properties and only override what's different

*[Image placeholder: Diagram showing base properties flowing down to variants with specific overrides]*

## Creating Your First A/B Test

### Step 1: Set Up Your Base Screenshot
1. Create your screenshots with your **primary design**
2. Add your main text content and positioning
3. This becomes your **control** or "A" version

### Step 2: Create a New Variant
1. Open the **Canvas Controls** in your project
2. Find the **Variant Picker** (usually shows "Base")
3. Click the **+** button to create a new variant
4. Give it a descriptive name like "Headline Test B"

*[Image placeholder: Screenshot showing the variant picker with "Base" and a + button]*

### Step 3: Configure Your Variant
1. **Select your new variant** from the variant picker
2. **Make changes** to test - these automatically become overrides:
   - Edit text content in the Inspector
   - Change image alignment positions
   - Modify background colors
   - Adjust overlay elements

### Step 4: Preview Both Versions
- **Switch between variants** using the variant picker
- **Compare side by side** by taking screenshots of each
- **Test on actual devices** if possible

## Common A/B Testing Scenarios

### Testing Headlines and Messaging

**Example Test**: Feature-focused vs Benefit-focused headlines

**Variant A (Base)**: "Advanced Photo Editing Tools"
**Variant B**: "Create Stunning Photos in Seconds" 

*[Image placeholder: Two screenshots showing the same app with different headlines]*

### Testing Image Positioning

**Example Test**: App screenshot placement

**Variant A**: Image at top, text at bottom
**Variant B**: Image at bottom, text at top

### Testing Background Colors

**Example Test**: Background color psychology

**Variant A**: Clean white background  
**Variant B**: Subtle gradient background
**Variant C**: Brand color background

### Testing Text Styling

**Example Test**: Font weight and emphasis

**Variant A**: Regular weight, neutral tone
**Variant B**: Bold weight, action-oriented language

## Managing Multiple Variants

### Variant Organization
- **Use descriptive names**: "CTA_Test_A", "Pricing_Emphasis", "Feature_Focus"
- **Limit variants per test**: Usually 2-3 variants maximum
- **Document your hypotheses**: Note what you're testing and why

### Viewing Variant Differences
AppFrames helps you see what's different:
1. **Switch between variants** to see changes in real-time
2. **Property inheritance** - only changed properties show as overrides
3. **Visual indicators** show which properties are overridden

*[Image placeholder: Inspector showing properties with some marked as "overridden"]*

## Advanced Variant Features

### Per-Device Variants
You can create different variants for different devices:
- **iPhone variants**: Test mobile-specific messaging
- **iPad variants**: Test tablet-optimized layouts  
- **Mac variants**: Test desktop application focus

### Overlay Element Variants
Test different supplementary elements:
- **Badges and callouts**: "New Feature", "50% Off", "Award Winner"
- **UI highlights**: Point to specific app features
- **Social proof**: Reviews, ratings, user counts

### Text Content Variations
Beyond just headlines:
- **Body text length**: Short vs detailed descriptions
- **Call-to-action phrases**: "Download Now" vs "Try Free Today"
- **Feature emphasis**: Which benefits to highlight first

## Best Practices for App Store A/B Testing

### Testing Hypotheses
Always test with clear hypotheses:
- **"We believe** that emphasizing speed will increase downloads"
- **"We think** that showing the app in use will convert better than features"  
- **"We hypothesis** that warmer colors will appeal more to our audience"

### What to Test
**High-impact elements to A/B test**:
- **Headlines** (biggest impact on conversion)
- **Hero image positioning** (visual hierarchy)
- **Background colors** (brand perception)
- **Call-to-action language** (urgency and action)

**Don't test everything at once**:
- Change one element per test
- Keep other variables constant
- Test sequentially, not simultaneously

### Statistical Significance
- **Run tests long enough** to get meaningful data
- **Consider seasonal effects** (holidays, back-to-school, etc.)
- **Test across user segments** if possible
- **Document results** for future reference

## Exporting A/B Test Variants

### Export All Variants
1. Go to **File** → **Export All Screenshots**
2. Choose **Include Variants** option
3. Each variant exports to a separate folder:
   ```
   MyApp_Screenshots/
   ├── Base/
   │   ├── iPhone6.9_en_01.png
   │   └── iPad13_en_01.png
   └── Headline_Test_B/
       ├── iPhone6.9_en_01.png
       └── iPad13_en_01.png
   ```

### App Store Connect Testing
1. **Upload variant A** to App Store Connect initially
2. **Monitor performance** for 2-4 weeks
3. **Replace with variant B** and monitor again  
4. **Compare conversion rates** and other metrics

*[Image placeholder: App Store Connect screenshot showing where to upload different screenshot versions]*

## Measuring A/B Test Results

### Key Metrics to Track
- **Conversion rate**: App page views → Downloads
- **Impression to product page**: Search → App page views  
- **Download velocity**: Downloads over time
- **User ratings**: Post-download satisfaction

### External Tools Integration
- **App Store Connect Analytics**: Built-in conversion metrics
- **Mobile analytics platforms**: Comprehensive user journey tracking
- **Custom attribution**: UTM parameters for marketing campaigns

## Variant Management Tips

### Organizing Large Tests
- **Use variant folders**: Group related tests
- **Version your variants**: "V1_Headline_Test", "V2_Headline_Test"
- **Archive old tests**: Keep project files clean

### Collaboration Workflows
- **Share variant previews** with team members  
- **Document test results** in project notes
- **Keep winning variants** as new base for future tests

### Performance Considerations
- **Limit active variants**: Keep project file size reasonable
- **Clean up unused variants**: Remove variants you're not using
- **Backup before major changes**: Save project before big variant experiments

---

## Next Steps

- Learn how to [localize your A/B tests](/docs/guides/localized-ab-tests)
- [Upload to App Store Connect](/docs/guides/app-store-upload)
- Explore [how variants work](/docs/guides/variants)