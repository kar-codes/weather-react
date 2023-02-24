import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo"
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import './Weather.css';

export default function Weather(props){
        const [weatherData, setWeatherData] = useState({ ready: false});
        const [city, setCity] = useState(props.defaultCity);
            function handleResponse(response){
            console.log(response.data);
            setWeatherData({
                ready: true,
                coordinates: response.data.coordinates,
                city:response.data.city ,
                temperature: response.data.temperature.current,
                icon: response.data.condition.icon_url,
                time: new Date(response.data.time*1000),
                description: response.data.condition.description ,
                wind: response.data.wind.speed,
                humidity : response.data.temperature.humidity,
                pressure: response.data.temperature.pressure,
            });
    }

    function handleSubmit(event){
        event.preventDefault();
        search(city);


    }

    function search(){
        const apiKey = "f4b9b3c3f140t6ca1b114f1eo5df8045";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }

    if (weatherData.ready){
        return <div className="weather container">
        <form onSubmit={handleSubmit}>
            <div className="row search-bar">
                <div className="col-9">
                <input type="search" placeholder="Type a city" className="form-control" autoFocus="on" onChange={handleCityChange}/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="submit-btn btn"/>
                </div>
            </div>
        </form>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast coordinates={weatherData.coordinates}/>
    </div>
    } else {
        const apiKey = "f4b9b3c3f140t6ca1b114f1eo5df8045";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }

   

    
}