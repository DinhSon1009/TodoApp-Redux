import React, { Component } from "react";
import Form from "../components/Form";
import Todolist from "../components/Todolist";
import { connect } from "react-redux";
import EditPage from "../components/EditPage";

export class TodoPage extends Component {
 
  render() {
    let { editable, editItem } = this.props;
    return (
      <div>
        {editable ? (
          <EditPage editItem={editItem} />
        ) : (
          <div>
            <Form />
            <Todolist />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editable: state.todoReducer.editable,
    editItem: state.todoReducer.editItem,
  };
};

export default connect(mapStateToProps)(TodoPage);
