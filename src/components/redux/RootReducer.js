import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./product/ProductReducer";

const RootReducer = combineReducers({
  product: ProductReducer,
});

export default RootReducer