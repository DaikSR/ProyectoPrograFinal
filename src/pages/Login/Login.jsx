import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <h2>Iniciar Sesión</h2>
      <form>
        <label>
          Correo electrónico:
          <input type="email" />
        </label>
        <label>
          Contraseña:
          <input type="password" />
        </label>
        <button>Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
