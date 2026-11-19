# Publishing this folder as a GitHub Page

Everything in this folder is static (no build step). All paths are relative, so it works at
`https://<user>.github.io/<repo>/`.

## One-time setup

1. **Create the repo** on github.com → New repository, e.g. `claude-code-apps`, **Public**
   (free GitHub Pages needs a public repo). Do not add a README/licence.
2. **Push this folder as its own repo** (the folder is the repo root, `index.html` must be at the top):
   ```bash
   cd /home/ludwig-linux/appcreation/pages
   git init -b main
   git config user.name  "Your Name"
   git config user.email "<id>+<user>@users.noreply.github.com"   # keeps your real email out of the public history
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/<user>/claude-code-apps.git
   git push -u origin main
   ```
3. **Turn on Pages:** repo → Settings → Pages → *Build and deployment* → Source: **Deploy from a branch**
   → Branch **main**, folder **/ (root)** → Save.
4. Wait 1–2 minutes. The site is at `https://<user>.github.io/claude-code-apps/`
   (the exact URL is shown at the top of the Pages settings).

## Updating

* **New app version:** copy the new APK into `downloads/`, delete the old one, and update
  `version` + `file` in `apps.js`.
* **New app:** add an entry to `apps.js` (English + German text, `cat:` = one of the category ids in `CATS`),
  put 5 screenshots in `shots/<id>/1.png … 5.png` (1 = start screen) and the APK in `downloads/`.
* **New category:** add it to `CATS` in `apps.js` and give it an icon in `ICON` in `site.js`.
  The landing page is meant to show all tiles without scrolling on a phone: 6 tiles (5 categories + install guide) fit now.
* **Texts / German:** UI texts live in `site.js` (`T.en`, `T.de`), app texts in `apps.js`.
* Then: `git add . && git commit -m "Update" && git push` – Pages redeploys automatically.

## Site structure

* `index.html` – landing page: one tile per category (`CATS` in `apps.js`) plus the install guide.
* `cat.html?c=<category>` – the apps of one category (from `APPS` and `TOOLS`, matched by `cat:`).
  `app.html?app=<id>` – app details, `install.html` – APK install guide.
* `games.html` / `tools.html` – old addresses, they only forward to the landing page / the Tools category.
* A tool with `page:` links to its own page (BenchPad); every other entry needs `file:` + `long:` + `shots/<id>/1-5.png`.
* Look: `style.css`, neutral grey theme, light and dark follow the phone's setting.
* `benchpad.html` – BenchPad page; texts (EN + DE) in `benchpad.js`. Downloads: `downloads/BenchPad-<v>.apk` and
  `downloads/BenchPad-fw-<v>.bin` (merged image for the Waveshare ESP32-S3-Zero, flashed at `0x0`).
  On a new version update the file names, version and SHA-256 at the top of `benchpad.js` and the version in `TOOLS`.

## Good to know

* Language: defaults to the visitor's browser language (German or English), remembered after clicking a flag.
  `?lang=de` / `?lang=en` forces one.
* Limits: Pages sites should stay under 1 GB; individual files under 100 MB (current APKs are ~2 MB each).
  Old APK versions only add weight, remove them when you update.
* The APKs are served as plain downloads. Android users still need to allow "install unknown apps" –
  the **How to install** page on the site explains it.
* To use your own domain: Settings → Pages → Custom domain (and add a DNS CNAME record).
* Local preview: `python3 -m http.server 8000` inside this folder, then open http://localhost:8000.
