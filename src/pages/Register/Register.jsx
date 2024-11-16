import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-page">
      <h2>Registrarse</h2>
      <form>
        <label>
          Nombre:
          <input type="text" />
        </label>
        <label>
          Correo electrónico:
          <input type="email" />
        </label>
        <label>
          Contraseña:
          <input type="password" />
        </label>
        <button>Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
