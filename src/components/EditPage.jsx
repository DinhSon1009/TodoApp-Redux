import React, { Component } from "react";
import { connect } from "react-redux";
export class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.editItem.taskName,
    };
  }
  handleInput = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleEdit(this.state.text, this.props.editItem.id);
  };
  
  render() {
    return (
      <form>
        <input
          type="text"
          className="todo-input"
          value={this.state.text}
          onChange={this.handleInput}
        />
        <button
          className="complete-btn"
          type="submit"
          onClick={this.handleSubmit}
        >
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={this.props.handleCancle}>
          <i className="fas fa-times"></i>
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleEdit: (text, id) => {
      dispatch({
        type: "EDITED",
        payload: id,
        text: text,
        editable: false,
        editID: "",
      });
    },
    handleCancle: () => {
      dispatch({
        type: "CANCEL_EDIT",
        editable: false,
        editID: "",
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(EditPage);
