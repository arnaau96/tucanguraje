import React from "react";

function HomeHeader(props) {

    return (
        <React.Fragment>
        <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form >
                    <div className="form-row">
                        <div className="col-12 col-md-9 mb-2 mb-md-0">
                            <input
                            onChange ={props.onChange}                  
                            className="form-control form-control-lg"
                            type="text"
                            name="ciudad"  
                            placeholder="Introduce la ciudad para empezar..."                      
                            />                        
                        </div>
                        <div className="col-12 col-md-3">
                            <button onClick={props.onSubmit} className="btn btn-block btn-lg btn-primary"> 
                                BUSCAR! 
                            </button>
                        </div>
                    </div>
                </form>
                </div>
              </div>
            </div>            
        </React.Fragment>
  );
}

export default HomeHeader;