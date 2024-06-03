import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1>Giriş yapılmadan bu endpoint'e erişilemez lütfen giriş yapın.</h1>
        <h2><Link to={"/"}> Giriş Yap</Link></h2>
    </div>
  )
}

export default Error