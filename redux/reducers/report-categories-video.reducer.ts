import {
  CLEAR_ERROR_GET_ALL_REPORTS_TYPE_VIDEO,
  CLEAR_ERROR_GET_REPORT_TYPE_VIDEO,
  CLEAR_ERROR_REPORT_TYPE_VIDEO,
  CLEAR_UPDATE_REPORT_TYPE_VIDEO,
  CREATE_REPORT_TYPE_VIDEO_FAIL,
  CREATE_REPORT_TYPE_VIDEO_REQUEST,
  CREATE_REPORT_TYPE_VIDEO_SUCCESS,
  GET_ALL_REPORTS_TYPE_VIDEO_ERROR,
  GET_ALL_REPORTS_TYPE_VIDEO_REQUEST,
  GET_ALL_REPORTS_TYPE_VIDEO_SUCCES,
  GET_REPORT_TYPE_VIDEO_ERROR,
  GET_REPORT_TYPE_VIDEO_REQUEST,
  GET_REPORT_TYPE_VIDEO_SUCCESS,
  RESET_CREATE_REPORT_TYPE_VIDEO,
  RESET_UPDATE_REPORT_TYPE_VIDEO,
  UPDATE_REPORT_TYPE_VIDEO_ERROR,
  UPDATE_REPORT_TYPE_VIDEO_REQUEST,
  UPDATE_REPORT_TYPE_VIDEO_SUCCESS,
} from "@/constants/redux.contants";

export const createReportTypeVideoReducer = (state: any, action: any) => {
  switch (action.type) {
    case CREATE_REPORT_TYPE_VIDEO_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case CREATE_REPORT_TYPE_VIDEO_SUCCESS:
      return {
        loading: false,
        success: true,
        error: null,
        newReportTypeVideo: action.payload,
      };
    case CREATE_REPORT_TYPE_VIDEO_FAIL:
      return {
        loading: false,
        newReportTypeVideo: null,
        success: false,
        error: action.payload,
      };
    case CLEAR_ERROR_REPORT_TYPE_VIDEO:
      return {
        ...state,
        error: null,
      };
    case RESET_CREATE_REPORT_TYPE_VIDEO:
      return {
        ...state,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const getAllReportTypeVideoReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_ALL_REPORTS_TYPE_VIDEO_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case GET_ALL_REPORTS_TYPE_VIDEO_SUCCES:
      return {
        loading: false,
        error: null,
        success: true,
        reportTypesVideos: action.payload,
      };
    case GET_ALL_REPORTS_TYPE_VIDEO_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_ERROR_GET_ALL_REPORTS_TYPE_VIDEO:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const getReportTypeVideoReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_REPORT_TYPE_VIDEO_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case GET_REPORT_TYPE_VIDEO_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        reportTypeVideo: action.payload,
      };
    case GET_REPORT_TYPE_VIDEO_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_ERROR_GET_REPORT_TYPE_VIDEO:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const updateReportTypeVideoReducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_REPORT_TYPE_VIDEO_REQUEST:
      return {
        loading: true,
        error: null,
        succcess: false,
      };
    case UPDATE_REPORT_TYPE_VIDEO_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        updateReportTypeVideo: action.payload,
      };
    case UPDATE_REPORT_TYPE_VIDEO_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_UPDATE_REPORT_TYPE_VIDEO:
      return {
        ...state,
        error: null,
      };
    case RESET_UPDATE_REPORT_TYPE_VIDEO:
      return {
        ...state,
        success: false,
      };
    default:
      return { ...state };
  }
};
