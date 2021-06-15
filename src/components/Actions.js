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
                <div className="float-right">
                <Link
                  className=" btn btn-primary mb-4"
                  to={`/badges/${cookies.get('ID')}/edit`}
                >
                  Edit
                </Link>
                <br/>
                <button onClick={data.onOpenModal} className="float-right btn btn-danger">
                Delete
              </button>
              </div>              
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
              <button onClick={data.onInterested} className="float-right btn btn-primary">
                Me interesa!
              </button>
              <br/><br/>
              <button onClick={data.onOpenValoraciones} className="float-right btn btn-danger">
                Ver Valoraciones
              </button>
              <br/><br/>
              <button onClick={data.onCreateValoraciones} className="float-right btn btn-danger">
                Valorar
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
      else if(data.visible==="I"){
        return(
          <div>
            <div>
              <div>
                <button onClick={data.onOpenChat} className="float-right btn btn-primary mb-4">
                Chat
                </button>
              </div>
              <button onClick={data.onOpenValoraciones} className="float-right btn btn-danger">
                Ver Valoraciones
              </button>
              <button onClick={data.onCreateValoraciones} className="float-right btn btn-danger">
                Valorar
              </button>
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