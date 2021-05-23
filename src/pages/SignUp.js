import React, { Component } from 'react';
import 'react-dropdown/style.css';
import SignUpForm from '../components/SignUpForm.js';
import './styles/SignUp.css';
import axios from 'axios';

const faker = require('faker');

export default class Login extends Component {
  state = {
    loading: false,
    error: null,
    mensaje: null,
    form: {
      ID:faker.random.uuid(),
      NOMBRE: '',
      APELLIDO: '',
      NOMBREUSUARIO: '',
      CONTRASENYA: '',
      CIUDAD: '',
      EDAD: 0,
      TELEFONO: '',
      DIRECCION: '',
      EXPERIENCIA: '',
      EMAIL: '',
      DISPONIBILIDAD: '',
      ESTUDIOS: '',
      DESCRIPCION: ''      
    },
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
      const email = await axios.get('http://localhost:3002/api/users/getIdByEmail/'+this.state.form.EMAIL.toLowerCase(),{
        headers: {
            
        }
      });

      console.log(email.data);

      if(email.data.message !== "Email existente"){
        await axios.post('http://localhost:3002/api/users/',{
          data: {body:this.state.form}
        }); 
        this.setState({loading: false});
        this.props.history.push('/login');
      }
      else{
        this.setState({loading: false, mensaje: "Email existente"});
      }
      
    } catch(error){
      this.setState({loading: false, error: error});
    }
  }

  

  render() {
    
    return (
      <React.Fragment>
        <div className="text-white text-center">        
          <SignUpForm form={this.state.form} onChange={this.handleChange} onSubmit={this.handleSubmit} mensaje={this.state.mensaje} />
        </div>        
      
      </React.Fragment>
    );
  }
}
