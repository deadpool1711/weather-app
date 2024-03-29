import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <div className="container">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadWeather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              name="city"
              placeholder="Enter City"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              name="country"
              placeholder="Enter Country"
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country
    </div>
  );
}

export default Form;
