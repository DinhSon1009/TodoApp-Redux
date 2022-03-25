import React, { Component } from "react";

export class Todo extends Component {
  render() {
    let { todo, deleteTodo, text, completeHandler, handleEdit } = this.props;
    return (
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
        <button onClick={() => completeHandler(todo)} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={() => handleEdit(todo)} className="edit-btn">
          <i className="fas fa-edit"></i>
        </button>
        <button onClick={() => deleteTodo(todo)} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}
