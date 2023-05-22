import { Dispatch } from "redux";
import axiosAdminClent, { createLogHistory } from "../../apis";
import {
  CREATE_REPORT_TYPE_FAIL,
  CREATE_REPORT_TYPE_REQUEST,
  CREATE_REPORT_TYPE_SUCCESS,
  GET_ALL_REPORTS_TYPE_ERROR,
  GET_ALL_REPORTS_TYPE_REQUEST,
  GET_ALL_REPORTS_TYPE_SUCCES,
  GET_REPORT_TYPE_ERROR,
  GET_REPORT_TYPE_REQUEST,
  GET_REPORT_TYPE_SUCCESS,
  UPDATE_REPORT_TYPE_ERROR,
  UPDATE_REPORT_TYPE_REQUEST,
  UPDATE_REPORT_TYPE_SUCCESS,
} from "../../constants/redux.contants";

type createNewReportTypeInputType = {
  title: string;
  description: string;
  range: string;
};

export const createNewReportType =
  ({ title, description, range }: createNewReportTypeInputType) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: CREATE_REPORT_TYPE_REQUEST });

      const { data } = await axiosAdminClent.post("/report-type", {
        title,
        description,
        range,
      });

      dispatch({
        type: CREATE_REPORT_TYPE_SUCCESS,
        payload: data.newReportType,
      });
    } catch (error) {
      await createLogHistory(
        // @ts-ignore
        `${error?.response?.data?.message}`
      );
      dispatch({
        type: CREATE_REPORT_TYPE_FAIL,
        // @ts-ignore
        payload: error?.response?.data?.message || "create new report errror",
      });
    }
  };

export const getAllReportTypes = () => async (dispath: Dispatch) => {
  try {
    dispath({ type: GET_ALL_REPORTS_TYPE_REQUEST });

    const { data } = await axiosAdminClent.get("/report-type");

    dispath({
      type: GET_ALL_REPORTS_TYPE_SUCCES,
      payload: data,
    });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispath({
      type: GET_ALL_REPORTS_TYPE_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "get all report error",
    });
  }
};

export const updateAllReportType = (params: string, dataForm: any) => async (dispath: Dispatch) => {
  try {
    dispath({ type: UPDATE_REPORT_TYPE_REQUEST });

    const { data } = await axiosAdminClent.put(`/report-type/${params}`, dataForm);

    dispath({
      type: UPDATE_REPORT_TYPE_SUCCESS,
      payload: data.updateReportType,
    });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispath({
      type: UPDATE_REPORT_TYPE_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "updateAllReportType error",
    });
  }
};

export const getSingleReportType = (id: string) => async (dispath: Dispatch) => {
  try {
    dispath({ type: GET_REPORT_TYPE_REQUEST });

    const { data } = await axiosAdminClent.get(`/report-type/${id}`);

    dispath({
      type: GET_REPORT_TYPE_SUCCESS,
      payload: data.reportType,
    });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispath({
      type: GET_REPORT_TYPE_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "getSingleReportType error",
    });
  }
};
