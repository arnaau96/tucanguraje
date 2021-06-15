import React from 'react';
import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await axios.get('http://localhost:3002/api/badges/'+this.props.match.params.badgeId,{
          headers: {
              
          }
        });

      this.setState({ loading: false, data: data.data.data[0] });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true})
  }

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false})
  }

  handleInterested = async e => {
    this.setState({loading: true, error: null});
    

    try{
      const dataUsuario = await axios.get('http://localhost:3002/api/users/'+cookies.get('ID'),{
          headers: {
              
          }
        });

        const dataBadge = await axios.get('http://localhost:3002/api/badges/'+this.props.match.params.badgeId,{
          headers: {
              
          }
        });

      var idPeticion = dataBadge.data.data[0].ID;  
      var idUsuario = dataUsuario.data.data[0].ID;
      const existPeticion = await axios.get('http://localhost:3002/api/interested/getInterestedPeticionProfile/'+idPeticion+'/'+idUsuario,{
          headers: {
              
          }
        });
        console.log(existPeticion.data.data.length);
      if(existPeticion.data.data.length === 0)  
        await axios.post('http://localhost:3002/api/interested/'+idPeticion+'/'+idUsuario,{
            headers: {
                
            }
          });
      else{
        alert("YA EXISTE UN INTERÉS");
      }
      this.setState({loading: false});
      this.props.history.push('/badges/query');
    } catch(error){
      this.setState({loading: false, error: error});
    }
  }

  handleDeleteBadge = async e => {
    this.setState({loading: true, error: null});
    

    try{
      await axios.delete('http://localhost:3002/api/badges/'+this.props.match.params.badgeId,{
          headers: {
              
          }
        });
      this.setState({loading: false});
      this.props.history.push('/badges/query');
    } catch(error){
      this.setState({loading: false, error: error});
    }
  }

  handleOpenValoraciones = async e => {
    this.setState({loading: true, error: null});
    
    try{
        this.props.history.push('/valoraciones/'+this.props.match.params.badgeId);
    } catch(error){
      this.setState({loading: false, error: error});
    }
  }

  handleCreateValoraciones = async e => {
    this.setState({loading: true, error: null});
    
    try{
        this.props.history.push('/createValoracion/'+this.props.match.params.badgeId);
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

    return <BadgeDetails 
      onCloseModal={this.handleCloseModal} 
      onOpenModal={this.handleOpenModal}
      onInterested={this.handleInterested}
      onDeleteBadge={this.handleDeleteBadge}
      onOpenValoraciones={this.handleOpenValoraciones}
      onCreateValoraciones={this.handleCreateValoraciones}
      modalIsOpen={this.state.modalIsOpen}
      badge={this.state.data} 
    />;
  }
}

export default BadgeDetailsContainer;
