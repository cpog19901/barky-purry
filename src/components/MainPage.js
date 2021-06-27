import React, {useState} from 'react';
import DetailBox from './DetailBox';
import Buttons from "./Buttons";
import Gallery from './Gallery';
import Pagination from './Pagination';

const MainPage = () => {

    
    const [loadButton, setLoadButton] = useState(false)
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState();
    const [boxOpen, setBoxOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage]= useState(25);
    const [isLinkAvailable] = useState("")
  


    // find out what button was clicked through event handler
    
    const buttonClicked = (e) =>{
     
      e.preventDefault();
    const serachQuery = e.target.value;
    fetch('https://api.giphy.com/v1/gifs/search?api_key=qeYXgCES3uM22GY3CucKAMQNlzL8X5vL&q='+serachQuery)
    .then(response => response.json())
    .then(data =>  setImages(data.data))
    .then(setLoadButton(true))
    }


    

    //get current posts 

    const indexOfLastImage= currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage)

    //set current page with paginate function

    const paginate = (pageNumber) =>{
      setCurrentPage(pageNumber)
    }

  // get the id of the image clicked and open detail box

    const imageClicked =(event) =>{ 
            const clickedImage = (event.target.id);
            setCurrentImage(clickedImage);
            setBoxOpen(true)
            
    }


    //close detail box
    const closeBox = () =>{
        setBoxOpen(false);
    }
  

    return (
      <div className="main-content">
      
{/* open detail box if boxOpen is set to true */}
{/* also display Deata component and props to pass to the component */}
     
      {boxOpen ? <DetailBox
          closeBox={closeBox}
          isLinkAvailable={isLinkAvailable}
          images ={images}
          currentImage ={currentImage}
          imageClicked ={imageClicked}
        />: null }
        
        <Buttons
          buttonClicked={buttonClicked}
        />
       {/* display Gallery component and props to pass to the component */}

        <Gallery
  images ={currentImages}
  imageClicked={imageClicked}
/> 

{/* display Pagination component and props to pass to the component */}

<Pagination
     loadButton ={loadButton}
      imagesPerPage={imagesPerPage}
      totalImages={images.length}
      paginate ={paginate}

  /> 
    
  </div> 
    );
};

export default MainPage;
