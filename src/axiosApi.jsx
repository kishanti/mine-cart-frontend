import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env["REACT_APP_API_URL_" + process.env.REACT_APP_TYPE],
});


export const setAuthHeader = (token) => {
  axiosApi.defaults.headers.authorization =
    token || localStorage.getItem("token");
};

axiosApi.defaults.headers = {
  authorization: localStorage.getItem("token") || null,
}

// If Unauthorized Person then Remove token
axiosApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if ((error && error.response && error.response.status === 401) || (error.response.status === 409)) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

export default axiosApi;
