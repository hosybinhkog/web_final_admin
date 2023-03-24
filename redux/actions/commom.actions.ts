import {
  GET_ALL_DATA_ERROR,
  GET_ALL_DATA_REQUEST,
  GET_ALL_DATA_SUCCES,
} from "./../../constants/redux.contants";
import { Dispatch } from "redux";
import axiosAdminClent from "../../apis";

/**
 * @author {HoBinh}
 * @returns {Promise<void>}
 */
export const getDataIndex = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_DATA_REQUEST });

    const { data } = await axiosAdminClent.get("/admin/index");

    dispatch({ type: GET_ALL_DATA_SUCCES, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_DATA_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message,
    });
  }
};
