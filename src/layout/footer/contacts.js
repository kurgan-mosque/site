import React from 'react'
import styled from 'styled-components'
import { MdMail, MdMap } from 'react-icons/md'

import Link from './link'

const Contacts = styled((props) => (
  <ul {...props}>
    <li>
      <MdMap />
      <Link
        href="https://yandex.ru/maps/-/CKA4aD1q"
        target="_blank"
        rel="noopener noreferrer"
      >
        Россия, Курганская область, г.&nbsp;Курган, ул.&nbsp;Сибирская, 2а
      </Link>
    </li>
    <li>
      <MdMail />
      <Link href="mailto:kurganmosque@gmail.com" rel="noopener noreferrer">
        kurganmosque@gmail.com
      </Link>
    </li>
  </ul>
))`
  list-style: none;
  padding: 0;
  font-size: 16px;
  text-align: right;

  li {
    margin-bottom: 0.5em;
  }

  svg {
    vertical-align: middle;
    margin: 0 0.25em;
    color: #31846d;
  }
`

export default Contacts
