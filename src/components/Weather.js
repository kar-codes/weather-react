import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo"
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
                time: new Date(response.data.time*1000),
                description: response.data.condition.description ,
                wind: response.data.wind.speed,
                humidity : response.data.temperature.humidity,
                pressure: response.data.temperature.pressure,
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
        <WeatherInfo data={weatherData}/>
    </div>
    } else {
        const apiKey = "f4b9b3c3f140t6ca1b114f1eo5df8045";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }

   

    
}