import React from 'react'
import styled from 'styled-components'

import Quran from './quran'
import Ayat from './ayat'
import Links from './links'

const Aside = styled(props => (
  <aside {...props}>
    <Quran />
    <Ayat />
    <Links />
  </aside>
))`
  width: 200px;
`

Aside.displayName = 'Aside'

export default Aside
