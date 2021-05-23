import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import axios from 'axios';
import PageLoading from '../components/PageLoading';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const faker = require('faker');
class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    formBadge: {
      ID:faker.random.uuid(),
      IDUSUARIO:cookies.get('ID'),
      HORARIO:null,
      PRECIOHORA:null,
      DESCRIPCIONPETICION:null
    },
    form: {
      
    },
  };

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await axios.get('http://localhost:3002/api/users/'+cookies.get('ID'),{
          headers: {
              
          }
        });
      this.setState({ loading: false, form: data.data.data[0] });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  
  handleChange = e => {
    this.setState({
      formBadge: {
        ...this.state.formBadge,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({loading: true, error: null});
    
    try{
      const data = await axios.get('http://localhost:3002/api/badges/'+this.state.formBadge.IDUSUARIO,{
          
        });   

      if(!data.data.message){
          await axios.post('http://localhost:3002/api/badges/',{
          data: {body:this.state.formBadge}
        });        
        this.setState({loading: false});
        this.props.history.push('/badges/query');
      }
      else{
        this.props.history.push('/badges/'+this.state.formBadge.IDUSUARIO+'/details');
      }
      
    } catch(error){
      console.log("PETICION YA CREADA")
      this.setState({loading: false, error: error});
    }
  }

  render() {
    if(this.state.loading){
      return <PageLoading />
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                badge={this.state.form}                
                visible="N"
              />
            </div>

            <div className="col-6">
              <h1>Crear Petición</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.formBadge}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
