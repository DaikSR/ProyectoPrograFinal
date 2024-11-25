import React, { useState } from "react";
import "./Carrito.css";

const Carrito = () => {
  const [productos, setProductos] = useState([]);

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>
      {productos.length === 0 ? (
        <p className="carrito-vacio">Su carrito está vacío</p>
      ) : (
        <ul className="carrito-lista">
          {productos.map((producto, index) => (
            <li key={index} className="carrito-item">
              <span>{producto.nombre}</span>
              <span>{producto.precio}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;
