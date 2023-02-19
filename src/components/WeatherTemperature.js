import React , {useState} from "react";

export default function WeatherTemperature(props){
    const {unit, setUnit} = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit(){
        return (props.celsius * 9) / 5 +32;
    }

        if ( unit === "celsius"){
            return (
                <div className="weatherTemperature">
                        <span className="temperature"> <strong>{Math.round(props.celsius)}</strong></span>
                        <span className="unit mt-2"> ºC| <a href="/" onClick={showFahrenheit}>ºF</a> </span> 
                </div>
            );
        } else {

            return (
            <div className="weatherTemperature">
                        <span className="temperature"> <strong>{Math.round(fahrenheit())}</strong></span>
                        <span className="unit mt-2"> <a href="/" onClick={showCelsius}>ºC</a> | ºF </span> 
            </div>
            );
        }
    
}