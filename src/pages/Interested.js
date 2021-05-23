import React from 'react';

import './styles/Badges.css';
import InterestedList from '../components/InterestedList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import axios from 'axios';

class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {      
      loading: true,
      error: null,
      data:undefined,      
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
       
        const data = await axios.get('http://localhost:3002/api/interested/'+this.props.match.params.userId,{
          headers: {
              
          }
        });
        console.log("HOLAS"+data.data.data)
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
          <InterestedList badges={this.state.data}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
