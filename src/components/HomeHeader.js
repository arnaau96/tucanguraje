import React from "react";

function HomeHeader(props) {

    return (
        <React.Fragment>
        <div class="overlay"></div>
            <div class="container">
              <div class="row">
                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form >
                    <div class="form-row">
                        <div class="col-12 col-md-9 mb-2 mb-md-0">
                            <input
                            onChange ={props.onChange}                  
                            className="form-control form-control-lg"
                            type="text"
                            name="ciudad"  
                            placeholder="Introduce la ciudad para empezar..."                      
                            />                        
                        </div>
                        <div class="col-12 col-md-3">
                            <button onClick={props.onSubmit} className="btn btn-block btn-lg btn-primary"> 
                                ENVIAR! 
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