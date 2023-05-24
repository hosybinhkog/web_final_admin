import axiosAdminClent, { createLogHistory } from "@/apis";
import {
  FETCH_REPORT_POST_ERROR,
  FETCH_REPORT_POST_REQUEST,
  FETCH_REPORT_POST_SUCCESS,
} from "@/constants/redux.contants";
import { Dispatch } from "redux";

export const getReportDetailsPost = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: FETCH_REPORT_POST_REQUEST });
    const { data } = await axiosAdminClent.get("/report-post/" + id);
    dispatch({ type: FETCH_REPORT_POST_SUCCESS, payload: data });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispatch({
      type: FETCH_REPORT_POST_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message,
    });
  }
};
