import React, { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";
import sun from "../Assets/sun.png";
import moon from "../Assets/moon.png";
import { PushSpinner } from "react-spinners-kit";

export const Weather = ({ cityData }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData(null);
    setLoading(true);
    axios
      .get(
        `http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=OLcWeNMV32E3haKDDgvgCMRhzoAGqZVs`
      )
      .then((res) => {
        setData(res.data[0]);
        setLoading(false);
      });
  }, [cityData.Key]);

  return (
    <>
      {data && (
        <main className="current-conditions-box">
          <h3 className="city-country">
            {cityData.EnglishName} {cityData.Country.EnglishName}
          </h3>
          <div className="details">
            <h2 className="temperature-value">
              {Math.ceil(data.Temperature.Metric.Value)}
              <sup className="deg">&deg;{data.Temperature.Metric.Unit}</sup>
            </h2>
            {data.IsDayTime === true ? (
              <img className="weather-img" src={sun} alt="sun" />
            ) : (
              <img className="weather-img" src={moon} alt="moon" />
            )}
            <p className="weather-text">{data.WeatherText}</p>
          </div>
        </main>
      )}
      {!data && (
        <div className="loader-box">
          <PushSpinner size={30} color="#fff" loading={loading} />
        </div>
      )}
    </>
  );
};
export default Weather;
