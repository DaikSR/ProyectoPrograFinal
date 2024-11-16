import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <nav className="navbar">
          <h1>🌸 Sorprende Lima 🌸</h1>
          <ul>
            <li><a href="#products">Productos</a></li>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="/login">Iniciar Sesión</a></li>
            <li><a href="/register">Registrarse</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <h2>¡Sorprende a tus seres queridos con un detalle especial!</h2>
          <button>Ver Productos</button>
        </section>
        <section id="products" className="products-section">
          <h2>Productos Destacados</h2>
          <div className="product-grid">
            <div className="product">
              <img src="/assets/roses.jpg" alt="Rosas" />
              <h3>Rosas Rojas</h3>
              <p>$25.00</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2024 Tienda de Flores y Peluches. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

