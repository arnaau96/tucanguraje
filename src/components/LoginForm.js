import React from "react";
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { FaUser, FaKey } from 'react-icons/fa';


//function LoginForm(props) {
class LoginForm extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div className="container_login h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center">
                            <div className="brand_logo_container">
                                <img src={logo} className="brand_logo" alt="Logo"/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center form_container">
                            <form onSubmit={this.props.onSubmit}>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><FaUser /></span>
                                    </div>
                                    <input type="email" onChange={this.props.onChange} name="EMAIL" className="form-control input_user" value={this.props.form.EMAIL} placeholder="Introduce el email"/>
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><FaKey /></span>
                                    </div>
                                    <input type="password" onChange={this.props.onChange} name="CONTRASENYA" className="form-control input_pass" value={this.props.form.CONTRASENYA} placeholder="Introduce la contrasenya"/>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                        <label className="custom-control-label" htmlFor="customControlInline">Recuerdame</label>
                                    </div>
                                </div>
                                    <div className="d-flex justify-content-center mt-3 login_container">
                                        <button className="btn login_btn">Login</button>
                                    </div>
                                    {this.props.mensaje && (
                                    <p className="text-danger">{this.props.mensaje}</p>
                                    )}                                    
                            </form>
                        </div>
                
                        <div className="mt-4">
                            <div className="d-flex justify-content-center links">
                                No tienes cuenta?
                                <Link to="/signup">
                                    <p className="ml-2">Registrate</p>
                                </Link>
                            </div>
                            <div className="d-flex justify-content-center links">
                                <p>Has olvidado la contraseña?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default LoginForm;