import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./components/Weather";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <Footer/>
          </div>
        </div>
  );
}

export default App;
