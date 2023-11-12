import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

 const [userName, setUserName] = useState(""); 
 

 return (
    <div className="App">
      <header className="App-header">
        <img src="./GoGreenLogo.png" alt="GoGreen Logo"/>
        <p>
          Enter your username, or enter a new one.
        </p>
        <input type="text" name="UsernameInput" size={30} onChange={(e) => setUserName(e.target.value)} value={userName} required></input>
        <button type="button" name="test" onClick={() => console.log(userName)}>Enter Your Garden</button>
        <p>
          Invalid username.
        </p>
      </header>
    </div>
  );
}

export default App;
