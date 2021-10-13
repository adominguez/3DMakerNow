import React, { useState } from 'react'
import { PreviewImage, ImageGaleryWrapper, ImageGaleryList, Thumbnail } from './ImageGalery.Styles'

const ImageGalery = ({ images }) => {
  const [image, setImage] = useState(images && images?.length ? images[0] : null)

  return (
    <ImageGaleryWrapper>
      {images && images.length && (
        <PreviewImage image={image?.localFile?.childImageSharp?.gatsbyImageData} alt={image.altText || 'Preview image'} />
      )}
      <ImageGaleryList>
        {images.map((img, index) => (
          <Thumbnail image={img?.localFile?.childImageSharp?.gatsbyImageData} alt={img.altText || 'thumbnail image'} key={index} onClick={() => setImage(img)} />
        ))}
      </ImageGaleryList>
    </ImageGaleryWrapper>
  )
}

export default ImageGalery
