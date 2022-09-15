import { dummyData } from "../../constants";
import * as authActionTypes from "../../constants/types";

const initialState = {
  cart: [],
  error: null,
  loading: false,
  plants: [...dummyData.plants],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.CART_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.CARTITEM_SUCCESS:
      return {
        ...state,
        cart: [...state.cart, action.payload.data],
        loading: false,
      };

    case authActionTypes.PLANTITEM_SUCCESS:
      return {
        ...state,
        plants: [...initialState.plants],
        loading: false,
      };

    case authActionTypes.CART_SUCCESS:
      return {
        ...state,
        cart: action.payload.data,
        loading: false,
      };
    case authActionTypes.CART_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default productReducer;
