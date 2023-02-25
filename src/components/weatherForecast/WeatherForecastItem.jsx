import React from 'react';
import AnimatedIcon from '../AnimatedIcon';

export default function WeatherForecastItem({ icon, dayName, maximum, minimum }) {
  return (
    <div className="col">
      <div className="WeatherForecast-day">{dayName}</div>
      <div className="WeatherForecast-icon">
        <AnimatedIcon icon={icon} />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(maximum)}º {''}
        </span>
        <span className="WeatherForecast-temperature-min">{Math.round(minimum)}º</span>
      </div>
    </div>
  );
}
