import React from 'react'

import { ImageComp } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

interface ImageData {
  imagem: ImageComp
  alt?: string
}

export default function Image({ imagem, alt }: ImageData) {
  if (imagem) {
    const { image } = imagem
    return (
      <img
        src={getImageUrl(image.url)}
        className="width-100 image-shadow bottom-margins-images"
        alt={image.caption || alt}
      />
    )
  } else {
    return <></>
  }
}
