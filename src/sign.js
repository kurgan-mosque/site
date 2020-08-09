import React from 'react'
import styled from 'styled-components'

const Sign = styled((props) => (
  <p {...props}>
    <em>
      С уважением и добрыми молитвами,
      <br />
      Председатель Курганского городского религиозного общества мусульман
      <br />
      Зиёдали Хаджи Мизробов.
    </em>
  </p>
))`
  text-align: right;
`

Sign.displayName = 'Sign'

export default Sign
