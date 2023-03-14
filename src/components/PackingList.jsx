import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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