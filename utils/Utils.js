import axios from "axios";
import { Alert } from "react-native";
import { CART_BEGIN, CART_FAILURE, CART_SUCCESS, CARTITEM_SUCCESS, PLANTITEM_SUCCESS } from "../constants/types";

export async function getHeaders() {
  try {
    return {};
  } catch (error) {
    Alert.alert("Error found in token");
  }
}

export const setCartSuccess = (data) => ({
  type: CART_SUCCESS,
  payload: { data },
});

export const setCartItemSuccess = (data) => ({
  type: CARTITEM_SUCCESS,
  payload: { data },
});

export const setPlantItemSuccess = (data) => ({
  type: PLANTITEM_SUCCESS,
  payload: { data },
});

export const setCartBegin = () => ({
  type: CART_BEGIN,
  payload: {},
});

export const setCartFailure = (error) => ({
  type: CART_FAILURE,
  payload: { error },
});

export async function apiReq(
  endpoint,
  data,
  method,
  headers,

  requestOptions = {}
) {
  const getTokenHeader = await getHeaders();

  try {
    const result = await axios[method](endpoint, data, { headers });
    if (result) {
      return result.status;
    }
  } catch (err) {
    return err;
  }
}

export function apiPost(endpoint, data, headers = {}) {
  return apiReq(endpoint, data, "post", headers);
}

export function apiDelete(endPoint, headers = {}) {
  return apiReq(endPoint, "delete", headers);
}

const utils = {
  apiDelete,
  apiPost,
  getHeaders,

  setCartSuccess,
  setCartBegin,
  setCartFailure,
  setCartItemSuccess,
  setPlantItemSuccess,
};

export default utils;
