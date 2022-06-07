
import './App.css';

import car from './car.jpg'; 

function App() {
  return (
    <div className="App"> 
        <h1 className="titleRed" > Mouna Khadhraoui</h1>
        <img src={car} alt="this is car image" />
        <img src="moto.jpg" alt="this is car image" />
        <br></br>
        <video className="videoo" controls>

        <source src="vid.mp4"  type="video/mp4" ></source>

        </video>
    </div>
   );
}

export default App;
