
import { Link } from "react-router-dom"
import "../mainpage.css"

const MainPage = () => {
  return (
    <div> 
        <header>
    <div className="container">
        <h1><Link style={{color:"white"}} to={"/"}>Gelecek Bankası</Link></h1>
        <nav>
            <ul>
                <li><Link to={"/login"}>Giriş Yap</Link></li>
                <li><Link to={"/signup"}>Kayıt Ol</Link></li>
                
               
            </ul>
        </nav>
    </div>
</header>

<main>
    <section className="hero">
        <div className="container">
            <h2>Bankacılıkta Yenilikçi Çözümler</h2>
            <p>Gelecek Bankası'na hoş geldiniz. Sizin için en iyi hizmetleri sunmaya hazırız.</p>
            <a href="#" className="cta-button">Daha Fazla Bilgi</a>
        </div>
    </section>

    <section className="services">
        <div className="container">
            <h2>Hizmetlerimiz</h2>
            <div className="service-cards">
                <div className="card">
                    <h3>Kredi Hizmetleri</h3>
                    <p>Farklı ihtiyaçlarınıza uygun kredi çözümleri.</p>
                </div>
                <div className="card">
                    <h3>Yatırım Hizmetleri</h3>
                    <p>Geleceğinizi güvence altına alacak yatırım seçenekleri.</p>
                </div>
                <div className="card">
                    <h3>Sigorta Hizmetleri</h3>
                    <p>Size ve sevdiklerinize güvence sağlayan sigorta ürünleri.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="contact">
        <div className="container">
            <h2>Bize Ulaşın</h2>
            <p style={{color: "#fffff"}}>Size yardımcı olmaktan mutluluk duyarız. Bize her zaman ulaşabilirsiniz.</p>
            <a href="#" className="cta-button">İletişim</a>
        </div>
    </section>
</main>

<footer>
    <div className="container">
        <p>&copy; 2024 Gelecek Bankası. Tüm hakları saklıdır.</p>
    </div>
</footer></div>
  )
}

export default MainPage