import React from "react";
import axios from "axios";

export default function WeatherForecast(props){
        function handleResponse(response) {
            console.log(response.data);
        }

        let apiKey ="f4b9b3c3f140t6ca1b114f1eo5df8045";
        let longitude=props.coordinates.lon;
        let latitude=props.coordinates.lat;
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

        axios.get(apiUrl).then(handleResponse);
        console.log(props);
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
                                 <span className="WeatherForecast-temperature-max">19º</span> 
                                 <span className="WeatherForecast-temperature-min">10º</span> 
                            </div>
                            </div>
                 </div>
        </div>
        );
}