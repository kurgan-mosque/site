import React from 'react'
import styled from 'styled-components'

import dumrf from './dumrf.png'

const links = [[dumrf, 'http://dumrf.ru/']]

const Links = styled(props => (
  <ul {...props}>
    {links.map(([image, link]) => (
      <li key={link}>
        <a
          href={link}
          style={{ backgroundImage: `url(${image})` }}
          target="_blank"
        />
      </li>
    ))}
  </ul>
))`
  list-style: none;

  li {
    display: inline-block;
    margin: 0 1em;

    a {
      display: block;
      width: 96px;
      height: 91px;
    }
  }
`

Links.displayName = 'Links'

export default Links
