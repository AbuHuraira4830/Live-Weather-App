import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import WeatherCard from "./WeatherCard";
const Temprature = () => {
  const [search, setSearch] = useState("Lahore");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7e8281fc04fcc35a3dbf4766a706702d`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    const { temp, humidity, pressure } = data.main;
    const { main: weatheCondition } = data.weather[0];
    const { name } = data;
    const { speed } = data.wind;
    const { country, sunset } = data.sys;

    const apiWeatherInfo = {
      temp,
      humidity,
      pressure,
      weatheCondition,
      name,
      speed,
      country,
      sunset,
    };
    setTempInfo(apiWeatherInfo);
  };
  useEffect(() => {
    getWeatherInfo();
  }, [search]);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      <WeatherCard tempInfo={tempInfo} />

    </>
  );
};

export default Temprature;
