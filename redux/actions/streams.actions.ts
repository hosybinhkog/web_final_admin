import axiosAdminClent, { createLogHistory } from "@/apis";
import {
  GET_STREAMS_ERROR,
  GET_STREAMS_REQUEST,
  GET_STREAMS_SUCCESS,
  GET_STREAM_ERROR,
  GET_STREAM_REQUEST,
  GET_STREAM_SUCCESS,
} from "@/constants/redux.contants";
import { Dispatch } from "redux";

export const getStreams = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_STREAMS_REQUEST });

    const { data } = await axiosAdminClent.get("/stream/all-stream");

    dispatch({ type: GET_STREAMS_SUCCESS, payload: data.data });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispatch({
      type: GET_STREAMS_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "get posts errror",
    });
  }
};

export const getStream = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_STREAM_REQUEST });

    const { data } = await axiosAdminClent.get("/stream/findid/" + id);

    dispatch({ type: GET_STREAM_SUCCESS, payload: data.data });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispatch({
      type: GET_STREAM_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "get stream errror",
    });
  }
};
