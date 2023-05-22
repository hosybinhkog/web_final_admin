import { Dispatch } from "redux";
import axiosAdminClent, { createLogHistory } from "../../apis";
import {
  CREATE_REPORT_TYPE_POST_FAIL,
  CREATE_REPORT_TYPE_POST_REQUEST,
  CREATE_REPORT_TYPE_POST_SUCCESS,
  GET_ALL_REPORTS_TYPE_POST_ERROR,
  GET_ALL_REPORTS_TYPE_POST_REQUEST,
  GET_ALL_REPORTS_TYPE_POST_SUCCES,
  GET_REPORT_TYPE_POST_ERROR,
  GET_REPORT_TYPE_POST_REQUEST,
  GET_REPORT_TYPE_POST_SUCCESS,
  UPDATE_REPORT_TYPE_POST_ERROR,
  UPDATE_REPORT_TYPE_POST_REQUEST,
  UPDATE_REPORT_TYPE_POST_SUCCESS,
} from "../../constants/redux.contants";

export const createNewReportTypePost = (dataInput: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: CREATE_REPORT_TYPE_POST_REQUEST });

    const { data } = await axiosAdminClent.post("/report-post-category", dataInput);

    dispatch({
      type: CREATE_REPORT_TYPE_POST_SUCCESS,
      payload: data.reportPostCategory,
    });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispatch({
      type: CREATE_REPORT_TYPE_POST_FAIL,
      // @ts-ignore
      payload: error?.response?.data?.message || "create new report errror",
    });
  }
};

export const getAllReportTypesPost = () => async (dispath: Dispatch) => {
  try {
    dispath({ type: GET_ALL_REPORTS_TYPE_POST_REQUEST });

    const { data } = await axiosAdminClent.get("/report-post-category");

    dispath({
      type: GET_ALL_REPORTS_TYPE_POST_SUCCES,
      payload: data,
    });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispath({
      type: GET_ALL_REPORTS_TYPE_POST_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "get all report error",
    });
  }
};

export const updateAllReportTypePost =
  (params: string, dataForm: any) => async (dispath: Dispatch) => {
    try {
      dispath({ type: UPDATE_REPORT_TYPE_POST_REQUEST });

      const { data } = await axiosAdminClent.put(`/report-post-category/${params}`, dataForm);

      dispath({
        type: UPDATE_REPORT_TYPE_POST_SUCCESS,
        payload: data.reportPostCategory,
      });
    } catch (error) {
      await createLogHistory(
        // @ts-ignore
        `${error?.response?.data?.message}`
      );
      dispath({
        type: UPDATE_REPORT_TYPE_POST_ERROR,
        // @ts-ignore
        payload: error?.response?.data?.message || "updateAllReportType error",
      });
    }
  };

export const getSingleReportTypePost = (id: string) => async (dispath: Dispatch) => {
  try {
    dispath({ type: GET_REPORT_TYPE_POST_REQUEST });

    const { data } = await axiosAdminClent.get(`/report-post-category/${id}`);

    dispath({
      type: GET_REPORT_TYPE_POST_SUCCESS,
      payload: data.reportPost,
    });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispath({
      type: GET_REPORT_TYPE_POST_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "getSingleReportType error",
    });
  }
};
