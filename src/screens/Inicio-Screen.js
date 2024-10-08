
import './App.css';
import Component   from "./component";
function InicioScreen() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
         A.C.M.E.
        </p>
        <Component/>
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

export default InicioScreen;
