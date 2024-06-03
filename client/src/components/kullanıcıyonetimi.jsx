import React, { useState, useEffect } from 'react';

function UserManagement() {
    const [users, setUsers] = useState([]);
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

    useEffect(() => {
        updateUserTable();
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const { name, email, username, address, dob, gender, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert("Şifreler aynı değil. Lütfen kontrol edin.");
            return;
        }

        if (users.some(user => user.username === username)) {
            alert("Bu kullanıcı adı zaten kullanılıyor. Lütfen başka bir kullanıcı adı seçin.");
            return;
        }

        if (users.some(user => user.email === email)) {
            alert("Bu email zaten kullanılıyor. Lütfen başka bir email adresi seçin.");
            return;
        }

        const newUser = { name, email, username, address, dob, gender, password };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        updateUserTable();

        document.getElementById("add-user-form").reset();
    };

    const updateUserTable = () => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    };

    return (
        <div>
            <header>
                <h1>Kullanıcı Yönetimi</h1>
            </header>
            <nav>
                <ul>
                    <li><a href="yonetici_panel.html">Ana Sayfa</a></li>
                    <li><a href="kullanici_yonetimi.html">Kullanıcı Yönetimi</a></li>
                    <li><a href="yonetici_fatura_odeme.html">Fatura Ödeme</a></li>
                    <li><a href="yonetici_kredi_basvurusu.html">Kredi Başvurusu İşlemleri</a></li>
                    <li><a href="raporlar.html">Raporlar</a></li>
                    <li><a href="onay_bekleyen.html">Onay Bekleyen İşlemler</a></li>
                    <li><a href="banka_bilgileri.html">Banka Bilgileri</a></li>
                    <li><a href="index.html">Çıkış</a></li>
                </ul>
            </nav>
            <main>
                <section>
                    <h2>Yeni Kullanıcı Ekle</h2>
                    <form id="add-user-form" onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="add-name">Ad Soyad</label>
                            <input type="text" id="add-name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="add-email">Email</label>
                            <input type="email" id="add-email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="add-username">Kullanıcı Adı</label>
                            <input type="text" id="add-username" name="username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="add-address">Adres</label>
                            <input type="text" id="add-address" name="address" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="add-dob">Doğum Tarihi</label>
                            <input type="date" id="add-dob" name="dob" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="add-gender">Cinsiyet</label>
                            <select id="add-gender" name="gender" required>
                                <option value="">Seçiniz</option>
                                <option value="male">Erkek</option>
                                <option value="female">Kadın</option>
                                <option value="other">Diğer</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="add-password">Şifre</label>
                            <input type="password" id="add-password" name="password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="add-confirm-password">Şifreyi Onayla</label>
                            <input type="password" id="add-confirm-password" name="confirm-password" required />
                        </div>
                        <button type="submit">Ekle</button>
                    </form>
                </section>
                <section>
                    <h2>Mevcut Kullanıcılar</h2>
                    <table id="user-table">
                        <thead>
                            <tr>
                                <th>Ad Soyad</th>
                                <th>Email</th>
                                <th>Kullanıcı Adı</th>
                                <th>Adres</th>
                                <th>Doğum Tarihi</th>
                                <th>Cinsiyet</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.address}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.gender}</td>
                                    <td>
                                        <button onClick={() => alert("Düzenleme işlemi henüz yapılmadı.")}>Düzenle</button>
                                        <button onClick={() => alert("Silme işlemi henüz yapılmadı.")}>Sil</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}

export default UserManagement;
