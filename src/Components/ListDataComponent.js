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
    const { data, type } = this.state;
    let list = data.map((neww) => (
      <ListOfItems todoData={neww} type={neww.type} />
    ));
    return (
      <div className="container">
        <div className="btn-group row">
          <button
            onClick={this.handleClick}
            name="Active"
            className="btn btn-primary">
            Active
          </button>
          <button
            onClick={this.handleClick}
            name="Completed"
            className="btn btn-success">
            Completed
          </button>
          <button
            onClick={this.handleClick}
            name="All"
            className="btn btn-secondary">
            All
          </button>
          {list}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps)(ListData);
