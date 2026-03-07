import React from 'react'

const LOCATIONS = [
  {
    name: "Saito 1 — Bartlett",
    address: "6600 Stage Rd #101",
    city: "Memphis, TN 38134",
    phone: "(901) 373-1957",
  },
  {
    name: "Saito 2 — Arlington",
    address: "9775 US-64 #103",
    city: "Arlington, TN 38002",
    phone: "(901) 590-2561",
  },
  {
    name: "Saito 3 — Collierville",
    address: "2130 W Poplar, Suite 107",
    city: "Collierville, TN 38017",
    phone: "(901) 854-0622",
  },
]

const Footer = () => (
  <footer>
    <div className="footer-grid">
      {LOCATIONS.map(loc => (
        <div key={loc.name} className="footer-col">
          <span className="footer-col-title">Location</span>
          <span className="footer-location-name">{loc.name}</span>
          <span>{loc.address}</span>
          <span>{loc.city}</span>
          <a href={`tel:+1${loc.phone.replace(/\D/g,'')}`}>{loc.phone}</a>
        </div>
      ))}

      <div className="footer-col">
        <span className="footer-col-title">Hours</span>
        <span>Sun – Thu: 11am – 9pm</span>
        <span>Fri – Sat: 11am – 10pm</span>
        <span className="footer-col-title" style={{ marginTop: '16px' }}>Contact</span>
        <a href="mailto:saitomemphis.2018@outlook.com">saitomemphis.2018@outlook.com</a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Saito Restaurant · Built by <a href="https://anhbrian.com" target="_blank" rel="noopener noreferrer">Brian Hoang</a></p>
    </div>
  </footer>
)

export default Footer
