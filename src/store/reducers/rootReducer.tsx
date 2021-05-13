import { combineReducers } from "redux"
import cart from "./cart/cart"
import home from "./home/home"

const rootReducer = combineReducers({
  home: home,
  cart: cart
})

export default rootReducer
