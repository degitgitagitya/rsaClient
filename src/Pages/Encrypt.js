import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Navbar from "../Component/Navbar";

class Encrypt extends Component {
  state = {
    inputP: "",
    inputQ: "",
    inputKoprima: "",
    inputPesan: "",
    result: "",
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

  onChangePesan = (event) => {
    this.setState({
      inputPesan: event.target.value,
    });
  };

  handleEncrypt = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ msg: this.state.inputPesan });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://rsa-keygen.herokuapp.com/encrypt/${this.state.inputP}/${this.state.inputQ}/${this.state.inputKoprima}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          result: result.message,
        });
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
          <div className="mt-3 p-3 card shadow-sm">
            <div className="d-flex justify-content-center">
              <h3>Encrypt</h3>
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
              <p>Pesan</p>
              <textarea
                value={this.state.inputPesan}
                onChange={this.onChangePesan}
                className="form-control"
                placeholder="Pesan"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="mb-3">
              <p>Cipher Text</p>
              <textarea
                className="form-control"
                value={this.state.result}
                readOnly={true}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button
              onClick={() => {
                this.handleEncrypt();
              }}
              className="btn btn-success"
            >
              Encrypt
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Encrypt);
