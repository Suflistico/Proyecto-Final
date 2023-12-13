import React, { useContext, useState, useEffect } from "react";
import Context from "../Context";
import pasteleriaData from "../data/pasteleria.json";
import Card from "../views/Card";

export default function Perfil() {
  const { usuario } = useContext(Context);
  const [productos, setProductos] = useState([]);
  const { carrito, agregarAlCarrito, eliminarDelCarrito } = useContext(Context);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = () => {
    setProductos(pasteleriaData);
  };

  return (
    <div className="py-5" style={{ overflowY: "scroll", maxHeight: "600px" }}>
      <h2>Productos Disponibles</h2>
      <div className="productos-grid">
        {productos.map((torta) => (
          <Card key={torta.id} torta={torta} />
        ))}
      </div>    
    </div>
  );
}
