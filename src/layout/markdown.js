import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'layout'
import SEO from 'page/seo'

const Markdown = ({
  data: {
    markdownRemark: {
      frontmatter: { title },
      html
    }
  }
}) => (
  <Layout>
    <SEO title={title} />
    <article>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
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
