import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../images/logo.png';
import iconoUsuario from '../images/vector_usuario.png';
import Button from '@material-ui/core/Button';
import Context from '../Context';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import { FaChevronLeft } from 'react-icons/fa';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Navbar extends React.Component {

  state = {
    anchorEl: null
  };

  handleClick = (event) => {
    this.setState({anchorEl: event.currentTarget});
    console.log("LOGIN "+cookies.get("LOGIN"));
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  handleProfile = () => {
    window.location.href='/profile/'+cookies.get('ID');
  };

  handleInterested = () => {
    window.location.href='/interested/'+cookies.get('ID');
  };

  handleChat = () => {
    window.location.href='/chat/'+cookies.get('ID');
  };

  handleCloseSesion = async () => {
    await axios.put('http://localhost:3002/api/users/setOffline/'+cookies.get('EMAIL').toLowerCase(),{
            headers: {
            
            }
          });
    cookies.remove('ID', {path: "/"});
    cookies.remove('EMAIL', {path: "/"});
    cookies.remove('LOGIN', {path: "/"});
    window.location.href='/';
  };

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
            <Context.Consumer>
              {
                ({isAuth}) =>
                isAuth ?
                <div className="Navbar__brand col-1"> 
                  <Button className="border d-flex" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                    <p className="color font-weight-bold"> Bienvenido </p>
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleInterested}>Interesados</MenuItem>
                    <MenuItem onClick={this.handleChat}>Chats</MenuItem>
                    <MenuItem onClick={this.handleProfile}>Modificar Perfil</MenuItem>
                    <MenuItem onClick={this.handleCloseSesion}>Logout</MenuItem>
                  </Menu>
                </div>
                  :
                  <div className="Navbar__brand col-1">  
                  <Link to="/login">
                    <img className="Navbar__brand-logo order-1" src={iconoUsuario} alt="Logo" />
                  </Link>
                </div>
              }
            </Context.Consumer>
          </div>          
        </div>
        <div onClick={() => window.history.back()}><FaChevronLeft/> Go Back</div>
      </div>
    );
  }
}

export default Navbar;
