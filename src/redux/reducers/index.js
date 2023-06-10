import { combineReducers } from "redux";
import { userReducer } from "./Reducer";
import { postReducer } from "./Reducer";
import { commentReducer } from "./Reducer/";

const reducers = combineReducers({
  allUsers: userReducer,
  allPosts: postReducer,
  allComments: commentReducer,
});

export default reducers;
