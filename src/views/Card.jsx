import React, { useContext } from "react";
import Context from "../Context";

const Card = ({ torta }) => {
  const { agregarAlCarrito, eliminarDelCarrito, carrito } = useContext(Context);

  const estaEnCarrito = carrito.some((producto) => producto.id === torta.id);

  const handleAgregarCarrito = () => {
    agregarAlCarrito(torta);
  };

  const handleEliminarCarrito = () => {
    eliminarDelCarrito(torta.id);
  };

  return (
    <div className="card">
      <img
        src={process.env.PUBLIC_URL + torta.img}
        alt={torta.name}
        className="card-img-top"
        style={{ maxHeight: "350px", maxWidth: "100%", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{torta.name}</h5>
        <p className="card-text">{torta.desc}</p>
        <p className="card-text">Precio: ${torta.price}</p>
        <button onClick={handleAgregarCarrito} disabled={estaEnCarrito}>
          Añadir al Carrito
        </button>
        <button onClick={handleEliminarCarrito} disabled={!estaEnCarrito}>
          Eliminar del Carrito
        </button>
      </div>
    </div>
  );
};

export default Card;