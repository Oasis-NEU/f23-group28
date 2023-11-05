import { Link } from 'react-router-dom';
import './App.css';

function Login () {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./GoGreenLogo.png" alt="GoGreen Logo"/>
        <p>
          Enter your username, or enter a new one.
        </p>
        <input type="text" name="UsernameInput" size={30} required></input>
        <button type="button" name="test">Enter Your Garden</button>
        <p>
          Invalid username.
        </p>
        <Link to="/username">Go to page!</Link>
      </header>
    </div>
  );
}

export default Login;