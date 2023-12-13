import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './Context';
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Registro from "./views/Registro";
import Login from "./views/Login";
import Perfil from "./views/Perfil";
import ProductoDetalle from "./views/ProductoDetalle";
import CarritoDetalle from "./views/CarritoDetalle";

function App() {
  return (
    <ContextProvider>
      <div className="App fondo-imagen">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registrarse" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/producto/:id" element={<ProductoDetalle />} />
            <Route path="/carrito" element={<CarritoDetalle />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;