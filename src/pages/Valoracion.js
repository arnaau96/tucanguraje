import React from 'react';

import './styles/Valoraciones.css';
import ValoracionList from '../components/ValoracionList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import axios from 'axios';

class Valoracion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {      
      loading: true,
      error: null,
      data:undefined,
      query: this.props.match.params.query,
    };
  }

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null})

    try {
       
        const data = await axios.get('http://localhost:3002/api/valoracion/'+this.props.match.params.userId,{
          headers: {
              
          }
        });
      this.setState({ loading: false, data: data.data.data });
    } catch (error){
      this.setState({ loading: false, error: error });
    }
  }


  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {

    if(this.state.loading === true && this.state.data === undefined){
      return <PageLoading />;
    }

    if(this.state.error === true){
      return <PageError />;
    }
    if(this.state.data.length!==0){
      return (
        <React.Fragment>      
          <div className="Valoraciones__container">
            <ValoracionList valoraciones={this.state.data} query={this.state.query} />
          </div>
        </React.Fragment>
      );
    }
    else{
      return (
        <React.Fragment>      
          <div className="Valoraciones__container">
            <h1>No hay valoraciones para mostrar</h1>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Valoracion;
