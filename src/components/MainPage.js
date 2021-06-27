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
    const [load] = useState(false)


    // find out what button was clicked through event handler
    
    const buttonClicked = (e) =>{
     
      e.preventDefault();
    const serachQuery = e.target.value;
  console.log(serachQuery)
    //send request for data with by getting the value of button pressed and using it as a search query

    fetch('https://api.giphy.com/v1/gifs/search?api_key=qeYXgCES3uM22GY3CucKAMQNlzL8X5vL&q='+serachQuery)
    .then(response => response.json())
   
    .then(data =>  setImages(data.data))
    .then(setLoadButton(true))
    
    }


    const pageClicked = (e) =>{
      const pageValue =e.target.value;
     
     console.log(pageValue)
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
       {load ? <Gallery
  images ={currentImages}
  imageClicked={imageClicked}
/>  : null} 

{/* display Pagination component and props to pass to the component */}

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

export default MainPage;
