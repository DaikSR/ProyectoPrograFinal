import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-section">
        <h2>CREAR UNA CUENTA</h2>
        <form>
          <label>
            Nombre
            <input type="text" placeholder="Ingrese su nombre" />
          </label>
          <label>
            Apellido
            <input type="text" placeholder="Ingrese su apellido" />
          </label>
          <label>
            Correo Electrónico
            <input type="email" placeholder="Ingrese su correo electrónico" />
          </label>
          <label>
            Contraseña
            <input type="password" placeholder="Ingrese su contraseña" />
          </label>
          <button className="create-button">CREAR</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

