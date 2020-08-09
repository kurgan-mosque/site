import React from 'react'
import { graphql } from 'gatsby'

import PageList from 'page/list'

const PagesNews = ({ data }) => {
  const list = data?.allMarkdownRemark?.nodes.map(
    ({ frontmatter: { title }, fields: { slug }, excerpt }) => ({
      title,
      slug,
      excerpt,
    })
  )
  return <PageList list={list} title="Новости" />
}

PagesNews.displayName = 'PagesNews'

export default PagesNews

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "^/news/" } } }
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
