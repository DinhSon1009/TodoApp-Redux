const initialState = {
  todos: [],
  filterMode: "all",
  editable: false,
  editItem: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "COMPLETE_HANDLER":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }),
      };
    case "FILTER_HANDLER":
      return {
        ...state,
        filterMode: action.payload,
      };

    case "EDIT":
      return {
        ...state,
        editable: true,
        editItem: action.payload,
      };
    case "EDITED":
      let index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].taskName = action.text;
      return {
        ...state,
        todos: [...state.todos],
        editable: action.editable,
        editID: action.editID,
      };
    case "CANCEL_EDIT":
      return {
        ...state,
        editable: action.editable,
        editID: action.editID,
      };

    default:
      return { ...state };
  }
};

export default todoReducer;
