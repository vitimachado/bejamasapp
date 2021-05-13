import * as types from "../types"


export const setOpenCart = (open) => ({
  type: types.SET_OPEN_CART,
  payload: open
})

export const setAddProductCart = (product) => ({
  type: types.SET_ADD_PRODUCT_CART,
  payload: product
})

export const setClearProductCart = () => ({
  type: types.SET_CLEAR_PRODUCT_CART,
  payload: []
})
