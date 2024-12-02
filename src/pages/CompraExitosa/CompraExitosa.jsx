import React from "react";
import "./CompraExitosa.css";

const CompraExitosa = () => {
  return (
    <div className="compra-exitosa-container">
      <h2>¡Compra Exitosa!</h2>
      <p>Gracias por tu compra. Recibirás un correo con los detalles.</p>
      <button onClick={() => (window.location.href = "/")}>
        Regresar al Inicio
      </button>
    </div>
  );
};

export default CompraExitosa;
