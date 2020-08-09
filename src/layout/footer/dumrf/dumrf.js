import React from 'react'
import styled from 'styled-components'

import dumrf from './dumrf.png'

const title = 'Духовное управление мусульман Российской Федерации'

const DumRF = styled((props) => (
  <a
    href="http://dumrf.ru/"
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    {...props}
  >
    <img src={dumrf} alt={title} />
  </a>
))`
  display: inline-block;
`

export default DumRF
