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
} from "./reducers";

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
