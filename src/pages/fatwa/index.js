import React from 'react'
import { graphql } from 'gatsby'

import PageList from 'page/list'

const PagesFatwa = ({ data }) => {
  const list = data?.allMarkdownRemark?.nodes.map(
    ({ frontmatter: { title }, fields: { slug }, excerpt }) => ({
      title,
      slug,
      excerpt,
    })
  )
  return <PageList list={list} title="Фетвы" />
}

PagesFatwa.displayName = 'PagesFatwa'

export default PagesFatwa

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "^/fatwa/" } } }
      sort: { fields: fields___slug, order: DESC }
    ) {
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
