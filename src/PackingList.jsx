import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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

            <h1>Packing List</h1>


            {lists.map((list)=>{
              return(
                <div>
                  <div key={list._id}>
                <h3>{list.category}</h3>
                <p>{list.top}</p>
                <p>{list.bottoms}</p>
                <p>{list.shoes}</p>
                <p>{list.headgear}</p>
                <p>{list.accessories}</p>
                <button onClick={() => deleteItem(list._id)}>Delete</button>
              </div> 

                </div>
              )
            })}

    </div>
  );
};

export default PackingList;

              <div key={list._id}>
                <h3>{list.category}</h3>
                <p>{list.top}</p>
                <p>{list.bottoms}</p>
                <p>{list.shoes}</p>
                <p>{list.headgear}</p>
                <p>{list.accessories}</p>
                <button onClick={() => deleteItem(list._id)}>Delete</button>
              </div> 