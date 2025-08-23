---
title: Export Screenshots - AppFrames
layout: ../../../layouts/DocsLayout.astro
card:
  emoji: 💾
  shortTitle: Export Files
  shortDescription: Export high-quality PNG files optimized for App Store submission.
  cta: Start exporting
  order: 4
---

# Exporting screenshots as files

AppFrames provides flexible export options to generate high-quality PNG files optimized for App Store submission and marketing use. Whether you need individual screenshots or batch exports across all devices and languages, AppFrames handles the technical details automatically.

## Quick Export Options

### Export Current Screenshot
For single screenshot exports:
1. **Select the screenshot** you want to export in the sidebar
2. **Click "Export Screenshot"** in the toolbar
3. **Choose save location** on your Mac
4. **File saves automatically** with proper naming

### Export All Screenshots
For complete project exports:
1. **Click "Export All"** button in the toolbar  
2. **Choose export options** (covered below)
3. **Select destination folder** on your Mac
4. **Monitor progress** as AppFrames generates all files

*[Image placeholder: AppFrames toolbar showing Export Screenshot and Export All buttons]*

## Export Settings and Options

### File Format Settings
AppFrames exports optimized PNG files:
- **PNG format**: Lossless compression, perfect quality
- **RGB color space**: App Store compatible
- **No transparency**: Solid backgrounds as required
- **Optimized file sizes**: Balanced quality and file size

### Resolution and Quality
- **Native resolution**: Exact pixel dimensions for each device type
- **App Store specifications**: Guaranteed compatibility
- **High DPI**: Full resolution for retina displays
- **Quality optimization**: Maximum quality with efficient compression

### Naming Conventions
AppFrames uses App Store-compatible naming:
```
iPhone6.9_en_01.png     // iPhone 6.9" English, screenshot 1
iPhone6.5_es_02.png     // iPhone 6.5" Spanish, screenshot 2  
iPad13_fr_01.png        // iPad Pro 13" French, screenshot 1
Mac_de_01.png           // macOS German, screenshot 1
```

*[Image placeholder: Finder window showing exported files with organized naming]*

## Export Organization

### Folder Structure
AppFrames organizes exports for easy management:

**Standard Export**:
```
MyApp_Screenshots/
├── iPhone/
│   ├── 6.9-inch/
│   │   ├── iPhone6.9_en_01.png
│   │   ├── iPhone6.9_en_02.png
│   │   └── iPhone6.9_es_01.png
│   └── 6.5-inch/
├── iPad/
│   └── 12.9-inch/
└── Mac/
```

**Variant Export** (when variants included):
```
MyApp_Screenshots/
├── Base/
│   ├── iPhone/
│   └── iPad/
├── Headline_Test_A/
│   ├── iPhone/
│   └── iPad/
└── Dark_Theme/
    ├── iPhone/
    └── iPad/
```

### Language Organization
Multiple organizational options:
- **By device, then language**: Standard approach
- **By language, then device**: Alternative for translation workflows
- **Flat structure**: All files in single folder with descriptive names

## Advanced Export Options

### Selective Export
Choose exactly what to export:
- **Specific devices**: iPhone only, iPad only, etc.
- **Specific languages**: English only, or selected languages
- **Specific screenshots**: Individual screenshots per device
- **Specific variants**: Test variants only, or exclude certain variants

*[Image placeholder: Export dialog showing checkboxes for devices, languages, and variants]*

### Batch Processing
AppFrames handles large exports efficiently:
- **Background processing**: Export doesn't block other work
- **Progress tracking**: Real-time progress for each file
- **Error handling**: Reports any issues during export
- **Completion notification**: Mac notification when export finishes

### Export Validation
Before exporting, AppFrames validates:
- **Required screenshots**: Warns if key screenshots missing
- **Dimension accuracy**: Ensures proper App Store dimensions
- **Content compliance**: Checks for common issues
- **File naming**: Validates names are filesystem-compatible

## Device-Specific Exports

### iPhone Screenshots
AppFrames exports all iPhone sizes:
- **iPhone 6.9"**: 1320×2868 (portrait) / 2868×1320 (landscape)
- **iPhone 6.5"**: 1242×2688 (portrait) / 2688×1242 (landscape)
- **iPhone 6.1"**: 1179×2556 (portrait) / 2556×1179 (landscape)
- **iPhone 5.5"**: 1242×2208 (portrait) / 2208×1242 (landscape)

