import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import HomePageReducer from "./HomePageReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  product: ProductReducer,
  homePage: HomePageReducer,
  cart: CartReducer,
});

export default rootReducer;
