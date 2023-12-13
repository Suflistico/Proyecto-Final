import React from "react";
import { useParams } from "react-router-dom";
import pasteleriaData from "../data/pasteleria.json";

const ProductoDetalle = () => {
  const { id } = useParams();
  const producto = pasteleriaData.find((torta) => torta.id === id);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>{producto.name}</h2>
      <img
        src={process.env.PUBLIC_URL + producto.img}
        alt={producto.name}
        style={{ maxHeight: "400px", maxWidth: "100%", objectFit: "cover" }}
      />
      <p>{producto.desc}</p>
      <p>Precio: ${producto.price}</p>
    </div>
  );
};

export default ProductoDetalle;
