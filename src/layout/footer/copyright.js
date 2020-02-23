import React from 'react'

const Copyright = props => (
  <span {...props}>
    © {new Date().getFullYear()} Курганская соборная мечеть
  </span>
)

Copyright.displayName = 'Copyright'

export default Copyright
