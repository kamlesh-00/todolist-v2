import React, { Component } from "react";

class NewToDo extends Component {
  handleSubmit = (event) => {
    const target = event.target;
  };

  render() {
    return <form onSubmit={this.handleSubmit}></form>;
  }
}

export default NewToDo;
