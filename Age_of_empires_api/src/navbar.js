import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css"; // Importa tu archivo de estilos CSS

function Navbar() {
  return (
    <>
      <nav className="navbar"> {/* Aplica la clase CSS al navbar */}
        <ul className="navbar-list"> {/* Aplica la clase CSS a la lista */}
          <li className="navbar-item"> {/* Aplica la clase CSS al elemento de la lista */}
            <Link to="/" className="navbar-link">Inicio</Link> {/* Aplica la clase CSS al enlace */}
          </li>
          <li className="navbar-item"> {/* Aplica la clase CSS al elemento de la lista */}
            <Link to="/civilizaciones" className="navbar-link">Civilizaciones</Link> {/* Aplica la clase CSS al enlace */}
          </li>
          <li className="navbar-item"> {/* Aplica la clase CSS al elemento de la lista */}
            <Link to="/contact" className="navbar-link">Contacto</Link> {/* Aplica la clase CSS al enlace */}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
