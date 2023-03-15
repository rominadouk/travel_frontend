import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Weather from './Weather';
import PackingList from './components/PackingList';

import Forecast from './Forcast';
// import WeatherMap from './WeatherMap';
=======
import Update from './components/Update';
import CreateList from './components/createList';

console.log(`this is the API key ${process.env.REACT_APP_WEATHER_API_KEY}`)


const App = () => {
  const [list, setList] = useState([])
  const [updated, setUpdated] = useState(true)
  const handleUpdate = () => {
    setUpdated(!updated)
  };

  return (
    <div>
      
      <Weather />

      <Forecast />
      <PackingList />
      
      
  

      <PackingList list={list}/>
      <Update list={list} handleUpdate={handleUpdate} />
      <CreateList/>

    </div>
  );
}

export default App;