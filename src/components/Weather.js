import React from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(){
    const apiKey = "f4b9b3c3f140t6ca1b114f1eo5df8045";
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}';
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
       <h1>Tallinn</h1>
       <div className="row">
            <div className="col-12">
                <div className="weather-main">
                    <div className="weather-current">
                        <span className="temperature"> <strong>7</strong></span>
                        <span className="unit mt-2"> <a href="">ºC</a> | <a href="">ºF</a> </span>
                    </div>
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" />
                    <ul className="p-0">
                        <li>Sunny</li>
                        <li>Saturday 14:08</li>
                    </ul>
                </div>
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