import { HYDRATE } from "next-redux-wrapper";
import * as types from "../../types"
import { ICart } from "../../interfaces/cart";

const INITIAL_STATE = {
  open: false,
  products: []
} as ICart

const cart = (state: ICart = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.home };

    case types.SET_OPEN_CART:
      return {
        ...state,
        open: action.payload
      }

    case types.SET_ADD_PRODUCT_CART:
      return {
        ...state,
        products: [ ...state.products, action.payload ]
      }

    case types.SET_CLEAR_PRODUCT_CART:
      return {
        ...state,
        products: []
      }

    default:
      return { ...state }
  }
}

export default cart
