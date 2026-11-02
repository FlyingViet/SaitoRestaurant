import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
    <Header siteTitle="Saito Restaurant" />
    <main id="main-content">{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
