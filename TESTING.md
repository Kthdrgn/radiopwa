# PWA Testing Guide

Use this guide to test your Radio Player PWA after deployment.

## Browser Testing

### Chrome/Edge Desktop
1. Open your GitHub Pages URL
2. Look for the install icon (⊕) in the address bar
3. Click to install
4. The app should open in its own window
5. Check that it appears in your applications list

### Firefox Desktop
1. Open your GitHub Pages URL
2. Firefox doesn't auto-prompt for PWA install
3. Use the "Install" option in the page menu (three dots)
4. Or use the address bar icon

### Safari Desktop (macOS)
1. Open your GitHub Pages URL
2. Safari has limited PWA support
3. Add to Dock via File → Add to Dock

### Mobile Testing (iOS)
1. Open in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"
4. The icon will appear on your home screen
5. Open it - should feel like a native app!

### Mobile Testing (Android)
1. Open in Chrome
2. Look for "Add to Home Screen" banner
3. Or use the menu → "Install app"
4. Icon appears in app drawer
5. Opens as standalone app

## Feature Testing Checklist

### Basic Functionality
- [ ] Page loads correctly
- [ ] Stations load from Supabase
- [ ] Can select a station
- [ ] Play button works
- [ ] Stop button works
- [ ] Metadata updates (song titles, artist names)
- [ ] Album art displays
- [ ] Search/filter works

### PWA Features
- [ ] App can be installed
- [ ] Installed app opens in standalone mode (no browser UI)
- [ ] App icon shows correctly
- [ ] App name displays correctly
- [ ] Theme color applies (purple/gradient)
- [ ] Splash screen shows (on some platforms)

### Offline Support
- [ ] Install and open the app
- [ ] Turn off internet/enable airplane mode
- [ ] Close and reopen the app
- [ ] UI should still load (even if streams don't play)
- [ ] Turn internet back on - streams should work

### Media Controls
- [ ] Play a station
- [ ] Lock your device screen
- [ ] Media controls appear on lock screen
- [ ] Play/pause works from lock screen
- [ ] Song/artist info shows on lock screen
- [ ] Album art appears on lock screen (if available)

### Cross-Device Testing
- [ ] Test on desktop
- [ ] Test on iOS phone
- [ ] Test on Android phone
- [ ] Test on tablet
- [ ] Responsive design works on all sizes

## Debugging Tools

### Chrome DevTools
1. Press F12 to open DevTools
2. Go to "Application" tab
3. Check:
   - Manifest: Should show your manifest.json details
   - Service Workers: Should show "activated and running"
   - Cache Storage: Should show cached files
   - Storage: Check if data persists

### Lighthouse Audit
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Progressive Web App"
4. Click "Generate report"
5. Should get a high PWA score (aim for 90+)

### What to Look For:
- ✅ Installable
- ✅ Fast and reliable on 3G
- ✅ Has a viewport meta tag
- ✅ Has a service worker
- ✅ Uses HTTPS
- ✅ Has a manifest
- ✅ Has icons

## Common Issues and Solutions

### "App won't install"
**Causes:**
- Not using HTTPS (GitHub Pages has this by default)
- Missing or invalid manifest.json
- Missing required icons
- Service worker errors

**Solutions:**
1. Check DevTools Console for errors
2. Verify manifest.json is accessible at `YOUR_URL/manifest.json`
3. Check all icon files exist in icons/ folder
4. Clear cache and try again

### "Service worker not updating"
**Solution:**
1. Increment version in sw.js: `const CACHE_NAME = 'radio-player-v2';`
2. Push changes to GitHub
3. Hard refresh browser (Ctrl+Shift+R)
4. Or: DevTools → Application → Service Workers → "Unregister" then reload

### "Streams won't play"
**Not a PWA issue** - this is stream-related:
- Try enabling CORS proxy checkbox
- Check if stream URL is correct
- Test stream URL directly in browser
- Some streams have regional restrictions

### "Icons don't show"
**Solution:**
1. Check icons/ folder exists and has all files
2. Verify paths in manifest.json
3. Clear browser cache
4. Uninstall and reinstall PWA

### "Works online but not offline"
**Expected behavior:**
- PWA shell (UI) should work offline
- Streaming audio requires internet connection
- This is correct for a streaming app!

## Performance Tips

### Check Page Load Speed
Use Lighthouse or PageSpeed Insights:
- Aim for fast load time (<3 seconds)
- All CDN resources should load quickly
- Service worker should speed up repeat visits

### Check Bundle Size
- Main HTML file size
- Icon sizes (optimize if needed)
- CDN libraries are cached by browser

## PWA Metrics to Monitor

After deploying, you can check these metrics:

1. **Install Rate**: How many users install your PWA
2. **Retention**: Do users come back after installing?
3. **Engagement**: Time spent in app
4. **Performance**: Load time, responsiveness

Use Google Analytics or similar tools to track these.

## Security Checklist

- [x] HTTPS enabled (automatic with GitHub Pages)
- [ ] Supabase keys are anon keys (not secret keys)
- [ ] No sensitive data in client-side code
- [ ] Consider adding rate limiting to your Supabase project

## Accessibility Testing

- [ ] Test with keyboard navigation only
- [ ] Test with screen reader (VoiceOver, NVDA, etc.)
- [ ] Check color contrast
- [ ] Test with browser zoom at 200%
- [ ] All interactive elements have visible focus states

## Final Checklist

Before sharing your PWA:

- [ ] All tests pass
- [ ] PWA installs correctly
- [ ] Works on multiple devices
- [ ] Performance is good (Lighthouse score 90+)
- [ ] No console errors
- [ ] Media controls work
- [ ] Supabase credentials are correct
- [ ] Icons look good
- [ ] App name is correct

🎉 Ready to share your PWA with the world!

## Support Resources

- PWA Docs: https://web.dev/progressive-web-apps/
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- Can I Use (browser support): https://caniuse.com/
- PWA Builder: https://www.pwabuilder.com/
