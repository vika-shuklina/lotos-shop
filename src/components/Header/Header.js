import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <span className="logo-main">ЛОТОС</span>
          <span className="logo-sub">Цветочная Студия</span>
        </Link>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/catalog">Каталог</Link></li> 
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/news">Новости</Link></li> 
          <li><Link to="/contacts">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;