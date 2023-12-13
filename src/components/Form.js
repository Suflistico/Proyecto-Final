import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [usuario, setUsuario] = useState({ email: "", password: "" });

  const registrarUsuario = async () => {
    try {
      await axios.post("http://localhost:3000/usuario", usuario);
      alert("Usuario agregado con éxito");
    } catch (error) {
      alert("Algo salió mal");
      console.error(error);
    }
  };

  return (
    <div>
      <input
        value={usuario.email}
        onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
      />
      <input
        value={usuario.password}
        onChange={(e) => setUsuario({ ...usuario, password: e.target.value })}
      />
      <button onClick={registrarUsuario}>Registrarse</button>
    </div>
  );
}