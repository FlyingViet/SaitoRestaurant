import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Menu from '../components/menu/menu'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Saito Restaurant — Japanese Steakhouse & Sushi Bar in Memphis, TN"
      description="Saito Restaurant offers authentic Japanese hibachi, sushi, and more at three locations in Memphis, Arlington, and Collierville, TN. Dine-in, carry-out, and delivery available."
    />

    {/* Hero */}
    <section className="hero" aria-label="Hero image">
      <GatsbyImage image={getImage(data.seating)} className="hero-image" alt="Saito Restaurant dining room" />
      <div className="hero-overlay">
        <h1>SAITO RESTAURANT</h1>
        <p>Japanese Steakhouse &amp; Sushi Bar</p>
        <a href="#menu" className="hero-cta">View Our Menu</a>
      </div>
    </section>

    {/* About */}
    <section id="about" aria-label="About Saito Restaurant">
      <div className="container about-section">
        <span className="description">
          Welcome to Saito Restaurant — an unfussy Japanese steakhouse with multiple hibachi grills, a full sushi bar, dine-in seating, and carry-out. Now at three locations across the Memphis area.
        </span>

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

    {/* Location */}
    <section id="location" aria-label="Restaurant location">
      {typeof window !== 'undefined' &&
        <LeafletMap
          position={[35.205189, -89.843314]}
          zoom={12}
          markerText="Saito Restaurant 1 — 6600 Stage Rd #101, Memphis, TN 38134"
        />
      }
    </section>

    <Footer />
  </Layout>
)

export const pageQuery = graphql`
  query {
    seating: file(relativePath: { eq: "Seating.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    sushi1: file(relativePath: { eq: "Sushi1.JPG" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    sushi2: file(relativePath: { eq: "Sushi2.JPG" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    sushi3: file(relativePath: { eq: "Sushi3.JPG" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`

export default IndexPage
