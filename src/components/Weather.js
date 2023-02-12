import React, {useState} from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(props){
        const [weatherData, setWeatherData] = useState({ ready: false});
            function handleResponse(response){
            console.log(response.data);
            setWeatherData({
                ready: true,
                city:response.data.city ,
                temperature: response.data.temperature.current,
                icon: response.data.icon_url,
                time: response.data.time,
                description: response.data.condition.description ,
                wind: response.data.temperature.current.speed,
                humidity : response.data.temperature.humidity,
                pressure: response.data.temperature.pressure
            });
    }

    if (weatherData.ready){
        return <div className="weather container">
        <form>
            <div className="row search-bar">
                <div className="col-9">
                <input type="search" placeholder="Type a city" className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="submit-btn btn"/>
                </div>
            </div>
        </form>
       <h1 className="text-capitalize">{weatherData.city}</h1>
       <div className="row">
            <div className="col-12">
                <div className="weather-main">
                    <div className="weather-current">
                        <span className="temperature"> <strong>{Math.round(weatherData.temperature)}</strong></span>
                        <span className="unit mt-2"> <a href="">ºC</a> | <a href="">ºF</a> </span>
                    </div>
                    <img src={weatherData.icon} alt="Sunny" />
                    <ul className="p-0">
                        <li className="text-capitalize">{weatherData.description}</li>
                        <li>{weatherData.time}</li>
                    </ul>
                </div>
            </div>
       </div>
       <div className="weather-extra"> 
            <ul>
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind: {weatherData.wind} km/h</li>
            </ul>
        </div>
    </div>
    } else {
        const apiKey = "f4b9b3c3f140t6ca1b114f1eo5df8045";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }

   

    
}