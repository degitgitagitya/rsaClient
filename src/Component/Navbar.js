import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">RSA Keygen</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span
                onClick={() => {
                  this.props.history.push("/");
                }}
                className="nav-link"
              >
                Encrypt
              </span>
            </li>
            <li className="nav-item">
              <span
                onClick={() => {
                  this.props.history.push("/decrypt");
                }}
                className="nav-link"
              >
                Decrypt
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
