import React,{useState}from 'react'

function  TodoForum({addTodo}) {
  const [value,setValue]=useState("")
 const handleSubmit= e =>{
   e.preventDefault()
   if(!value) return ;
   addTodo(value);
   setValue("")
 }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
      type = "text"
      className="input"
      placeholder="add items here...."
      value={value}
      onChange={e=> setValue(e.target.value)}
      />

    </form>
    </div>
  )
}

export default TodoForum
