import React from "react"
import { EMAIL, HOURS, LOCATIONS, SITE_URL, directionsHref } from "../data/site"
import { MENU } from "../data/menu"

const ORG_ID = `${SITE_URL}/#organization`
const MENU_ID = `${SITE_URL}/#menu`

const toE164 = (phone) =>
  `+1-${phone.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}`

const menuItems = (items) =>
  items.map((item) => ({
    "@type": "MenuItem",
    name: item.title,
    ...(item.desc && { description: item.desc }),
    offers: { "@type": "Offer", price: item.price, priceCurrency: "USD" },
  }))

const menuSection = (section) => ({
  "@type": "MenuSection",
  name: section.title,
  ...(section.note && { description: section.note }),
  hasMenuItem: menuItems(section.items),
})

const menu = {
  "@type": "Menu",
  "@id": MENU_ID,
  name: "Saito Restaurant Menu",
  url: MENU_ID,
  inLanguage: "en-US",
  hasMenuSection: MENU.map((category) =>
    category.sections.length === 1
      ? menuSection(category.sections[0])
      : {
          "@type": "MenuSection",
          name: category.label,
          hasMenuSection: category.sections.map(menuSection),
        }
  ),
}

const restaurants = LOCATIONS.map((loc) => ({
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#${loc.id}`,
  name: "Saito Restaurant",
  alternateName: loc.name,
  description: "Japanese steakhouse with hibachi grills and a full sushi bar.",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: toE164(loc.phone),
  email: EMAIL,
  priceRange: "$$",
  servesCuisine: ["Japanese", "Hibachi", "Sushi", "Steakhouse"],
  hasMenu: { "@id": MENU_ID },
  parentOrganization: { "@id": ORG_ID },
  hasMap: directionsHref(loc),
  address: {
    "@type": "PostalAddress",
    streetAddress: loc.street,
    addressLocality: loc.city,
    addressRegion: loc.region,
    postalCode: loc.postalCode,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: loc.position[0],
    longitude: loc.position[1],
  },
  openingHoursSpecification: HOURS.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
}))

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Saito Restaurant",
      url: SITE_URL,
      logo: `${SITE_URL}/icons/icon-512x512.png`,
      email: EMAIL,
      subOrganization: LOCATIONS.map((loc) => ({
        "@id": `${SITE_URL}/#${loc.id}`,
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Saito Restaurant",
      publisher: { "@id": ORG_ID },
    },
    ...restaurants,
    menu,
  ],
}

const StructuredData = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
  />
)

export default StructuredData
