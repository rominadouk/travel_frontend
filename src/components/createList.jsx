import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios';


const CreateList = () => {

const [newDescription, setNewDescription] = useState('');
const [newComplete, setNewComplete] = useState(false)
const [list, setlist] = useState([]);
const [updateList, setUpdateList] = useState('')


const handleNewList = (event) => {
    setNewDescription(event.target.value);
    }

const handleNewComplete = (event) => {
    setNewComplete(event.target.checked);
}

//  ==================== CALL LIST DATA ===============  //

const callListData = () =>{
    axios
            .get('https://climate-change.onrender.com/list')
            .then((response)=>{
                setlist(response.data)
            })
}
// ================== REFRESH PAGE ============= //
const refreshPage= ()=>{
    window.location.reload(false)
}
// ============= SUBMITING INFO FROM INPUT FIELDS ============= //

const handleNewListFormComplete = (e)=>{
    e.preventDefault();
    axios.post(
        'https://climate-change.onrender.com/list',
        {
            description:newDescription,
            complete:newComplete
        }
    ).then(()=>{
        callListData()
        })
}

// ============== DELETE LIST ITEM ==============//

const handleDelete = (listData) => {
  // console.log(listData);
    axios
        .delete(`https://climate-change.onrender.com/list/${listData._id}`)
        .then(()=>{
            callListData()
    })
}
// ======================= STRIKE THROUGH ON CLICK OF ITEM ================== //
const handleToggleComplete = (listData) => {
  // console.log(listData)
    axios
        .put(`https://climate-change.onrender.com/list/${listData._id}`, 
        {
        description: listData.description,
        complete: !listData.complete
        }
    ).then(()=>{
    callListData()
    })
}
//  ========================== UPDATE LIST ITEM WITH INPUT FIELD ====================== //

const handleNewUpdate = (e) =>{
    setUpdateList(e.target.value);
    console.log(e.target.value)
}

const updateListItem = (listData) => {
axios
    .put(`https://climate-change.onrender.com/list/${listData._id}`,
    {
        description: updateList
    })
    .then(()=>{
        callListData()
        // refreshPage()
    })
}

useEffect(()=>{
    callListData()
},[])


return(
    <main>
    <h1>Create List</h1>
    <section>
        <form onSubmit={handleNewListFormComplete}>
            description: <input type="text" onChange={handleNewList}/><br/>
            complete?: <input type= "checkbox" onChange={handleNewComplete}/><br/>
            <input type="submit" value="create To Do"/>
        </form>
    </section>

    <section>
    <h2>Your List Items</h2>
    <ul>
        {
            list.map((list)=>{
                return (
                    <li>
                <span onClick={(event) => {
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

                </span>

                <input type="text" onKeyUp={handleNewUpdate}/><br/>
                <button onClick={(e)=>{
                    updateListItem(list)
                    }}>submit</button>

                </li>
                )
            })
        }
    </ul>
</section>

    </main>
    )
}
export default CreateList;