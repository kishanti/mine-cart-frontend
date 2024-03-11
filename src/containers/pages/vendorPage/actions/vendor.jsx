import axiosApi from "../../../../axiosApi";

export const getVendor = () => {
  // console.log("messge from action called success");
  return axiosApi({
    method: "get",
    url: "/common/get-vendor",
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
