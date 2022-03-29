import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

export class TodoList extends Component {
  render() {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {this.props.filterList.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  let filterList;
  let todoList = state.todoReducer.todos;
  let filterMode = state.todoReducer.filterMode;
  if (filterMode === "completed") {
    filterList = todoList.filter((todo) => todo.completed === true);
  } else if (filterMode === "uncompleted") {
    filterList = todoList.filter((todo) => todo.completed === false);
  } else {
    filterList = todoList.filter((todo) => todo);
  }
  return { filterList: filterList };
};

export default connect(mapStateToProps)(TodoList);
