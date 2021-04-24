import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../images/logo.png';
import iconoUsuario from '../images/vector_usuario.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <div className="row">
            <Link className="Navbar__brand col-1" to="/">
              <img className="Navbar__brand-logo" src={logo} alt="Logo" />
              <span className="color font-weight-light">Tu</span>
              <span className="color font-weight-bold">Canguraje</span>
            </Link>
            <p className="Navbar__title color font-weight-bold col-10"> TU CANGURAJE</p>
            <div className="Navbar__brand col-1">  
              <Link to="/">
                <img className="Navbar__brand-logo order-1" src={iconoUsuario} alt="Logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
