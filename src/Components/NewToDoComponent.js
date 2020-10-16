import React, { Component } from "react";
import { connect } from "react-redux";
import { addData } from "../Redux/reduxActions/dataActions";

class NewToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      errors: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const letters = /^[A-Za-z\s]+$/;
    const title = this.state.title;
    if (letters.test(title) && title.trim() !== "") {
      let x = Math.floor(Math.random() * 999) + 1;
      this.props.addData({
        title: this.state.title.trim(),
        date: this.state.date,
        id: x,
        type: "Active",
      });
      console.log("Submitted");
      this.setState({
        title: "",
        date: "",
        errors: "",
      });
    } else {
      this.setState({
        errors: "Please fill properly with no numbers and try again!",
      });
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="col-12">
        <div className=" form-inline center">
          <input
            type="text"
            name="title"
            className="form-control mr-2"
            id="title"
            value={this.state.title}
            placeholder="Enter title"
            onChange={this.handleChange}
          />
          <input
            type="date"
            name="date"
            className="form-control mr-2"
            id="date"
            value={this.state.date}
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
        <div className="center">
          <p className="text-danger">{this.state.errors}</p>
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
