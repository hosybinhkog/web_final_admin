import { Dispatch } from "redux";
import axiosAdminClent, { createLogHistory } from "../../apis";
import {
  CREATE_REPORT_TYPE_VIDEO_FAIL,
  CREATE_REPORT_TYPE_VIDEO_REQUEST,
  CREATE_REPORT_TYPE_VIDEO_SUCCESS,
  GET_ALL_REPORTS_TYPE_VIDEO_ERROR,
  GET_ALL_REPORTS_TYPE_VIDEO_REQUEST,
  GET_ALL_REPORTS_TYPE_VIDEO_SUCCES,
  GET_REPORT_TYPE_VIDEO_ERROR,
  GET_REPORT_TYPE_VIDEO_REQUEST,
  GET_REPORT_TYPE_VIDEO_SUCCESS,
  UPDATE_REPORT_TYPE_VIDEO_ERROR,
  UPDATE_REPORT_TYPE_VIDEO_REQUEST,
  UPDATE_REPORT_TYPE_VIDEO_SUCCESS,
} from "../../constants/redux.contants";

export const createNewReportTypeVideoStream = (dataInput: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: CREATE_REPORT_TYPE_VIDEO_REQUEST });

    const { data } = await axiosAdminClent.post("/categories-report-video-stream", dataInput);

    dispatch({
      type: CREATE_REPORT_TYPE_VIDEO_SUCCESS,
      payload: data.newCategoriesReportStreamVideo,
    });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispatch({
      type: CREATE_REPORT_TYPE_VIDEO_FAIL,
      // @ts-ignore
      payload: error?.response?.data?.message || "create new report errror",
    });
  }
};

export const getAllReportTypesVideosStream = () => async (dispath: Dispatch) => {
  try {
    dispath({ type: GET_ALL_REPORTS_TYPE_VIDEO_REQUEST });

    const { data } = await axiosAdminClent.get("/categories-report-video-stream");

    dispath({
      type: GET_ALL_REPORTS_TYPE_VIDEO_SUCCES,
      payload: data.categoriesReportStreams,
    });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispath({
      type: GET_ALL_REPORTS_TYPE_VIDEO_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "get all report error",
    });
  }
};

export const updateAllReportTypeVideoStream =
  (params: string, dataForm: any) => async (dispath: Dispatch) => {
    try {
      dispath({ type: UPDATE_REPORT_TYPE_VIDEO_REQUEST });

      const { data } = await axiosAdminClent.put(
        `/categories-report-video-stream/${params}`,
        dataForm
      );

      dispath({
        type: UPDATE_REPORT_TYPE_VIDEO_SUCCESS,
        payload: data.updateCategoriesReportStreamVideo,
      });
    } catch (error) {
      await createLogHistory(
        // @ts-ignore
        `${error?.response?.data?.message}`
      );
      dispath({
        type: UPDATE_REPORT_TYPE_VIDEO_ERROR,
        // @ts-ignore
        payload: error?.response?.data?.message || "updateAllReportType error",
      });
    }
  };

export const getSingleReportTypeVideo = (id: string) => async (dispath: Dispatch) => {
  try {
    dispath({ type: GET_REPORT_TYPE_VIDEO_REQUEST });

    const { data } = await axiosAdminClent.get(`/categories-report-video-stream/${id}`);

    dispath({
      type: GET_REPORT_TYPE_VIDEO_SUCCESS,
      payload: data.categoriesReportStream,
    });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispath({
      type: GET_REPORT_TYPE_VIDEO_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "getSingleReportType error",
    });
  }
};
