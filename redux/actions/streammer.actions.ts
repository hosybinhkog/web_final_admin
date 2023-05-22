import axiosAdminClent, { createLogHistory } from "@/apis";
import {
  CLEAR_ALL_STREAMMER_FAILURE,
  GET_ALL_STREAMMER_FAILURE,
  GET_ALL_STREAMMER_REQUEST,
  GET_ALL_STREAMMER_SUCCESS,
} from "@/constants/redux.contants";
import { Dispatch } from "redux";

export const getAllStreammer = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_STREAMMER_REQUEST });

    const { data } = await axiosAdminClent.get("/streammer");

    dispatch({ type: GET_ALL_STREAMMER_SUCCESS, payload: data.streammers });
  } catch (error) {
    await createLogHistory(
      // @ts-ignore
      `${error?.response?.data?.message}`
    );
    dispatch({
      type: GET_ALL_STREAMMER_FAILURE,
      // @ts-ignore
      payload: error?.response?.data?.message || "Lỗi server",
    });
  }
};

export const clearErrorGetAllStreammer = () => (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_ALL_STREAMMER_FAILURE });
};
