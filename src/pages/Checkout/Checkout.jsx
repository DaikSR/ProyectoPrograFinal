import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    metodoPago: "Yape",
    numeroTarjeta: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.nombre || !formData.direccion || !formData.metodoPago) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    // Simulación de pago y redirección
    window.location.href = "/compra-exitosa";
  };

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Nombre Completo:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Dirección:
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Método de Pago:
          <select
            name="metodoPago"
            value={formData.metodoPago}
            onChange={handleInputChange}
          >
            <option value="Yape">Yape</option>
            <option value="Tarjeta">Tarjeta de Crédito</option>
          </select>
        </label>
        {formData.metodoPago === "Tarjeta" && (
          <>
            <label>
              Número de Tarjeta:
              <input
                type="text"
                name="numeroTarjeta"
                value={formData.numeroTarjeta}
                onChange={handleInputChange}
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
              />
            </label>
          </>
        )}
        <button type="submit" onClick={handleSubmit}>
          Confirmar Compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
