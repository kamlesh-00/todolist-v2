import React, { Component } from "react";
import { connect } from "react-redux";
import { addData } from "../Redux/reduxActions/dataActions";

class NewToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let x = Math.random() * 9999999 + 1;
    this.props.addData({
      title: this.state.title,
      date: this.state.date,
      id: x,
      type: "Active",
    });
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-inline">
          <input
            type="text"
            name="title"
            className="form-control mr-2"
            id="title"
            placeholder="Enter title"
            onChange={this.handleChange}
          />
          <input
            type="date"
            name="date"
            className="form-control mr-2"
            id="date"
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="btn btn-primary"
            data-toggle="tooltip"
            title="Add"
            data-placement="right">
            <i class="fa fa-paper-plane"></i>
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data.data,
});

const mapActionToProps = {
  addData,
};

export default connect(mapStateToProps, mapActionToProps)(NewToDo);
