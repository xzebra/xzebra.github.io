---
title: XCStrings Integration - AppFrames
layout: ../../../layouts/DocsLayout.astro
card:
  emoji: 📝
  shortTitle: XCStrings
  shortDescription: Import and export Apple's XCStrings format for seamless Xcode integration.
  cta: Sync with Xcode
  order: 11
---

# How to export and import .xcstrings

AppFrames integrates with Apple's XCStrings localization format, allowing you to sync translations between your app development and marketing screenshot workflows. This ensures consistency between your app's interface text and your App Store screenshots.

## Understanding XCStrings

### What are XCStrings?
XCStrings (.xcstrings) is Apple's modern localization format used in Xcode projects:
- **Structured format**: JSON-based format for storing translations
- **Multiple languages**: Single file contains all language variants
- **Developer-friendly**: Integrates directly with Xcode and Swift projects
- **Version control**: Text-based format works well with Git

### Why Use XCStrings with AppFrames?
- **Consistency**: Use the same translations in app and screenshots
- **Efficiency**: Avoid duplicate translation work
- **Accuracy**: Ensure marketing materials match actual app text
- **Workflow integration**: Seamless developer-to-marketing handoff

*[Image placeholder: Diagram showing XCStrings flow from Xcode → AppFrames → App Store]*

## Importing XCStrings into AppFrames

### Step 1: Export from Your Xcode Project
1. **Open your iOS/Mac app project** in Xcode
2. **Select your .xcstrings file** in Project Navigator
3. **Export the file** (Right-click → Export)
4. **Save to accessible location** on your Mac

### Step 2: Import into AppFrames
1. **Open your AppFrames project**
2. Go to **File → Import → XCStrings File**
3. **Select your .xcstrings file** from Xcode export
4. **Choose import options**:
   - Replace existing translations
   - Add to existing translations
   - Merge with current project

*[Image placeholder: AppFrames import dialog showing XCStrings file selection]*

### Step 3: Map Text Content
AppFrames will attempt to automatically match:
- **Exact text matches**: Same text in app and screenshots
- **Similar text matches**: Close but not identical text
- **Manual mapping**: You assign which app text corresponds to which screenshot text

### Import Results
After import, AppFrames shows:
- **Successfully matched** text entries
- **New translations added** count by language
- **Unmapped entries** requiring manual attention
- **Conflicts** where existing translations differ

## Exporting XCStrings from AppFrames

### Step 1: Prepare Export
1. **Complete your translations** in AppFrames
2. **Add context notes** for translators if needed
3. **Review all languages** for completeness

### Step 2: Export XCStrings File
1. Go to **File → Export → XCStrings File**
2. **Choose export location** on your Mac
3. **Select languages to include** (or all)
4. **Configure export options**:
   - Include context notes
   - Export only modified strings
   - Include screenshot references

*[Image placeholder: AppFrames export dialog with XCStrings options]*

### Step 3: Import to Xcode Project
1. **Open your Xcode project**
2. **Drag the exported .xcstrings file** into your project
3. **Choose import options** in Xcode
4. **Build and test** to verify translations work

## Working with Shared Translation Workflows

### Developer-to-Marketing Flow
**Scenario**: Developers have app translations, marketing needs them for screenshots

1. **Developer exports** .xcstrings from Xcode project
2. **Marketing imports** into AppFrames project  
3. **AppFrames maps** app text to screenshot text automatically
4. **Marketing creates** screenshots using consistent translations

### Marketing-to-Developer Flow  
**Scenario**: Marketing creates additional translations for screenshots

1. **Marketing adds** new languages or translations in AppFrames
2. **Export .xcstrings** from AppFrames with additions
3. **Developer imports** updated file into Xcode project
4. **Both use** same translations for consistency

### Bidirectional Sync Workflow
**Scenario**: Both teams contribute translations

1. **Establish master source**: Usually Xcode project for app text
2. **Regular sync points**: Weekly or before releases
3. **Merge workflow**: Import updates, resolve conflicts
4. **Review process**: Both teams verify translations

