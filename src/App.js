import logo from './logo.svg';
import './App.css';

function App() {
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

  return (
    <div>
      <h1>{weatherData.city}, {weatherData.state}</h1>
      <p>Current Temperature: {weatherData.temperature.current}°F</p>
      <p>High: {weatherData.temperature.high}°F</p>
      <p>Low: {weatherData.temperature.low}°F</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} mph {weatherData.wind.direction}</p>
    </div>
  );
}

export default App;