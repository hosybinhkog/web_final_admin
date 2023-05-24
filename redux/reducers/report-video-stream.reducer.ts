import {
  CLEAR_ERROR_GET_ALL_REPORTS_VIDEO,
  CLEAR_ERROR_GET_REPORT_VIDEO,
  GET_ALL_REPORTS_VIDEO_ERROR,
  GET_ALL_REPORTS_VIDEO_REQUEST,
  GET_ALL_REPORTS_VIDEO_SUCCES,
  GET_REPORT_VIDEO_ERROR,
  GET_REPORT_VIDEO_REQUEST,
  GET_REPORT_VIDEO_SUCCESS,
} from "@/constants/redux.contants";

export const getAllReportVideoReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_ALL_REPORTS_VIDEO_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case GET_ALL_REPORTS_VIDEO_SUCCES:
      return {
        loading: false,
        error: null,
        success: true,
        reportVideos: action.payload,
      };
    case GET_ALL_REPORTS_VIDEO_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_ERROR_GET_ALL_REPORTS_VIDEO:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const getReportVideoReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_REPORT_VIDEO_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case GET_REPORT_VIDEO_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        reportVideo: action.payload,
      };
    case GET_REPORT_VIDEO_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_ERROR_GET_REPORT_VIDEO:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};
