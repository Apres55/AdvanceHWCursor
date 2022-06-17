import Logo from './components/images/logo-component';
import './App.css';
import { Routes, Route } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import SignInArea from './components/sign-in';
import SignUpArea from './components/sign-up';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Logo />
            <div className='login-inputs-div'>
              <h2>
                SIGN-UP
              </h2>
              <SignInArea />
            </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
