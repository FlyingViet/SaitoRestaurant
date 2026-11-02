# Saito Restaurant

Website for [Saito Restaurant](https://www.saito-restaurant.com), a Japanese steakhouse and sushi bar with hibachi grills in Memphis (Bartlett) and Arlington, TN.

Built with [Gatsby 5](https://www.gatsbyjs.com/) and deployed by Netlify from the `master` branch.

## Development

```shell
npm install
npm run develop   # http://localhost:8000
npm run build     # production build in public/
npm run serve     # serve the production build at http://localhost:9000
```

## Updating content

| What | Where |
| --- | --- |
| Locations, phone numbers, hours, email, DoorDash link | `src/data/site.js` |
| Menu items, prices and notes | `src/data/menu.js` |
| Page text and photos | `src/pages/index.js`, `src/images/` |
| Search/social title and description | `gatsby-config.js` (`siteMetadata`) and the `Head` export in `src/pages/index.js` |

The footer, the Locations & Hours section, the map and the search-engine structured data all read from `src/data/`, so each detail only needs to be changed in one place.

## SEO

- Page title, description, canonical URL, Open Graph and Twitter card tags come from `src/components/seo.js` (Gatsby Head API).
- `src/components/structured-data.js` publishes schema.org JSON-LD: the organization, one `Restaurant` per location (address, geo, phone, opening hours) and the full `Menu` with prices.
- Every menu category is rendered into the static HTML (inactive tabs are `hidden`), so search engines index the whole menu.
- `gatsby-plugin-sitemap` generates `/sitemap-index.xml`; `static/robots.txt` points crawlers to it.
- The social sharing image is `static/og-image.jpg` (1200×630). The favicon/app icon is `src/images/saito-icon.png`.

After content changes, check the live page with Google's [Rich Results Test](https://search.google.com/test/rich-results).
