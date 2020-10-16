import React from "react";
import ListData from "./ListDataComponent";
import NewToDo from "./NewToDoComponent";

function Main() {
  return (
    <div className="container">
      <div className="row">
        <h1>To Do List</h1>
      </div>
      <div className="row">
        <ListData />
      </div>
      <div className="row">
        <NewToDo />
      </div>
    </div>
  );
}

export default Main;
