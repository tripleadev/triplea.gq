import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductsPage = () => (
  <Layout>
    <SEO title="Products" />
    <h1>Check out our cool products</h1>
    <Link to="/products/a.js">a.js</Link>
  </Layout>
)

export default ProductsPage
