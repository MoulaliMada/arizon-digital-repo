import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
} from "./ProductTypes";

const initialState = {
  productList: [],
  error: "",
  loading: false,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: "errorrrrrrrrr",
      };
    }
    case FETCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: "",
        productList: action.payload,
      };
    }
    default:
      return state;
  }
};
export default ProductReducer;
