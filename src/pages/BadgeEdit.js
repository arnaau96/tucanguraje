import React from 'react';

import './styles/BadgeEdit.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import PageLoading from '../components/PageLoading';
import BadgeForm from '../components/BadgeForm';
import axios from 'axios';

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: undefined,
  };

  componentDidMount() {
    console.log("GOLA");
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({loading: true, error: null});

    try {
      console.log(this.props.match.params.badgeId);
      const data = await axios.get('http://localhost:3002/api/badges/'+this.props.match.params.badgeId,{
          headers: {
              
          }
        });
      console.log("EDIT :" + data.data.data[0])
      this.setState({loading: false, form: data.data.data[0] });
    } catch(error) {
      this.setState({loading: false, error: error});
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
      await axios.put('http://localhost:3002/api/badges/'+this.state.form.ID,{
          data: {body:this.state.form}
        }); 
      this.setState({loading: false});
      this.props.history.push('/badges/query');
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
        <div className="BadgeEdit__hero">
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
              <h1>Actualizar Petición</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
