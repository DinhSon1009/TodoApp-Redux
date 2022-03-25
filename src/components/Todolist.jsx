import React, { Component } from "react";
import { connect } from "react-redux";
import { Todo } from "./Todo";
import {
  DELETE_TODO,
  COMPLETE_HANDLER,
} from "../redux/constants/TodoListConstants";

export class TodoList extends Component {
  render() {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {this.props.filterList.map((todo, index) => (
            <Todo
              key={index}
              text={todo.taskName}
              todo={todo}
              deleteTodo={this.props.deleteTodo}
              completeHandler={this.props.completeHandler}
              handleEdit={this.props.handleEdit}
            />
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (todo) => dispatch({ type: DELETE_TODO, payload: todo.id }),
    completeHandler: (todo) =>
      dispatch({ type: COMPLETE_HANDLER, payload: todo.id }),
    handleEdit: (todo) =>
      dispatch({
        type: "EDIT",
        payload: todo,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
