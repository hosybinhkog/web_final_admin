import {
  CLEAR_ALL_DATA_ERROR,
  GET_ALL_DATA_ERROR,
  GET_ALL_DATA_REQUEST,
  GET_ALL_DATA_SUCCES,
} from "../../constants/redux.contants";

export const getAllDataReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_ALL_DATA_REQUEST:
      return {
        error: null,
        loading: true,
        success: false,
      };
    case GET_ALL_DATA_SUCCES:
      return {
        error: null,
        loading: false,
        success: true,
        data: action.payload,
      };
    case GET_ALL_DATA_ERROR:
      return {
        error: action.payload,
        loading: false,
        success: false,
      };
    case CLEAR_ALL_DATA_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};
