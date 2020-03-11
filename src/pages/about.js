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
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a 
        type specimen book. It has survived not only five centuries, but also the leap 
        into electronic typesetting, remaining essentially unchanged. It was 
        popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like 
        Aldus PageMaker including versions of Lorem Ipsum.</p>
      <Link to='/'>Home</Link>
    </Layout>
  )
}
