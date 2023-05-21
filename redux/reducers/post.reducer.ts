import {
  CLEAR_GET_POST_ERROR,
  GET_POST_ERROR,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
} from "@/constants/redux.contants";

export const PostReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_POST_REQUEST:
      return {
        loading: true,
        success: false,
        post: null,
        error: null,
      };
    case GET_POST_SUCCESS:
      return {
        loadidng: false,
        success: true,
        post: action.payload,
        error: null,
      };
    case GET_POST_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
        post: null,
      };
    case CLEAR_GET_POST_ERROR:
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
