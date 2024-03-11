import axiosApi, { setAuthHeader } from "../../axiosApi";
import { GET_USER_DETAILS_SUCCESS, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../../constants/actionType";


export function storeUserData(payload) {
    return {
        type: GET_USER_DETAILS_SUCCESS,
        payload
    }
}

export const login = async (data) => {
    // console.log("messge from action called success");
    return axiosApi({
        method: "post",
        url: "/login",
        data: data
    })
        .then((resp) => {
            if (resp) {
                localStorage.setItem("token", resp?.data?.data?.token)
                setAuthHeader(resp?.data?.data?.token)
                return resp.data;
            }
        })
        .catch((error) => {
            return error;
        });
};






