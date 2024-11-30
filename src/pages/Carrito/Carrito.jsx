import React, { useState } from "react";
import "./Carrito.css";

const Carrito = () => {
  // Estado del carrito
  const [productos, setProductos] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setProductos((prevProductos) => [...prevProductos, producto]);
  };

  // Simulación de productos disponibles
  const productosDisponibles = [
    { id: 1, nombre: "Taza Metálica", precio: "S/. 50" },
    { id: 2, nombre: "Bolsa Reutilizable", precio: "S/. 30" },
    { id: 3, nombre: "Cuaderno Artesanal", precio: "S/. 40" },
  ];

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>

      {/* Mostrar productos disponibles */}
      <div className="productos-disponibles">
        <h3>Productos Disponibles</h3>
        <ul>
          {productosDisponibles.map((producto) => (
            <li key={producto.id} className="producto-disponible">
              <span>{producto.nombre} - {producto.precio}</span>
              <button
                className="agregar-boton"
                onClick={() => agregarAlCarrito(producto)}
              >
                Agregar al Carrito
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mostrar carrito de compras */}
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
