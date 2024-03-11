import axiosApi from "../../../../axiosApi";

export const getOrder = () => {
  return axiosApi({
    method: "get",
    url: "/order/get",
  })
    .then((resp) => {
      if (resp) {
        return resp.data.data;
      }
    })
    .catch((error) => {
      return error;
    });
};
