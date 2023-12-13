import { createContext, useState } from "react";

const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== productoId));
  };

  return (
    <Context.Provider value={{ usuario, setUsuario, carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
