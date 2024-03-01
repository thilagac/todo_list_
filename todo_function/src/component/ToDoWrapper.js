import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import {v4 as uuidv4} from 'uuid'

import ToDo from '../component/ToDo';
import EditToDoForm from './EditToDoForm';
uuidv4();
function ToDoWrapper() {
  const [todos,setTodo]=useState([
    
  ])
  const addTodo=(todo)=>{
    setTodo([...todos, {id:uuidv4(), task: todo,
        completed:false,isEditing:false}])
        console.log(todos)
  
}
const toggleComplete=(id)=>{
    setTodo(todos.map(todo=>todo.id ===id?{...todo,completed:!todo.completed}:todo))
}
const deleteTodo=(id)=>{
    setTodo(todos.filter(todo=>todo.id!==id))
}
const EditTodo=(id)=>{
setTodo(todos.map(todo=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo))
}
const Edittask=(task,id)=>{
    setTodo(todos.map(todo=>todo.id===id?{...todo,task,isEditing:!todo.isEditing}:todo))
}
  return (
    <div className='TodoWrapper'>
 <h1>Get Things Done!</h1>
     <ToDoForm addTodo={addTodo}/>
         
     {todos.map((todo,index)=>(
       todo.isEditing?(<EditToDoForm EditTodo={Edittask} task={todo}/>):(
<ToDo task={todo} key={index}
  toggleComplete={toggleComplete} EditTodo={EditTodo} 
  deleteTodo={deleteTodo}/>
        )
  
     ))}
    
     
    </div>
  )
}

export default ToDoWrapper
