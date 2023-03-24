import {
  CLEAR_CREATE_CATEGORY_STREAM_ERROR,
  CLEAR_GET_ALL_CATEGORY_STREAM_FAILURE,
  CLEAR_GET_CATEGORY_STREAM_FAILURE,
  CLEAR_UPDATE_CATEGORY_STREAM,
  CREATE_CATEGORY_STREAM_ERROR,
  CREATE_CATEGORY_STREAM_REQEST,
  CREATE_CATEGORY_STREAM_SUCCESS,
  GET_ALL_CATEGORY_STREAN_FAILURE,
  GET_ALL_CATEGORY_STREAN_REQUEST,
  GET_ALL_CATEGORY_STREAN_SUCCESS,
  GET_CATEGORY_STREAM_FAILURE,
  GET_CATEGORY_STREAM_REQUUEST,
  GET_CATEGORY_STREAM_SUCCESS,
  RESET_UPDATE_CATEGORY_STREAM,
  UPDATE_CATEGORY_STREAM_FAILURE,
  UPDATE_CATEGORY_STREAM_REQEST,
  UPDATE_CATEGORY_STREAM_SUCCESS,
  RESET_CREATE_CATEGORY_STREAM,
} from "../../constants/redux.contants";

export const createCategoryStreamCategoryReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case CREATE_CATEGORY_STREAM_REQEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case CREATE_CATEGORY_STREAM_SUCCESS:
      return {
        loading: false,
        success: true,
        newCategoryStream: action.payload,
        error: null,
      };
    case CREATE_CATEGORY_STREAM_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_CREATE_CATEGORY_STREAM_ERROR:
      return {
        ...state,
        error: null,
      };
    case RESET_CREATE_CATEGORY_STREAM:
      return {
        ...state,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const getAllCategoryStreamReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_STREAN_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case GET_ALL_CATEGORY_STREAN_SUCCESS:
      return {
        loading: false,
        success: true,
        categoriesStream: action.payload.categories,
        categoriesCount: action.payload.categoriesCount,
        error: null,
      };
    case GET_ALL_CATEGORY_STREAN_FAILURE:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_GET_ALL_CATEGORY_STREAM_FAILURE:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const getCategoryStreamReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_CATEGORY_STREAM_REQUUEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case GET_CATEGORY_STREAM_SUCCESS:
      return {
        loading: false,
        success: true,
        categoryStream: action.payload,
      };
    case GET_CATEGORY_STREAM_FAILURE:
      return {
        error: action.payload,
        categoryStream: null,
        loading: false,
        success: false,
      };
    case CLEAR_GET_CATEGORY_STREAM_FAILURE:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const updateCategoryStreamReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case UPDATE_CATEGORY_STREAM_REQEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case UPDATE_CATEGORY_STREAM_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        updateCategoryStream: action.payload,
      };
    case UPDATE_CATEGORY_STREAM_FAILURE:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case CLEAR_UPDATE_CATEGORY_STREAM:
      return {
        ...state,
        error: null,
      };
    case RESET_UPDATE_CATEGORY_STREAM:
      return {
        ...state,
        success: false,
        updateCategoryStream: null,
      };
    default:
      return { ...state };
  }
};
