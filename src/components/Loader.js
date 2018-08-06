import React, { Component } from "react";
import loading from "../loading.svg";
import "../App.css";

class Loader extends Component {
  render() {
    return (
      <img src={loading} className="spinner" alt="Loading spinner" />
    );
  }
}

export default Loader;
