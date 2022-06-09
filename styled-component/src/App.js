import Logo from './components/images/logo-component';
import './App.css';
import SignInArea from './components/sign-in';
import SignUpArea from './components/sign-up';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <div className='login-inputs-div'>
          <h2>
            SIGN-UP
          </h2>
          <SignInArea />
        </div>
      </header>
    </div>
  );
}

export default App;
