import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'layout'
import SEO from 'seo'

const Markdown = ({
  data: {
    markdownRemark: { frontmatter, html }
  }
}) => (
  <Layout>
    <SEO title={frontmatter.title} />
    <article dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

Markdown.displayName = 'Markdown'

export default Markdown

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
