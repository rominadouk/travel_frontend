import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import PackingList from './components/PackingList';
import Forecast from './components/Forecast';
import CreateList from './components/createList';

console.log(`this is the API key ${process.env.REACT_APP_WEATHER_API_KEY}`)

const App = () => {
  const [list, setList] = useState([]);
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
      <div>
      <div className="title">
        <h1>CliMate Change</h1>
        <p>This app uses real-time weather data to provide a three-day forecast for any location, and based on that information, it suggests what clothing and accessories you should pack for your trip. By taking the guesswork out of packing, it helps you be prepared for any weather conditions you may encounter on your journey.</p>
      </div>
      <Weather />
      <Forecast />
      
      <button onClick={toggleList}>{showList ? 'Hide Packing List Suggestions' : 'Show Packing List Suggestions'}</button>
      {showList && <PackingList list={list} />}
      
      
      <CreateList />
    </div>
  );
};

export default App;
