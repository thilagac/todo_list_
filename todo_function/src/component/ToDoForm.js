import React, { useState } from 'react'

const ToDoForm = () => {
    const[value,setValue]=useState("")
    const handleSubmit=e=>{
        e.preventDefault();
        
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text'className='todo-input input-text'placeholder='What is the task today?'onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit' className='todo-btn'>ok</button>
    </form>
  )
}

export default ToDoForm