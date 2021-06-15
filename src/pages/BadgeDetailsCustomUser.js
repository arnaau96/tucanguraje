import React from 'react';

import './styles/BadgeDetails.css';
import BadgeCustomUser from '../components/BadgeCustomUser';

function BadgeDetails(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <BadgeCustomUser
              badge={props.badge}
              isOpen={props.modalIsOpen}
              onClose={props.onCloseModal}
              onDeleteBadge={props.onDeleteBadge}
              onOpenChat={props.onOpenChat}
              onOpenModal={props.onOpenModal}
              onInterested={props.onInterested}
              onOpenValoraciones={props.onOpenValoraciones}
              onCreateValoraciones={props.onCreateValoraciones}
              visible='I'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
