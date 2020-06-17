import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../Component/Navbar";

class Decrypt extends Component {
  state = {
    inputP: "",
    inputQ: "",
    inputKoprima: "",
    inputPesan: "",
  };

  onChangeP = (event) => {
    this.setState({
      inputP: event.target.value,
    });
  };

  onChangeQ = (event) => {
    this.setState({
      inputQ: event.target.value,
    });
  };

  onChangeKoprima = (event) => {
    this.setState({
      inputKoprima: event.target.value,
    });
  };

  onChangeCipher = (event) => {
    this.setState({
      inputCipher: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
          <div className="mt-3 p-3 card shadow-sm">
            <div className="d-flex justify-content-center">
              <h3>Decrypt</h3>
            </div>
            <div className="mb-3">
              <p>Prime P</p>
              <input
                value={this.state.inputP}
                onChange={this.onChangeP}
                placeholder="Prime P"
                className="form-control w-25"
                type="number"
              />
            </div>
            <div className="mb-3">
              <p>Prime Q</p>
              <input
                value={this.state.inputQ}
                onChange={this.onChangeQ}
                placeholder="Prime Q"
                className="form-control w-25"
                type="number"
              />
            </div>
            <div className="mb-3">
              <p>Bilangan Koprima</p>
              <input
                value={this.state.inputKoprima}
                onChange={this.onChangeKoprima}
                placeholder="Bilangan Koprima"
                className="form-control w-25"
                type="number"
              />
            </div>
            <div className="mb-3">
              <p>Cipher Text</p>
              <textarea
                value={this.state.inputCipher}
                onChange={this.onChangeCipher}
                className="form-control"
                placeholder="Cipher Text"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button
              onClick={() => {
                console.log(this.state);
              }}
              className="btn btn-warning"
            >
              Decrypt
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Decrypt);
