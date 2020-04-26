import React from 'react'
import styled from 'styled-components'

import Annotation from './component'

const slug2date = slug => {
  const milliseconds = Date.parse(slug.split('/')[2].substring(0, 10))
  if (!isNaN(milliseconds)) return new Date(milliseconds)
}

export const List = styled(({ list, ...props }) => (
  <ul {...props}>
    {list.map(({ slug, ...props }) => (
      <li key={slug}>
        <Annotation slug={slug} date={slug2date(slug)} {...props} />
      </li>
    ))}
  </ul>
))`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    background-color: #e7f2ef;
    padding: 0.1em 1em;
    margin: 2em 0;
  }
`

List.displayName = 'List'

export default List
