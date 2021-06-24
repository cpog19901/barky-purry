import logo from './logo.svg';
import './App.css';
import FetchData from './components/FetchData';
import { useState } from 'react';
import Controls from "./components/Controls"
function App() {


const [buttonStatus, setButtonStatus] = useState(); 

const buttonClicked = (e) =>{
  e.preventDefault();
const buttonValue = e.target.value;
setButtonStatus(buttonValue);
}

  return (
    <div className="App">
    <h2>Barky Purry</h2>
    <form action="">
    <button onClick={buttonClicked} value="cats">Cats</button>
    <button onClick={buttonClicked} value="dogs">Dogs</button>
    </form>
    <div className="images-container">
   
    <FetchData
      whatClicked = {buttonStatus}
    />
    
   
    </div>
    </div>
  );
}

export default App;
