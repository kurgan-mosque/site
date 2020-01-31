import React from 'react'
import styled from 'styled-components'

import Ayat from './ayat'

const Aside = styled(props => (
  <aside {...props}>
    <Ayat />
  </aside>
))`
  width: 200px;
`

Aside.displayName = 'Aside'

export default Aside
