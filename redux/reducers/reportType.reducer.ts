import {
  CLEAR_ERROR_GET_ALL_REPORTS_TYPE,
  CLEAR_ERROR_GET_REPORT_TYPE,
  CLEAR_UPDATE_REPORT_TYPE,
  GET_ALL_REPORTS_TYPE_ERROR,
  GET_ALL_REPORTS_TYPE_REQUEST,
  GET_ALL_REPORTS_TYPE_SUCCES,
  GET_REPORT_TYPE_ERROR,
  GET_REPORT_TYPE_REQUEST,
  GET_REPORT_TYPE_SUCCESS,
  RESET_CREATE_REPORT_TYPE,
  RESET_UPDATE_REPORT_TYPE,
  UPDATE_REPORT_TYPE_ERROR,
  UPDATE_REPORT_TYPE_REQUEST,
  UPDATE_REPORT_TYPE_SUCCESS,
} from "./../../constants/redux.contants";
import {
  CLEAR_ERROR_REPORT_TYPE,
  CREATE_REPORT_TYPE_FAIL,
  CREATE_REPORT_TYPE_REQUEST,
  CREATE_REPORT_TYPE_SUCCESS,
} from "../../constants/redux.contants";

export const createReportTypeReducer = (state: any, action: any) => {
  switch (action.type) {
    case CREATE_REPORT_TYPE_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case CREATE_REPORT_TYPE_SUCCESS:
      return {
        loading: false,
        success: true,
        error: null,
        newReportType: action.payload,
      };
    case CREATE_REPORT_TYPE_FAIL:
      return {
        loading: false,
        newReportType: null,
        success: false,
        error: action.payload,
      };
    case CLEAR_ERROR_REPORT_TYPE:
      return {
        ...state,
        error: null,
      };
    case RESET_CREATE_REPORT_TYPE:
      return {
        ...state,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const getAllReportTypeReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_ALL_REPORTS_TYPE_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case GET_ALL_REPORTS_TYPE_SUCCES:
      return {
        loading: false,
        error: null,
        success: true,
        reportTypes: action.payload.reportTypes,
        reportTypesCount: action.payload.reportTypesCount,
      };
    case GET_ALL_REPORTS_TYPE_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_ERROR_GET_ALL_REPORTS_TYPE:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const getReportTypeReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_REPORT_TYPE_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case GET_REPORT_TYPE_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        reportType: action.payload,
      };
    case GET_REPORT_TYPE_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_ERROR_GET_REPORT_TYPE:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const updateReportTypeReducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_REPORT_TYPE_REQUEST:
      return {
        loading: true,
        error: null,
        succcess: false,
      };
    case UPDATE_REPORT_TYPE_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        updateReportType: action.payload,
      };
    case UPDATE_REPORT_TYPE_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_UPDATE_REPORT_TYPE:
      return {
        ...state,
        error: null,
      };
    case RESET_UPDATE_REPORT_TYPE:
      return {
        ...state,
        success: false,
      };
    default:
      return { ...state };
  }
};
