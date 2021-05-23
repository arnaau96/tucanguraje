import React from 'react';

class BadgeForm extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>HORARIO</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="HORARIO"
              value={this.props.formValues.HORARIO}
            />
          </div>

          <div className="form-group">
            <label>PRECIO HORA</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="number"
              name="PRECIOHORA"
              value={this.props.formValues.PRECIOHORA}
            />
          </div>

          <div className="form-group">
            <label>DESCRIPCION</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="DESCRIPCIONPETICION"
              value={this.props.formValues.DESCRIPCIONPETICION}
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

export default BadgeForm;
