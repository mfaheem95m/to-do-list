import React from 'react'
import "./SignUp.css"
import { useState } from 'react'
import { Link } from "react-router-dom"
 const SignUp = () => {

  const [userData,setUserData]=useState({
    name : "",
    email:"",
    userName: "",
    phoneNumber:"",
    password: "",
    confirmPassword :""
  })

  const userDataStore = (event) => {

  let name,value;
    name = event.target.name;
    value = event.target.value;
    setUserData({...userData,[name] : value})
  }

  const onSignUp = () => {
    if(name && email && userName && phoneNumber && password && confirmPassword){
      if(password === confirmPassword){
   alert("your account is registered")
     console.log(userData)
     setUserData({
      name : "",
      email:"",
      userName: "",
      phoneNumber:"",
      password: "",
      confirmPassword :""
     })
      }else{
        alert("password not match")
      }

    }else {
      alert("please enter data into all inputs")
    }
  }
 const { name,email,userName,phoneNumber,password ,confirmPassword} = userData
  return (

    <div>
    <div className='container-first-half'>
     <div className="flex-container">
      <div className='item-one' >
        <h1>Welcome !</h1>
      </div>
        <div className='item-two'>
        <h3>Already have an account?</h3>
        </div>
         <div className='item-three'>
         <Link to = "/">
         <button>Login</button>
         </Link>


         </div>
           </div>

     </div>
     <div className='container-second-half'>
     <div className="flex-container-two">
       <div className='con-item-one' >
         <h1>Signup</h1>
           </div>
           <div className='con-item-three'>
           <input
                         type="text"
                         name="name"
                         id="name"
                         className="form-control"
                         placeholder="Name"
                       value = {name}
                       onChange={userDataStore}

                       />
               </div>
               <div className='con-item-three'>
               <input
                         type="email"
                         name="email"
                         id="email"
                         className="form-control"
                         placeholder="Email"
                         value = {email}
                         onChange={userDataStore}

                       />

                 </div>
                 <div className='con-item-three'>
               <input
                         type="text"
                         name="userName"
                         id="userName"
                         className="form-control"
                         placeholder='userName'
                         value = {userName}
                         maxLength="10"
                         onChange={userDataStore}
                       />

                 </div>
                 <div className='con-item-three'>
               <input
                         type="tel"
                         name="phoneNumber"
                         id="tel"

                         className="form-control"
                         pattern="[03]{2}[1-50]{2}[0-9]{7}"
                         maxLength="11"
                         placeholder='0323-3456545'

                         onChange={userDataStore}
                         value = {phoneNumber}

                       />

                 </div>
                 <div className='con-item-three'>
               <input
                         type="password"
                         name="password"
                         id="password"
                         className="form-control"
                         placeholder='Password'
                         maxLength="8"
                         minLength  = "4"
                         onChange={userDataStore}
                         value = {password}
                       />

                 </div>
                 <div className='con-item-three'>
               <input
                         type="password"
                         name="confirmPassword"
                         id="confirmingPassword"
                         maxLength="8"
                         minLength  = "4"
                         className="form-control"
                         placeholder='Confirm Password'
                         onChange={userDataStore}
                         value = {confirmPassword}
                       />

                 </div>
                 <div className='con-item-four'>
                   <button onClick={onSignUp} >Signup</button>
                     </div>



                   </div>
     </div>
   </div>

  )
}
export default SignUp
