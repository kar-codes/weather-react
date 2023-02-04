import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
          <footer>
            Coded by <a href="https://kluik.netlify.app/" target="_blank" rel="noreferrer">Kar</a> and is 
            <a href="https://github.com/kar-codes/weatherAppDraft/blob/main/src/weatherStyle.css" target="_blank" rel="noreferrer"> open-source </a>
            on Github.
            </footer>
          </div>
        </div>
  );
}

export default App;
