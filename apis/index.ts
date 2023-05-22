import axios from "axios";

const axiosAdminClent = axios.create({
  baseURL: "http://localhost:4444/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

axiosAdminClent.interceptors.response.use(
  function (response) {
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

export default axiosAdminClent;

export const createLogHistory = async (message: string) => {
  try {
    await axiosAdminClent.post("/log-history", { message });
  } catch (error) {
    console.log("error to log");
  }
};
