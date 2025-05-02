import axios from "axios";

import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
} from "./ProductTypes";



export const fetchProductRequest = () => {
  console.log("fetchProductRequest");
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductError = () => {
  console.log("fetchProductError");
  return {
    type: FETCH_PRODUCT_ERROR,
  };
};

export const fetchProductsSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchPreoducts = () => {
  console.log("fetchPreoducts");
  return (dispatch) => {
    dispatch(fetchProductRequest());
    axios
      .get("https://fakestoreapi.com/products") // sample fake API
      .then((res) => {
        dispatch(fetchProductsSuccess(res.data));
      })
      .catch(() => {
        dispatch(fetchProductError());
      });
  };
};
