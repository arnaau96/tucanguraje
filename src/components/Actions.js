import React from 'react';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

const cookies = new Cookies();

class Actions extends React.Component { 
    render() {  

    const data = this.props;

      console.log(cookies.get('ID'));
      console.log(data.id);

    if(data.visible==="S"){
      if(cookies.get('ID')===data.idUsuario){
        return(
          <div>
            <div>
                <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${cookies.get('ID')}/edit`}
                >
                  Edit
                </Link>
              </div>
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
        else if(cookies.get('LOGIN')){
          return(
            <div>
              <button onClick={data.onInterested} className="btn btn-primary">
                Me interesa!
              </button>
            </div>
          );
        }
        else{
          return(
            <div>

            </div>
          )
        }
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