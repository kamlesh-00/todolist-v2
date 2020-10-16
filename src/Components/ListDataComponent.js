import React, { Component } from "react";
import { connect } from "react-redux";
import ListOfItems from "./ListOfItems";

class ListData extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      data: this.props.data.filter((toDo) => toDo.type === "Active"),
    };
  }

  handleClick = (event) => {
    const target = event.target;
    const name = target.name;
    if (name === "Active") {
      this.setState({
        data: this.props.data.filter((toDo) => toDo.type === "Active"),
      });
    } else if (name === "Completed") {
      this.setState({
        data: this.props.data.filter((toDo) => toDo.type === "Completed"),
      });
    } else {
      this.setState({
        data: this.props.data,
      });
    }
  };

  render() {
    const { data } = this.state;
    let list = data.map((neww) => (
      <div className="col-12">
        <ListOfItems todoData={neww} type={neww.type} />
      </div>
    ));
    return (
      <>
        <div className="btn-group col-12 mb-5">
          <button
            onClick={this.handleClick}
            name="Active"
            className="btn btn-primary col-4">
            Active
          </button>
          <button
            onClick={this.handleClick}
            name="Completed"
            className="btn btn-success col-4">
            Completed
          </button>
          <button
            onClick={this.handleClick}
            name="All"
            className="btn btn-secondary col-4">
            All
          </button>
        </div>
        <div className="center-list mb-5">{list}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps)(ListData);
