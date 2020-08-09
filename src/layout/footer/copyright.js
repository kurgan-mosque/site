import React from 'react'
import styled from 'styled-components'

const Copyright = styled((props) => (
  <span {...props}>
    © {new Date().getFullYear()} Курганская соборная мечеть
  </span>
))``

Copyright.displayName = 'Copyright'

export default Copyright
