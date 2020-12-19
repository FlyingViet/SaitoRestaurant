import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Menu from '../components/menu/menu'
import Instagram from '../components/instagram'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'

const IndexPage = ({data}) => {

return (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <Img fluid={data.seating.childImageSharp.fluid} className="hero-image"/>
    </section>
    <section className="container">
      <span className="description">
        Welcome to Saito Restaurant. Unfussy Japanese steakhouse, multiple hibachi grills, and a sushi bar.
      </span>
      <div className="gallery-grid">
        <Img fluid={data.sushi1.childImageSharp.fluid} className="gallery-img1"/>
        <Img fluid={data.sushi2.childImageSharp.fluid} className="gallery-img2"/>
        <Img fluid={data.sushi3.childImageSharp.fluid} className="gallery-img3"/>
      </div>
      <div className="about-grid">
        <h2>Japanese Cuisine</h2>
        <p>Here we have dine-in, hibachi tables, and carry-out. Seating at the bar and around the restaurant. </p>
      </div>
    </section>
    <div className="parallax"></div>
    <section className="container">
      <Menu />
      <Instagram />
    </section>
    {typeof window !== 'undefined' &&
      <LeafletMap
        position={[35.205189, -89.843314]} // Your Coordinates
        zoom={13} // Zoom Level
        markerText={"Saito Restaurant 1, 6600 Stage Rd # 101, Memphis, TN 38134"} // Icon text
      />
    }
    <Footer />
  </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    seating: file(relativePath: { eq: "Seating.jpg" }) {
      ...fluidImage
    }
    sushi3: file(relativePath: { eq: "Sushi3.JPG" }) {
      ...fluidImage
    }
    sushi1: file(relativePath: { eq: "Sushi1.JPG" }) {
      ...fluidImage
    }
    sushi2: file(relativePath: { eq: "Sushi2.JPG" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage
