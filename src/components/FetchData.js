import React, {useState, useEffect} from 'react';
import axios from "axios";

const FetchData = (props) => {

const queryTerm = props.whatClicked;

console.log(queryTerm);
   
    // set initial state to empty array with no images
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get("http://api.giphy.com/v1/gifs/search?api_key=qeYXgCES3uM22GY3CucKAMQNlzL8X5vL&q="+queryTerm)
        .then(res => {
            setImages(res.data.data)
            
           
            
        })
       
        .catch(err => {
            console.log(err)
            
        })
         //data is fetched only once
    }, [])


    return (
           
            
        <div>
            {images.map(image => <div key={image.id} className="image-container"> <img  src={image.images.downsized.url} /></div>)}
        </div>
       
    );
};

export default FetchData;