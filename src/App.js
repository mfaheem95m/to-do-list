import React,{useState} from 'react'
import Todo from "./Todo"
import "./App.css"
import TodoForum from './TodoForum'
function App() {
  const [todos,setTodos] = useState([
    {
      text : "Learn about react",
      isCompleted: false
    },
    {
      text : "Meet friends for luch ",
      isCompleted: false
    },
    {
      text : "Build really cool to-do-app ",
      isCompleted: false
    }
  ])
  const addTodo = text =>{
const newTodos = [...todos,{text : text, incompleted:false}]
setTodos(newTodos)
console.log("f",todos)
  }

  const isCompleted = index=>{
    const newTodos= [...todos]
    newTodos[index].isCompleted=true
    setTodos(newTodos)
  }

  const deleteTodo = index =>{
    const newTodos =[...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  return (
    <div className= "app">
      <div >
   {todos.map((todo,index) => (
     <Todo key = {index} index={index} todo={todo} isCompleted = {isCompleted}
     deleteTodo={deleteTodo}
     />
   ))}
   <TodoForum addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App
