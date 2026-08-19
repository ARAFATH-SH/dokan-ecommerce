# Dokan

A frontend only ecommerce site inspired by Alibaba, Daraz and Amazon. Built with
Next.js, TypeScript, Tailwind CSS and React. Product data is stored in local
files under lib/data, so no backend or database is required to run the site.

## Getting started

Install dependencies and start the development server.

    npm install
    npm run dev

Then open http://localhost:3000 in your browser.

## What is included

- Home page with a hero banner, category grid, flash deals and product sections
- Category pages and a full product catalog page with a category sidebar
- Product detail pages with an image gallery, quantity selector and related items
- A working cart with quantity updates, stored in the browser between visits
- Basic search across product titles
- SEO metadata, an XML sitemap and a robots file
- Reusable components for headers, product cards, breadcrumbs and more

## Project structure

    app/               Route pages (home, products, category, product, cart, search)
    components/         UI building blocks grouped by area (layout, home, product, cart)
    context/            Cart state shared across the app
    lib/data/            Product and category data
    lib/types.ts         Shared TypeScript types
    lib/utils.ts          Formatting helpers

## Notes

Product and category images are pulled from public image services for
placeholder purposes. Replace lib/data/products.ts and lib/data/categories.ts
with real data once a backend is connected.

This project intentionally has no backend or database yet. Supabase and
Node.js can be added later to handle authentication, product management,
orders and payments.
