import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ position: "relative" }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <div className="greenbar"></div>
        <div className="redbar"></div>
        <main>{children}</main>
        <footer>
          Copyright © {new Date().getFullYear()} TripleA Development
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
