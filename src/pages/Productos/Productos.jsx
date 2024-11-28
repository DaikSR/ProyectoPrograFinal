import React, { useState } from "react";
import "./Productos.css";

const productos = [
  { id: 1, titulo: "Producto 1", imagenOriginal: "/Imagenes/1.jpg", precio: "$10.00" },
  { id: 2, titulo: "Producto 2", imagenOriginal: "/Imagenes/2.jpg", imagenHover: "/Imagenes/2-hover.jpg", precio: "$15.00" },
  { id: 3, titulo: "Producto 3", imagenOriginal: "/Imagenes/3.jpg", imagenHover: "/Imagenes/3-hover.jpg", precio: "$20.00" },
  { id: 4, titulo: "Producto 4", imagenOriginal: "/Imagenes/4.jpg", imagenHover: "/Imagenes/4-hover.jpg", precio: "$25.00" },
  { id: 5, titulo: "Producto 5", imagenOriginal: "/Imagenes/5.jpg", imagenHover: "/Imagenes/5-hover.jpg", precio: "$30.00" },
  { id: 6, titulo: "Producto 6", imagenOriginal: "/Imagenes/6.jpg", imagenHover: "/Imagenes/6-hover.jpg", precio: "$35.00" },
  { id: 7, titulo: "Producto 7", imagenOriginal: "/Imagenes/7.jpg", imagenHover: "/Imagenes/7-hover.jpg", precio: "$40.00" },
  { id: 8, titulo: "Producto 8", imagenOriginal: "/Imagenes/8.jpg", imagenHover: "/Imagenes/8-hover.jpg", precio: "$45.00" },
  { id: 9, titulo: "Producto 9", imagenOriginal: "/Imagenes/9.jpg", imagenHover: "/Imagenes/9-hover.jpg", precio: "$50.00" },
  { id: 10, titulo: "Producto 10", imagenOriginal: "/Imagenes/10.jpg", precio: "$55.00" },
  { id: 11, titulo: "Producto 11", imagenOriginal: "/Imagenes/11.jpg", imagenHover: "/Imagenes/11-hover.jpg", precio: "$60.00" },
  { id: 12, titulo: "Producto 12", imagenOriginal: "/Imagenes/12.jpg", imagenHover: "/Imagenes/12-hover.jpg", precio: "$65.00" },
  { id: 13, titulo: "Producto 13", imagenOriginal: "/Imagenes/13.jpg", imagenHover: "/Imagenes/13-hover.jpg", precio: "$70.00" },
  { id: 14, titulo: "Producto 14", imagenOriginal: "/Imagenes/14.jpg", imagenHover: "/Imagenes/14-hover.jpg", precio: "$75.00" },
  { id: 15, titulo: "Producto 15", imagenOriginal: "/Imagenes/15.jpg", imagenHover: "/Imagenes/15-hover.jpg", precio: "$80.00" },
  { id: 16, titulo: "Producto 16", imagenOriginal: "/Imagenes/16.jpg", imagenHover: "/Imagenes/16-hover.jpg", precio: "$85.00" },
];

const Productos = () => {
  // Usamos un objeto para manejar las imágenes de manera individual
  const [imagenes, setImagenes] = useState({});

  // Función para manejar el cambio de imagen al pasar el cursor
  const handleMouseEnter = (id) => {
    setImagenes((prevState) => ({
      ...prevState,
      [id]: productos.find((producto) => producto.id === id).imagenHover,
    }));
  };

  // Función para restaurar la imagen original al quitar el cursor
  const handleMouseLeave = (id) => {
    setImagenes((prevState) => ({
      ...prevState,
      [id]: productos.find((producto) => producto.id === id).imagenOriginal,
    }));
  };

  return (
    <div className="productos-container">
      <h2 className="productos-titulo">Productos</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img
              src={imagenes[producto.id] || producto.imagenOriginal} // Usamos la imagenHover si existe en el estado
              alt={producto.titulo}
              className="producto-imagen"
              onMouseEnter={() => handleMouseEnter(producto.id)} // Cambia la imagen del producto específico
              onMouseLeave={() => handleMouseLeave(producto.id)} // Restaura la imagen original del producto específico
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
