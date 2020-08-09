import React from 'react'
import styled from 'styled-components'

const dateTimeFormat = new Intl.DateTimeFormat('ru-RU', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

const Time = styled(({ datetime, ...props }) => (
  <time dateTime={datetime.toISOString()} {...props}>
    {dateTimeFormat.format(datetime)}
  </time>
))`
  font-size: 14px;
  padding: 0.5em 1em;
  color: white;
  background-color: #33a67f;
`

Time.displayName = 'Time'

const Annotation = styled(({ slug, title, excerpt, date, ...props }) => (
  <article {...props}>
    {date && <Time datetime={date} />}
    <h2>
      <a href={slug}>{title}</a>
    </h2>
    <p>{excerpt}</p>
  </article>
))`
  position: relative;
  padding-top: 0.1em;

  a {
    text-decoration: none;
    color: rgb(36, 116, 97);
    font-size: 21px;
  }

  ${Time} {
    top: -1.5em;
    position: absolute;
  }
`

Annotation.displayName = 'Annotation'

export default Annotation
