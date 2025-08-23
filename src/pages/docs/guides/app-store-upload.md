---
title: Upload to App Store - AppFrames
layout: ../../../layouts/DocsLayout.astro
card:
  emoji: 🚀
  shortTitle: App Store Upload
  shortDescription: Upload screenshots directly to App Store Connect or export for manual upload.
  cta: Start uploading
  order: 3
---

AppFrames provides multiple ways to get your screenshots to the App Store: direct upload to App Store Connect or organized file export for manual upload.

## Direct Upload to App Store Connect

AppFrames can upload screenshots directly to your App Store Connect account, saving time and ensuring proper organization.

### Prerequisites
- **App Store Connect account** with Developer or higher permissions
- **App already created** in App Store Connect
- **AppFrames screenshots** ready to upload

### Step 1: Set Up App Store Connect Integration
1. In AppFrames, click **Upload to App Store** button in toolbar
2. Click **Connect Account** in the upload window
3. **Sign in** with your Apple ID (same as App Store Connect)
4. **Authorize AppFrames** to access your App Store Connect data

*[Image placeholder: App Store Connect login screen in AppFrames]*

### Step 2: Select Your App
1. Choose your **app** from the dropdown list
2. Select the **version** you want to upload screenshots to
3. Choose **platform** (iOS, iPadOS, macOS, tvOS, watchOS)

*[Image placeholder: AppFrames showing app selection dropdown with multiple apps]*

### Step 3: Configure Upload Settings
- **Replace existing screenshots**: Remove old screenshots and upload new ones
- **Add to existing**: Keep current screenshots and add new ones  
- **Language matching**: Automatically match AppFrames languages to App Store localizations

### Step 4: Review and Upload
1. **Preview the upload** - see which screenshots go where
2. **Start upload** - AppFrames handles the rest automatically
3. **Monitor progress** - real-time upload status for each screenshot

*[Image placeholder: Upload progress screen showing multiple screenshots uploading]*

### Upload Results
AppFrames provides detailed results:
- **Successfully uploaded** screenshots with confirmation
- **Failed uploads** with specific error messages
- **Skipped screenshots** (duplicates or incompatible sizes)

## Manual Export for App Store Connect

If you prefer to upload manually or need more control over the process:

### Step 1: Export Screenshots
1. Click **Export All Screenshots** button in toolbar
2. Choose **App Store Connect Format** in export settings
3. Select export location on your Mac

### Step 2: Export Organization
AppFrames organizes exports for App Store Connect:
```
MyApp_Screenshots/
├── iPhone/
│   ├── 6.9-inch/
│   │   ├── en-US/
│   │   │   ├── screenshot_1.png
│   │   │   └── screenshot_2.png
│   │   └── es-ES/
│   │       ├── screenshot_1.png
│   │       └── screenshot_2.png
│   ├── 6.5-inch/
│   └── 6.1-inch/
├── iPad/
│   ├── 12.9-inch/
│   └── 11-inch/
└── Mac/
```

### Step 3: Manual Upload to App Store Connect
1. Open **App Store Connect** in your browser
2. Navigate to **My Apps** → **Your App** → **App Store** tab
3. Select **iPhone Screenshots** (or other device)
4. **Drag and drop** screenshots from AppFrames export folders
5. **Arrange screenshot order** as needed
6. **Save changes**

*[Image placeholder: App Store Connect interface showing screenshot upload area]*

## Device Size Mapping

AppFrames automatically maps device sizes to App Store Connect requirements:

### iPhone Screenshots
- **AppFrames iPhone 6.9"** → **App Store Connect 6.9" Display**
- **AppFrames iPhone 6.5"** → **App Store Connect 6.5" Display**  
- **AppFrames iPhone 6.1"** → **App Store Connect 6.1" Display**
- **AppFrames iPhone 5.5"** → **App Store Connect 5.5" Display**

### iPad Screenshots  
- **AppFrames iPad 13"** → **App Store Connect 12.9" iPad Pro**
- **AppFrames iPad 11"** → **App Store Connect 11" iPad Pro**
- **AppFrames iPad 9.7"** → **App Store Connect 9.7" iPad**

