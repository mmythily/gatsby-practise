import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my blog.</h1>
    <p><Link to='/about'>About</Link></p>
    <p><Link to='/services'>Services</Link></p>

  </Layout>
)

export default IndexPage
