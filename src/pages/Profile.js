import React from 'react';
import 'react-dropdown/style.css';
import ProfileForm from '../components/ProfileForm.js';
import './styles/Profile.css';
import axios from 'axios';

class Profile extends React.Component {  
  state = {
    loading: false,
    error: null,
    mensaje: null,
    form: undefined
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await axios.get('http://localhost:3002/api/users/'+this.props.match.params.userId,{
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
        await axios.put('http://localhost:3002/api/users/'+this.state.ID,{
          data: {body:this.state.form}
        }); 
        this.setState({loading: false});
        this.props.history.push('/');      
    } catch(error){
      this.setState({loading: false, error: error});
    }
  };

  

  render() {   
    return (
      <React.Fragment>
        <div className="text-white text-center"> 
          <ProfileForm form={this.state.form} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        </div>        
      
      </React.Fragment>
    );
  }
}

export default Profile;