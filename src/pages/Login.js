import React, { Component } from 'react';

//import 'react-dropdown/style.css';

import LoginForm from '../components/LoginForm.js';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import './styles/Login.css';
import axios from 'axios';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class Login extends Component {
  state = {
    loading: false,
    error: null,
    mensaje: null,
    form: {
      EMAIL: '',
      CONTRASENYA: ''
    }
  }
  
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({loading: true, error: null});
    

    try{
      const data = await axios.get('http://localhost:3002/api/users/getIdByEmail/'+this.state.form.EMAIL.toLowerCase(),{
        headers: {
            
        }
      });
      console.log(data.data.message);
      if(data.data.message==="Email existente"){
        if(data.data.data[0].CONTRASENYA === this.state.form.CONTRASENYA){
          
          console.log("PW CORRECTA");
          var res = data.data.data[0];
          cookies.set('ID',res.ID, {path: "/"})
          cookies.set('EMAIL',res.EMAIL, {path: "/"})
          cookies.set('LOGIN',true, {path: "/"})
          this.setState({loading: false});
          window.location.href='./';
          await axios.put('http://localhost:3002/api/users/setOnline/'+this.state.form.EMAIL.toLowerCase(),{
            headers: {
            
            }
          });
        }
        else{
          this.setState({loading: false, mensaje: "Contrasenya Incorrecta"});
        }
      }
      else{
        this.setState({loading: false, mensaje: "Email Inexistente"});
      }

      //this.props.history.get(`/badges/query/${this.state.form.EMAIL}`);
    } catch(error){
      this.setState({loading: false, error: error});
    }
  }

  

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="text-white text-center">        
          <LoginForm form={this.state.form} onChange={this.handleChange} onSubmit={this.handleSubmit} mensaje={this.state.mensaje} />
        </div>        
      
      </React.Fragment>
    );
  }
}
