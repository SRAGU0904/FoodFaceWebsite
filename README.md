# FoodFace

A standalone bilingual food portrait collage playground. Data collection has ended; this website is for entertainment only.

## Play

Choose either portrait, add foods, then move, rotate, flip, resize proportionally, duplicate, delete, or change their layer order. Undo, redo, and clear remain available. Switch between English and Chinese without resetting your collages. Each portrait keeps its own collage until the page is refreshed or closed.

There is no personal-information form, research consent form, submission, result JSON, analytics, or application upload endpoint. The app keeps collage state only in page memory. Refreshing clears it. Hosting providers may separately maintain their own access logs.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ in your browser. Python is only needed for local preview; the published website is static and has no backend or build step.

## Publish on GitHub Pages

1. Create a new public repository for this website.
2. Upload the contents of this folder so `index.html` is at the repository root. Include `assets/` and `.nojekyll`.
3. In **Settings > Pages**, choose **Deploy from a branch**, your uploaded branch (usually `main`), and **/(root)**. Save.
4. Open the website URL shown by GitHub after deployment completes.

See [GitHub's publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

This folder is independent of the research repository and has no Git history or remote configured. Do not copy research records, analysis scripts, credentials, or the original repository's `.git` directory into it.

## Files

- `index.html`: playground page.
- `assets/css/styles.css`: desktop and mobile layout.
- `assets/js/`: editor, translations, catalog, clipping paths, and renderer.
- `assets/foods/`: the 16 food cutouts used by the page.
- `assets/portraits/`: two originals and the two active face fills.

The portraits are Zhu Yuanzhang and Rudolf II. The Rudolf II portrait is by Hans von Aachen, circa 1606–1608, in the Kunsthistorisches Museum, Vienna ([artwork reference](https://www.wga.hu/html_m/a/aachen/rudolf2.html)).
