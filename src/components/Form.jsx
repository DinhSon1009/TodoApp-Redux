import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TODO, FILTER_HANDLER } from "../redux/constants/TodoListConstants";
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({
      id: Math.random() * 1000,
      taskName: this.state.text,
      completed: false,
    });
    this.setState({ text: "" });
  };

  statusHandler = (e) => {
    this.props.filterList(e.target.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square" />
        </button>
        <div className="select">
          <select
            onChange={this.statusHandler}
            name="todos"
            className="filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    addTodo: (todo) => dispatch({ type: ADD_TODO, payload: todo }),
    filterList: (value) => dispatch({ type: FILTER_HANDLER, payload: value }),
  };
};

export default connect(null, mapDispatchToProps)(Form);
