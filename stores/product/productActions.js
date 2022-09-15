import {
  CARTITEM_SUCCESS,
  CART_BEGIN,
  CART_FAILURE,
  CART_SUCCESS,
  PLANTITEM_SUCCESS,
} from "../../constants/types";

const setCartSuccess = (data) => ({
  type: CART_SUCCESS,
  payload: { data },
});

const setCartItemSuccess = (data) => ({
  type: CARTITEM_SUCCESS,
  payload: { data },
});

const setPlantItemSuccess = (data) => ({
  type: PLANTITEM_SUCCESS,
  payload: { data },
});

const setCartBegin = () => ({
  type: CART_BEGIN,
  payload: {},
});

const setCartFailure = (error) => ({
  type: CART_FAILURE,
  payload: { error },
});

export function setCartItem(data) {
  return async (dispatch) => {
    return dispatch(setCartItemSuccess(data));
  };
}

export function setPlantItem(data) {
  return async (dispatch) => {
    return dispatch(setPlantItemSuccess(data));
  };
}

export function setCart(data) {
  return async (dispatch) => {
    return dispatch(setCartSuccess(data));
  };
}
