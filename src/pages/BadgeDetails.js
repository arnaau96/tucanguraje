import React from 'react';

import './styles/BadgeDetails.css';
import Badge from '../components/Badge';

function BadgeDetails(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              badge={props.badge}
              isOpen={props.modalIsOpen}
              onClose={props.onCloseModal}
              onOpenValoraciones={props.onOpenValoraciones}
              onCreateValoraciones={props.onCreateValoraciones}
              onDeleteBadge={props.onDeleteBadge}
              onOpenModal={props.onOpenModal}
              onInterested={props.onInterested}
              visible='S'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
