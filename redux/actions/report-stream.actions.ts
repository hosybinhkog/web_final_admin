import axiosAdminClent, { createLogHistory } from "@/apis";
import {
  GET_ALL_REPORT_STREAM_ERROR,
  GET_ALL_REPORT_STREAM_REQUEST,
  GET_ALL_REPORT_STREAM_SUCCESS,
  GET_REPORT_STREAM_ERROR,
  GET_REPORT_STREAM_REQUEST,
  GET_REPORT_STREAM_SUCCESS,
} from "@/constants/redux.contants";
import { Dispatch } from "redux";

export const getReportsStream = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_REPORT_STREAM_REQUEST });
    const { data } = await axiosAdminClent.get("/report-stream");
    dispatch({ type: GET_ALL_REPORT_STREAM_SUCCESS, payload: data });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispatch({
      type: GET_ALL_REPORT_STREAM_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "getSingleReportType error",
    });
  }
};

export const getReportStream = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_REPORT_STREAM_REQUEST });
    const { data } = await axiosAdminClent.get("/report-stream/" + id);
    dispatch({ type: GET_REPORT_STREAM_SUCCESS, payload: data });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispatch({
      type: GET_REPORT_STREAM_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "getSingleReportType error",
    });
  }
};
