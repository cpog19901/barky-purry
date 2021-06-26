import React from 'react';

const Gallery = ({ images, imageClicked }) => {
    return (
        <div className="images-container">
        {images
        .map(image => 
        <div key={image.id} className="image-container"> 
        <img key={image.id} id={image.id} className="image" src={image.images.downsized.url} onClick={imageClicked} alt="animal-gif"/> 
        </div>
        )}
          
  </div>
    );
};

export default Gallery;