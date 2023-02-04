import React from "react";
import './Weather.css';

export default function Weather(){
    return <div className="Weather">
        <div className="row search-bar">
            <div className="col-9">
            <input type="search" placeholder="Type a city" className="form-control"/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="submit-btn"/>
            </div>
        </div>
       <h1>Tallinn</h1>
       <div className="row weather-main">
            <div className="col-12">
                <h2>7 <small><a href="">ºC </a>|<a href="">ºF</a> </small></h2>
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" />
                <ul>
                    <li>Sunny</li>
                    <li>Saturday 14:08</li>
                </ul>
            </div>
       </div>
       <div className="weather-extra"> 
            <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 21%</li>
                <li>Wind: 5 km/h</li>
            </ul>
        </div>
    </div>
}