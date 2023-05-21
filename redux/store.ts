import { getAllReportStreamducer, getReportStreamReducer } from "./reducers/report-stream.reducer";
import { getAllReportPostReducer, getReportPostReducer } from "./reducers/report-post.reducer";
import { updateReportTypePostReducer } from "./reducers/report-types-post.reducer";
import { getVideoReducer } from "./reducers/video.reducer";
import getVideosReducer from "./reducers/video.reducer";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  userReducer,
  getAllCategoryPostReducer,
  deletePostReducer,
  togglePublicPostReducer,
  getCategoryPostReducer,
  createCategoryPostReducer,
  updateCategoryPostReducer,
  fetchPostsReducer,
  createCategoryStreamCategoryReducer,
  getAllCategoryStreamReducer,
  getCategoryStreamReducer,
  updateCategoryStreamReducer,
  getAllDataReducer,
  createReportTypeReducer,
  getAllReportTypeReducer,
  getReportTypeReducer,
  updateReportTypeReducer,
  getAllStreammerReducers,
  getAllUserReducer,
  PostReducer,
  createReportTypePostReducer,
  getAllReportTypePostReducer,
  getReportTypePostReducer,
} from "./reducers";

import getStreamsReducer, { getStreamReducer } from "./reducers/stream.reducer";

const initialState = {};

const reducers = combineReducers({
  user: userReducer,
  createReportType: createReportTypeReducer,
  getAllReportType: getAllReportTypeReducer,
  getReportType: getReportTypeReducer,
  updateReportType: updateReportTypeReducer,
  getAllData: getAllDataReducer,
  getAllCategoryStream: getAllCategoryStreamReducer,
  getCategoryStream: getCategoryStreamReducer,
  createCategoryStream: createCategoryStreamCategoryReducer,
  updateCategoryStream: updateCategoryStreamReducer,
  getAllUserReducer,
  getAllStreammer: getAllStreammerReducers,
  getAllCategoryPostReducer,
  fetchPostsReducer,
  deletePostReducer,
  togglePublicPostReducer,
  createCategoryPostReducer,
  getCategoryPostReducer,
  updateCategoryPostReducer,
  PostReducer,
  getStreamsReducer,
  getStreamReducer,
  getVideosReducer,
  getVideoReducer,
  createReportTypePostReducer,
  getAllReportTypePostReducer,
  getReportTypePostReducer,
  updateReportTypePostReducer,
  getAllReportPostReducer,
  getReportPostReducer,
  getAllReportStreamducer,
  getReportStreamReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
