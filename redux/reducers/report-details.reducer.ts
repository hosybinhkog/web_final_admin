import {
  CLEAR_FETCH_REPORT_POST_ERROR,
  CLEAR_FETCH_REPORT_VIDEO_ERROR,
  FETCH_REPORT_POST_ERROR,
  FETCH_REPORT_POST_REQUEST,
  FETCH_REPORT_POST_SUCCESS,
  FETCH_REPORT_VIDEO_ERROR,
  FETCH_REPORT_VIDEO_REQUEST,
  FETCH_REPORT_VIDEO_SUCCESS,
} from "@/constants/redux.contants";

export const getAllReportPostDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case FETCH_REPORT_POST_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case FETCH_REPORT_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        count: action.payload.data.count,
        reportPostById: action.payload.data.reportPostById,
      };
    case FETCH_REPORT_POST_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_FETCH_REPORT_POST_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const getAllReportVideoDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case FETCH_REPORT_VIDEO_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case FETCH_REPORT_VIDEO_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        count: action.payload.data.count,
        reportVideoById: action.payload.data.reportPostById,
      };
    case FETCH_REPORT_VIDEO_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_FETCH_REPORT_VIDEO_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};
