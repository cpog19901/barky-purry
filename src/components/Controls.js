import React, {useState} from 'react';
import DetailBox from './DetailBox';

const Controls = () => {

    
    const [loadButton, setLoadButton] = useState(false)
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState();
    const [boxOpen, setBoxOpen] = useState(false)


    // find out what button was clicked through event handler
    
    const buttonClicked = (e) =>{
     
      e.preventDefault();
    const buttonValue = e.target.value;
  

    fetch('http://api.giphy.com/v1/gifs/search?api_key=qeYXgCES3uM22GY3CucKAMQNlzL8X5vL&q='+buttonValue+"&limit=25")
    .then(response => response.json())
    .then(data =>  setImages(data.data))
    
    .then(setLoadButton(true))
    }

    const pageClicked = (e) =>{
     const pageValue =e.target.value;
    
    console.log(pageValue)
    }

    const imageClicked =(event) =>{ 
            const clickedImage = (event.target.id);
            setCurrentImage(clickedImage);
            setBoxOpen(true)
            
    }

    const closeBox = () =>{
        setBoxOpen(false);
    }
  

    return (
        <div className="main-content">
        {boxOpen ? <div className="detail-box">
        <button className="close-box-btn" onClick={closeBox}>X</button>
        {images
        .filter(image => image.id === currentImage)
        .map(image => <div>
        <h1>{image.title}</h1>
        <img key={image.id} id={image.id} className="image-in-box" src={image.images.original.url} onClick={imageClicked}/>
        <h2>Import date: {image.import_datetime}</h2>
        <a href={image.source_post_url}></a>
        <h4>Rating: {image.rating}</h4>
        </div>
        
        )}
            
        </div>: null }
        <div className="button-container">
        <form action="">
       
        <button className="animal-btn" onClick={buttonClicked} value="cats"> <img className="animal-pic" onClick={buttonClicked} value="cats"  src="/images/cat.svg" alt="" /> Cats</button>
        <button className="animal-btn" onClick={buttonClicked} value="dogs"> <img className="animal-pic" onClick={buttonClicked} value="dogs" src="/images/dog-seating.svg" alt="" /> Dogs</button>
        </form>
        </div>
        <div className="images-container">
        {images
        .map(image => 
        <div key={image.id} className="image-container"> 
        <img key={image.id} id={image.id} className="image" src={image.images.downsized.url} onClick={imageClicked}/> 
        </div>
        )}
          
  </div>
  {loadButton ? 
         <div className="pagination">
         <button className="page-number"href="" value={1} onClick={pageClicked}> 1 </button>
         <button className="page-number"href="" value={2} onClick={pageClicked}> 2</button>
         </div>
         :null} 
  </div>
    );
};

export default Controls;