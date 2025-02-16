import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { addTask, deleteTask, fetchTask } from './store';

const Todo = () => {
    const [data, setData] = useState("")
    const store = useSelector((store) => store.task)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        return dispatch(deleteTask(id))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setData("")
        return dispatch(addTask(data))

    }

    const handleChanged = (event) => {
        setData(event.target.value)
    }
    console.log(data)

    const HandleFetchData=()=>{
        return dispatch(fetchTask())
    }
    return (
        <div>
            <div className="container">
                <div className="todo-app">
                    <h1>
                        <i className='fa-regular fa-pen-to-square'></i>To-do List:
                    </h1>
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={data} onChange={handleChanged} id='input-box' placeholder='Add a new task' />
                            <button>Add Task</button>
                        </form>
                        <button onClick={HandleFetchData}>Fetch All</button>
                    </div>
                    <ul id='list-container'>
                        {store && store.map((element, index) => (
                            <li key={index}>
                                <p>{index}: {element}</p>
                                <div className="icon-style">
                                    <MdDelete onClick={() => handleDelete(index)} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todo
