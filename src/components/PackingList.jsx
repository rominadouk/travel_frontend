import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PackingList = () => {
  const [lists, setLists] = useState([]);

  const allPackingItems = () => {
    axios.get('http://localhost:3000/location').then(response => {
      setLists(response.data);
      console.log(response.data);
    });
  };

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3000/location/${id}`).then(()=> {
      axios.get('http://localhost:3000/location').then((response) => {
        setLists(response.data);
      });
    });
  };

  useEffect(()=> {
    allPackingItems();
  },[]);

  return (
    <div>
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

};

export default PackingList;