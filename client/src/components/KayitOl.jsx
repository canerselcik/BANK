import React, { useState } from 'react';

function KayitOl() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    address: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, username, address, dob, gender, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Şifreler aynı değil. Lütfen kontrol edin.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const usernameExists = users.some(user => user.username === username);
    const emailExists = users.some(user => user.email === email);

    if (usernameExists) {
      alert("Bu kullanıcı adı zaten kullanılıyor. Lütfen başka bir kullanıcı adı seçin.");
      return;
    }

    if (emailExists) {
      alert("Bu email zaten kullanılıyor. Lütfen başka bir email adresi seçin.");
      return;
    }

    const newUser = {
      name,
      email,
      username,
      address,
      dob,
      gender,
      password
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "customer_menu.html";
  };

  return (
    <>
      <header>
        <h1>Kayıt Ol</h1>
      </header>
      <nav>
        <ul>
          <li><a href="index.html">Ana Sayfa</a></li>
          <li><a href="register.html">Kayıt Ol</a></li>
          <li><a href="kullanici_yonetimi.html">Kullanıcı Yönetimi</a></li>
        </ul>
      </nav>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ad Soyad</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Adres</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Doğum Tarihi</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Cinsiyet</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Seçiniz</option>
              <option value="male">Erkek</option>
              <option value="female">Kadın</option>
              <option value="other">Diğer</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Şifreyi Onayla</label>
            <input type="password" id="confirm-password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <button type="submit">Kayıt Ol</button>
        </form>
      </main>
    </>
  );
}

export default KayitOl;
