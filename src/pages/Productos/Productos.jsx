import React from "react";
import "./Productos.css";

const productos = [
  { id: 1, titulo: "Producto 1", imagen: "/assets/product1.jpg", precio: "$10.00" },
  { id: 2, titulo: "Producto 2", imagen: "/assets/product2.jpg", precio: "$15.00" },
  { id: 3, titulo: "Producto 3", imagen: "/assets/product3.jpg", precio: "$20.00" },
  { id: 4, titulo: "Producto 4", imagen: "/assets/product4.jpg", precio: "$25.00" },
  { id: 5, titulo: "Producto 5", imagen: "/assets/product5.jpg", precio: "$30.00" },
  { id: 6, titulo: "Producto 6", imagen: "/assets/product6.jpg", precio: "$35.00" },
  { id: 7, titulo: "Producto 7", imagen: "/assets/product7.jpg", precio: "$40.00" },
  { id: 8, titulo: "Producto 8", imagen: "/assets/product8.jpg", precio: "$45.00" },
  { id: 9, titulo: "Producto 9", imagen: "/assets/product9.jpg", precio: "$50.00" },
  { id: 10, titulo: "Producto 10", imagen: "/assets/product10.jpg", precio: "$55.00" },
  { id: 11, titulo: "Producto 11", imagen: "/assets/product11.jpg", precio: "$60.00" },
  { id: 12, titulo: "Producto 12", imagen: "/assets/product12.jpg", precio: "$65.00" },
  { id: 13, titulo: "Producto 13", imagen: "/assets/product13.jpg", precio: "$70.00" },
  { id: 14, titulo: "Producto 14", imagen: "/assets/product14.jpg", precio: "$75.00" },
  { id: 15, titulo: "Producto 15", imagen: "/assets/product15.jpg", precio: "$80.00" },
  { id: 16, titulo: "Producto 16", imagen: "/assets/product16.jpg", precio: "$85.00" },
];

const Productos = () => {
  return (
    <div className="productos-container">
      <h2 className="productos-titulo">Productos</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img
              src={producto.imagen}
              alt={producto.titulo}
              className="producto-imagen"
            />
            <h3 className="producto-titulo">{producto.titulo}</h3>
            <p className="producto-precio">{producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;