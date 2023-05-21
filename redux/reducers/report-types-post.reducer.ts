import {
  CLEAR_ERROR_GET_ALL_REPORTS_TYPE_POST,
  CLEAR_ERROR_GET_REPORT_TYPE_POST,
  CLEAR_UPDATE_REPORT_TYPE_POST,
  GET_ALL_REPORTS_TYPE_POST_ERROR,
  GET_ALL_REPORTS_TYPE_POST_REQUEST,
  GET_ALL_REPORTS_TYPE_POST_SUCCES,
  GET_REPORT_TYPE_POST_ERROR,
  GET_REPORT_TYPE_POST_REQUEST,
  GET_REPORT_TYPE_POST_SUCCESS,
  RESET_CREATE_REPORT_TYPE_POST,
  RESET_UPDATE_REPORT_TYPE_POST,
  UPDATE_REPORT_TYPE_POST_ERROR,
  UPDATE_REPORT_TYPE_POST_REQUEST,
  UPDATE_REPORT_TYPE_POST_SUCCESS,
  CLEAR_ERROR_REPORT_TYPE_POST,
  CREATE_REPORT_TYPE_POST_FAIL,
  CREATE_REPORT_TYPE_POST_REQUEST,
  CREATE_REPORT_TYPE_POST_SUCCESS,
} from "./../../constants/redux.contants";

export const createReportTypePostReducer = (state: any, action: any) => {
  switch (action.type) {
    case CREATE_REPORT_TYPE_POST_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case CREATE_REPORT_TYPE_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        error: null,
        newReportTypePost: action.payload,
      };
    case CREATE_REPORT_TYPE_POST_FAIL:
      return {
        loading: false,
        newReportTypePost: null,
        success: false,
        error: action.payload,
      };
    case CLEAR_ERROR_REPORT_TYPE_POST:
      return {
        ...state,
        error: null,
      };
    case RESET_CREATE_REPORT_TYPE_POST:
      return {
        ...state,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const getAllReportTypePostReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_ALL_REPORTS_TYPE_POST_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case GET_ALL_REPORTS_TYPE_POST_SUCCES:
      return {
        loading: false,
        error: null,
        success: true,
        reportTypesPosts: action.payload.reportPostCategories,
      };
    case GET_ALL_REPORTS_TYPE_POST_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_ERROR_GET_ALL_REPORTS_TYPE_POST:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const getReportTypePostReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_REPORT_TYPE_POST_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case GET_REPORT_TYPE_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        reportTypePost: action.payload,
      };
    case GET_REPORT_TYPE_POST_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_ERROR_GET_REPORT_TYPE_POST:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const updateReportTypePostReducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_REPORT_TYPE_POST_REQUEST:
      return {
        loading: true,
        error: null,
        succcess: false,
      };
    case UPDATE_REPORT_TYPE_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        updateReportTypePost: action.payload,
      };
    case UPDATE_REPORT_TYPE_POST_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_UPDATE_REPORT_TYPE_POST:
      return {
        ...state,
        error: null,
      };
    case RESET_UPDATE_REPORT_TYPE_POST:
      return {
        ...state,
        success: false,
      };
    default:
      return { ...state };
  }
};
