import React from 'react';
//import FormattedDate from './FormattedDate';
import WeatherTemperature from './WeatherTemperature';
import AnimatedIcon from './AnimatedIcon';

export default function WeatherInfo({ data }) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-capitalize">{data.city}</h1>
      <div className="row">
        <div className="col-12">
          <div className="weather-main">
            <div className="weather-current">
              <WeatherTemperature metric={data.temperature} />
            </div>
            <AnimatedIcon icon={data.icon} size={70} />
            <ul className="p-0">
              <li className="text-capitalize">{data.description}</li>
              {/*<li>
                <FormattedDate time={data.time} />
  </li>*/}
            </ul>
          </div>
        </div>
      </div>
      <div className="weather-extra">
        <ul>
          <li>Humidity: {data.humidity} %</li>
          <li>Wind: {Math.round(data.wind)} km/h</li>
        </ul>
      </div>
    </div>
  );
}
