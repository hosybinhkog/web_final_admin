import axiosAdminClent from "@/apis";
import {
  CLEAR_DELETE_POST_ERROR,
  CLEAR_GET_ALL_POST_FAIL,
  GET_ALL_POST_FAIL,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_POST_ERROR,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
} from "@/constants/redux.contants";
import { Dispatch } from "redux";
import {
  CLEAR_TOGGLE_POST_PUBLIC_ERROR,
  DELETE_POST_ERROR,
  DELETE_POST_REQUEST,
  TOGGLE_POST_PUBLIC_ERROR,
  TOGGLE_POST_PUBLIC_REQUEST,
  TOGGLE_POST_PUBLIC_SUCCESS,
} from "./../../constants/redux.contants";

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_POST_REQUEST });

    const { data } = await axiosAdminClent.get("/post");

    dispatch({ type: GET_ALL_POST_SUCCESS, payload: data.posts });
  } catch (error) {
    dispatch({
      type: GET_ALL_POST_FAIL,
      // @ts-ignore
      payload: error?.response?.data?.message || "get posts errror",
    });
  }
};

export const getPost = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_POST_REQUEST });

    const { data } = await axiosAdminClent.get("/post/" + id);

    dispatch({ type: GET_POST_SUCCESS, payload: data.post });
  } catch (error) {
    dispatch({
      type: GET_POST_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "get posts errror",
    });
  }
};

export const clearErrorGetPosts = () => (dispath: Dispatch) => {
  dispath({ type: CLEAR_GET_ALL_POST_FAIL });
};

export const togglePublicPost = () => async (dispath: Dispatch) => {
  try {
    dispath({ type: TOGGLE_POST_PUBLIC_REQUEST });
    const { data } = await axiosAdminClent.get("/toggle-publish/post/:id");
    dispath({ type: TOGGLE_POST_PUBLIC_SUCCESS, payload: data.success });
  } catch (error) {
    // @ts-ignore
    dispath({ type: TOGGLE_POST_PUBLIC_ERROR, payload: error?.response?.data?.message });
  }
};

export const clearTogglePublicPost = () => (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_TOGGLE_POST_PUBLIC_ERROR });
};

export const deletePostById = (id: string | number) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: DELETE_POST_REQUEST });
    const { data } = await axiosAdminClent.delete(`/${id}`);
    dispatch({ type: DELETE_POST_ERROR, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_POST_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message,
    });
  }
};

export const clearErrorDeletePostById = () => (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_DELETE_POST_ERROR });
};
