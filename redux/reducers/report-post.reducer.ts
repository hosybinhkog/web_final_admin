import {
  CLEAR_GET_ALL_REPORT_POST_ERROR,
  CLEAR_GET_REPORT_POST_ERROR,
  GET_ALL_REPORT_POST_ERROR,
  GET_ALL_REPORT_POST_REQUEST,
  GET_ALL_REPORT_POST_SUCCESS,
  GET_REPORT_POST_ERROR,
  GET_REPORT_POST_REQUEST,
  GET_REPORT_POST_SUCCESS,
} from "@/constants/redux.contants";

export const getAllReportPostReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_ALL_REPORT_POST_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case GET_ALL_REPORT_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        reportPosts: action.payload.data.reportPosts,
        reportPostsCount: action.payload.data.reportPostsCount,
      };
    case GET_ALL_REPORT_POST_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_GET_ALL_REPORT_POST_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const getReportPostReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_REPORT_POST_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
      };
    case GET_REPORT_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        reportPost: action.payload.reportPost,
      };
    case GET_REPORT_POST_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case CLEAR_GET_REPORT_POST_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};
