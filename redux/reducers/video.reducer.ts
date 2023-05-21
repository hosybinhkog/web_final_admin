import {
  CLEAR_GET_VIDEOS_ERROR,
  CLEAR_GET_VIDEO_ERROR,
  GET_VIDEOS_ERROR,
  GET_VIDEOS_REQUEST,
  GET_VIDEOS_SUCCESS,
  GET_VIDEO_ERROR,
  GET_VIDEO_REQUEST,
  GET_VIDEO_SUCCESS,
} from "@/constants/redux.contants";

const getVideosReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_VIDEOS_REQUEST:
      return {
        loading: true,
        success: false,
        videos: null,
        error: null,
      };
    case GET_VIDEOS_SUCCESS:
      return {
        loadidng: false,
        success: true,
        videos: action.payload,
        error: null,
      };
    case GET_VIDEOS_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
        videos: null,
      };
    case CLEAR_GET_VIDEOS_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default getVideosReducer;

export const getVideoReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_VIDEO_REQUEST:
      return {
        loading: true,
        success: false,
        video: null,
        error: null,
      };
    case GET_VIDEO_SUCCESS:
      return {
        loadidng: false,
        success: true,
        video: action.payload,
        error: null,
      };
    case GET_VIDEO_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
        video: null,
      };
    case CLEAR_GET_VIDEO_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};
