import React, { useState } from "react";
import "./Productos.css";  // Asegúrate de tener el archivo CSS actualizado

const Productos = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar el clic en la lupa
  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);  // Alterna la visibilidad de la barra de búsqueda
  };

  return (
    <div className="productos-page">
      <header>
        <div className="contact-info">
          <p>LLÁMANOS AL +51 986 663 114</p>
        </div>
        <div className="sorpresa-box">
          <h2>
            SORPRENDE LIMA
            <div className="search-container">
              {searchVisible && (
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              )}
              <span className="search-icon" onClick={handleSearchClick}>
                🔍
              </span>
            </div>
          </h2>
        </div>
      </header>
    </div>
  );
};

export default Productos;