### iPad Screenshots  
All iPad Pro and standard iPad sizes:
- **iPad Pro 13"**: 2048×2732 (portrait) / 2732×2048 (landscape)
- **iPad Pro 11"**: 1668×2388 (portrait) / 2388×1668 (landscape)
- **iPad 9.7"**: 1536×2048 (portrait) / 2048×1536 (landscape)

### Other Platforms
- **macOS**: Variable dimensions based on app type
- **Apple Watch**: 312×390 (45mm) / 284×368 (41mm)  
- **Apple TV**: 1920×1080 or 3840×2160
- **Vision Pro**: Spatial computing optimized dimensions

*[Image placeholder: Grid showing exported screenshots at different device sizes]*

## Working with Exported Files

### File Management
Organize your exports effectively:
- **Create project folders**: Separate folders per app version
- **Date stamp exports**: Include date in folder names
- **Archive old versions**: Keep previous versions for reference
- **Backup exports**: Store copies in cloud storage

### Quality Verification
After exporting, verify quality:
- **Check dimensions**: Ensure files match App Store requirements
- **Review image quality**: Look for compression artifacts
- **Verify text readability**: Ensure text is crisp and clear
- **Test on devices**: Preview on actual iPhone/iPad when possible

### File Sharing
Share exports with your team:
- **Cloud storage**: Dropbox, Google Drive, iCloud Drive
- **Direct sharing**: AirDrop, email (for small batches)
- **Project management**: Upload to Slack, Notion, etc.
- **Version control**: Git LFS for large binary files

## Export Troubleshooting

### Common Export Issues

**Export fails or stops**:
- Check available disk space on your Mac
- Verify you have write permissions to destination folder
- Try exporting smaller batches (single device/language)
- Restart AppFrames if export seems stuck

**Files missing after export**:
- Check export settings - some devices/languages might be unchecked
- Look in subfolders - AppFrames organizes files by device type
- Verify screenshots exist in your project before exporting
- Check for disabled screenshots (they won't export)

**Wrong file sizes or dimensions**:
- Ensure you're using latest AppFrames version
- Check that device types match App Store specifications  
- Verify no custom scaling is applied in export settings
- Re-export if dimensions seem incorrect

### Performance Optimization

**Large project exports**:
- Export during off-peak hours on your Mac
- Close other applications to free up memory
- Use external SSD for faster file writing
- Export in smaller batches if experiencing issues

**File size concerns**:
- AppFrames automatically optimizes PNG compression
- Complex screenshots may have larger file sizes
- Gradients and photos typically create larger files
- All files meet App Store size requirements

## Integration with Other Tools

### App Store Connect
After exporting:
1. **Use files directly** with App Store Connect web interface
2. **Drag and drop** organized folders
3. **Proper naming** ensures correct placement
4. **Batch upload** multiple screenshots efficiently

### Design Review Tools
Share exports for feedback:
- **Figma**: Upload for team review and annotation
- **InVision**: Create interactive prototypes
- **Zeplin**: Share with developers for reference
- **Slack**: Direct sharing for quick feedback

### Automation Workflows
Integrate exports with automation:
- **Hazel**: Automatically organize exported files
- **Shortcuts**: Create Mac shortcuts for common export tasks
- **Build scripts**: Include AppFrames export in CI/CD pipelines
- **Cloud sync**: Automatically backup exports

*[Image placeholder: Automated workflow diagram showing AppFrames → Export → Cloud Storage → App Store Connect]*

## Best Practices for Export Management

### Pre-Export Checklist
Before exporting your final screenshots:
- [ ] **All text proofread** and approved
- [ ] **All languages complete** and reviewed
- [ ] **Image quality verified** on all devices
- [ ] **Consistent branding** across all screenshots
- [ ] **App Store compliance** verified

### Export Organization Strategy
- **Version your exports**: Include version numbers or dates
- **Document changes**: Note what's different between export versions
- **Test before submitting**: Upload test screenshots first
- **Keep source files**: Always maintain your .appframes project files

### Collaboration Workflows
- **Export for review**: Share with stakeholders before final submission
- **Staged releases**: Export different variants for A/B testing
- **Archive finals**: Keep final submitted versions for reference
- **Update documentation**: Note which exports were used for each app version

---

## Next Steps

- [Upload screenshots to App Store Connect](/docs/guides/app-store-upload)
- [Set up automated backup workflows](/docs/guides/backup)
- Learn about [A/B testing variants](/docs/guides/ab-testing)