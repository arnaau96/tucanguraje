import React from 'react';
import './styles/ChatList.css';

import logo from '../images/logo.png';

function ChatList(props) {

	if(props.data !== undefined){
    return (
		<React.Fragment>
			{props.data.map(listUser => 
						<React.Fragment>
							<li className="active" onClick={(e) => props.onClick(e,listUser.ID)} title={listUser.ID}>
								<div className="d-flex bd-highlight" title={listUser.ID}>
								{(listUser.CONECTADO === 'S' ? 
								(
									<React.Fragment>
										<div className="img_cont">
											<img alt="" src={logo} className="rounded-circle user_img"/>
											<span className="online_icon"></span>
										</div>
										<div className="user_info">
											<span>{listUser.NOMBRE}</span>										
											
											<p>{listUser.NOMBRE} está en línea</p>
										</div>
									</React.Fragment> 
								)
								: (
									<React.Fragment>
										<div className="img_cont">
											<img alt="" src={logo} className="rounded-circle user_img"/>
											<span className="online_icon offline"></span>
										</div>
										<div className="user_info">
											<span>{listUser.NOMBRE}</span>										
											
											<p>{listUser.NOMBRE} está desconectado</p>
										</div>
									</React.Fragment> 
										) 									
								)}
								</div>
							</li>
						</React.Fragment>
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

export default ChatList;
