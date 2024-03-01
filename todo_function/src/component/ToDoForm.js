import React, { useState } from 'react'

const ToDoForm = ({addTodo}) => {
    const[value,setValue]=useState("")
    const handleSubmit=e=>{
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' value ={value} className='todo-input input-text'placeholder='What is the task today?'onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit' className='todo-btn'>ok</button>
    </form>
  )
}

export default ToDoForm