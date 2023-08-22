import React from 'react'

export default function Figure ({imageURL, caption}) {
    return(
    <figure>
      <img src={imageURL} />
      <figcaption>Photo of the Day for: {caption}</figcaption>
    </figure>
    )
  }