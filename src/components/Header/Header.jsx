import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useValidateSession } from "../../hooks/validate-session";
import { UseAuthMe } from "../../hooks/auth-me";

const Header = () => {

  const {userData} = UseAuthMe()

  console.log(userData)

  function handleLogout(){
    localStorage.removeItem("token")
    window.location.reload()
  }

  return (
    <header className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">
          <span>🌸</span>
          <Link to="/">Sorprende Lima</Link>
          <span>🌸</span>
        </h1>
        <ul>
          <li>
            <Link to="/productos">🌼 Productos</Link>
          </li>
          {
            !useValidateSession()?(
              <li>
              <Link to="/login">👤 Iniciar Sesión</Link>
            </li>
            ):(
              <li>
                <span>{userData?.nombre_completo}</span>
                {" "}
                <span>|</span>
                {" "}
              <span role="button" onClick={handleLogout} style={{cursor:"pointer"}}>Salir</span>
            </li>
            )
          }
         
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
