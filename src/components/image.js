import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, placeholder: BLURRED)
        }
      }
    }
  `)

  return <GatsbyImage image={getImage(data.placeholderImage)} alt="Placeholder" />
}

export default Image
