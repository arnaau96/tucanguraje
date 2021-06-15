import React from 'react';
import Cookies from 'universal-cookie';
import './styles/ChatMessage.css';

import logo from '../images/logo.png';

const cookies = new Cookies();

function ChatMessage(props) {
	
	const data = props.data;
	console.log("DATA " + data);
	if(props.data !== undefined){
		console.log(props.data.MENSAJE);
    return (
		<React.Fragment>
			{props.data.map(chat => 
				{ return chat.USUARIOENVIA !== cookies.get('ID') ?

						<React.Fragment>
							<div class="d-flex justify-content-start mb-4" key={chat.ID}>
								<div class="img_cont_msg">
									<img alt="" src={logo} class="rounded-circle user_img_msg"/>
								</div>
								<div class="msg_cotainer">
									{chat.MENSAJE}
									<span class="msg_time">{chat.HORA}</span>
								</div>
							</div>
						</React.Fragment>						
					
					 :
					
						<React.Fragment>
							<div class="d-flex justify-content-end mb-4" key={chat.USUARIOENVIA}>
								<div class="msg_cotainer_send">
									{chat.MENSAJE}
									<span class="msg_time_send">{chat.HORA}</span>
								</div>
								<div class="img_cont_msg">
								</div>
							</div>	
						</React.Fragment>
					
				}
			)}			
      	</React.Fragment>
      	
    )
	} else{
		return (
			<div>

			</div>
		)
	}
  }

export default ChatMessage;
