import {
  CLEAR_GET_STREAMS_ERROR,
  CLEAR_GET_STREAM_ERROR,
  GET_STREAMS_ERROR,
  GET_STREAMS_REQUEST,
  GET_STREAMS_SUCCESS,
  GET_STREAM_ERROR,
  GET_STREAM_REQUEST,
  GET_STREAM_SUCCESS,
} from "@/constants/redux.contants";

const getStreamsReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_STREAMS_REQUEST:
      return {
        loading: true,
        success: false,
        streams: null,
        error: null,
      };
    case GET_STREAMS_SUCCESS:
      return {
        loadidng: false,
        success: true,
        streams: action.payload,
        error: null,
      };
    case GET_STREAMS_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
        streams: null,
      };
    case CLEAR_GET_STREAMS_ERROR:
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

export default getStreamsReducer;

export const getStreamReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_STREAM_REQUEST:
      return {
        loading: true,
        success: false,
        stream: null,
        error: null,
      };
    case GET_STREAM_SUCCESS:
      return {
        loadidng: false,
        success: true,
        stream: action.payload,
        error: null,
      };
    case GET_STREAM_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
        stream: null,
      };
    case CLEAR_GET_STREAM_ERROR:
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
