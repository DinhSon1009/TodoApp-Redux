import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

//setup redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./redux/reducer/rootReducer";

const persistedState = localStorage.getItem("todoreduxState")
  ? JSON.parse(localStorage.getItem("todoreduxState"))
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.subscribe(() => {
  localStorage.setItem("todoreduxState", JSON.stringify(store.getState()));
});
