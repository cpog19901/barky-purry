import logo from './logo.svg';
import './App.css';
import Controls from "./components/Controls"
function App() {


  return (
    <div className="App">
    <div className="main-title">
    <h1>Barky <span class="purry-title">Purry</span> </h1>
    <img className="cats-dogs-img"src="images/catsanddogs.svg" alt="" />
    </div>
   
    <Controls/>
    
    </div>
  );
}

export default App;
