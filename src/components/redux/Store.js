import { createStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default Store;
