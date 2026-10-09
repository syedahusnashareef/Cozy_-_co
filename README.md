# Cozy & Co. — Café Website Starter

**Tagline:** Good Food. Cozy Mood.  
**Location provided:** Sangareddy, near Old Bus Stand, Telangana, India.

A mobile-first, multi-page static website concept for Cozy & Co. Built with plain HTML, CSS, and JavaScript so it can be hosted on GitHub Pages without a build step.

## Included

- Home, Explore Menu, Offers & Student Combos, Our Café, and Contact & Order pages.
- Searchable 30-item menu with the requested suggested launch prices.
- Category and veg/non-veg filters.
- Cart with quantity changes, remove actions, subtotals, and browser-local cart persistence.
- Delivery/pickup checkout validation for demonstration; it does **not** send an order to the café.
- A local admin UI preview for editing displayed menu prices/availability in the current browser only.
- Responsive navigation, reduced-motion support, reveal animations, coffee steam effect, SEO basics, and empty/error states.

## Important launch limitations

This is a **front-end prototype**, not yet a live ordering system. It intentionally does not claim orders are submitted or payments are processed.

Before accepting real orders, connect and test:

1. A secure backend/database (for example, Supabase) with access policies and server-side order validation.
2. Admin authentication and authorization. `admin-preview.html` is **not secure** and must not be treated as a real admin portal.
3. A real order-creation endpoint and order status workflow.
4. A supported payment gateway if online payments are offered. No payment option is active in this prototype.
5. A message/contact form service.
6. Confirmed product prices, portions, allergens, available variants, taxes, delivery fees, serviceable areas, phone number, email, opening hours, verified map pin, and actual Zomato/Swiggy URLs.
7. Real customer reviews only after moderation. No testimonials are fabricated here.

Menu prices and combo prices are illustrative suggestions from the brief and must be confirmed before launch. Delivery/tax calculations are deliberately not invented. Background ambience is intentionally hidden until a properly licensed audio URL is configured in the local demo settings; audio starts only after the visitor presses the toggle.

## Run locally

Open `index.html` in a browser, or run a simple static server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a **new public repository** named `cozy-and-co` in your GitHub account.
2. Upload the *contents* of this folder (not only the ZIP) to the repository root.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. After GitHub Pages finishes deploying, open the generated Pages URL and test the menu, cart, responsive layout, and all links.

The ZIP archive can be used as a backup/download, but GitHub Pages needs the site's files extracted into the repository root to serve the website.

## Image notes

Food/café photos currently load from fixed Unsplash image URLs and therefore require an internet connection. Replace these with owned or properly licensed local images before production if needed.