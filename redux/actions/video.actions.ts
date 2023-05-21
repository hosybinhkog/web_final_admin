import axiosAdminClent from "@/apis";
import {
  GET_VIDEOS_ERROR,
  GET_VIDEOS_REQUEST,
  GET_VIDEOS_SUCCESS,
  GET_VIDEO_ERROR,
  GET_VIDEO_REQUEST,
  GET_VIDEO_SUCCESS,
} from "@/constants/redux.contants";
import { Dispatch } from "redux";

export const getVideos = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_VIDEOS_REQUEST });

    const { data } = await axiosAdminClent.get("/video");

    dispatch({ type: GET_VIDEOS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_VIDEOS_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "get posts errror",
    });
  }
};

export const getVideo = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_VIDEO_REQUEST });

    const { data } = await axiosAdminClent.get("/video/" + id);

    dispatch({ type: GET_VIDEO_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: GET_VIDEO_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "get stream errror",
    });
  }
};
