import "../assets/css/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHouse } from "@fortawesome/free-solid-svg-icons";
import Context from "../Context";

export default function Navbar() {
  const navigate = useNavigate();
  const { usuario, setUsuario } = useContext(Context);

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <span className="logo">Dolce Val</span>
      <div className="opciones">
        <span className="me-3" style={{ fontSize: '15px' }}>
          <Link to="/">
            Inicio <FontAwesomeIcon icon={faHouse} className="ms-2" />
          </Link>
        </span>

        {!usuario ? (
          <div>
            <Link to="/registrarse">
              <button className="btn m-1 register-btn" style={{ fontSize: '15px' }}>
                Registrarse
              </button>
            </Link>

            <Link to="/login">
              <button className="btn login-btn" style={{ fontSize: '15px' }}>
                Iniciar Sesión
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/perfil">
              <button className="btn m-1 btn-light">Mi Perfil</button>
            </Link>
            <button onClick={logout} className="btn btn-danger">
              Salir
            </button>
          </div>
        )}
        <Link to="/carrito" className="ms-2">
          <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.5rem', color: 'white' }} />
        </Link>
      </div>
    </nav>
  );
}