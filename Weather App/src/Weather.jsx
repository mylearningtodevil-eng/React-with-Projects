import React, { useRef, useState } from 'react'
import './Weather.css';
import serch_icon from './assets/search.png';
import humidity_icon from './assets/humidity.png';
import wind_icon from './assets/wind.png';
function Weather() {
    const [weaterdata,setWeatherData] =useState(false);
    const inputRef = useRef(false);
    const search = async (city)=>{
        if(city===''){
            alert("Enter a city Name");
            return;
        }
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=48847bca5fc423679a8d859eded340c2`
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: `https://openweathermap.org/img/wn/04d@2x.png`
            })
            console.log(data);
        }
        catch {
            setWeatherData(false);
            console.error("Failed to load data");
        }
    }
  return (
    <div className='weather'>
        <div className='search-bar'>
        <input type="text" placeholder='Search' ref={inputRef}/>
        <img src={serch_icon} alt="Search" onClick={()=>search(inputRef.current.value)}/>
        </div>
        {weaterdata?<>
        <img src={weaterdata.icon} alt="Clear icon" className='weather_icon' />
        <p className='temperature'>{weaterdata.temperature} C</p>
        <p className='location'>{weaterdata.location}</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="Humidity icon" />
                <div>
                    <p>{weaterdata.humidity}%</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="Wind icon" />
                <div>
                    <p>{weaterdata.windSpeed} km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
        </>:<></>}
    </div>
  )
}

export default Weather