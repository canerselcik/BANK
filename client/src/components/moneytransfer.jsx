import React from 'react';

function BankAccountPage() {
  return (
    <>
      <header>
        <h1>Para Transferi</h1>
      </header>
      <nav>
        <ul>
          <li><a href="index.html">Ana Sayfa</a></li>
          <li><a href="customer_menu.html">Menu'ye Dön</a></li>
          <li><a href="#ayarlar">Ayarlar</a></li>
          <li><a href="index.html">Çıkış</a></li>
        </ul>
      </nav>
      <div className="container">
        <div className="header">
          <div className="time">14:45</div>
          <div className="battery">
            <span>38</span>
          </div>
        </div>
        <div className="account-info">
          <h3>YEŞİLYURT/MALATYA ŞUBESİ</h3>
          <p>616-100432118-5001</p>
          <div className="balance">2,90 TL</div>
          <p>IBAN: TRXX XXXX XXXX XXXX XXXX XX01</p>
        </div>
        <div className="buttons">
          <button>Para Transferi</button>
          <button>Hesap Hareketleri</button>
        </div>
        <div className="search">
          <input type="text" placeholder="Aradığınız işlemi yazın" />
        </div>
        <div className="menu">
          {/* Menü içeriği buraya gelecek */}
        </div>
      </div>
    </>
  );
}

export default BankAccountPage;
