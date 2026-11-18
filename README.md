# Vihaan Kalidindi Portfolio

A static portfolio for Vihaan Kalidindi, a first-year Cybersecurity and Risk Management undergraduate at the University of Texas at Dallas.

## File structure

| Path | Purpose |
| --- | --- |
| `index.html` | Portfolio content, navigation, and contact information |
| `styles.css` | Dark theme, responsive layout, and focus styles |
| `site.js` | Mobile navigation with keyboard and screen reader support |
| `assets/` | Hero artwork, favicon, and locally hosted Geist font with its license |
| `resume.pdf` | One-page placeholder linked from the Resume button |
| `.nojekyll` | Serves the static files directly on GitHub Pages |
| `README.md` | Local preview, deployment, and update instructions |

## Run locally

Open `index.html` in a browser, or serve the repository root with Python:

```sh
python3 -m http.server 8000
```

Visit http://localhost:8000. No installation or build step is required.

## Deploy on GitHub Pages

1. Push the site files to the `main` branch of the GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select **main** and **/ (root)**, then click **Save**.
5. When deployment finishes, open the site URL shown under **Settings → Pages**.

## Update the placeholders

- Replace the root `resume.pdf` with your finished PDF. In `index.html`, remove the `aria-describedby="resume-note"` attribute and the corresponding `resume-note` element.
- In the Contact section of `index.html`, replace each “Link to be added” placeholder with an anchor pointing to your actual LinkedIn or GitHub profile when available.
