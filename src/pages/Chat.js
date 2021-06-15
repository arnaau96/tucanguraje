import React from 'react';

import './styles/Chat.css';
import ChatMessage from '../components/ChatMessage';
import ChatList from '../components/ChatList';
import PageError from '../components/PageError';
import { FaLocationArrow, FaUserCircle, FaUsers, FaPlus, FaBan } from 'react-icons/fa';

import logo from '../images/logo.png';

import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {      
      loading: true,
      error: null,
      data:undefined,
      idUsuario:undefined,
      idUsuario2:undefined,
      nombre:undefined,
      mensaje:undefined,
	  NUMEROMENSAJES:0,
	  listChat:undefined,
	  listUser:undefined,
	  idChat:undefined,
	  conectado: undefined,
	  filter: undefined
    };
	this.listUserId= undefined;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
	this.fetchData();

    this.intervalId = setInterval(this.fetchData, 1000);
  }

  componentDidUpdate () {
      this.scrollToBottom(false);
  }

  scrollToBottom = (goDown) => { 
	this.scroll.scrollTo(0,500000);	
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null})

    try {
       
        const data = await axios.get('http://localhost:3002/api/chat/'+this.props.match.params.userId,{
          headers: {
              
          }
        });

		if(this.state.idUsuario===undefined && this.state.idUsuario2===undefined){

        	this.setState({idUsuario: data.data.data[0].IDUSUARIO, idUsuario2: data.data.data[0].IDUSUARIO_1 });

		}	

		if (this.state.listChat===undefined){
			const listChat = await axios.get('http://localhost:3002/api/chat/'+cookies.get('ID'),{
			headers: {
				
			}
			});

			if(listChat.data.data[0]!==undefined){
				if(listChat.data.data[0].IDUSUARIO1 === cookies.get('ID')){
					const listUser = await axios.get('http://localhost:3002/api/users/'+listChat.data.data[0].IDUSUARIO2,{
					headers: {
						
					}
					});
					this.setState({listUser: listUser.data.data[0], conectado: listUser.data.data[0].CONECTADO, nombre: listUser.data.data[0].NOMBRE})
				}
				else{
					const listUser = await axios.get('http://localhost:3002/api/users/'+listChat.data.data[0].IDUSUARIO1,{
					headers: {
						
					}				
					});
					this.setState({listUser: listUser.data.data[0], conectado: listUser.data.data[0].CONECTADO, nombre: listUser.data.data[0].NOMBRE});
				}
				

				this.setState({listChat: listChat.data.data});
			}
		

        const data2 = await axios.get('http://localhost:3002/api/chat/'+data.data.data[0].IDUSUARIO+'/'+data.data.data[0].IDUSUARIO_1,{
          headers: {
              
          }
        });
		
		const chatId = await axios.get('http://localhost:3002/api/chat/chatId/'+data.data.data[0].IDUSUARIO+'/'+data.data.data[0].IDUSUARIO_1,{
          headers: {
              
          }
        });

		const numMensajes = await axios.get('http://localhost:3002/api/chat/numberMessages/'+data.data.data[0].IDUSUARIO+'/'+data.data.data[0].IDUSUARIO_1,{
			headers: {
				
			}
		  }); 
      this.setState({ loading: false, data: data2.data.data, NUMEROMENSAJES: numMensajes.data.data[0].NUMEROMENSAJES, idChat: chatId.data.data[0].ID });
	}
	else{
		var i = 0;
		const data = await axios.get('http://localhost:3002/api/chat/chat/getChatById/'+this.state.idChat,{
          headers: {
              
          }
	  })

	  const listChat = await axios.get('http://localhost:3002/api/chat/'+cookies.get('ID'),{
          headers: {
              
          }
        });

		listChat.data.data.map((chat,index) => {
				if(chat.ID === this.state.idChat){
					i = index;
				}
				return i;
			}
		)

		if(listChat.data.data[i]!==undefined){
			if(listChat.data.data[i].IDUSUARIO1 === cookies.get('ID')){
				const listUser = await axios.get('http://localhost:3002/api/users/'+listChat.data.data[i].IDUSUARIO2,{
				headers: {
					
				}
				});
				this.setState({listUser: listUser.data.data[0], nombre: listUser.data.data[0].NOMBRE, conectado: listUser.data.data[0].CONECTADO})
			}
			else{
				const listUser = await axios.get('http://localhost:3002/api/users/'+listChat.data.data[i].IDUSUARIO1,{
				headers: {
					
				}				
				});
				this.setState({listUser: listUser.data.data[0], nombre: listUser.data.data[0].NOMBRE, conectado: listUser.data.data[0].CONECTADO});
			}
			

			this.setState({listChat: listChat.data.data});
		}

	  const data2 = await axios.get('http://localhost:3002/api/chat/'+data.data.data[0].IDUSUARIO1+'/'+data.data.data[0].IDUSUARIO2,{
		headers: {
			
		}
	  });

	  
	  //console.log("MONTSE " + data.data.data[0]);

	  const numMensajes = await axios.get('http://localhost:3002/api/chat/numberMessages/'+data.data.data[0].IDUSUARIO+'/'+data.data.data[0].IDUSUARIO_1,{
			headers: {
				
			}
		  }); 

	  this.setState({data: data2.data.data, NUMEROMENSAJES: numMensajes.data.data[0].NUMEROMENSAJES, idUsuario: data.data.data[0].IDUSUARIO1, idUsuario2: data.data.data[0].IDUSUARIO2})
	}
    } catch (error){
      this.setState({ loading: false, error: error });
    }
  }

  handleOnClick = async e => {
    e.preventDefault()
    this.setState({loading: true, error: null});
    

    try{
		console.log("HOLA"+this.state.listChat.ID);
      await axios.post('http://localhost:3002/api/chat/'+this.state.idUsuario+'/'+this.state.idUsuario2+'/'+cookies.get('ID')+'/'+this.state.idChat,{
        headers: {
          data: {body:this.state.mensaje}
        }
      });
	  
	this.mensaje.value=null;
	this.setState({mensaje: undefined});
	this.scrollToBottom(true);

    } catch(error){
      this.setState({loading: false, error: error});
    }
  }

  handleOnClickListChat = async(e,id) => {
    e.preventDefault()  
	var i = 0;
    try{
      //console.log("ALVARO " + id);
	  //console.log("ANTES " + this.state.idChat);
	  this.setState({idChat: id});

	  //console.log("DESPUES " + this.state.idChat);

	  const data = await axios.get('http://localhost:3002/api/chat/chat/getChatById/'+id,{
          headers: {
              
          }
	  })

	  const listChat = await axios.get('http://localhost:3002/api/chat/'+cookies.get('ID'),{
          headers: {
              
          }
        });

		listChat.data.data.map((chat,index) => {
				if(chat.ID === id){
					i = index;
				}
				return i;	
			}
		)

		if(listChat.data.data[i]!==undefined){
			if(listChat.data.data[i].IDUSUARIO1 === cookies.get('ID')){
				const listUser = await axios.get('http://localhost:3002/api/users/'+listChat.data.data[i].IDUSUARIO2,{
				headers: {
					
				}
				});
				this.setState({listUser: listUser.data.data[0], nombre: listUser.data.data[0].NOMBRE})
			}
			else{
				const listUser = await axios.get('http://localhost:3002/api/users/'+listChat.data.data[i].IDUSUARIO1,{
				headers: {
					
				}				
				});
				this.setState({listUser: listUser.data.data[0], nombre: listUser.data.data[0].NOMBRE});
			}
			

			this.setState({listChat: listChat.data.data});
		}

	  const data2 = await axios.get('http://localhost:3002/api/chat/'+data.data.data[0].IDUSUARIO1+'/'+data.data.data[0].IDUSUARIO2,{
		headers: {
			
		}
	  });

	  
	  //console.log("MONTSE " + data.data.data[0]);

	  const numMensajes = await axios.get('http://localhost:3002/api/chat/numberMessages/'+data.data.data[0].IDUSUARIO+'/'+data.data.data[0].IDUSUARIO_1,{
			headers: {
				
			}
		  }); 

	  this.setState({data: data2.data.data, NUMEROMENSAJES: numMensajes.data.data[0].NUMEROMENSAJES, idUsuario: data.data.data[0].IDUSUARIO1, idUsuario2: data.data.data[0].IDUSUARIO2})
    } catch(error){
      this.setState({loading: false, error: error});
    }
  }

  handleOnChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  };

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    if(this.state.error === true){
      return <PageError />;
    }

    console.log('2/4. render()');
    return (
      <React.Fragment>      
        <div className="container-fluid h-100 chat">
			<div className="row justify-content-center h-100">
				<div className="col-md-4 col-xl-3 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
					<div className="card-header">
						<div className="input-group">
							<input type="text" placeholder="Search..." onChange={this.handleOnChange}  name="filter" className="form-control search"/>
							<div className="input-group-prepend">
								<span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
							</div>
						</div>
					</div>
					<div className="card-body contacts_body">
						<ui className="contacts">
							<ChatList data={this.state.listChat} user={this.state.listUser} onClick= {this.handleOnClickListChat} />
						</ui>
					</div>
					<div className="card-footer"></div>
				</div></div>
				<div className="col-md-8 col-xl-6 chat">
					<div className="card">
						<div className="card-header msg_head">
							<div className="d-flex bd-highlight">
								<div className="img_cont">
									<img alt="" src={logo} className="rounded-circle user_img"/>
									{(this.state.conectado === 'S' ? 
										(
											<span className="online_icon"></span>
										):
										(
											<span className="online_icon offline"></span>
										)
									)}
								</div>
								<div className="user_info">
									<span>Chat con {this.state.nombre}</span>
								</div>
							</div>
							<span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
							<div className="action_menu">
								<ul>
									<li><FaUserCircle /> View profile</li>
									<li><FaUsers /> Add to close friends</li>
									<li><FaPlus /> Add to group</li>
									<li><FaBan /> Block</li>
								</ul>
							</div>
						</div>
						<div className="card-body msg_card_body" ref={(scroll) => { this.scroll = scroll; }}>
							<ChatMessage loading={this.state.loading} data={this.state.data} idUsuario1={this.state.idUsuario1} idUsuario2={this.state.idUsuario2}/>
						</div>
						<div className="card-footer">
							<div className="input-group">
								<div className="input-group-append">
									<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
								</div>
								<textarea onChange={this.handleOnChange} ref={(mensaje) => { this.mensaje = mensaje; }} name="mensaje" className="form-control type_msg" placeholder="Escribe tu mensaje..."></textarea>
								<div className="input-group-append">
									<span onClick={this.handleOnClick} className="input-group-text send_btn"><FaLocationArrow/></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      </React.Fragment>
    );
  }
}

export default Chat;
