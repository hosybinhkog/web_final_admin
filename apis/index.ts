import axios from "axios";

const axiosAdminClent = axios.create({
  baseURL: "http://localhost:5555/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

axiosAdminClent.interceptors.response.use(
  function (response) {
    if (response.data) return response.data;
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosAdminClent.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
