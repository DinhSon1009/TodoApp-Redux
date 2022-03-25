import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
// Store tổng ứng dụng
export const rootReducer = combineReducers({
  // Nơi sẽ chứa các reducer cho nghiệp vụ
  todoReducer,
});
