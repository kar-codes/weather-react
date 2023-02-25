import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherForecast.css';

import { API_KEY } from '../../constants.js/config';
import { WEEK_DAYS } from '../../constants.js/dates';
import WeatherForecastItem from './WeatherForecastItem';

export default function WeatherForecast({ coordinates }) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    const daily = response.data.daily;
    daily.shift();
    daily.pop();
    setForecast(daily);
    setLoaded(true);
  }

  function getCurrentDayName(time) {
    let date = new Date(time * 1000);
    let forecastDay = date.getDay();
    return WEEK_DAYS[forecastDay];
  }

  let longitude = coordinates.longitude;
  let latitude = coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${API_KEY}&units=metric`;

  useEffect(() => {
    axios.get(apiUrl).then(handleResponse);
  }, []);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (item) {
            return (
              <WeatherForecastItem
                key={`item-${item.time}`}
                icon={item.condition.icon}
                dayName={getCurrentDayName(item.time)}
                maximum={item.temperature.maximum}
                minimum={item.temperature.minimum}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return 'Error fetching data...';
  }
}
