import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="About" keywords={['gatsby', 'application', 'react']} />
    <h1>About</h1>
    <Link to="/">Back to Home</Link>
  </Layout>
)
