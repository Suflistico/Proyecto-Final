import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegistroForm() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    email: "",
    password: ""
  });

  const handleSetUsuario = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({ ...prevUsuario, [name]: value }));
  };

  const registrarUsuario = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/usuario";

    try {
      const response = await axios.post(urlServer + endpoint, usuario);
      const { success } = response.data;

      if (success) {
        alert("Usuario registrado con éxito");
        navigate("/login");
      } else {
        alert("Usuario ya registrado ...");
      }
    } catch (error) {
      alert("Usuario ya registrado ...");
      console.log(error);
    }
  };

  return (
    <div className="col-10 col-sm-6 col-md-3 m-auto mt-5">
      <h1 style={{ fontSize: '30px' }}>Registrar nuevo usuario</h1>
      <hr />
      <div className="form-group mt-1">
        <label>Email address</label>
        <input
          value={usuario.email || ""}
          onChange={handleSetUsuario}
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group mt-1">
        <label>Password</label>
        <input
          value={usuario.password || ""}
          onChange={handleSetUsuario}
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
        />
      </div>

      <button onClick={registrarUsuario} className="btn btn-light mt-3" style={{ fontSize: '1.2rem' }}>
        Registrarme
      </button>
    </div>
  );
}
