import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './components/MainPage'
import Home from './components/Login'
import axios from "axios"
import { Link } from 'react-router-dom'

function App() {
  const natId = useRef(null)
  const maxLength = () => {
    console.log("hllo")
    console.log(natId.current.value);
    console.log(natId.current.value.length);
    if(natId.current.value.length > 11){
       alert("tcno max 11 olmalı")
    } 
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const form = document.getElementById('myForm');

  const formData = new FormData(form); // Get form data
  const name  = formData.get('name ');
  const  email= formData.get('email');
  const address = formData.get('address');
  const nationalId = formData.get('natiId');
  const password = formData.get('password');

  // Process the captured form data (name and email)
  console.log(`Name: ${name }`);
  console.log(`Name: ${email}`);
  console.log(`Name: ${address}`);
  console.log(`Name: ${nationalId}`);
  console.log(`Name: ${password}`);


  // You can also save the form data to a database, file, or other storage mechanism
    const user = {
      name  : name ,
      email : email,
      address : address,
      nationalId: nationalId,
      password: password
    }

    await axios.post("http://localhost:3000/saveuser",user)
    .then(console.log("Burak kullanicisi kaydedildi"))
    .catch(err => console.log(err))

    
  }

  return (
    
     <>
     <form id="myForm" onSubmit={(e) => handleSubmit(e)}>
  <label>Name :</label>
  <input type="text" id="name " name="name " required/>
  <label >email:</label>
  <input type="text" id="email" name="email" required/>
  <label >address:</label>
  <input type="text" id="address" name="address" required/>
  <label >nationalid:</label>
  <input onChange={() => maxLength()} ref={natId} type="number"  id="natiId" name="natiId" required/>
  <label >pass:</label>
  <input style={{color:"red", marginBottom: "30px"}} type="password" id="pass" name="password" required/>
  
  <Link style={{border:"3px", backgroundColor:"greenyellow", fontSize: "30px",
   padding: "15px 80px 15px 80px", borderRadius: "30px", listStyle: "none", listStyleType:"none"
    }} type='submit' to={`/profile`}>Submit</Link>
</form>

     </>
        
  )
}

export default App
