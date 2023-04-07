import {
  CLEAR_ALL_STREAMMER_FAILURE,
  GET_ALL_STREAMMER_FAILURE,
  GET_ALL_STREAMMER_REQUEST,
  GET_ALL_STREAMMER_SUCCESS,
} from "@/constants/redux.contants";

export const getAllStreammerReducers = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_ALL_STREAMMER_REQUEST:
      return {
        loading: true,
        streammers: null,
        error: null,
        success: false,
      }
    case GET_ALL_STREAMMER_SUCCESS:
      return {
        loading: false,
        success: true,
        streammers: action.payload,
        error: null,
      }
    case GET_ALL_STREAMMER_FAILURE:
      return {
        loading: false,
        error: action.payload,
        success: false
      }
    case CLEAR_ALL_STREAMMER_FAILURE:
      return {
        ...state,
        error: null
      }
    default:
      return {...state}
  }
}