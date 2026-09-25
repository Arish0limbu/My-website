# My-website

An accessible, responsive portfolio for Arish Limbu, a BIT student and aspiring software engineer in Itahari, Nepal. The site highlights selected projects and the things I am learning while building them.

## What is included

- A single-page portfolio with About, Projects, Learning, and Contact sections
- Responsive layouts, keyboard-friendly navigation, visible focus styles, and reduced-motion support
- Project category filters and a saved light/dark theme preference
- A custom not-found page, social preview artwork, favicon, and browser manifest
- Search metadata, a sitemap, and crawler rules

The site uses plain HTML, CSS, and JavaScript modules. It has no build step or third-party runtime dependencies.

## Preview locally

From the repository root, run: python -m http.server 8000

Then open [http://localhost:8000](http://localhost:8000).

## Publish with GitHub Pages

After merging the portfolio into main, open the repository's **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select main and the root folder, then save. GitHub Pages will publish the site at [https://arish0limbu.github.io/My-website/](https://arish0limbu.github.io/My-website/).

## Updating content

Edit the profile copy and project cards in index.html. Keep each card's data-category value aligned with a filter in the Projects section. Site styles are split across styles/, while the small browser interactions live in scripts/.
