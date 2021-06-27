import React from 'react';

const Gallery = ({ images, imageClicked }) => {
    return (
        <div className="images-container">

{/* map though images array and display results in an image tag with source url */}

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