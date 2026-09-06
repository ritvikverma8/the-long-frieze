# The Long Frieze — A Timeline of Indian Art

An interactive timeline covering 7 periods and 14 artifacts of Indian art history.

## Project structure

```
index.html              Main page (structure + meta tags)
css/style.css            All styling
js/data.js                Era and artifact content (edit this to add/change artifacts)
js/app.js                 Rendering logic + URL routing
scripts/download-images.js  One-time script to self-host images locally
images/                  Local artifact photos go here (empty until you run the script)
```

## Running it locally

No build step needed — it's plain HTML/CSS/JS. Two options:

1. **Just open it.** Double-click `index.html`. Everything works, including images (via the Wikimedia fallback described below).
2. **Serve it properly** (recommended, since some browsers restrict things like deep-link routing on `file://` URLs):
   ```
   npx serve .
   ```
   then open the printed `localhost` URL.

## Self-hosting the images (recommended before deploying)

Right now `js/data.js` gives every artifact both a local path (`images/dancing-girl.jpg`, etc.) and a `imageFallback` Wikimedia URL. The site tries the local file first and automatically falls back to Wikimedia if it's missing — so it works immediately, but for a real deployment you should download the images once so you're not depending on Wikimedia's servers at runtime:

```
node scripts/download-images.js
```

This fetches every image into `/images`, skips ones you've already downloaded, and reports any failures so you can retry or grab them manually. Re-run it any time you add a new artifact.

> **Note:** this script was written and syntax-tested in a sandboxed environment that itself can't reach Wikimedia's servers (its egress network is restricted to package registries like npm/PyPI), so it couldn't be run end-to-end here — it fails with `host_not_allowed` inside that sandbox specifically. It uses only Node's built-in `https` module (no dependencies) and follows standard redirects, so it should run normally on your own laptop or CI runner with normal internet access. If it doesn't, check the error message it prints for each file and open the corresponding `imageFallback` URL manually as a fallback.

**Before going live**, consider also:
- Compressing the downloaded images (they come straight from Wikimedia at full resolution). [Squoosh](https://squoosh.app) or `npx @squoosh/cli` works well — aim for ~150–300KB per image, WebP if you want smaller files still.
- Double-checking each image's license on its Wikimedia file page before public use, even though all of them were selected as public domain or Creative Commons licensed.

## Deploying

Any static host works. Netlify, Vercel, GitHub Pages, and Cloudflare Pages are all free for a project this size.

**Netlify / Vercel (easiest):**
1. Push this folder to a GitHub repo.
2. Import the repo on netlify.com or vercel.com — no build command needed, output directory is `.` (project root).
3. You'll get a live URL immediately, plus a free `*.netlify.app` / `*.vercel.app` subdomain, or connect a custom domain.

**GitHub Pages:**
1. Push this folder to a GitHub repo.
2. Repo Settings → Pages → set source to the `main` branch, root folder.
3. Your site publishes at `https://<username>.github.io/<repo>/`.

After deploying, update the two placeholder URLs in `index.html`:
```html
<link rel="canonical" href="https://your-domain.example/">
<meta property="og:url" content="https://your-domain.example/">
```

## Shareable links

Every period has its own URL — e.g. `yoursite.com/#mughal` opens straight to the Mughal Period. This works via the browser's back/forward buttons too. Artifact tabs within a period aren't individually deep-linked (they reset to the first artifact) — extending the hash format to something like `#mughal/taj-mahal` would be a reasonable next step if you want that.

## Adding or editing content

Everything content-related lives in `js/data.js` as a single `eras` array. Each era has `highlights`, a `legacy` note, and an `artifacts` array; each artifact needs at minimum `name`, `medium`, `region`, `context`, `image`, `imageFallback`, and `credit`. Add a new artifact object to any era's `artifacts` array and it'll automatically get a tab, a details list, and a fallback icon if its image is missing — no other code changes required.

## Known limitations / next steps

- No automated tests or CI.
- No image optimization pipeline (see above) — do this before a real public launch.
- Accessibility: tab roles and an `aria-live` region are in place, but a full screen-reader pass hasn't been done.
- No analytics.
- Content covers 7 periods as a representative sample, not an exhaustive survey — see the in-page footer note.
