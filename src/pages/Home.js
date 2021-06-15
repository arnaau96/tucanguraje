import React, { Component } from 'react';
import { FaSearch, FaComment, FaHandshake } from 'react-icons/fa';

import 'react-dropdown/style.css';

import HomeHeader from '../components/HomeHeader.js';

import './styles/Home.css';

import logo from '../images/chupete_blanco.svg';

export default class Home extends Component {
  state = {
    loading: false,
    error: null,
    query: '',
    }
  
  myChangeHandler = (e) => {
    this.setState({
      query: e.target.value
    });
    console.log(this.state.query);
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({loading: true, error: null});
    

    try{
      this.props.history.push(`/badges/query/${this.state.query}`);
    } catch(error){
      this.setState({loading: false, error: error});
    }
  }

  

  render() {
    
    return (
      <React.Fragment>
        <div className="masthead text-white text-center">        
          <HomeHeader query={this.state.query} onChange={this.myChangeHandler} onSubmit={this.handleSubmit} />
        </div>
        <div className="infoHome">
            <div className="container ">
                <div className="row">
                        <div className="col-12 col-md-9">
                              <h1>¿Quienes somos?</h1>
                              <h3>Tu Canguraje es una web en la cual podrás encontrar tu mejor opción para cuidar a los peques de la casa.</h3>
                              <h3>Desde profesores/as de repaso, hasta llevarlos a las extraescolares después del colegio</h3>
                        </div>
                        <div className="col-12 col-md-3">
                            <img className="imagen" src={logo} alt="logo"/>                            
                        </div>
                </div>
            </div>
          </div>      
          <div className="infoHome">
            <h1 className="cabecera">¿Cómo funciona TU CANGURAJE?</h1>
            <div className="container ">
                <div className="row">
                        <div className="col-12 col-md-4">
                            <h1 className="cabecera">Encuentra</h1>
                            <p className="icono"><FaSearch size={60}/></p>                              
                        </div>
                        <div className="col-12 col-md-4">
                            <h1 className="cabecera">Contacta</h1>
                            <p className="icono"><FaComment size={60}/></p>
                        </div>
                        <div className="col-12 col-md-4">
                            <h1 className="cabecera">Acuerda</h1>
                            <p className="icono"><FaHandshake size={70}/></p>
                        </div>
                </div>
            </div>
          </div> 
      </React.Fragment>
    );
  }
}