import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const WeatherCard = ({tempInfo}) => {

    const [weatherMood,setWeatherMood] = useState("");
    
    const  {temp,humidity,pressure,weatheCondition,name,speed,country,sunset} = tempInfo;
    useEffect(()=>{
        if (weatheCondition){
        
            switch (weatheCondition) {
                case "Clouds":
                    setWeatherMood("wi-day-cloudy")
                    break;
                case "Haze":
                    setWeatherMood("wi-day-haze")
                    break;
                case "Clear":
                    setWeatherMood("wi-day-sunny")
                    break;
                case "Mist":
                    setWeatherMood("wi-night-fog")
                    break;
            
                default:
                    setWeatherMood("wi-day-sunny")
                    break;
            }
        }
            },[weatheCondition])
    let sec = sunset;
    let date = new Date (sec * 1000);
    let timeStr = `${date.toLocaleTimeString()} `

  return (
    <>
        {/* Temp Card */}
        <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherMood}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}°deg</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weatheCondition}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>
                <div className="date">
                    {new Date().toLocaleString()}
                </div>
                {/* Our 4 column section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className='wi wi-sunset'></i>
                            </p>
                            <p className='extra-info-leftside'>
                               {timeStr} <br />
                                Sunset
                            </p>
                        </div>
                       
                       {/* humidity */}
                   <div className="two-sided-section">
                            <p>
                                <i className='wi wi-humidity'></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>
                  
                        
                    <div className="weather-extra-info">
                          
                    <div className="two-sided-section">
                            <p>
                                <i className='wi wi-rain'></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {pressure}<br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className='wi wi-strong-wind'></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                        
                    </div>
                    </div>
    </article>
    </>
  )
}

export default WeatherCard;