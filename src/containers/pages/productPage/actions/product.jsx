import axiosApi from "../../../../axiosApi";

export const getProduct = () => {
  // console.log("messge from action called success");
  return axiosApi({
    method: "get",
    url: "/product/get",
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

export const deleteProduct = (id) => {
  // console.log("messge from action called success");
  return axiosApi({
    method: "delete",
    url: `/product/delete/${id}`,
  })
    .then((resp) => {
      if (resp) {
        return resp.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const getByIdProduct = (id) => {
  // console.log("messge from action called success");
  return axiosApi({
    method: "get",
    url: `/product/get/${id}`,
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

export const updateProduct = (id, payload) => {
  console.log("id-->", id);
  return axiosApi({
    method: "patch",
    url: `/product/update/${id}`,
    data: payload,
  })
    .then((resp) => {
      if (resp) {
        return resp.data;
      }
    })
    .catch((error) => {
      return error;
    });
};
