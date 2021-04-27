import React from 'react';

import './styles/BadgeDetails.css';
import Badge from '../components/Badge';

function BadgeDetails(props) {
  const badge = props.badge;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              id={badge.id}
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
              isOpen={props.modalIsOpen}
              onClose={props.onCloseModal}
              onDeleteBadge={props.onDeleteBadge}
              onOpenModal={props.onOpenModal}
              visible='S'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
