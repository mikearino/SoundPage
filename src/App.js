import logo from './logo512.png';
import './App.css';
import sound from './forest.wav';

function App() {

  function play() {
    new Audio(sound).play()
  }


  return (
    <div className="App">
      <header className="App-header">
       <button onClick={play}>
        <img class="hover" src={logo} className="App-logo" alt="logo" />

       </button>
        <p>
          Click the image to test sound!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
