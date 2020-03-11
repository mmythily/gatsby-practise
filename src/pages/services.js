import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function about() {
  return (
    <Layout>
      <SEO title='Services' description='list of services' />
      <h1>My Services</h1>
      <h2>Progressive Web Apps</h2>
      <h2>Single Page Websites</h2>
      <h2>WCAG Compliant Services</h2>
    </Layout>
  )
}