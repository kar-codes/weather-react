import React, { useState } from 'react';

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState('metric');

  function showCelsius(event) {
    event.preventDefault();
    setUnit('metric');
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit('imperial');
  }

  function fahrenheit() {
    return (props.metric * 9) / 5 + 32;
  }

  if (unit === 'metric') {
    return (
      <div className="weather-current">
        <span className="temperature">
          {' '}
          <strong>{Math.round(props.metric)}</strong>
        </span>
        <span className="unit mt-2">
          {' '}
          ºC |{' '}
          <a href="/" onClick={showFahrenheit}>
            ºF
          </a>{' '}
        </span>
      </div>
    );
  } else {
    return (
      <div className="weather-current">
        <span className="temperature">
          {' '}
          <strong>{Math.round(fahrenheit())}</strong>
        </span>
        <span className="unit mt-2">
          {' '}
          <a href="/" onClick={showCelsius}>
            ºC
          </a>{' '}
          | ºF{' '}
        </span>
      </div>
    );
  }
}
