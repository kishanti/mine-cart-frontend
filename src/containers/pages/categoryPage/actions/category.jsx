import axiosApi from "../../../../axiosApi";

export const getCategory = () => {
  // console.log("messge from action called success");
  return axiosApi({
    method: "get",
    url: "/category/get",
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
