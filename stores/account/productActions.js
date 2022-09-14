import { LOGIN } from "../../constants/url";
import utils from "../../utils/Utils.js";
import { LOGIN_SUCCESS, LOGIN_BEGIN } from "../../constants/types";

const {
  apiDelete,
  apiPost,
  setCartSuccess,
  setCartItemSuccess,
  setPlantItemSuccess,
} = utils;

export function setCartItem(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setCartItemSuccess(data));
  };
}

export function setPlantItem(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setPlantItemSuccess(data));
  };
}

export function setCart(data) {
  return async (dispatch) => {
    console.log("PROFILE SENT TO BACK: ", data);
    return dispatch(setCartSuccess(data));
  };
}
