import {
  CLEAR_GET_ALL_POST_FAIL,
  CLEAR_TOGGLE_POST_PUBLIC_ERROR,
  GET_ALL_POST_FAIL,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  TOGGLE_POST_PUBLIC_ERROR,
  TOGGLE_POST_PUBLIC_REQUEST,
  TOGGLE_POST_PUBLIC_SUCCESS,
  RESET_TOGGLE_POST_PUBLIC_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  CLEAR_DELETE_POST_ERROR,
} from "./../../constants/redux.contants";

export const fetchPostsReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_ALL_POST_REQUEST:
      return {
        loading: true,
        success: false,
        posts: null,
      };
    case GET_ALL_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        post: action.payload,
      };
    case GET_ALL_POST_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case CLEAR_GET_ALL_POST_FAIL:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const togglePublicPostReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case TOGGLE_POST_PUBLIC_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case TOGGLE_POST_PUBLIC_SUCCESS:
      return {
        loading: true,
        success: true,
        error: null,
      };
    case TOGGLE_POST_PUBLIC_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case CLEAR_TOGGLE_POST_PUBLIC_ERROR:
      return {
        ...state,
        error: null,
      };
    case RESET_TOGGLE_POST_PUBLIC_SUCCESS:
      return {
        ...state,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const deletePostReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case DELETE_POST_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case DELETE_POST_SUCCESS:
      return {
        loading: false,
        success: action.payload,
        error: null,
      };
    case DELETE_POST_ERROR:
      return {
        error: action.payload,
        success: false,
        loading: false,
      };
    case CLEAR_DELETE_POST_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};
