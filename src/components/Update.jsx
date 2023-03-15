import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Update = ({list, handleUpdate}) => {
    // Changing the data
    const [editedlist, setEditedList] = useState(list)

     const changePackingList = (e) => {
        const {name, value, type, checked} = e.target;
        setEditedList((prevList) => {
            return {
                ...prevList,
                [name]: type === 'checkbox' ? checked : value
            }
        })
     };

     //updating it in the data base
     const postUpdatedList = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3000/${list._id}`, editedlist).then(() => {
            handleUpdate()
        })
     }
    
    return ( 
        <div>
            <form onSubmit={postUpdatedList}>
                <input name="category" type="text" value={editedlist.category} placeholder={list.category} onChange={changePackingList}/><br/>
            </form>
        </div>
     );
}
 
export default Update;