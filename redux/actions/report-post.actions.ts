import axiosAdminClent from "@/apis";
import {
  GET_ALL_REPORT_POST_ERROR,
  GET_ALL_REPORT_POST_REQUEST,
  GET_ALL_REPORT_POST_SUCCESS,
  GET_REPORT_POST_ERROR,
  GET_REPORT_POST_REQUEST,
  GET_REPORT_POST_SUCCESS,
} from "@/constants/redux.contants";
import { Dispatch } from "redux";

export const getReportsPost = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_REPORT_POST_REQUEST });
    const { data } = await axiosAdminClent.get("/report-post");
    dispatch({ type: GET_ALL_REPORT_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_REPORT_POST_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "getSingleReportType error",
    });
  }
};

export const getReportPost = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_REPORT_POST_REQUEST });
    const { data } = await axiosAdminClent.get("/report-post/get-one/" + id);
    dispatch({ type: GET_REPORT_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_REPORT_POST_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "getSingleReportType error",
    });
  }
};
