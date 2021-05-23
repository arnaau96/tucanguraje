import React from "react";


class SignUpForm extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div className="container-signup color">
                <h1>Regístrate</h1>
                <form className="form-signup" onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label className="control-label">Nombre*</label>
                        <input type="text" onChange={this.props.onChange} className="form-control" name="NOMBRE" maxLength="100" placeholder="Nombre" value={this.props.form.NOMBRE} required/>
                    </div>    

                    <div className="form-group">
                        <label className="control-label">Apellido*</label>
                        <input type="text" onChange={this.props.onChange} className="form-control" name="APELLIDO" maxLength="100" placeholder="Apellido" value={this.props.form.APELLIDO} required/>
                    </div>

                    <div className="form-group">
                        <label className="control-label">Email*</label>
                        <input type="email" onChange={this.props.onChange} className="form-control" name="EMAIL" maxLength="100" placeholder="Email" value={this.props.form.EMAIL} required/>
                    </div>                   
                                            
                    <div className="form-group">
                        <label className="control-label">Nombre Usuario*</label>
                        <input type="text" onChange={this.props.onChange} className="form-control" name="NOMBREUSUARIO" maxLength="100" placeholder="Nombre Usuario" value={this.props.form.NOMBREUSUARIO} required/>
                    </div>    

                    <div className="form-group">
                        <label className="control-label">Contrasenya*</label>
                        <input type="password" onChange={this.props.onChange} className="form-control" name="CONTRASENYA" maxLength="20" placeholder="Contrasenya" value={this.props.form.CONTRASENYA} required/>
                    </div>                                    
                    
                    <div className="form-group">
                        <label className="control-label">Ciudad*</label>
                        <input type="text" onChange={this.props.onChange} className="form-control" name="CIUDAD" maxLength="100" placeholder="Ciudad" value={this.props.form.CIUDAD}/>
                    </div>

                    <div className="form-group">
                        <label className="control-label">Edad</label>
                        <input type="number" onChange={this.props.onChange} className="form-control" name="EDAD" maxLength="3" placeholder="Edad" value={this.props.form.EDAD}/>
                    </div>

                    <div className="form-group">
                        <label className="control-label">Telefono</label>
                        <input type="text" onChange={this.props.onChange} maxLength="9" className="form-control" name="TELEFONO" placeholder="Telefono"  pattern="[0-9]{1,9}" value={this.props.form.TELEFONO} />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Dirección</label>
                        <input type="text" onChange={this.props.onChange} maxLength="100" className="form-control" name="DIRECCION" placeholder="Dirección" value={this.props.form.DIRECCION} />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Experiencia</label>
                        <textarea rows="10" onChange={this.props.onChange} maxLength="100" className="form-control" name="EXPERIENCIA" placeholder="Experiencia" value={this.props.form.EXPERIENCIA}></textarea>
                    </div>

                    <div className="form-group">
                        <label className="control-label">Disponibilidad</label>
                        <input type="text" onChange={this.props.onChange} maxLength="100" className="form-control" name="DISPONIBILIDAD" placeholder="Disponibilidad" value={this.props.form.DISPONIBILIDAD}/>
                    </div>

                    <div className="form-group">
                        <label className="control-label">Estudios</label>
                        <textarea rows="10" onChange={this.props.onChange} maxLength="100" className="form-control" name="ESTUDIOS" placeholder="Cuentanos que estudios tienes" value={this.props.form.ESTUDIOS}></textarea>
                    </div>
                    
                    <div className="form-group">
                        <label className="control-label">Descripción</label>
                        <textarea rows="10" onChange={this.props.onChange} maxLength="100" className="form-control" name="DESCRIPCION" placeholder="Descríbete para que te conozcan" value={this.props.form.DESCRIPCION}></textarea>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Continuar</button>
                    </div>     

                    {this.props.mensaje && (
                    <p className="text-danger">{this.props.mensaje}</p>
                    )}

                </form>
            </div>
            </React.Fragment>
        );
    }
}

export default SignUpForm;