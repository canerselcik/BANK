import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
    

    useEffect(() => {
        if(window.localStorage.getItem("user")){
            navigate("/profile")
            alert("Zaten giriş yapılmış...")
        }
    })
    
  const natId = useRef(null)
  const navigate = useNavigate()
  const maxLength = () => {
    if(natId.current.value.length > 11){
       alert("tcno max 11 olmalı")
    } 
  }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const form = document.getElementById('myForm');
    
      const formData = new FormData(form); // Get form data
      const nationalId = formData.get('natiId');
      const password = formData.get('password');
    
      // Process the captured form data (name and email)
      console.log(`National Id: ${nationalId}`);
      console.log(`Password: ${password}`);
    
    
      // You can also save the form data to a database, file, or other storage mechanism
        const user = {
          nationalId: nationalId,
          password: password
        }
    
        const response =await axios.post("http://localhost:3000/login",user)
        .then(console.log("kullanici kaydedildi"))
        .catch(err => console.log(err))
        console.log(response.data.user)
        if(response.data.message === "nouser"){
            alert("Böyle bir kullanıcı bulunmamaktadır.")
            navigate("/login")
        }else if(response.data.user){
            window.localStorage.setItem("user", JSON.stringify(response.data.user))
            navigate("/profile")
        }
      }




  return (<>
     <div className="login-container">
    <div className="login-card">
        <img src="https://img.lovepik.com/free-png/20220124/lovepik-bank-icon-png-image_401708250_wh1200.png" alt="Ziraat Bankası Logo" className="logo"/>
        <h1><Link style={{color:"white"}} to={"/"}>Gelecek Bankası</Link></h1>
        <h2>Sayın Müşterimiz
            Hoş Geldiniz</h2>


     <form id="myForm" onSubmit={(e) => handleSubmit(e)}>
        <label >nationalid:</label>
        <input ref={natId} type="text" id="natiId" name="natiId" maxLength={11} required/>
        <label >password:</label>
        <input style={{color:"red", marginBottom: "30px"}} type="password" id="pass" name="password" required/>
  
  {/* <Link style={{border:"3px", backgroundColor:"greenyellow", fontSize: "30px",
   padding: "15px 80px 15px 80px", borderRadius: "30px", listStyle: "none", listStyleType:"none"
    }} type='submit' to={`/profile`}>Submit</Link> */}
    <button type="submit">Giriş Yap</button>
    </form>
    </div>  
</div>
</>
  )
}

export default Login