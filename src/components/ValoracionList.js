import React from 'react';

import './styles/ValoracionList.css';

class ValoracionListItem extends React.Component {
  render() {
    return (
      <div className="ValoracionListItem color">
        <div>
          <h5>
            <strong>
              {this.props.valoracion.NOMBRE} {this.props.valoracion.APELLIDO}
            </strong>
            <p>{this.props.valoracion.FECHAVALORACION}</p>
          </h5>
          <br />{this.props.valoracion.MENSAJE}
          <br />
          {this.props.valoracion.PUNTUACION}          
        </div>
      </div>
    );
  }
}

function ValoracionList(props) {

  return (
    <div className="ValoracionList">
      <ul className="list-unstyled">
      {props.valoraciones.map(valoracion => {
          return (        
            <li key={valoracion.ID}>
                <ValoracionListItem valoracion={valoracion} />
            </li>
        
          )
      })}
      </ul>
    </div>
  );

}

export default ValoracionList;
