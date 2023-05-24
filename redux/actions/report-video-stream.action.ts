import axiosAdminClent, { createLogHistory } from "@/apis";
import {
  GET_ALL_REPORTS_VIDEO_ERROR,
  GET_ALL_REPORTS_VIDEO_REQUEST,
  GET_ALL_REPORTS_VIDEO_SUCCES,
  GET_REPORT_VIDEO_ERROR,
  GET_REPORT_VIDEO_REQUEST,
  GET_REPORT_VIDEO_SUCCESS,
} from "@/constants/redux.contants";
import { Dispatch } from "redux";

export const getAllReportVideosStream = () => async (dispath: Dispatch) => {
  try {
    dispath({ type: GET_ALL_REPORTS_VIDEO_REQUEST });

    const { data } = await axiosAdminClent.get("/report-video-stream");

    dispath({
      type: GET_ALL_REPORTS_VIDEO_SUCCES,
      payload: data.categoriesReportStreams,
    });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispath({
      type: GET_ALL_REPORTS_VIDEO_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "get all report error",
    });
  }
};

export const getSingleReportVideo = (id: string) => async (dispath: Dispatch) => {
  try {
    dispath({ type: GET_REPORT_VIDEO_REQUEST });

    const { data } = await axiosAdminClent.get(`/report-video-stream/${id}`);

    dispath({
      type: GET_REPORT_VIDEO_SUCCESS,
      payload: data.categoriesReportStream,
    });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispath({
      type: GET_REPORT_VIDEO_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "getSingleReportType error",
    });
  }
};
