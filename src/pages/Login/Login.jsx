import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      {/* Sección de Iniciar Sesión */}
      <div className="login-section">
        <h2>ACCESO DEL CLIENTE</h2>
        <form>
          <label>
            Correo Electrónico
            <input type="email" placeholder="Ingrese su correo electrónico" />
          </label>
          <label>
            Contraseña
            <input type="password" placeholder="Ingrese su contraseña" />
          </label>
          <button className="login-button">INICIAR SESIÓN</button>
        </form>
        <Link to="/register">
          <button className="register-button">CREAR UNA CUENTA</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;


