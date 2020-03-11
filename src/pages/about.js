import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import {Link} from 'gatsby';

export default function about() {
  return (
    <Layout>
      <SEO title="About" description='About page' />
      <h1>About Mythily</h1>
      <p>
        Mythily is driven by passion to contribute to the world through code and caring. 
      </p>
    </Layout>
  )
}
