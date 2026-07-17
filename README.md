# Personal website

Plain HTML/CSS/JS, no build step. Files:

- `index.html` — page content
- `style.css` — styling
- `script.js` — abstract show/hide toggle, footer year
- `images/profile.jpg` — your headshot (add this — see below)
- `images/profile-placeholder.svg` — shown automatically if `profile.jpg` is missing

## Preview locally

Open `index.html` directly in a browser, or run a local server from this folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Add your photo

Drop a photo into `images/profile.jpg` (square, at least 280×280px works well). The page will pick it up automatically.

## Host your CV

Right now the "Download CV" button links to your existing CV at
`https://ribeirobeatriz.github.io/website_sep25/CV/CV_Jan26.pdf`. To host it
from this repo instead, put the PDF in a `cv/` folder here and update the
link in `index.html`.

## Publish with GitHub Pages

1. Create a new repo on GitHub, e.g. `beatrizribeiro/beatrizribeiro.github.io`
   (using that exact `<username>.github.io` name makes it your root site).
2. Push this folder's contents to the repo's `main` branch:

   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/beatrizribeiro/beatrizribeiro.github.io.git
   git push -u origin main
   ```

3. In the repo, go to **Settings → Pages**. If you used the
   `<username>.github.io` repo name, it's live automatically at
   `https://beatrizribeiro.github.io`. Otherwise, set the Pages source to the
   `main` branch under **Settings → Pages → Build and deployment**.

## Point your existing domain (beatrizmribeiro.com) at it

Your domain is currently pointed at Google Sites. To switch it to this new
site:

1. **At your domain registrar** (wherever you manage DNS for
   beatrizmribeiro.com), remove the existing A/CNAME records pointing to
   Google, and add GitHub Pages' records instead:

   - Four `A` records for the apex domain (`beatrizmribeiro.com`) pointing to:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - A `CNAME` record for `www` pointing to `beatrizribeiro.github.io`.

2. **In the GitHub repo**, go to **Settings → Pages → Custom domain**, enter
   `beatrizmribeiro.com` (or `www.beatrizmribeiro.com`), and save. GitHub
   will add a `CNAME` file to the repo automatically and can provision HTTPS
   for you (may take a few hours).

3. DNS changes can take anywhere from a few minutes to 24-48 hours to
   propagate. Do this step last, once you're happy with the site — it will
   take the current Google Site offline as soon as it propagates.
