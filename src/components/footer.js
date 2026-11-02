import React from "react"
import { EMAIL, HOURS, LOCATIONS, cityLine, telHref } from "../data/site"

const Footer = () => (
  <footer>
    <div className="footer-grid">
      {LOCATIONS.map(loc => (
        <div key={loc.id} className="footer-col">
          <span className="footer-col-title">Location</span>
          <span className="footer-location-name">{loc.name}</span>
          <address>
            <span>{loc.street}</span>
            <span>{cityLine(loc)}</span>
            <a href={telHref(loc.phone)}>{loc.phone}</a>
          </address>
        </div>
      ))}

      <div className="footer-col">
        <span className="footer-col-title">Hours</span>
        {HOURS.map(h => (
          <span key={h.label}>
            {h.label}: {h.time}
          </span>
        ))}
        <span className="footer-col-title" style={{ marginTop: "16px" }}>Contact</span>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Saito Restaurant · Built by <a href="https://anhbrian.com" target="_blank" rel="noopener noreferrer">Brian Hoang</a></p>
    </div>
  </footer>
)

export default Footer
