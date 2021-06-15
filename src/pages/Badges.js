import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import Context from '../Context';
import PageError from '../components/PageError';

import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const url = '/badges/'+cookies.get('ID')+'/edit';
class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {      
      loading: true,
      error: null,
      data:undefined,
      query: this.props.match.params.query,
      exist:false
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
       
        const data = await axios.get('http://localhost:3002/api/badges/',{
          headers: {
              
          }
        });

        const existePeticion = await axios.get('http://localhost:3002/api/badges/'+cookies.get('ID'),{
          headers: {

          }
        });

        if(existePeticion.data.message !== false){
          if(existePeticion.data.data.length !== 0){
            this.setState({exist:true})
          }
        }
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

    return (
      <React.Fragment>      
        <div className="Badges__container">
        <Context.Consumer>
        {
        ({isAuth}) =>
          isAuth && !this.state.exist ?
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Crear Peticion
            </Link>
          </div>
          : isAuth && this.state.exist ?
          <div className="Badges__buttons">
            <Link to={url} className="btn btn-primary">
              Crear Peticion
            </Link>
          </div>
          :
          <div></div>
        }
        </Context.Consumer>      
          <BadgesList badges={this.state.data} query={this.state.query} />
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
