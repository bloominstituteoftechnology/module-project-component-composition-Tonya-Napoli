import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure `
max-width: 300px;

caption {
  font-style: italic;
}
`

export default function Figure ({imageURL, caption}) {
    return(
    <figure>
      <img src={imageURL} />
      <figcaption>Photo of the Day for: {caption}</figcaption>
    </figure>
    )
  }