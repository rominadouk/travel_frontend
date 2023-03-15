import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Weather from './Weather';
import PackingList from './components/PackingList';
import Forecast from './Forcast';
import Update from './components/Update';
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
      <Weather />
      <Forecast />
      
      <button onClick={toggleList}>{showList ? 'Hide Packing List Suggestions' : 'Show Packing List Suggestions'}</button>
      {showList && <PackingList list={list} />}
      
      
      <CreateList />
    </div>
  );
};

export default App;
