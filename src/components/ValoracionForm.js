import React from 'react';

class ValoracionForm extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>MENSAJE</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="MENSAJE"
              value={this.props.MENSAJE}
            />
          </div>

          <div className="form-group">
            <label>PUNTUACION</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="number"
              name="PUNTUACION"
              value={this.props.PUNTUACION}
            />
          </div>

          <button className="btn btn-primary">
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default ValoracionForm;
