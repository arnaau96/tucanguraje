import React from 'react';

import './styles/Badge.css';

import Actions from '../components/Actions';

class BadgeCustomUser extends React.Component {
  
  render() {
    const badge = this.props.badge;
    return (
      <div className="Badge">
        
        <div className="Badge__section-name">
          <h1>
            {badge.NOMBRE} <br /> {badge.APELLIDO}
          </h1>
          <Actions 
            id={badge.ID}
            idUsuario={badge.IDUSUARIO}
            isOpen={this.props.isOpen}
            onClose={this.props.onClose}
            onDeleteBadge={this.props.onDeleteBadge}
            onOpenChat={this.props.onOpenChat}
            onOpenModal={this.props.onOpenModal}
            onInterested={this.props.onInterested}
            onOpenValoraciones={this.props.onOpenValoraciones}
            onCreateValoraciones={this.props.onCreateValoraciones}
            visible={this.props.visible}
          />
        </div>

        <div className="Badge__section-info">
          <h3>{badge.CIUDAD}</h3>
          <div>@{badge.PRECIOHORA}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default BadgeCustomUser;
