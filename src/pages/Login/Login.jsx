import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { BASE_API } from "../../contants/api.constant";
import axios from "axios"

const Login = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(`${BASE_API}/auth/login`, {
        email,password
      })
  
      window.localStorage.setItem("token", response.data.token);
      window.location.href='/productos'
      
    } catch (error) {
      alert(error.response.data.message);
    }
   
  }




  return (
    <div className="login-container">
      <div className="login-section">
        <h2>ACCESO DEL CLIENTE</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Correo Electrónico
            <input onChange={e=> setEmail(e.target.value)} type="email" placeholder="Ingrese su correo electrónico" />
          </label>
          <label>
            Contraseña
            <input onChange={e=> setPassword(e.target.value)}  type="password" placeholder="Ingrese su contraseña" />
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


