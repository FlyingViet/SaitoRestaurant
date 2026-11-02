import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import StructuredData from "../components/structured-data"
import Menu from "../components/menu/menu"
import Locations from "../components/locations"
import { DOORDASH_URL, HOURS, LOCATIONS, telHref } from "../data/site"

// The hero is the LCP element, so render it as a plain, immediately visible
// <picture> (GatsbyImage keeps it at opacity 0 until a script runs).
const HeroImage = ({ image, alt }) => {
  const { sources, fallback } = getImage(image).images
  return (
    <picture>
      {sources.map(source => (
        <source key={source.type} {...source} />
      ))}
      <img
        className="hero-image"
        src={fallback.src}
        srcSet={fallback.srcSet}
        sizes={fallback.sizes}
        alt={alt}
        fetchpriority="high"
      />
    </picture>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    {/* Hero */}
    <section className="hero" aria-label="Welcome">
      <HeroImage image={data.seating} alt="Saito Restaurant dining room" />
      <div className="hero-overlay">
        <h1>Saito Restaurant</h1>
        <p>Japanese Steakhouse &amp; Sushi Bar</p>
        <p className="hero-locations">Memphis (Bartlett) · Arlington, TN</p>
        <div className="hero-actions">
          <a href="#menu" className="hero-cta">View Our Menu</a>
          <a
            href={DOORDASH_URL}
            className="hero-cta hero-cta-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Online
          </a>
        </div>
      </div>
    </section>

    {/* At-a-glance hours and phone numbers */}
    <section className="info-bar" aria-label="Hours and phone numbers">
      <div className="info-item">
        <span className="info-label">Hours</span>
        <span className="info-hours">
          {HOURS.map(h => (
            <span key={h.label}>
              {h.label} {h.time}
            </span>
          ))}
        </span>
      </div>
      {LOCATIONS.map(loc => (
        <div key={loc.id} className="info-item">
          <span className="info-label">{loc.shortName}</span>
          <a href={telHref(loc.phone)}>{loc.phone}</a>
        </div>
      ))}
      <div className="info-item">
        <a href="#location" className="info-link">Directions &amp; map →</a>
      </div>
    </section>

    {/* About */}
    <section id="about" aria-label="About Saito Restaurant">
      <div className="container about-section">
        <p className="description">
          Welcome to Saito Restaurant — an unfussy Japanese steakhouse with multiple hibachi grills, a full sushi bar, dine-in seating, and carry-out. Now at two locations across the Memphis area.
        </p>

        <div className="gallery-grid">
          <GatsbyImage image={getImage(data.sushi1)} className="gallery-img1" alt="Sushi roll" />
          <GatsbyImage image={getImage(data.sushi2)} className="gallery-img2" alt="Sushi platter" />
          <GatsbyImage image={getImage(data.sushi3)} className="gallery-img3" alt="Chef's sushi selection" />
        </div>

        <div className="about-grid">
          <h2>Japanese Cuisine</h2>
          <p>Experience the sights and sounds of the hibachi grill, or choose from our extensive sushi bar. We offer dine-in, hibachi tables, seating at the bar, and carry-out — something for every occasion.</p>
        </div>
      </div>
    </section>

    <div className="parallax" role="img" aria-label="Saito Restaurant interior" />

    {/* Menu */}
    <div className="container">
      <Menu />
    </div>

    <Locations />
  </Layout>
)

export const Head = () => (
  <Seo
    title="Saito Restaurant | Hibachi & Sushi in Memphis and Arlington, TN"
    description="Japanese steakhouse with hibachi grills and a full sushi bar in Memphis (Bartlett) and Arlington, TN. See our menu, hours and directions, or order online."
  >
    <StructuredData />
  </Seo>
)

export const pageQuery = graphql`
  query {
    seating: file(relativePath: { eq: "Seating.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: NONE
          quality: 70
          breakpoints: [640, 960, 1280, 1600, 1920, 2400]
        )
      }
    }
    sushi1: file(relativePath: { eq: "Sushi1.JPG" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 900, placeholder: BLURRED, sizes: "(min-width: 640px) 40vw, 90vw")
      }
    }
    sushi2: file(relativePath: { eq: "Sushi2.JPG" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 900, placeholder: BLURRED, sizes: "(min-width: 640px) 40vw, 90vw")
      }
    }
    sushi3: file(relativePath: { eq: "Sushi3.JPG" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1200, placeholder: BLURRED, sizes: "(min-width: 640px) 55vw, 1px")
      }
    }
  }
`

export default IndexPage
