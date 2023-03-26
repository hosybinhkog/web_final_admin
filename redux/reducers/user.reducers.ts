import { IstateUser } from "./../../interface/index";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_ERRORS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAILER,
  CLEAR_GET_CUSTOMER_FAILER,
} from "../../constants/redux.contants";

interface IactionUserReducer {
  type: String;
  payload: any;
}

const userReducer = (state: IstateUser = { user: {} }, action: IactionUserReducer) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

export const getAllUserReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_CUSTOMER_REQUEST:
      return {
        loading: true,
        success: false,
        customers: null,
      };
    case GET_CUSTOMER_SUCCESS:
      return {
        loading: false,
        success: true,
        customers: action.payload,
      };
    case GET_CUSTOMER_FAILER:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case CLEAR_GET_CUSTOMER_FAILER:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};
