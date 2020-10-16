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
    const target = event.target;
    this.props.deleteData(target.value);
  };

  handleCompleted = (event) => {
    const target = event.target;
    this.props.setComplete(target.value);
  };

  render() {
    const { todoData, type } = this.props;
    const data =
      type === "Active" ? (
        <>
          <p className="title text-primary">{todoData.title}</p>
          <p className="small">{todoData.date}</p>
          <button
            onClick={this.handleCompleted}
            data-toggle="tooltip"
            title="Completed"
            value={todoData.id}
            className="btn btn-success rightIcon">
            <i className="fa fa-check" />
          </button>
        </>
      ) : (
        <>
          <p className="title text-success">{todoData.title}</p>
          <p className="small">{todoData.date}</p>
        </>
      );
    return (
      <div className="form-inline col-12">
        <div className="item">
          <button
            onClick={this.handleDelete}
            className="btn btn-danger"
            value={todoData.id}
            data-toggle="tooltip"
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
