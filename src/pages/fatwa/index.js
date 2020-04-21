import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'layout'
import SEO from 'seo'

const title = 'Фетвы'

const Fatwa = ({ data }) => {
  const nodes = data?.allMarkdownRemark?.nodes
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <ul>
        {nodes.map(({ frontmatter: { title }, fields: { slug }, excerpt }) => (
          <li key={slug}>
            <h2>
              <a href={slug}>{title}</a>
            </h2>
            {excerpt}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

Fatwa.displayName = 'Fatwa'

export default Fatwa

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { fields: { slug: { regex: "^/fatwa/" } } }) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`
