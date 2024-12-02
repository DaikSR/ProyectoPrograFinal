import React, { useState } from "react";
import "./Register.css";
import axios from "axios"
import { BASE_API } from "../../contants/api.constant";

const Register = () => {


  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleRegister(event){
    event.preventDefault()
    try {
      const response = await axios.post(`${BASE_API}/auth/register`,{
        nombre_completo: nombre + " " + apellido,
        email,
        password
      })
      window.localStorage.setItem("token", response.data.token)
      window.location.href="/productos"
    } catch (error) {
      alert("Error al registrarse")
    }
  }

  return (
    <div className="register-container">
      <div className="register-section">
        <h2>CREAR UNA CUENTA</h2>
        <form onSubmit={handleRegister}>
          <label>
            Nombre
            <input  onChange={e=>setNombre(e.target.value)} type="text" placeholder="Ingrese su nombre" />
          </label>
          <label>
            Apellido
            <input onChange={e=>setApellido(e.target.value)} type="text" placeholder="Ingrese su apellido" />
          </label>
          <label>
            Correo Electrónico
            <input  onChange={e=>setEmail(e.target.value)} type="email" placeholder="Ingrese su correo electrónico" />
          </label>
          <label>
            Contraseña
            <input  onChange={e=>setPassword(e.target.value)} type="password" placeholder="Ingrese su contraseña" />
          </label>
          <button className="create-button">CREAR</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

