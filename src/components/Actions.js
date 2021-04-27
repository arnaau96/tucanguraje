import React from 'react';
import { Link } from 'react-router-dom';

import DeleteBadgeModal from '../components/DeleteBadgeModal';

class Actions extends React.Component { 
    render() {  

    const data = this.props;

    if(data.visible==="S"){
      return(
        <div>
          <div>
            <Link
              className="btn btn-primary mb-4"
              to={`/badges/${data.id}/edit`}
            >
              Edit
            </Link>
          </div>
  
          <div>
            <button onClick={data.onOpenModal} className="btn btn-danger">
              Delete
            </button>
            <DeleteBadgeModal
              isOpen={data.isOpen}
              onClose={data.onClose}
              onDeleteBadge={data.onDeleteBadge}
            />
          </div>
        
        </div>
        
        );        
      }
      else{
          return(
            <div>
            </div>
          );
      }
    }
  }
  
  export default Actions;