import React from "react";
import { useEffect } from "react";
import { fetchPreoducts } from "../../redux/product/ProductActions";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../ProductCard";
import "./index.css";

function ProductListingPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPreoducts());
  }, [dispatch]);

  const productState = useSelector((State) => State.product);
  const loading = productState.loading;
  const data = productState.productList;
  const error = productState.error;
  console.log(data);

  const displayProducts = () => {
    return (
      <ul className="product_ul">
        {data.map((eachProduct) => (
          <ProductCard product={eachProduct} />
        ))}
      </ul>
    );
  };

  return (
    <div className="ProductListingPage">
      {loading && <h1>loading...</h1>}
      {!loading && error === "" && displayProducts()}
    </div>
  );
}

export default ProductListingPage;
