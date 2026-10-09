# Cozy & Co. — Good Food. Cozy Mood.

A responsive café website concept for Cozy & Co. in Sangareddy, Telangana.

## Included
- Warm espresso, cream and caramel visual theme
- Responsive mobile and desktop layout
- Menu with 30 sample items, category filters and search
- Add-to-bag cart with quantity controls and total calculation
- Café story, offer concepts and enquiry form
- No framework or npm installation required: this is a self-contained static HTML page

## Preview locally
Open `index.html` directly in a browser, or from this folder run:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish with GitHub Pages
1. Open the repository **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. The workflow in `.github/workflows/deploy-pages.yml` publishes the site when changes are pushed to `main`.
4. Check the **Actions** tab for deployment status.

## Before taking real orders
This is a front-end demo. The cart works in the browser, but checkout does not submit orders and no payment gateway, order database, admin authentication, or email inbox is connected. Connect a secure backend/payment provider before accepting real payments. The café's exact address, phone number, opening hours, and genuine reviews should be added only after confirmation. Menu prices are illustrative and should be verified.
