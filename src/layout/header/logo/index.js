import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import logo from './logo.png'

const Logo = styled((props) => (
  <Link to="/" {...props}>
    <img src={logo} alt="mosque" />
  </Link>
))`
  img {
    max-width: 100%;
  }
`

Logo.displayName = 'Logo'

export default Logo
