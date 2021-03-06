import React from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context';

import logo from '../images/logo.png';

import './styles/BadgesList.css';
class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem color">
        <div>
          <img className="imagenListaPeticion" alt="" src={logo} />
        </div>
        <div>
          <h5>
            <strong>
              {this.props.badge.NOMBRE} {this.props.badge.APELLIDO}
            </strong>
          </h5>
          <br /><strong>Ciudad: </strong>{this.props.badge.CIUDAD}
          <br />
          <strong>Edad: </strong>{this.props.badge.EDAD}
          <br/><strong>Descripcion: </strong> {this.props.badge.DESCRIPCIONPETICION}
          
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges,propquery) {
  
  if(propquery === undefined){
    propquery = '';
  }

  const [query, setQuery] = React.useState(propquery);

  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.CIUDAD}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;
  const propquery = props.query;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges,propquery);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filtrar por Ciudad</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No hay peticiones disponibles</h3>
        <Context.Consumer>
        {
        ({isAuth}) =>
          isAuth ?   
            <Link className="btn btn-primary" to="/badges/new">
              Crear una nueva petici??n.
            </Link>
          :
          <div></div>
        }
        </Context.Consumer>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filtrar por Ciudad</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.ID}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.IDUSUARIO}/details`}
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

export default BadgesList;
