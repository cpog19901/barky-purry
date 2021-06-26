import React, {useState} from 'react';
import DetailBox from './DetailBox';
import Buttons from "./Buttons";
import Gallery from './Gallery';
import Pagination from './Pagination';

const Controls = () => {

    
    const [loadButton, setLoadButton] = useState(false)
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState();
    const [boxOpen, setBoxOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage]= useState(25);
    const [load, setLoad] = useState(false)


    // find out what button was clicked through event handler
    
    const buttonClicked = (e) =>{
     
      e.preventDefault();
    const serachQuery = e.target.value;
  

    fetch('https://api.giphy.com/v1/gifs/search?api_key=qeYXgCES3uM22GY3CucKAMQNlzL8X5vL&q='+serachQuery)
    .then(response => response.json())
    .then(setLoad(true))
    .then(data =>  setImages(data.data))
    .then(setLoadButton(true))
    .then(setLoad(false))
    }

    //get current posts 

    const indexOfLastImage= currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage)

    const paginate = (pageNumber) =>{
      setCurrentPage(pageNumber)
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
        
      {boxOpen ? <DetailBox
          closeBox={closeBox}
          images ={images}
          currentImage ={currentImage}
          imageClicked ={imageClicked}
        />: null }
        
        <Buttons
          buttonClicked={buttonClicked}
        />

        {load ? <h1>Loading</h1>: null}

<Gallery
  images ={currentImages}
  imageClicked={imageClicked}
/>
<Pagination
     loadButton ={loadButton}
      pageClicked ={pageClicked}
      imagesPerPage={imagesPerPage}
      totalImages={images.length}
      paginate ={paginate}

  />
    
  </div>
    );
};

export default Controls;
