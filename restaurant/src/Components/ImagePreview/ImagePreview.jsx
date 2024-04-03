import React from 'react'
import './image-preview.css'

const ImagePreview = ({ image, name }) => {
  return (
    <div className="image_preview">
        {
            image ? <img src={image} alt={name} /> : <p>Here the image will be displayed after you upload it. Don't worry, you can replace it with any image you want to share with the world.</p>
        }
    </div>
  )
}

export default ImagePreview