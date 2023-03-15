import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Weather from './Weather';
import PackingList from './components/PackingList';
import Forecast from './Forcast';
// import WeatherMap from './WeatherMap';

const App = () => {
  const [list, setList] = useState([])

    

  return (
    <div>
      
      <Weather />
      <Forecast />
      <PackingList />
      
      
  
    </div>
  );
}

export default App;