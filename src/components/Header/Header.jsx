import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        {/* Título con íconos 🌸 y texto */}
        <h1 className="navbar-title">
          <span>🌸</span>
          <Link to="/">Sorprende Lima</Link>
          <span>🌸</span>
        </h1>
        {/* Subtítulos */}
        <ul>
          <li>
            <Link to="/productos">🌼 Productos</Link>
          </li>
          <li>
            <Link to="/login">👤 Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/carrito" className="carrito-link">
              🛒 Carrito
            </Link>
          </li>
        </ul>
        <div className="search-container">
          <input type="text" placeholder="Buscar productos..." />
          <span className="search-icon">🔍</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
