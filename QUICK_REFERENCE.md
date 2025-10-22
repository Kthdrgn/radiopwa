# 📱 PWA Quick Reference

## Installation Flow

```
User visits your site
        ↓
Browser detects PWA capabilities
        ↓
"Install" prompt appears
        ↓
User clicks "Install"
        ↓
App added to home screen/app drawer
        ↓
Opens as standalone app
```

## File Relationships

```
index.html
    ├─→ links to manifest.json (defines app)
    ├─→ registers sw.js (service worker)
    └─→ displays icons from icons/ folder

manifest.json
    ├─→ references all icon files
    ├─→ defines app name & colors
    └─→ configures standalone mode

sw.js
    ├─→ caches index.html
    ├─→ caches manifest.json
    ├─→ caches icons
    └─→ caches CDN libraries
```

## Deployment Flow

```
1. Update Supabase credentials in index.html
                ↓
2. Create GitHub repository (public)
                ↓
3. Upload all files
                ↓
4. Enable GitHub Pages (Settings → Pages)
                ↓
5. Wait 1-2 minutes
                ↓
6. Visit: https://username.github.io/repo-name/
                ↓
7. Test & install your PWA! 🎉
```

## File Checklist

Upload these files to GitHub:

```
☑ index.html          (Main app file)
☑ manifest.json       (PWA config)
☑ sw.js              (Service worker)
☑ .gitignore         (Git ignore)
☑ README.md          (Documentation)
☑ icons/             (Folder with 8 icons)
  ☑ icon-72x72.png
  ☑ icon-96x96.png
  ☑ icon-128x128.png
  ☑ icon-144x144.png
  ☑ icon-152x152.png
  ☑ icon-192x192.png
  ☑ icon-384x384.png
  ☑ icon-512x512.png
```

Optional files:
```
☐ DEPLOYMENT.md      (Deployment guide)
☐ TESTING.md         (Testing guide)
☐ GET_STARTED.md     (This guide)
☐ .github/workflows/ (Auto-deploy)
```

## Browser Support

| Browser | Desktop | Mobile | Install | Offline |
|---------|---------|--------|---------|---------|
| Chrome  | ✅ | ✅ | ✅ | ✅ |
| Edge    | ✅ | ✅ | ✅ | ✅ |
| Firefox | ✅ | ✅ | ⚠️ | ✅ |
| Safari  | ⚠️ | ✅ | ✅ | ✅ |

✅ Full support | ⚠️ Partial support

## PWA Checklist

Essential PWA requirements (all included!):

```
✅ HTTPS (GitHub Pages provides)
✅ Valid manifest.json
✅ Service worker registered
✅ Icons (192px and 512px minimum)
✅ Responsive viewport
✅ Works offline (UI only)
✅ Fast loading time
✅ Theme color set
```

## Testing Checklist

After deployment, verify:

```
☐ Site loads at GitHub Pages URL
☐ Install prompt appears (or install icon in address bar)
☐ App installs successfully
☐ Opens in standalone mode (no browser UI)
☐ Icon displays correctly
☐ Station streaming works
☐ Metadata updates
☐ Album art shows
☐ Works offline (UI loads)
☐ Media controls work on lock screen
```

## Update Process

When you make changes:

```
1. Edit files locally
        ↓
2. Update cache version in sw.js
   const CACHE_NAME = 'radio-player-v2';
        ↓
3. Commit & push to GitHub
   git add .
   git commit -m "Update message"
   git push
        ↓
4. Wait 1-2 minutes
        ↓
5. Users get update notification
   (or hard refresh: Ctrl+Shift+R)
```

## Common Issues

### ❌ PWA won't install
**Fix:** 
- Check HTTPS is enabled (automatic on GitHub Pages)
- Verify manifest.json is accessible
- Check browser console for errors

### ❌ Service worker not updating
**Fix:**
- Increment version in sw.js
- Hard refresh (Ctrl+Shift+R)
- Or clear cache in DevTools

### ❌ Icons not showing
**Fix:**
- Verify icons/ folder uploaded
- Check manifest.json paths
- Clear cache and reinstall

### ❌ Streams won't play
**Fix:**
- Check Supabase credentials
- Try CORS proxy toggle
- Test stream URL directly

## Keyboard Shortcuts

### Desktop App
- `Spacebar` - Play/Pause (when button focused)
- `Tab` - Navigate between controls
- `Enter` - Activate button
- `Esc` - Close dropdowns

### Browser DevTools
- `F12` - Open DevTools
- `Ctrl+Shift+R` - Hard refresh
- `Ctrl+Shift+Delete` - Clear cache

## Important URLs

After deployment:

```
Live App:
https://YOUR_USERNAME.github.io/REPO_NAME/

Repository:
https://github.com/YOUR_USERNAME/REPO_NAME

Settings:
https://github.com/YOUR_USERNAME/REPO_NAME/settings/pages
```

## Resources

📚 **Included Docs:**
- GET_STARTED.md - You are here!
- README.md - Full documentation
- DEPLOYMENT.md - Deployment steps
- TESTING.md - Testing guide

🌐 **External Links:**
- GitHub Pages: https://pages.github.com/
- PWA Docs: https://web.dev/progressive-web-apps/
- Supabase: https://supabase.com/docs

## Quick Commands

### Git Setup
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USER/REPO.git
git push -u origin main
```

### Testing Locally
```bash
# Simple HTTP server (Python 3)
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Clear Service Worker
```javascript
// Run in browser console
navigator.serviceWorker.getRegistrations()
  .then(registrations => {
    registrations.forEach(r => r.unregister());
  });
```

## Success! 🎉

Your PWA is ready to deploy!

**Next steps:**
1. ✅ Files are prepared
2. 📝 Update Supabase credentials
3. 🚀 Deploy to GitHub Pages
4. 📱 Install on your devices
5. 🎵 Share with friends!

---

**Pro tip:** Bookmark your GitHub Pages URL and share it on social media - anyone can install your radio player PWA instantly!
