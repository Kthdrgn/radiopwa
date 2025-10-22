# Radio Player PWA

A Progressive Web App for streaming radio stations with live metadata, album art, and playlist management. Built with vanilla JavaScript and powered by Supabase.

## Features

- 🎵 Stream radio stations with real-time metadata
- 🎨 Display album artwork automatically
- 📱 Install as a Progressive Web App
- 🔄 Media Session API integration (control from lock screen/notifications)
- 💾 Offline support with service worker
- 📻 CORS proxy support for tricky streams
- 🎼 Create and manage playlists
- ⭐ Favorite stations
- 🔍 Search and filter stations
- 🎚️ Quality selection (low/medium/high)

## Prerequisites

Before deploying, you'll need:

1. A GitHub account
2. A Supabase project set up with your radio stations database
3. Your Supabase URL and anon key

## Setup Instructions

### 1. Update Supabase Credentials

Open `index.html` and find this section around line 1991:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE';
```

Replace with your actual Supabase credentials.

### 2. Customize the PWA

#### Update App Name and Description
Edit `manifest.json`:
```json
{
  "name": "Your Radio Player Name",
  "short_name": "Radio",
  "description": "Your custom description"
}
```

#### Replace Icons (Optional)
The `icons/` folder contains generated placeholder icons. You can replace them with your own:
- Icons should be square PNG images
- Sizes needed: 72, 96, 128, 144, 152, 192, 384, 512 pixels
- Use a tool like [PWA Asset Generator](https://www.pwabuilder.com/) for professional icons

### 3. Deploy to GitHub Pages

#### Method A: Using GitHub Web Interface (Easiest)

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it (e.g., `radio-player-pwa`)
   - Choose "Public" (required for GitHub Pages on free tier)
   - Don't initialize with README

2. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop all these files:
     - `index.html`
     - `manifest.json`
     - `sw.js`
     - `icons/` folder (all icon files)
   - Commit the files

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` (or `master`)
   - Select folder: `/ (root)`
   - Click Save

4. **Wait for deployment**
   - GitHub will build and deploy your site
   - Your site will be available at: `https://YOUR_USERNAME.github.io/REPO_NAME/`
   - This usually takes 1-2 minutes

#### Method B: Using Git Command Line

1. **Initialize Git repository**
```bash
cd /path/to/your/project
git init
git add .
git commit -m "Initial commit: Radio Player PWA"
```

2. **Create repository on GitHub and push**
```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

3. **Enable GitHub Pages** (follow step 3 from Method A)

### 4. Test Your PWA

Once deployed:

1. **Test in browser**: Visit your GitHub Pages URL
2. **Test PWA installation**:
   - Chrome/Edge: Look for install icon in address bar
   - Mobile: "Add to Home Screen" option in browser menu
3. **Test offline**: 
   - Install the PWA
   - Turn off internet
   - Open the app (UI should still load)

## File Structure

```
radio-player-pwa/
├── index.html          # Main application file
├── manifest.json       # PWA manifest (app metadata)
├── sw.js              # Service worker (offline support)
├── icons/             # PWA icons folder
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
└── README.md          # This file
```

## Updating Your App

To update your deployed app:

1. Make changes to your files locally
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Description of changes"
git push
```
3. GitHub Pages will automatically rebuild (1-2 minutes)
4. Update the cache version in `sw.js` if you make significant changes:
```javascript
const CACHE_NAME = 'radio-player-v2'; // Increment version
```

## Database Setup (Supabase)

Your Supabase database should have the following tables:

### `stations` table
```sql
CREATE TABLE stations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  url_low TEXT,
  url_high TEXT,
  icon_url TEXT,
  genres TEXT[],
  country TEXT,
  language TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### `playlists` table
```sql
CREATE TABLE playlists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  station_ids UUID[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### `favorites` table
```sql
CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  station_id UUID REFERENCES stations(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Troubleshooting

### PWA won't install
- Ensure HTTPS is enabled (GitHub Pages provides this automatically)
- Check browser console for errors
- Verify manifest.json is valid at `YOUR_URL/manifest.json`

### Service Worker not updating
- Increment the version in `sw.js`: `const CACHE_NAME = 'radio-player-v2';`
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache and service workers (DevTools → Application → Storage)

### Streams won't play
- Check if the stream URL is correct
- Try enabling the CORS proxy checkbox
- Some streams may require specific configurations

### Icons not showing
- Ensure all icon files are in the `icons/` folder
- Verify paths in `manifest.json` match your file structure
- Clear cache and reinstall the PWA

## Custom Domain (Optional)

To use a custom domain with GitHub Pages:

1. Buy a domain from any registrar
2. In your repo, create a file named `CNAME` with your domain:
```
radio.yourdomain.com
```
3. Configure DNS with your registrar:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
4. In GitHub Settings → Pages, enter your custom domain

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Samsung Internet 14+

## Technologies Used

- Vanilla JavaScript (no frameworks)
- [Icecast Metadata Player](https://github.com/eshaz/icecast-metadata-js) for streaming
- [Supabase](https://supabase.com/) for database
- Service Workers for offline support
- Media Session API for media controls

## License

MIT License - feel free to use and modify!

## Credits

Built with ❤️ for radio enthusiasts everywhere.
