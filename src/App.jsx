import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from './components/Weather';
import Footer from './components/UI/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
