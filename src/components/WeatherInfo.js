import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props){
    return (<div className="WeatherInfo">
        <h1 className="text-capitalize">{props.data.city}</h1>
       <div className="row">
            <div className="col-12">
                <div className="weather-main">
                    <div className="weather-current">
                        <span className="temperature"> <strong>{Math.round(props.data.temperature)}</strong></span>
                        <span className="unit mt-2"> <a href="#">ºC</a> | <a href="#">ºF</a> </span>
                    </div>
                    <img src={props.data.icon} alt="Sunny" />
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