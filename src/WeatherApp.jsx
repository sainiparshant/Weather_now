import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){

    const[weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike : 13.54,
        humidity : 80,
        temp : 14,
        tempMax: 15.59,
        tempMin: 11.62,
        weather : "clear sky",
        icon : "50d",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    };

    return (
        <div>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info ={weatherInfo}/>
        </div>
    );
}