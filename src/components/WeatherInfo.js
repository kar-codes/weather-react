import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";




export default function WeatherInfo(props){
    return (<div className="WeatherInfo">
        <h1 className="text-capitalize">{props.data.city}</h1>
       <div className="row">
            <div className="col-12">
                <div className="weather-main">
                    <div className="weather-current">
                        <WeatherTemperature metric={props.data.temperature}/>
                    </div>
                    <img src={props.data.icon} alt="" />
                    <ul className="p-0">
                        <li className="text-capitalize">{props.data.description}</li>
                        <li><FormattedDate time={props.data.time}/></li>
                    </ul>
                </div>
            </div>
       </div>
       <div className="weather-extra"> 
            <ul>
                <li>Humidity: {props.data.humidity} %</li>
                <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
        </div>
    </div>
    ) 
}