import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';


const App = () => {

const [newDescription, setNewDescription] = useState('');
const [newComplete, setNewComplete] = useState(false)
const [list, setlist] = useState([]);

const handleNewList = (event) => {
    // console.log(event.target.value);
    setNewDescription(event.target.value);
    }

const handleNewComplete = (event) => {
  // console.log(event.target.checked);
    setNewComplete(event.target.checked);
}


// ============= SUBMITING INFO FROM INPUT FIELDS ============= //

const handleNewListFormComplete = (e)=>{
    e.preventDefault();
    axios.post(
        'http://localhost:3000/list',
        {
            description:newDescription,
            complete:newComplete
        }
    ).then(()=>{
        axios
            .get('http://localhost:3000/list')
            .then((response)=>{
                setlist(response.data)
            })
        })
}

// ============== DELETE LIST ITEM ==============//

const handleDelete = (listData) => {
  // console.log(listData);
    axios
        .delete(`http://localhost:3000/list/${listData._id}`)
        .then(()=>{
            axios
                .get('http://localhost:3000/list')
                .then((response)=>{
                    setlist(response.data)
        })
    })
}

const handleToggleComplete = (listData) => {
  // console.log(listData)
    axios
        .put(`http://localhost:3000/list/${listData._id}`, 
        {
        description: listData.description,
        complete: !listData.complete
        }
    ).then(()=>{
    axios
        .get('http://localhost:3000/list')
        .then((response)=>{
            setlist(response.data)
        })
    })
}

useEffect(()=>{
    axios
        .get('http://localhost:3000/list')
        .then((response)=>{
            setlist(response.data)
        })
},[])


return(
    <main>
    <h1>To do's List</h1>
    <section>
        <form onSubmit={handleNewListFormComplete}>
            description: <input type="text" onChange={handleNewList}/><br/>
            complete?: <input type= "checkbox" onChange={handleNewComplete}/><br/>
            <input type="submit" value="create To Do"/>
        </form>
    </section>

    <section>
    <h2>list</h2>
    <ul>
        {
            list.map((list)=>{
                return <li onClick={(event) => {
                    handleToggleComplete(list)
                }}>
                    {
                        (list.complete)?
                            <strike>{list.description}</strike>
                        :
                            list.description
                    }
                    <button onClick={(event)=> {
                        handleDelete(list)
                    }}>delete</button>
                </li>
            })
        }
    </ul>
</section>

    </main>
    )
}
export default App;