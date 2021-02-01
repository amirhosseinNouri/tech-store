import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import HomePageReducer from "./HomePageReducer";


const rootReducer = combineReducers({
  product: ProductReducer,
  homePage: HomePageReducer,
});

export default rootReducer;
