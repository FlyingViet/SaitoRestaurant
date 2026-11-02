import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { DOORDASH_URL } from "../data/site"

const NAV_LINKS = [
  { label: "About",     href: "/#about" },
  { label: "Menu",      href: "/#menu" },
  { label: "Locations", href: "/#location" },
]

const Header = ({ siteTitle }) => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <a href="/" className="site-logo" aria-label={siteTitle}>
        <span className="logo-primary">SAITO</span>
        <span className="logo-secondary">RESTAURANT</span>
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        <ul>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
          <li>
            <a
              href={DOORDASH_URL}
              className="nav-order-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Online
            </a>
          </li>
        </ul>
      </nav>

      <button
        className={`hamburger${open ? " is-open" : ""}`}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>

      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          <ul>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
            <li>
              <a
                href={DOORDASH_URL}
                className="nav-order-btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Order Online
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
