import axiosAdminClent from "@/apis";
import {
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
    dispatch({
      type: GET_ALL_STREAMMER_FAILURE,
      // @ts-ignore
      payload: error?.response?.data?.message || "",
    });
  }
};