### Other Platforms
- **AppFrames Mac** → **App Store Connect macOS**
- **AppFrames Apple Watch** → **App Store Connect watchOS** 
- **AppFrames Apple TV** → **App Store Connect tvOS**

## Language and Localization Handling

### Automatic Language Matching
AppFrames maps your project languages to App Store Connect localizations:
- **English** → **English (U.S.)**
- **Spanish** → **Spanish (Spain)** or **Spanish (Mexico)** 
- **German** → **German (Germany)**
- **French** → **French (France)** or **French (Canada)**

### Multiple Region Support
For languages with multiple regions:
1. **Choose primary region** during upload setup
2. **Duplicate to other regions** using App Store Connect
3. **Customize regional variations** if needed

*[Image placeholder: Language mapping selection screen in AppFrames]*

## Upload Requirements and Validation

### Screenshot Requirements
AppFrames ensures all screenshots meet App Store requirements:
- **Correct dimensions** for each device size
- **PNG format** with RGB color space
- **Maximum file size** under App Store limits
- **No transparency** (solid backgrounds)

### Content Guidelines
Your screenshots must comply with App Store guidelines:
- **No placeholder content** or "Lorem ipsum" text
- **Actual app interface** (not marketing materials)
- **Appropriate content** for your app's age rating
- **No competitor mentions** or comparisons

### Validation Errors
Common validation errors and fixes:
- **Wrong dimensions**: Re-export with correct device size
- **Unsupported format**: Use PNG export from AppFrames
- **File too large**: AppFrames automatically optimizes file sizes
- **Missing required screenshots**: Upload at least one per device size

## Managing Screenshot Updates

### Version Updates
When updating your app:
1. **Create new version** in App Store Connect
2. **Upload new screenshots** using AppFrames
3. **Previous version screenshots** remain unchanged
4. **Submit for review** with new screenshots

### A/B Testing with App Store
- **Upload variant A** initially
- **Monitor performance** in App Store Connect analytics
- **Replace with variant B** and compare results
- **Keep winning version** for future updates

*[Image placeholder: App Store Connect analytics showing screenshot performance metrics]*

## Troubleshooting Upload Issues

### Connection Problems
- **Check internet connection** and retry
- **Verify Apple ID credentials** are correct
- **Check App Store Connect permissions** for your account
- **Try manual export** if direct upload fails

### Authentication Issues
- **Sign out and sign back in** to refresh tokens
- **Check two-factor authentication** is working
- **Verify account access** in App Store Connect directly
- **Contact Apple Developer Support** for account issues

### Upload Failures
- **Check screenshot dimensions** match device requirements
- **Verify file format** is PNG (not JPEG)
- **Ensure content compliance** with App Store guidelines
- **Try smaller batches** if uploading many screenshots

### Missing Screenshots
- **Check language settings** in both AppFrames and App Store Connect
- **Verify device size mapping** is correct
- **Look for validation errors** in upload results
- **Re-export and try again** if issues persist

## Best Practices

### Pre-Upload Checklist
- [ ] **All screenshots reviewed** and approved
- [ ] **Text is readable** and properly localized
- [ ] **No sensitive information** visible (personal data, etc.)
- [ ] **Consistent branding** across all screenshots
- [ ] **Proper screenshot order** planned

### Upload Strategy
- **Test with one language first** before uploading all localizations
- **Upload during off-peak hours** for better performance
- **Keep backup exports** in case you need to re-upload
- **Document upload settings** for consistency across updates

### Post-Upload Verification
1. **Check App Store Connect** to verify uploads succeeded
2. **Preview screenshots** in different localizations
3. **Verify screenshot order** and arrangement
4. **Test on actual devices** if possible

---

## Next Steps

- [Set up App Store Connect integration](/docs/guides/app-store-connect)
- [Export screenshots as files](/docs/guides/export)
- Learn about [A/B testing](/docs/guides/ab-testing)