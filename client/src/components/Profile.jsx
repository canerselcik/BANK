import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Profile = () => {

  useEffect(() => {
    
  })


  const navigate = useNavigate()
    const user = JSON.parse(window.localStorage.getItem("user"))
    function logOut () {
        window.localStorage.removeItem("user")
        alert("Başarıyla Çıkış Yaptınız.")
        navigate("/")
    }

    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission
      const form = document.getElementById('myForm');
  
    const formData = new FormData(form); // Get form data
    const toAccount = formData.get('toAccount');
    const amount = formData.get('amount');

    if(amount > user.balance){
      alert("yetersiz bakiye")
      navigate("/profile")
      return
    }
  
    // Process the captured form data (name and email)
    console.log(`National Id: ${toAccount}`);
    console.log(`Password: ${amount}`);
  
  
    // You can also save the form data to a database, file, or other storage mechanism
      const transfer = {
        senderId: user._id,
        recipientId: toAccount,
        amount: amount
      }
      console.log(transfer)
  
      const response =await axios.post("http://localhost:3000/transfer",transfer)
      console.log(response.data)
      if(response.data.message){
          alert(response.data.message)
          window.localStorage.removeItem("user")
          window.localStorage.setItem("user",JSON.stringify(response.data.user))
      }else if(response.data.error){
          alert(response.data.error)
      }else{
        alert("Bilinmeyen hata.")
      }
    }

  
  return (<>
    <div>
    <h1><Link style={{color:"white"}} to={"/"}>Gelecek Bankası</Link></h1>
      <ul style={{listStyleType: "none"}}>
      <li className="li"><h1>Hoşgeldin {user.name} </h1></li>
      <li className="li"><h3>Bakiye: {user.balance}</h3></li>
      <li className="li"><h3>IBAN: {user._id}</h3></li>
      </ul>
  

    </div>
    <div className="container">
    <h2>Para Transferi</h2>
    <form id="myForm" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="to-account">Alıcı Hesap:</label>
        <input type="text" id="to-account" name="toAccount" maxLength={24} required />
        
        <label htmlFor="amount">Miktar:</label>
        <input type="number" id="amount" name="amount" required />
        
        <button type="submit">Transfer Et</button>
    </form>
        <button style={{backgroundColor: "red",margin: "10px", padding: 10, borderRadius: 15, color: 'white', borderColor: "whitesmoke" }} onClick={() => {
          logOut()
        }} type="button">Çıkış Yap</button>
    
</div>
</>
  )
}

export default Profile