import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

import { API_KEY } from "../constants.js/config";

export default function WeatherForecast(props){
        let [loaded, setLoaded] = useState(false);
        let [forecast, setForecast] = useState(null);

        function handleResponse(response) {
            setForecast(response.data.daily);
            setLoaded(true);
        }

        
        let longitude=props.coordinates.longitude;
        let latitude=props.coordinates.latitude;
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${API_KEY}&units=metric`;

        
        console.log(forecast);

        useEffect(() => {
            axios.get(apiUrl).then(handleResponse);
        }, []);

        if (loaded) {
            return (
                <div className="WeatherForecast">
                    <div className="row">
                        <div className="col">
                            <div className="WeatherForecast-day">
                                Thu
                            </div>
                            <div className="WeatherForecast-icon">
                                <img src="" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
                            </div>
                            <div className="WeatherForecast-temperatures">
                                 <span className="WeatherForecast-temperature-max">{Math.round(forecast[0].temperature.maximum)}º  {""}</span> 
                                 <span className="WeatherForecast-temperature-min">{Math.round(forecast[0].temperature.minimum)}º</span> 
                            </div>
                            </div>
                 </div>
        </div>
        );
        } else {
            return "loading..."
        }

    
}