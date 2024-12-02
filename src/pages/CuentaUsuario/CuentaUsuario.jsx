import React, { useState, useEffect } from "react";
import "./CuentaUsuario.css";
import { Link } from "react-router-dom";

const CuentaUsuario = () => {
  const [usuario, setUsuario] = useState({});
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    // Simular una solicitud al backend
    setUsuario({ nombre: "Juan Perez", correo: "juan@correo.com" });
    setOrdenes([
      { id: 1, fecha: "2024-12-01", total: "S/. 150.00" },
      { id: 2, fecha: "2024-11-15", total: "S/. 80.00" },
    ]);
  }, []);

  return (
    <div className="cuenta-container">
      <h2>Mi Cuenta</h2>
      <div className="usuario-datos">
        <h3>Datos del Usuario</h3>
        <p>Nombre: {usuario.nombre}</p>
        <p>Correo: {usuario.correo}</p>
        <Link to="/editar-perfil">
          <button>Editar Perfil</button>
        </Link>
      </div>
      <div className="ordenes">
        <h3>Historial de Órdenes</h3>
        <ul>
          {ordenes.map((orden) => (
            <li key={orden.id}>
              Pedido #{orden.id} - {orden.fecha} - {orden.total}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CuentaUsuario;
