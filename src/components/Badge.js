import React from 'react';

import './styles/Badge.css';

import logo from '../images/logo.png';

import Actions from '../components/Actions';

class Badge extends React.Component {
  
  render() {
    const badge = this.props.badge;
    return (
      <div className="Badge">
        <div className="container ">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="Badge__section-name">
                  <img className="imagenPeticion" alt="" src={logo} />
                  <h2>
                    {badge.NOMBRE} {badge.APELLIDO}
                    <h4>{badge.CIUDAD}</h4>
                    <h4>{badge.EDAD} años</h4>
                  </h2>
                </div>
                </div>
                <div className="botonesPeticion col-12 col-md-6">
                  <Actions 
                    id={badge.ID}
                    idUsuario={badge.IDUSUARIO}
                    isOpen={this.props.isOpen}
                    onClose={this.props.onClose}
                    onDeleteBadge={this.props.onDeleteBadge}
                    onOpenModal={this.props.onOpenModal}
                    onInterested={this.props.onInterested}
                    onOpenValoraciones={this.props.onOpenValoraciones}
                    onCreateValoraciones={this.props.onCreateValoraciones}
                    visible={this.props.visible}
                  />
                </div>
            
          </div>
        </div>
        <div className="Badge__section-info">
          
        </div>
        <p className="fuente"/>
        <div className="Badge__section-info">
          <h3>HORARIO</h3>
          <p>{badge.HORARIO} </p>
          <p className="fuente"/>
          <hr/>
          <h3>PRECIO HORA: </h3>
          <p>{badge.PRECIOHORA} €</p>
          <p className="fuente"/>
          <hr/>
          <h3> DESCRIPCIÓN </h3>
          <p>{badge.DESCRIPCIONPETICION}</p>
          <p className="fuente"/>
          <hr/>
          <h3> VALORACION </h3>          
          <p>{badge.VALORACION}/5</p>
          <p className="fuente"/>
        </div>

      </div>
    );
  }
}

export default Badge;
