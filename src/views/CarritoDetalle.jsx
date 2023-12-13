import React, { useContext } from "react";
import Context from "../Context";

const CarritoDetalle = () => {
  const { carrito } = useContext(Context);

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.price, 0).toFixed(2);
  };

  return (
    <div className="carrito-card">
      <h3>Detalle del Carrito</h3>
      {carrito.map((producto) => (
        <div key={producto.id} className="item-detalle">
          <span>{producto.name}</span>
          <span>${producto.price}</span>
        </div>
      ))}
      <div className="total-detalle">
        <strong>Total:</strong> ${calcularTotal()}
      </div>
    </div>
  );
};

export default CarritoDetalle;