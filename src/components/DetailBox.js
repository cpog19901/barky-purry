import React from 'react';

const DetailBox = ({closeBox, images, currentImage, imageClicked}) => {
   
    return (
        <div className="detail-box">
        <button className="close-box-btn" onClick={closeBox}>X</button>
        {images
        .filter(image => image.id === currentImage)
        .map(image => 
        
        <div className="img-holder" key={image.id}>
        <h1>{image.title}</h1>
        <img key={image.id} id={image.id} className="image-in-box" src={image.images.original.url} onClick={imageClicked} alt="animal-gif"/>
        <div className="img-details">
        <h2>Import date: {image.import_datetime}</h2>
        <a className="img-link"href={image.source_post_url}>{image.source_post_url}</a>
        <h4>Rating: {image.rating}</h4>
        </div>
        </div>
        
        )}
            
        </div>
    );
};

export default DetailBox;