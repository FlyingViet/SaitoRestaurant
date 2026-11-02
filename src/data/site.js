// Single source of truth for business info. Used by the page, footer, map and
// the schema.org structured data, so update details here only.

export const SITE_URL = "https://www.saito-restaurant.com"

export const DOORDASH_URL =
  "https://www.doordash.com/store/Saito-Restaurant-NA-340776/en-US/"

export const EMAIL = "saitomemphis.2018@outlook.com"

export const HOURS = [
  {
    label: "Sun – Thu",
    time: "11am – 9pm",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "11:00",
    closes: "21:00",
  },
  {
    label: "Fri – Sat",
    time: "11am – 10pm",
    days: ["Friday", "Saturday"],
    opens: "11:00",
    closes: "22:00",
  },
]

export const LOCATIONS = [
  {
    id: "bartlett",
    name: "Saito 1 — Bartlett",
    shortName: "Bartlett",
    street: "6600 Stage Rd #101",
    city: "Memphis",
    region: "TN",
    postalCode: "38134",
    phone: "(901) 373-1957",
    position: [35.205189, -89.843314],
  },
  {
    id: "arlington",
    name: "Saito 2 — Arlington",
    shortName: "Arlington",
    street: "9775 US-64 #103",
    city: "Arlington",
    region: "TN",
    postalCode: "38002",
    phone: "(901) 590-2561",
    position: [35.20474489378353, -89.73692327346642],
  },
]

export const telHref = (phone) => `tel:+1${phone.replace(/\D/g, "")}`

export const cityLine = (loc) => `${loc.city}, ${loc.region} ${loc.postalCode}`

export const fullAddress = (loc) => `${loc.street}, ${cityLine(loc)}`

export const directionsHref = (loc) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `Saito Restaurant, ${fullAddress(loc)}`
  )}`
