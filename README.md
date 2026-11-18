# Vihaan Kalidindi Portfolio

A static portfolio for Vihaan Kalidindi, a first-year Cybersecurity and Risk Management undergraduate at the University of Texas at Dallas.

## Files

- `index.html` — Portfolio content, navigation, and contact information.
- `styles.css` — Dark theme, responsive layout, and focus styles.
- `resume.pdf` — One-page placeholder linked by the Resume button. Replace it with the final PDF at the same path.
- `.nojekyll` — Tells GitHub Pages to serve the static files directly.
- `README.md` — Local preview, deployment, and update instructions.

## Run locally

Open `index.html` directly in your browser, or run `python3 -m http.server 8000` from the repository root and visit http://localhost:8000. The site has no build step or dependencies and uses native HTML links and navigation.

## Deploy on GitHub Pages

1. Push the root files to the `main` branch on GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select **main** and **/ (root)**, then click **Save**.
5. When deployment completes, open the address shown under **Settings → Pages**.

To add LinkedIn or GitHub later, replace the corresponding “Link to be added” text in `index.html` with an anchor using your actual profile URL. After replacing the placeholder PDF, remove the “Placeholder PDF” label from the Resume button.
