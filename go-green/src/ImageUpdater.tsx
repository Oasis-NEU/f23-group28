import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const ImageUpdater = () => {

  const [points, setPoints] = useState(0);

  function incrementPoints() {
    setPoints(points + 5);
  }

  return (
    <div>
    <h1>Image and Points Example</h1>
    
  {
      points >= 5 && 
      <img id="flower1" src="https://images.fineartamerica.com/images-medium-large-5/daisies-on-white-background-elena-elisseeva.jpg" width="133" height="200" />
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
      <img id="flower4" src="https://assets.wfcdn.com/im/47709872/resize-h445%5Ecompr-r85/2430/243040663/Tulips+On+Canvas+Print.jpg" width= "133" height= "200"></img>
    }

{
      points >= 25 && 
      <img id="flower5" src="https://img.freepik.com/free-photo/rose-flower-white-isolated_2829-14266.jpg?w=2000" width= "151" height= "225"></img>
    }

{
      points >= 30 && 
      <img id="flower6" src="https://img.freepik.com/premium-photo/flower-sunflower-isolated-white-background-seeds-oil-flat-lay-top-view_252173-120.jpg?w=360" width= "133" height= "200"></img>
    }

{
      points >= 35 && 
      <img id="flower7" src="https://cdn.create.vista.com/api/media/small/394222146/stock-photo-beautiful-red-carnation-flowers-isolated-white-background" width= "200" height= "200"></img>
    }

{
      points >= 40 && 
      <img id="flower8" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/beautiful-wild-poppy-on-white-digihelion.jpg" width= "134" height= "200"></img>
    }

{
      points >= 45 && 
      <img id="flower9" src="https://bloomingbulb.com/cdn/shop/products/OrangeSovereignAmaryllis_ca9d3737-53e4-4f0b-b13a-d2f455330dbe_1024x.jpg?v=1621018105" width= "154" height= "195"></img>
    }

{
      points >= 50 && 
      <img id="flower10" src="https://img.freepik.com/premium-photo/white-daffodil-isolated-white-background_146936-1860.jpg?w=2000" width= "142" height= "200"></img>
    }


  
    
  


    

    <p>Points: <span id="points">{points}</span></p>

    <button onClick={incrementPoints} id="earnPointsButton">Earn 5 Points</button>
    </div>


  )
}


export default ImageUpdater;
