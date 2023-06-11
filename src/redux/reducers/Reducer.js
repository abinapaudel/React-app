import { ActionTypes } from "../contents/action-types";

const initialState = {
  isAuthenticated: false,
  users: [],
  posts: [],
  comments: [],
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload };
    default:
      return state;
  }
};

export const commentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_COMMENTS:
      return { ...state, comments: payload };
    default:
      return state;
  }
};
 //ASSIGNING THE STATE TO THE INITIAL STATE
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        isAuthenticated: true,
      };
    case "LOGIN_FAILURE":
    case "LOGOUT":
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
