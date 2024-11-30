import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductoDetalle.css";

const productos = [
  {
    id: 1,
    titulo: "TAZA METALICA NAVIDAD CON DULCES",
    imagenOriginal: "/Imagenes/1.jpg",
    precio: "S/. 70.00 PEN",
    descripcion: "Descripción detallada del producto...",
    contenido: [
      "Taza metálica con diseño exclusivo de navidad",
      "1 bolsita de galletitas chocochips artesanales",
      "1 bolsita de mini brownies artesanales",
      "1 globito decorativo",
      "Dedicatoria",
    ],
    detalle:
      "Este regalo llegará a manos de quien quieras sorprender en una bolsa de regalo de finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
    descripcionExtra:
      "Un regalo ideal para navidad. Una linda taza metálica con un diseño único de navidad para usarla en estas fiestas y endulzarlo con unas deliciosas galletas y brownies.",
  },
  {
    id: 2,
    titulo: "GIFT BOX CELEBREMOS NAVIDAD",
    imagenOriginal: "/Imagenes/2.jpg",
    imagenHover: "/Imagenes/2-hover.jpg",
    precio: "S/. 135.00 PEN",
    descripcion: "Descripción detallada del producto...",
    contenido: [
      "Caja de regalo premium",
      "Vino tinto",
      "Galletitas de navidad",
      "Un par de copas de vino",
      "Dedicatoria",
    ],
    detalle:
      "El regalo será entregado en una elegante caja de regalo, perfectamente envuelta con detalles festivos. La entrega se hará de forma anónima y el destinatario recibirá una tarjeta con tu mensaje personalizado.",
    descripcionExtra:
      "Un regalo ideal para esta navidad, con productos exclusivos para una celebración única.",
  },
];

const ProductoDetalle = () => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id === parseInt(id));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const [selectedTab, setSelectedTab] = useState("descripcion");
  const [dedicatoria, setDedicatoria] = useState("");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleAddToCart = () => {
    alert("Producto agregado al carrito");
  };

  return (
    <div className="producto-detalle-container">
      <div className="producto-detalle">
        <img
          src={producto.imagenOriginal}
          alt={producto.titulo}
          className="producto-imagen-detalle"
        />
        <div className="producto-info">
          <h2 className="producto-titulo">{producto.titulo}</h2> {/* Título ahora sobre el precio */}
          <p className="producto-precio">{producto.precio}</p>

          <div className="tabs">
            <button onClick={() => handleTabClick("descripcion")}>
              Descripción
            </button>
            <button onClick={() => handleTabClick("contenido")}>
              Contenido
            </button>
            <button onClick={() => handleTabClick("detalle")}>
              Detalle
            </button>
          </div>

          <div className="tab-content">
            {selectedTab === "descripcion" && (
              <div>
                <p>{producto.descripcion}</p>
                <p>{producto.descripcionExtra}</p>
              </div>
            )}
            {selectedTab === "contenido" && (
              <ul>
                {producto.contenido.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {selectedTab === "detalle" && <p>{producto.detalle}</p>}

            <p>Agrega una dedicatoria (hasta 250 caracteres)</p>
            <textarea
              value={dedicatoria}
              onChange={(e) => setDedicatoria(e.target.value)}
              maxLength={250}
              placeholder="Escribe tu dedicatoria aquí..."
              className="dedicatoria-input"
            />
            <button
              className="add-to-cart-button"
              onClick={handleAddToCart}
            >
              AGREGA AL CARRITO Y COMPRA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
