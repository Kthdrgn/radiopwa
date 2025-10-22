# Quick Deployment Checklist

Follow these steps to deploy your Radio Player PWA to GitHub Pages:

## Before You Deploy

- [ ] Update Supabase credentials in `index.html` (lines ~1991-1992)
- [ ] Customize app name in `manifest.json`
- [ ] (Optional) Replace placeholder icons in `icons/` folder
- [ ] Test locally by opening `index.html` in a browser

## Deploy to GitHub

### Option 1: GitHub Web Interface (Recommended for beginners)

1. [ ] Go to https://github.com/new
2. [ ] Create a new public repository (e.g., "radio-player")
3. [ ] Upload these files:
   - [ ] index.html
   - [ ] manifest.json
   - [ ] sw.js
   - [ ] README.md
   - [ ] All files in icons/ folder
4. [ ] Go to Settings → Pages
5. [ ] Set Source to "Deploy from a branch"
6. [ ] Select "main" branch and "/ (root)" folder
7. [ ] Click Save
8. [ ] Wait 1-2 minutes for deployment
9. [ ] Visit: https://YOUR_USERNAME.github.io/REPO_NAME/

### Option 2: Git Command Line

```bash
# Navigate to your project folder
cd /path/to/radio-player-pwa

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Radio Player PWA"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main

# Then enable GitHub Pages in Settings → Pages
```

## After Deployment

- [ ] Visit your GitHub Pages URL
- [ ] Test the app works correctly
- [ ] Test PWA installation (look for install icon in browser)
- [ ] Test on mobile device
- [ ] Share your radio player with friends!

## Important Notes

- **Repository must be PUBLIC** for GitHub Pages (on free tier)
- **HTTPS is automatic** with GitHub Pages (required for PWA)
- **Updates take 1-2 minutes** to reflect after pushing changes
- **Service worker caching**: Increment version in `sw.js` when updating

## Need Help?

- Check the full README.md for detailed instructions
- GitHub Pages docs: https://docs.github.com/pages
- PWA docs: https://web.dev/progressive-web-apps/

## Your URLs

After deployment, fill these in:

- GitHub Repo: https://github.com/YOUR_USERNAME/___________
- Live App: https://YOUR_USERNAME.github.io/___________
- Installed PWA: Check your device's app drawer/home screen!

🎉 Happy streaming!
