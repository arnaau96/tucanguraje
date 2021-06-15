import React from 'react';

import './styles/CreateValoracion.css';
import ValoracionForm from '../components/ValoracionForm';
import axios from 'axios';
import PageLoading from '../components/PageLoading';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class CreateValoracion extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      ID:undefined,
      MENSAJE: '',
      PUNTUACION: 0
    },
    exist:false
  };

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await axios.get('http://localhost:3002/api/valoracion/getValoracion/'+this.props.match.params.userId+'/'+cookies.get('ID'),{
          headers: {
              
          }
        });
        if(data.data.data.length !== 0){
          this.setState({ loading: false, form: data.data.data[0], exist:true});
        }
        else{
          this.setState({ loading: false, exist:false});
        }
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  
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
      console.log(this.state.form.ID);
      if(this.state.exist){
        await axios.put('http://localhost:3002/api/valoracion/'+this.state.form.ID,{
            data: { body: this.state.form }
        });        
      }
      else{
        await axios.post('http://localhost:3002/api/valoracion/'+this.props.match.params.userId+'/'+cookies.get('ID'),{
            data: { body: this.state.form }
        });
      }

      window.history.back();
      
    } catch(error){
      this.setState({loading: false, error: error});
    }
  }

  render() {
    if(this.state.loading){
      return <PageLoading />
    }

    return (
      <React.Fragment>
        <div className="valoracionStyle">
        {(this.state.exist ? 
						(<h1>Actualizar Valoración</h1>)
            :
            (<h1>Crear Valoración</h1>)
        )}
        <ValoracionForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          MENSAJE={this.state.form.MENSAJE}
          PUNTUACION={this.state.form.PUNTUACION}
          error={this.state.error}
        />
        </div>
      </React.Fragment>
    );
  }
}

export default CreateValoracion;
