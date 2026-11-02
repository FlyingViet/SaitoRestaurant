import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Rendered from each page's Gatsby `Head` export.
function Seo({ title, description, pathname, noindex, children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          imageAlt
        }
      }
    }
  `)

  const meta = site.siteMetadata
  const fullTitle = title || meta.title
  const metaDescription = description || meta.description
  const url = `${meta.siteUrl}${pathname}`
  const image = `${meta.siteUrl}${meta.image}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {noindex ? (
        <meta name="robots" content="noindex" />
      ) : (
        <link rel="canonical" href={url} />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={meta.imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {children}
    </>
  )
}

Seo.defaultProps = {
  title: ``,
  description: ``,
  pathname: `/`,
  noindex: false,
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
  noindex: PropTypes.bool,
  children: PropTypes.node,
}

export default Seo
