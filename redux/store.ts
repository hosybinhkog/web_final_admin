import {
  createCategoryStreamCategoryReducer,
  getAllCategoryStreamReducer,
  getCategoryStreamReducer,
  updateCategoryStreamReducer,
} from "./reducers/category.reducer";
import { getAllDataReducer } from "./reducers/commom.reducer";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { userReducer } from "./reducers";
import {
  createReportTypeReducer,
  getAllReportTypeReducer,
  getReportTypeReducer,
  updateReportTypeReducer,
} from "./reducers/reportType.reducer";

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
