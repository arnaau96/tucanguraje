import React, { Component } from 'react';

import 'react-dropdown/style.css';

import HomeHeader from '../components/HomeHeader.js';

import './styles/Home.css';

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
        <div class="masthead text-white text-center">        
          <HomeHeader query={this.state.query} onChange={this.myChangeHandler} onSubmit={this.handleSubmit} />
        </div>        
      
      </React.Fragment>
    );
  }
}
