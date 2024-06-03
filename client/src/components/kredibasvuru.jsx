import React from 'react';

function KrediBasvurusu() {
  return (
    <div>
      <header style={{ backgroundColor: '#004080', color: 'white', padding: '1rem', textAlign: 'center' }}>
        <h1>Kredi Başvurusu</h1>
      </header>
      <nav style={{ backgroundColor: '#0059b3', overflow: 'hidden' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center' }}>
          <li><a href="index.html">Ana Sayfa</a></li>
          <li><a href="customer_menu.html">Menu'ye Dön</a></li>
          <li><a href="ayarlar.html">Ayarlar</a></li>
          <li><a href="index.html">Çıkış</a></li>
        </ul>
      </nav>
      <main>
        <section id="kredi_basvurusu">
          <h2>Kredi Başvuru Formu</h2>
          <form>
            <div className="form-group">
              <label htmlFor="kredi-turu">Kredi Türü</label>
              <select id="kredi-turu" name="kredi-turu">
                <option value="ihtiyac">İhtiyaç Kredisi</option>
                <option value="konut">Konut Kredisi</option>
                <option value="tasit">Taşıt Kredisi</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="basvuru-miktari">Başvuru Miktarı</label>
              <input type="number" id="basvuru-miktari" name="basvuru-miktari" required />
            </div>
            <div className="form-group">
              <label htmlFor="vade-suresi">Vade Süresi (Ay)</label>
              <input type="number" id="vade-suresi" name="vade-suresi" required />
            </div>
            <div className="form-group">
              <label htmlFor="ad-soyad">Ad Soyad</label>
              <input type="text" id="ad-soyad" name="ad-soyad" required />
            </div>
            <div className="form-group">
              <label htmlFor="tc-kimlik">T.C. Kimlik Numarası</label>
              <input type="text" id="tc-kimlik" name="tc-kimlik" required />
            </div>
            <div className="form-group">
              <label htmlFor="telefon">Telefon Numarası</label>
              <input type="text" id="telefon" name="telefon" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta Adresi</label>
              <input type="email" id="email" name="email" required />
            </div>
            <button type="submit">Başvuru Yap</button>
          </form>
        </section>
      </main>
      <footer style={{ backgroundColor: '#004080', color: 'white', textAlign: 'center', padding: '1rem', position: 'fixed', width: '100%', bottom: 0 }}>
        <p>&copy; 2024 Gelecek Bankası. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default KrediBasvurusu;