import React, {useState} from 'react';


const Controls = () => {

    const [showGallery, setShowGallery] = useState(false)
    
    const [images, setImages] = useState([]);


    // find out what button was clicked through event handler
    
    const buttonClicked = (e) =>{
     
      e.preventDefault();
    const buttonValue = e.target.value;
  

    fetch('http://api.giphy.com/v1/gifs/search?api_key=qeYXgCES3uM22GY3CucKAMQNlzL8X5vL&q='+buttonValue)
    .then(response => response.json())
    .then(data => setImages(data.data));
    
    }

    return (
        <div>
        <form action="">
        <button onClick={buttonClicked} value="cats">Cats</button>
        <button onClick={buttonClicked} value="dogs">Dogs</button>
        </form>

        <div className="images-container">
        {images.map(image => <div key={image.id} className="image-container"> <img  src={image.images.downsized.url} /></div>)}
 
  </div>
  </div>
    );
};

export default Controls;