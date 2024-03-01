import React, { useState } from 'react'
import ToDoForm from './ToDoForm'

function ToDoWrapper() {
  const [todo,setTodo]=useState("")
  return (
    <div className='TodoWrapper'>
      <ToDoForm/>
    </div>
  )
}

export default ToDoWrapper
