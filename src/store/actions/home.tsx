import * as types from "../types"


export const setFilterCategory = (filter) => ({
  type: types.SET_FILTER_CATEGORY,
  payload: filter
})

export const setFilterPrice = (filter) => ({
  type: types.SET_FILTER_PRICE,
  payload: filter
})
