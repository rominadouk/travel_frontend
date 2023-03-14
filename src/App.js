import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Weather from './Weather';
import PackingList from './components/PackingList';

const App = () => {
  const [list, setList] = useState([])

    

  return (
    <div>
      
      <Weather />
      <PackingList />
  
    </div>
  );
}

export default App;