import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [weatherData, setWeatherData] = useState({
    city: '',
    state: '',
    temperature: {
      current: 0,
      high: 0,
      low: 0
    },
    humidity: 0,
    wind: {
      speed: 0,
      direction: 0
    },
    forecast: ''
  });

  const [cityName, setCityName] = useState('');
  const [cityList, setCityList] = useState([
    'New York', 
    'Los Angeles', 
    'Palm Springs', 
    'Cork', 
    'Salt Lake'
  ]);

  useEffect(() => {
    const weatherAPI = process.env.REACT_APP_WEATHER_API_KEY
    if (cityName) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${weatherAPI}`)
        .then(response => {
          const data = response.data;
          setWeatherData({
            city: data.name,
            state: data.sys.country,
            temperature: {
              current: Math.round(data.main.temp),
              high: Math.round(data.main.temp_max),
              low: Math.round(data.main.temp_min)
            },
            humidity: data.main.humidity,
            wind: {
              speed: Math.round(data.wind.speed),
              direction: data.wind.deg
            },
            forecast: data.weather[0].description
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [cityName]);

  function getWeatherMessage(city, temperature, humidity, wind, forecast) {
  
  }
  function getWeatherMessage(city, temperature, humidity, wind, forecast) {
    if (temperature.current < 50) {
      return `Looks like it's chilly in ${city} today! Don't forget to bring a jacket.`;
    } else if (temperature.current < 30) {
      return `Brrr! It's freezing in ${city}! Bring a heavy coat today.`;
    } else if (forecast.includes('rain')) {
      return `Looks like it might rain in ${city} today. Don't forget your umbrella!`;
    } else if (temperature.current > 80 && humidity > 60) {
      return `It's hot and humid in ${city} today! Stay hydrated and wear breathable clothing.`;
    } else if (wind.speed > 15) {
      return `Looks like it's windy in ${city} today! Hold onto your hats.`;
    } else if (temperature.current > 90) {
      return `Wow, it's scorching in ${city} today! Stay indoors or seek shade if possible.`;
    } else if (temperature.current > 75 && forecast.includes('thunderstorms')) {
      return `Be careful if you're out and about in ${city} today - there's a chance of thunderstorms.`;
    } else {
      return `Looks like a beautiful day in ${city}! Pack light and enjoy the sunshine.`;
    }
}
  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCitySelect = (event) => {
    setCityName(event.target.value);
  };

  return (
    <div className="weather-container">
      <h1>{weatherData.city}, {weatherData.state}</h1>
      <p>{weatherData.temperature.current}°F or {Math.round((weatherData.temperature.current - 32) * 5/9)}°C</p>
      <p>{weatherData.forecast}</p>
      
    <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} mph</p>
      <p>{getWeatherMessage(weatherData.city, weatherData.temperature, weatherData.humidity, weatherData.wind, weatherData.forecast)}</p>
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input type="text" value={cityName} onChange={handleCityChange} />
        </label>
        <label>
  State/Country:
  <input type="text" value={weatherData.state} onChange={(event) => setWeatherData({...weatherData, state: event.target.value})} />
</label>
      </form>
      <label>
        Suggested Cities:
        <select value={cityName} onChange={handleCitySelect}>
          <option value="">--Select a city--</option>
          {cityList.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </label>
    </div>
  );
  
  
};

export default App;