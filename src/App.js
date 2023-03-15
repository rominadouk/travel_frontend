import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Weather from './Weather';
import PackingList from './components/PackingList';
import Update from './components/Update';
import CreateList from './components/createList';

const App = () => {
  const [list, setList] = useState([])
  const [updated, setUpdated] = useState(true)
  const handleUpdate = () => {
    setUpdated(!updated)
  };

  return (
    <div>
      
      <Weather />
      <PackingList list={list}/>
      <Update list={list} handleUpdate={handleUpdate} />
      <CreateList/>
    </div>
  );
}

export default App;