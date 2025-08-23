---
title: Localize App Store Screenshots - AppFrames
layout: ../../../layouts/DocsLayout.astro
card:
  emoji: 🌍
  shortTitle: Localization
  shortDescription: Create and manage localized versions of your screenshots for global audiences.
  cta: Start localizing
  order: 5
---

# How to localize your App Store screenshots

AppFrames makes it easy to create localized screenshots for international markets. With built-in translation management and multi-language support, you can reach global audiences with professional, culturally appropriate App Store screenshots.

## Adding Languages to Your Project

### Step 1: Open Language Management
1. In your AppFrames project, click the **Translations** button in the toolbar
2. Or go to **Window** → **Translations** 
3. The translations window will open showing your current languages

### Step 2: Add New Languages
1. Click the **+** button in the languages sidebar
2. Search for languages using the search field
3. Select multiple languages by clicking them
4. Click **Add Selected** to add them to your project

### Common Languages for App Store
- **Spanish** (`es`) - Large Spanish-speaking market
- **French** (`fr`) - France, Canada, parts of Africa  
- **German** (`de`) - Germany, Austria, Switzerland
- **Japanese** (`ja`) - Major mobile market
- **Chinese Simplified** (`zh`) - Mainland China
- **Korean** (`ko`) - South Korea
- **Portuguese** (`pt`) - Brazil, Portugal

## Managing Translations

### Translation Table Interface

The translations window shows:
- **Language sidebar**: All your project languages with translation progress
- **Translation table**: Original text and translations side by side
- **Context column**: Notes for translators

### Adding Translations
1. **Select a language** from the sidebar (not English)
2. **Find the text** you want to translate in the table
3. **Click in the Translation column** for that text
4. **Type your translation**
5. Changes are **saved automatically**

### Translation Progress
Each language shows a progress percentage:
- **100%**: All text is translated
- **Partial**: Some text still needs translation
- **0%**: No translations added yet

## Best Practices for Localized Screenshots

### Text Length Considerations
Different languages have different text lengths:
- **German**: Often 20-30% longer than English
- **Spanish**: Usually 15-25% longer 
- **Japanese**: Can be much shorter
- **Arabic**: Reads right-to-left

### Cultural Adaptations
Consider cultural preferences:
- **Colors**: Red means danger in some cultures, luck in others
- **Images**: Use diverse representation when possible
- **Layout**: Some languages read right-to-left (Arabic, Hebrew)

### Text Quality
- **Use native speakers** when possible
- **Keep marketing tone** consistent across languages
- **Test with real users** from target markets
- **Avoid literal translations** - adapt for local markets

## Working with Text Content

### Screenshot Text vs Overlay Text
AppFrames handles two types of text differently:

#### Main Screenshot Text
- The primary headline/description text
- Managed through the **Translations window**
- Automatically positions opposite to your screenshot image

#### Overlay Text Elements
- Additional text elements you can place anywhere
- Each overlay has its own language versions
- Managed in the **Inspector** when overlay is selected

## Context for Translators

### Adding Context Notes
1. Open the **Translations window**
2. Switch to **English (Original)** in the language sidebar
3. Find your text in the table
4. Add notes in the **Context** column

Good context examples:
- "Call-to-action button text"
- "App feature headline - keep it short"
- "Pricing information - include currency symbol"
- "Error message - should be helpful not scary"

## Previewing Localized Screenshots

### Language Preview Toggle
1. In the main AppFrames window, look for the **language picker** in the canvas controls
2. Select any language from the dropdown
3. Your screenshots update immediately to show that language version

### What Changes When You Switch Languages
- **Main text content** updates to translated versions
- **Overlay text** switches to language-specific versions  
- **Text positioning** adjusts if text length changes significantly
- **Right-to-left** languages flip text alignment automatically

## Organizing Your Translation Workflow

### Recommended Workflow
1. **Complete your English screenshots first** - get design and messaging right
2. **Add context notes** for all text that needs translation
3. **Add target languages** one at a time
4. **Translate core marketing messages** first (headlines)
5. **Review in context** by switching language preview
6. **Get native speaker review** before publishing

### Working with Translation Teams
- **Export text for translators** (covered in XCStrings guide)
- **Provide context** for every piece of text
- **Share screenshot previews** so translators see final result
- **Set up review cycles** with native speakers

## Troubleshooting Common Issues

### Text Doesn't Fit
If translated text is too long:
1. **Edit the translation** to be more concise
2. **Adjust text size** in the Inspector
3. **Consider different messaging** that's shorter in target language

### Missing Translations
If some text isn't translating:
- Check that you've **selected the right language** in preview
- Make sure **translation is entered** in translations table
- **Restart preview** by switching to English and back

### Right-to-Left Languages  
For Arabic, Hebrew, and other RTL languages:
- AppFrames **automatically flips text alignment**
- **Test carefully** with native speakers
- Consider if **image positioning** should also flip

## Next Steps

- Learn how to [export your localized screenshots](/docs/guides/export)
- Set up [external translation services](/docs/guides/translation-services)
- Explore [A/B testing with localization](/docs/guides/localized-ab-tests)