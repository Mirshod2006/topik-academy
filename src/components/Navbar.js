import React from 'react';
import './Navbar.css'; // Make sure to create this CSS file
import logo from '../assets/logo.svg'

 export const  NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" /> {/* Replace with your logo image */}
        <div className="site-text">
          Toshkentda joylashgan 
          Koreys tili hamda Topik 
          o’quv markazi</div>
      </div>
      <div className="nav-center">
        <ul className="nav-links">
          <li><a href="#">Nega biz</a></li>
          <li><a href="#">Natijalar</a></li>
          <li><a href="#">Kurslar</a></li>
          <li><a href="#">Ko'p so'raladigan savollar</a></li>
          <li className="dropdown">
            <a href="#">Tillar</a>
            <ul className="dropdown-menu">
              <li><a href="#">English</a></li>
              <li><a href="#">Russian</a></li>
              <li><a href="#">Uzbek</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <span id='phone'>+998 (33) 306 0098</span>
        <span>Hoziroq bog’laning</span>
      </div>
    </nav>
  );
}
