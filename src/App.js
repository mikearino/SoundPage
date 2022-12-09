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
          Click the image to test your speakers&#128266;!!
        </p>
        <a
          className="App-link"
          href="https://www.mikeylofgren.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with &#10084; by Mike
        </a>
      </header>
    </div>
  );
}

export default App;