*[Image placeholder: Workflow diagram showing bidirectional sync between Xcode and AppFrames]*

## Managing Translation Conflicts

### Types of Conflicts
When importing, you might encounter:
- **Different translations**: Same source text, different target translations
- **Missing context**: App text lacks context that screenshots need
- **Length mismatches**: App text vs marketing text length differences
- **Terminology differences**: Technical vs marketing language

### Resolving Conflicts
AppFrames provides conflict resolution interface:
1. **Side-by-side comparison**: See existing vs imported translations
2. **Choose source**: Keep AppFrames version or use imported version
3. **Merge option**: Combine information from both sources
4. **Skip conflicts**: Handle manually later

### Best Practices for Conflict Resolution
- **Keep app text** for UI elements that appear in screenshots
- **Keep marketing text** for promotional language
- **Add context** to disambiguate similar strings
- **Document decisions** for future reference

## Advanced XCStrings Features

### Context and Comments
XCStrings supports rich metadata:
- **Context strings**: Additional info about where/how text is used
- **Comments**: Translator notes and instructions
- **State information**: Translation completion status
- **Variation data**: Platform-specific or context-specific variants

### Pluralization Support
Handle plural forms correctly:
- **Plural rules**: Different languages have different plural rules
- **Count-based strings**: "1 photo" vs "5 photos"
- **AppFrames mapping**: Connect app pluralization to screenshot text

### String Catalogs Integration
For newer Xcode projects using String Catalogs:
- **Export from String Catalog** to XCStrings format
- **Import into AppFrames** using standard workflow
- **Maintain compatibility** with both old and new Xcode formats

*[Image placeholder: Xcode String Catalog interface showing export options]*

## Technical Implementation Details

### File Format Compatibility
AppFrames supports:
- **XCStrings version 1.0**: Standard format from Xcode 15+
- **Legacy formats**: Can convert from older .strings files
- **Export formats**: Generates compatible XCStrings for import to Xcode

### Character Encoding
- **UTF-8 encoding**: Handles all international characters correctly
- **Special characters**: Emoji, accented letters, non-Latin scripts
- **Right-to-left**: Proper support for Arabic, Hebrew, etc.

### Performance Considerations
- **Large files**: XCStrings with hundreds of strings import efficiently
- **Memory usage**: Only active language loaded in memory
- **Export speed**: Fast generation of XCStrings files

## Troubleshooting XCStrings Issues

### Import Problems
**File won't import**:
- Check file format is valid XCStrings (not .strings)
- Verify file permissions and accessibility
- Try smaller test file first
- Check for Unicode encoding issues

**No translations appear**:
- Verify text matching criteria
- Check that languages match between file and project
- Look for case sensitivity issues
- Review automatic mapping results

### Export Problems  
**Generated file won't work in Xcode**:
- Check XCStrings format version compatibility
- Verify all required metadata is included
- Test with minimal export first
- Check for invalid characters in translations

### Sync Issues
**Translations don't stay in sync**:
- Establish clear workflow process
- Use version control for XCStrings files
- Regular sync schedule between teams
- Document who owns which translations

## Integration with Translation Services

### Professional Translation Workflow
1. **Export base XCStrings** with source text and context
2. **Send to translation service** that supports XCStrings format
3. **Receive completed translations** in same format
4. **Import back** to both AppFrames and Xcode

### Machine Translation Integration
- **Export for machine translation**: Structured format works well with APIs
- **Review and edit**: Always review machine translations
- **Re-import**: Updated translations flow back to both tools

### Translation Memory Systems
- **Consistent terminology**: XCStrings format helps maintain consistency
- **Reuse translations**: Previous work carries forward to new projects
- **Quality assurance**: Format supports review and approval workflows

---

## Next Steps

- [Set up external translation services](/docs/guides/translation-services)
- [Advanced localization workflows](/docs/guides/localization)
- Learn about [variants system](/docs/guides/variants)