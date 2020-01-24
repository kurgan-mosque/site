import React from 'react'

import quran from './quran.jpg'

const Quran = () => (
  <a href="http://quran-online.ru/">
    <img src={quran} alt="quran" />
  </a>
)

Quran.displayName = 'Quran'

export default Quran
