import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem color">
        <div>
          <h5>
            <strong>
              {this.props.badge.NOMBRE} {this.props.badge.APELLIDO}
            </strong>
          </h5>
          <br /><strong>Ciudad: </strong>{this.props.badge.CIUDAD}
          <br />
          <strong>Edad: </strong>{this.props.badge.EDAD}
          {this.props.badge.DESCRIPCION}
        </div>
      </div>
    );
  }
}



function BadgesList(props) {
  const badges = props.badges;
  if (badges.length === 0) {
    return(
    <h3>No hay ningun interesado en tu petición</h3>
    );
  }
  else{  
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {badges.map(badge => {
            return (
              <li key={badge.ID}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.IDUSUARIO_1}/detailsCustomUser`}
                >
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }  
}

export default BadgesList;
