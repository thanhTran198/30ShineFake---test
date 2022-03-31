import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './listTag/home'
import Recruit from './listTag/recruit'
import Experience from './listTag/experience'
import Shine from './listTag/shine'
import HairStyle from './listTag/hairStyle'
import Nearest from './listTag/nearest'
import HairStore from './listTag/30shineShop'
import logo30shine from './assets/imgs/log-30shine.jpg'
import iconLogin from './assets/imgs/Crown-icon.png'


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="navbarCenter">
          <div className="container-logo30shine">
            <Link to="">
              <img className="logo30shine" src={logo30shine} alt=""/>
            </Link>
          </div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link className="navbar-item-link" to="/trai-nghiem-dich-vu">TRẢI NGHIỆM DỊCH VỤ</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-item-link" to="/hanh-trinh-toa-sang">HÀNH TRÌNH TỎA SÁNG</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-item-link" to="/kham-pha-kieu-toc">KHÁM PHÁ KIỂU TÓC</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-item-link" to="/30shine-shop">30SHINE SHOP</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-item-link" to="/30shine-gan-nhat">TÌM 30SHINE GẦN NHẤT</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-item-link" to="/tuyen-dung">TUYỂN DỤNG</Link>
            </li>
          </ul>
          <div className="login-btn">
            <img className="login-btn-img" src={iconLogin} alt=""/>
            <p className="login-btn--text">ĐĂNG NHẬP</p>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/trai-nghiem-dich-vu" element={<Experience />} />
        <Route path="/hanh-trinh-toa-sang" element={<Shine />} />
        <Route path="/kham-pha-kieu-toc" element={<HairStyle />} />
        <Route path="/30shine-shop" element={<HairStore />} />
        <Route path="/30shine-gan-nhat" element={<Nearest />} />
        <Route path="/tuyen-dung" element={<Recruit />} />
      </Routes>
    </div>
  );
}

export default App;
