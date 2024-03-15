import { useState } from "react"
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp(){
    const [WeatherInfo,setWeatherInfo]=useState({
        city:"Pune",
        feelsLike: 27.69,
        humidity: 27,
        temp: 28.97,
        tempMax: 28.97,
        tempMin:28.97,
        weather: "clear sky",

    });

    let updateInfo= (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center" ,marginTop:"55px"}}>
            <h1>Weather App by M@nish</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo} />
        </div>
    )
}     