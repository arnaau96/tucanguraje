import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import axios from 'axios';
import PageLoading from '../components/PageLoading';
const faker = require('faker');
class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      id:faker.random.uuid(),
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
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
      console.log(JSON.stringify(this.state.form));
      await axios.post('http://localhost:3002/api/badges/',{
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
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.FIRSTNAME || 'FIRST NAME'}
                lastName={this.state.form.LASTNAME || 'LAST NAME'}
                twitter={this.state.form.TWITTER || 'TWITTER'}
                jobTitle={this.state.form.JOBTITLE || 'JOB TITLE'}
                email={this.state.form.EMAIL || 'TWITTER'}
                //avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                visible="N"
              />
            </div>

            <div className="col-6">
              <h1>New Attendant</h1>
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

export default BadgeNew;
