import React from 'react'
import styled from 'styled-components'

import mosdum from './mosdum.png'
import dumrf from './dumrf.png'
import muslim from './muslim.png'

const links = [
  [mosdum, 'http://mosdum.ru/'],
  [muslim, 'http://muslim.ru/'],
  [dumrf, 'http://dumrf.ru/']
]

const Links = styled(props => (
  <ul {...props}>
    {links.map(([image, link]) => (
      <li>
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
