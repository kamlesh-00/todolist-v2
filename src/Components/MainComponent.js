import React from "react";
import ListData from "./ListDataComponent";
import NewToDo from "./NewToDoComponent";

function Main() {
  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="box container">
        <ListData />
      </div>
      <div className="box container">
        <NewToDo />
      </div>
    </div>
  );
}

export default Main;
