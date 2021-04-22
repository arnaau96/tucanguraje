import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../images/logo.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <div className="row">
            <Link className="Navbar__brand col-2" to="/">
              <img className="Navbar__brand-logo" src={logo} alt="Logo" />
              <span className="color font-weight-light">Tu</span>
              <span className="color font-weight-bold">Canguraje</span>
            </Link>
            <p className="Navbar__title color font-weight-bold col-8"> TU CANGURAJE</p> 
            <Link className="Navbar__brand col-2" to="/">
              <img className="Navbar__brand-logo" src={logo} alt="Logo" />
              <span className="color font-weight-light">Tu</span>
              <span className="color font-weight-bold">Canguraje</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
