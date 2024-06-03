import { useEffect, useRef } from 'react'
import axios from "axios"
import { Link, Navigate, useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()
    const natId = useRef(null)


    useEffect(() => {
        if(window.localStorage.getItem("user")){
            navigate("/profile")
            alert("Zaten giriş yapılmış...")
        }
    })


  const maxLength = () => {
    if(natId.current.value.length > 11){
       alert("tcno max 11 olmalı")
    } 
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    // Prevent default form submission
    
        const form = document.getElementById('myForm');
        
          const formData = new FormData(form); // Get form data
          const name  = formData.get('name ');
          const  email= formData.get('email');
          const nationalId = formData.get('natiId');
          const password = formData.get('password');
        
          // Process the captured form data (name and email)
          console.log(`Name: ${name }`);
          console.log(`Name: ${email}`);
          console.log(`Name: ${nationalId}`);
          console.log(`Name: ${password}`);
        
        
          // You can also save the form data to a database, file, or other storage mechanism
            const user = {
              name  : name ,
              email : email,
              nationalId: nationalId,
              password: password
            }

            console.log
        
            const response = await axios.post("http://localhost:3000/saveuser",user)
            if(response.data.message){
                alert("Kayıt başarılı. Giriş yapın.")
                navigate("/login")
            }else if(response.data.error){
                alert("Girdiğiniz parametreler yanlış veya eksik.")
                navigate("/signup")
            }
            

        

 }
  return (
    
     <>
      <h1><Link style={{color:"white"}} to={"/"}>Gelecek Bankası</Link></h1>
     <form id="myForm" onSubmit={(e) => handleSubmit(e)}>
        <label>Name :</label>
        <input type="text" id="name " name="name " required/>
        <label >email:</label>
        <input type="text" id="email" name="email" required/>
        <label >nationalid:</label>
        <input onChange={() => maxLength()} ref={natId} type="number"  id="natiId" name="natiId" required/>
        <label >pass:</label>
        <input style={{color:"red", marginBottom: "30px"}} type="password" id="pass" name="password" required/>
  
    {/* <Link style={{border:"3px", backgroundColor:"greenyellow", fontSize: "30px",
    padding: "15px 80px 15px 80px", borderRadius: "30px", listStyle: "none", listStyleType:"none"
        }} type={'submit'} to={`/profile`}>Submit </Link> */}
    <button type="submit">Kayıt Ol</button>
        </form>

     </>
        
  )
}

export default SignUp
