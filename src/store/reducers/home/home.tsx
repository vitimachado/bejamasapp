import { HYDRATE } from "next-redux-wrapper";
import * as types from "../../types"
import * as constants from "../../../shared/constants"
import { IFilter } from "../../interfaces/home";

const INITIAL_STATE = {
  filterCategory: [
    { title: constants.CATEGORY_PEOPLE, status: false },
    { title: constants.CATEGORY_PREMIUM, status: false },
    { title: constants.CATEGORY_PETS, status: false },
    { title: constants.CATEGORY_FOOD, status: false },
    { title: constants.CATEGORY_LANDMARKS, status: false },
    { title: constants.CATEGORY_CITIES, status: false },
    { title: constants.CATEGORY_NATURE, status: false },
  ],
  filterPrice: [
    { title: constants.PRICE_LOWER_20, status: false },
    { title: constants.PRICE_BETWEEN_20_100, status: false },
    { title: constants.PRICE_BETWEEN_100_200, status: false },
    { title: constants.PRICE_MORE_200, status: false },
  ]
} as IFilter

const home = (state: IFilter = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.home };
    case types.SET_FILTER_CATEGORY:
      return {
        ...state,
        filterCategory: action.payload
      }
    case types.SET_FILTER_PRICE:
      return {
        ...state,
        filterPrice: action.payload
      }
    case types.CLEAR_FILTERS:
      return {
        ...state,
        filterCategory: [
          { title: constants.CATEGORY_PEOPLE, status: false },
          { title: constants.CATEGORY_PREMIUM, status: false },
          { title: constants.CATEGORY_PETS, status: false },
          { title: constants.CATEGORY_FOOD, status: false },
          { title: constants.CATEGORY_LANDMARKS, status: false },
          { title: constants.CATEGORY_CITIES, status: false },
          { title: constants.CATEGORY_NATURE, status: false },
        ],
        filterPrice: [
          { title: constants.PRICE_LOWER_20, status: false },
          { title: constants.PRICE_BETWEEN_20_100, status: false },
          { title: constants.PRICE_BETWEEN_100_200, status: false },
          { title: constants.PRICE_MORE_200, status: false },
        ]
      }


    default:
      return { ...state }
  }
}

export default home
