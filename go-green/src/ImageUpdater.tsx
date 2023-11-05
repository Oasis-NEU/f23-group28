import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const ImageUpdater = () => {

  const [points, setPoints] = useState(0);

  function incrementPoints() {
    setPoints(points + 1);
  }

  return (
    <div>
    <h1>Image and Points Example</h1>
    
  {
      points >= 5 && 
      <img id="flower1" src="https://images.fineartamerica.com/images-medium-large-5/daisies-on-white-background-elena-elisseeva.jpg" width="149.5" height="225" />
    }

  {
      points >= 10 && 
      <img id="flower2" src="https://floralife.com/wp-content/uploads/2016/01/iStock_000019426693_sml-1.jpg" width= "144" height= "216"></img>
    }

  {
      points >= 15 && 
      <img id="flower3" src="https://media.istockphoto.com/id/171586914/photo/lavender.jpg?b=1&s=612x612&w=0&k=20&c=gYCz3556VpqwG5BU54qVm6he-XRvk59V5yBL90SYjtU=" width= "136" height= "204"></img>
    }

{
      points >= 20 && 
      <img id="flower4" src="https://static.vecteezy.com/system/resources/previews/002/628/137/non_2x/realistic-3d-tulip-flower-isolated-on-white-background-free-vector.jpg" width= "200" height= "198"></img>
    }

{
      points >= 25 && 
      <img id="flower5" src="https://img.freepik.com/free-photo/rose-flower-white-isolated_2829-14266.jpg?w=2000" width= "151" height= "225"></img>
    }

{
      points >= 30 && 
      <img id="flower6" src="https://thumbs.dreamstime.com/b/sunflower-isolated-white-background-beautiful-72446045.jpg" width= "200" height= "200"></img>
    }

  
    
  


    

    <p>Points: <span id="points">{points}</span></p>

    <button onClick={incrementPoints} id="earnPointsButton">Earn 5 Points</button>
    </div>


  )
}


export default ImageUpdater;
