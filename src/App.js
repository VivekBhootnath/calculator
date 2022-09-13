import logo from './logo.svg';
import './App.css';
import Calc from './Calc';

function App() {
  return (
    <div className="App">
      <div className="App-bg">
        <div className='header'>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CALCULATOR</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <Calc />
      </div>
    </div>
  );
}

export default App;
