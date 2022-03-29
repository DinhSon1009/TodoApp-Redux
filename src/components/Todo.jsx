import React, { Component } from "react";
import { connect } from "react-redux";
import {
  COMPLETE_HANDLER,
  DELETE_TODO,
  EDIT,
} from "../redux/constants/TodoListConstants";

export class Todo extends Component {
  render() {
    let todo = this.props.todo;
    return (
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {todo.taskName}
        </li>
        <button
          onClick={() => this.props.completeHandler(todo)}
          className="complete-btn"
        >
          <i className="fas fa-check"></i>
        </button>
        <button
          onClick={() => this.props.handleEdit(todo)}
          className="edit-btn"
        >
          <i className="fas fa-edit"></i>
        </button>
        <button
          onClick={() => this.props.deleteTodo(todo)}
          className="trash-btn"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (todo) => dispatch({ type: DELETE_TODO, payload: todo.id }),
    completeHandler: (todo) =>
      dispatch({ type: COMPLETE_HANDLER, payload: todo.id }),
    handleEdit: (todo) =>
      dispatch({
        type: EDIT,
        payload: todo,
      }),
  };
};
export default connect(null, mapDispatchToProps)(Todo);
