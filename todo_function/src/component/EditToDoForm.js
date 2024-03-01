import React, { useState } from 'react'

const EditToDoForm = ({EditTodo ,task}) => {
    const[value,setValue]=useState("")
    const handleSubmit=e=>{
        e.preventDefault();
        EditTodo(value,task.id);
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' value ={value} className='todo-input input-text'placeholder='Update Task'onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditToDoForm