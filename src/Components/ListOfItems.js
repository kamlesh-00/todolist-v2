import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteData, setComplete } from "../Redux/reduxActions/dataActions";

class ListOfItems extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
  }

  handleDelete = (event) => {
    this.props.deleteData(this.props.todoData.id);
  };

  handleCompleted = (event) => {
    this.props.setComplete(this.props.todoData.id);
  };

  render() {
    const { todoData, type } = this.props;
    const data =
      type === "Active" ? (
        <>
          <button
            onClick={this.handleCompleted}
            title="Completed"
            name="Completed"
            value={todoData.id}
            className="btn btn-success complete ml-3">
            <i className="fa fa-check" />
          </button>
          <p className="title text-primary">{todoData.title}</p>
          <p className="small">{todoData.date}</p>
        </>
      ) : (
        <>
          <button
            onClick={this.handleCompleted}
            title="Completed"
            name="Completed"
            value={todoData.id}
            className="btn btn-success complete ml-3 invisible">
            <i className="fa fa-check" />
          </button>
          <p className="title text-success">{todoData.title}</p>
          <p className="small">{todoData.date}</p>
        </>
      );
    return (
      <div className="form-inline">
        <div className="item">
          <button
            onClick={this.handleDelete}
            className="btn btn-danger complete"
            value={todoData.id}
            name="Delete"
            title="Delete">
            <i className="fa fa-trash" />
          </button>
          {data}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapActionsToProps = {
  deleteData,
  setComplete,
};

export default connect(mapStateToProps, mapActionsToProps)(ListOfItems);
