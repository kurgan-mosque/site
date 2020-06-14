import React from 'react'
import styled from 'styled-components'

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaVk,
  FaOdnoklassnikiSquare
} from 'react-icons/fa'

const LINKS = [
  [
    'https://www.facebook.com/kurgan.cathedral.mosque',
    FaFacebookSquare,
    '#3b5998'
  ],
  ['https://www.instagram.com/kurgan_mosque', FaInstagramSquare, '#e1306c'],
  ['https://www.vk.com/kurgan_mosque', FaVk, '#4872a3'],
  ['https://www.ok.ru/kurgan.mosque', FaOdnoklassnikiSquare, '#ee8208']
]

const Social = styled(props => (
  <section {...props}>
    <h3>Мы в социальных сетях:</h3>
    <ul>
      {LINKS.map(([link, Icon, color]) => (
        <li key={link}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Icon color={color} />
          </a>
        </li>
      ))}
    </ul>
  </section>
))`
  --height: 2em;

  text-align: center;

  h3 {
    display: inline;
    margin: 0;
  }

  ul {
    list-style: none;
    display: inline-block;
    padding: 0;
    margin: 0;

    li {
      display: inline;
      margin-left: 1em;

      svg {
        height: var(--height);
        width: var(--height);
        vertical-align: middle;
      }
    }
  }
`

export default Social
