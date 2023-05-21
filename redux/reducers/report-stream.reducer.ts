import {
  CLEAR_GET_ALL_REPORT_STREAM_ERROR,
  CLEAR_GET_REPORT_STREAM_ERROR,
  GET_ALL_REPORT_STREAM_ERROR,
  GET_ALL_REPORT_STREAM_REQUEST,
  GET_ALL_REPORT_STREAM_SUCCESS,
  GET_REPORT_STREAM_ERROR,
  GET_REPORT_STREAM_REQUEST,
  GET_REPORT_STREAM_SUCCESS,
} from "@/constants/redux.contants";

export const getAllReportStreamducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_ALL_REPORT_STREAM_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case GET_ALL_REPORT_STREAM_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        reportStreams: action.payload,
      };
    case GET_ALL_REPORT_STREAM_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_GET_ALL_REPORT_STREAM_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const getReportStreamReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_REPORT_STREAM_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case GET_REPORT_STREAM_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        reportStream: action.payload,
      };
    case GET_REPORT_STREAM_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_GET_REPORT_STREAM_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};
