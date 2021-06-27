import React from 'react';

const DetailBox = ({closeBox, images, currentImage, imageClicked, isLinkAvailable}) => {
   
    return (
        <div className="detail-box">
        <button className="close-box-btn" onClick={closeBox}>X</button>


        {/* filter through the images array and only display the results if the image matches the current image state */}
        {images
        .filter(image => image.id === currentImage)
        .map(image => 
        <div className="details-img-container" >
    
    {/* display the image that user has clicked on  */}
        <div className="img-holder" key={image.id}>
        <h1>{image.title}</h1>
        <img key={image.id} id={image.id} className="image-in-box" src={image.images.original.url} onClick={imageClicked} alt="animal-gif"/>
          </div>  

            {/* display other data in another div such as image source url, rating and import date */}
        <div className="img-details">
    
        <h2 className="detail-header">Import date </h2>
        <span className="import-date">{image.import_datetime}</span>
            <h2 className="detail-header">URL </h2>

            {/* only show url if there is one, show warning message if there is not */}
        {isLinkAvailable === image.source_post_url ?  <span class="import-date">No source link available</span> : <a className="img-link"href={image.source_post_url}>{image.source_post_url}</a> }
        <h2 className="detail-header">Rating </h2>
        <span className="import-date">{image.rating}</span>
        </div>
        </div>
        
        )}
            
        </div>
    );
};

export default DetailBox;