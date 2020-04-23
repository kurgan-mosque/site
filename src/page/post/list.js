import React from 'react'
import styled from 'styled-components'

export const PostList = styled(({ list, ...props }) => (
  <ul {...props}>
    {list.map(({ title, slug, excerpt }) => (
      <li key={slug} {...props}>
        <h2>
          <a href={slug}>{title}</a>
        </h2>
        <p>{excerpt}</p>
      </li>
    ))}
  </ul>
))`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    background-color: #e7f2ef;
    padding: .1em 1em;
    margin: 2em 0;

    h2 > a {
        text-decoration: none;
        color: rgb(36, 116, 97);
        font-size: 21px;
      }
    }
  }
`

PostList.displayName = 'PostList'

export default PostList
