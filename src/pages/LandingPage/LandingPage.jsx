import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import axios from "axios";
import { BASE_API } from "../../contants/api.constant";

const productosDestacados = [
  { id: 1, titulo: "Rosas Rojas", imagen: "/assets/roses.jpg", precio: "$25.00" },
  { id: 2, titulo: "Tulipanes", imagen: "/assets/tulips.jpg", precio: "$20.00" },
  { id: 3, titulo: "Lirios Blancos", imagen: "/assets/lilies.jpg", precio: "$30.00" },
  { id: 4, titulo: "Orquídeas", imagen: "/assets/orchids.jpg", precio: "$35.00" },
];

const LandingPage = () => {


  
  const [productos, setProductos] = useState([])

  async function getProducts(){
    try {
      const response = await axios.get(`${BASE_API}/products`)

      console.log(response)
      setProductos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  

  return (
    <div className="landing-page">
      <main>
        <section id="products" className="products-section">
          <h2>Productos Destacados</h2>
          <div className="product-grid">
            {productos.slice(0,4).map((producto) => (
              <div key={producto.id} className="producto-card">
                <img
                  src={producto.image}
                  alt={producto.titulo}
                  className="producto-imagen"
                />
                <h3 className="producto-titulo">{producto.titulo}</h3>
                <p className="producto-precio">{producto.precio}</p>
              </div>
            ))}
          </div>
          <Link to="/productos" className="ver-mas-link">
            Ver más productos →
          </Link>
        </section>
      </main>
      <footer>
        <p>© 2024 Tienda de Flores y Peluches. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
