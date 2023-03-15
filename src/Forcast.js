import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


const Forecast = () => {
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=6add74d6b76b0b938510da6c2c14f624`);
        setForecastData(response.data.list.slice(0, 3)); // Only show the first 3 days of forecast
      } catch (error) {
        console.log(error);
      }
    };

    if (city) {
      fetchForecastData();
    }
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    setCity(e.target.elements.city.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" />
        <button type="submit">Search</button>
      </form>
      <h2>3-Day Forecast</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature (°F)</th>
            <th>Forecast</th>
          </tr>
        </thead>
        <tbody>
          {forecastData.map((forecast, index) => (
            <tr key={index}>
              <td>{forecast.dt_txt}</td>
              <td>{Math.round(forecast.main.temp)}</td>
              <td>{forecast.weather[0].description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Forecast;
