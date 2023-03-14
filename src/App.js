import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Weather from './Weather';

const App = () => {
  const [list, setList] = useState([])

    //use setlist Dat in handle change
    const [listData, setListData] = useState(
      {
        category:[""],
        top:[""], 
        bottoms:[""],
        shoes:[""],
        headgear: [""],
        accessories: [""]
      }
    );
  
    const [lists, setLists] = useState([])
  
    //Get packed items database 
    const allPackingItems = () => {
      axios.get('http://localhost:3000/location').then(response => {
        setLists(response.data)
        console.log(response.data)
      });
    };
  
  
    //Delete
    const deleteItem = (lists) => {
      axios.delete(`http://localhost:3000/location/${lists._id}`).then(()=> {
        axios.get('http://localhost:3000/location').then((response) => {
          setLists(response.data)
        })
      })
    };
  
    useEffect(()=> {
      allPackingItems()
    },[])
  //Update

  return (
    <div>
      <button onClick={allPackingItems}>Get Packing Items</button>
      <Weather />
      <h2>Packing List</h2>
      {lists.map((list) => {
        return (
          <div>
            <h3>{list.category}</h3>
            <p>{list.top}</p>
            <p>{list.bottoms}</p>
            <p>{list.shoes}</p>
            <p>{list.headgear}</p>
            <p>{list.accessories}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;