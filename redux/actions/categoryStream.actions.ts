import { Dispatch } from "redux";
import axiosAdminClent from "../../apis";
import {
  CREATE_CATEGORY_STREAM_ERROR,
  CREATE_CATEGORY_STREAM_REQEST,
  CREATE_CATEGORY_STREAM_SUCCESS,
  GET_ALL_CATEGORY_STREAN_FAILURE,
  GET_ALL_CATEGORY_STREAN_REQUEST,
  GET_ALL_CATEGORY_STREAN_SUCCESS,
  GET_CATEGORY_STREAM_FAILURE,
  GET_CATEGORY_STREAM_REQUUEST,
  GET_CATEGORY_STREAM_SUCCESS,
  UPDATE_CATEGORY_STREAM_FAILURE,
  UPDATE_CATEGORY_STREAM_REQEST,
  UPDATE_CATEGORY_STREAM_SUCCESS,
} from "../../constants/redux.contants";

/**
 * @author {HoBinh}
 * @returns {Promise<void>}
 */
export const getAllCategoryStream = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_CATEGORY_STREAN_REQUEST });

    const { data } = await axiosAdminClent.get("/category-stream");

    dispatch({ type: GET_ALL_CATEGORY_STREAN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_CATEGORY_STREAN_FAILURE,
      // @ts-ignore
      payload: error.response.data.message,
    });
  }
};

/**
 * @author {HoBinh}
 * @param id {string}
 * @returns {Promise<void>}
 */
export const getCategoryStreamById = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_CATEGORY_STREAM_REQUUEST });

    const { data } = await axiosAdminClent.get(`/category-stream/${id}`);

    dispatch({ type: GET_CATEGORY_STREAM_SUCCESS, payload: data.category });
  } catch (error) {
    dispatch({
      type: GET_CATEGORY_STREAM_FAILURE,
      // @ts-ignore
      payload: error.response.data.message,
    });
  }
};

/**
 *
 * @param id
 * @param dataInput
 * @author {HoBinh}
 * @returns {Promise<void>}
 */
export const updateCategoryStream = (id: string, dataInput: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: UPDATE_CATEGORY_STREAM_REQEST });

    const { data } = await axiosAdminClent.put(`/category-stream/${id}`, dataInput);

    dispatch({
      type: UPDATE_CATEGORY_STREAM_SUCCESS,
      payload: data.updateCategory,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CATEGORY_STREAM_FAILURE,
      // @ts-ignore
      payload: error.response.data.message,
    });
  }
};

/**
 * @author HoBinh
 * @param dataInput
 * @returns {Promise<void>}
 */
export const createCategoryStream = (dataInput: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: CREATE_CATEGORY_STREAM_REQEST });

    const { data } = await axiosAdminClent.post("/category-stream", dataInput);

    dispatch({
      type: CREATE_CATEGORY_STREAM_SUCCESS,
      payload: data.newCategoryStream,
    });
  } catch (error) {
    dispatch({
      type: CREATE_CATEGORY_STREAM_ERROR,
      // @ts-ignore
      payload: error.response.data.message,
    });
  }
};
