import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Weather from './Weather';

const App = () => {
  const [listArray, setListArray] = useState(
    {
      category:"",
      top:[""], 
      bottoms:[""],
      shoes:[""],
      headgear: [""],
      accessories: [""]
    }
  );

  const [list, setList] = useState([])

  //Get packed items database 
  const allPackingItems = () => {
    axios.get('http://localhost:3000/location').then(response => {
      setListArray(response.data)
      console.log(response.data)
    });
  };


  //Delete
  const deleteItem = (listArray) => {
    axios.delete(`http://localhost:3000/location/${listArray._id}`).then(()=> {
      axios.get('http://localhost:3000/location').then((response) => {
        setList(response.data)
      })
    })
  };

  useEffect(()=> {
    allPackingItems();
  },[])

  //Update

  return (
    <div>
      <button onClick={allPackingItems}>Get Packing Items</button>
      <Weather />
    </div>
  );
}

export default App;
