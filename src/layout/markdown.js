import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from 'layout'
import SEO from 'page/seo'

const Article = styled.article`
  background: rgba(245, 245, 245, 0.9);
  margin: 1em 0;
  padding: 1em;

  h1 {
    margin-top: 0;
  }
`

const Markdown = ({
  data: {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  },
}) => (
  <Layout>
    <SEO title={title} />
    <Article>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Article>
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
