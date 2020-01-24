import React from 'react'
import styled from 'styled-components'

const Ayat = styled(props => (
  <p {...props}>
    Он – Тот, Кто благословляет вас, и Его ангелы также благословляют вас, чтобы
    вывести вас из мраков к свету. Он милосерден к верующим (33:43)
  </p>
))`
  border: 1px solid #314b4a;
  padding: 0.7em 1em;
  color: #314b4a;
  font-size: 15px;
`

Ayat.displayName = 'Ayat'

export default Ayat
