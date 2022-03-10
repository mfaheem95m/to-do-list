
import React from 'react'

function Todo ({todo,index,isCompleted,deleteTodo}){
  return (
    <div className= "todo"

    style = {{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
   {index} . {todo.text}
   <div>
     <button onClick={()=> isCompleted(index)} >completed</button>
     <button onClick={()=> deleteTodo(index)} >X</button>
   </div>

    </div>
  )
}

export default Todo
